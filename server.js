const _ = require('lodash');
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const rollupUmdApi = require('./rollup-umd-api');
const rollupLibApi = require('./rollup-lib-api');
const {packTarGz, deleteFile} = require("./fileUtils");
const {post, upload} = require("./clientUtils");

require('dotenv').config({path: path.resolve(process.cwd(), '.env')})

const clientSockets = {};

function notifyClients(messageCode) {
    const clientSocketsIds = Object.keys(clientSockets);
    if (clientSocketsIds && clientSocketsIds.length > 0) {
        let clientSocket;
        clientSocketsIds.forEach(clientSocketId => {
            clientSocket = clientSockets[clientSocketId];
            if (clientSocket) {
                clientSocket.emit(messageCode, '');
            }
        });
    }
}

const timeBundlingMessage = 'Bundle is built in';

rollupUmdApi.watch((code, error) => {
    if (code === 'START') {
        console.log('Watcher is started');
    } else if (code === 'BUNDLE_START') {
        notifyClients('bundling_started');
        console.time(timeBundlingMessage);
    } else if (code === 'BUNDLE_END') {
        console.log('Bundling finished');
    } else if (code === 'END') {
        console.log('Bundling finished all');
        console.timeEnd(timeBundlingMessage);
        notifyClients('bundling_finished');
    } else if (code === 'ERROR') {
        console.log('Bundling finished with error: ', error);
    }
});

process.on('exit', function () {
    // watcher.stopWatchingFiles();
    rollupUmdApi.shutdown();
});


const port = 7373;
const socketPort = 7474;
const serviceURL = "";

const app = express();

const httpServer = http.createServer(app);
const io = new socketIO.Server(httpServer, {
    cors: {
        origin: '*'
    }
});

io.on("connection", (socket) => {
    console.log("Connected to the client");
    clientSockets[socket.id] = socket;
    socket.conn.on("close", (reason) => {
        // called when the underlying connection is closed
        console.log("Client is disconnected: ", reason);
        delete clientSockets[socket.id];
    });
    socket.emit("hello", "Theme SDK server is connected.");
    socket.on('upload_skin', (message) => {
        const {
            token,
            skinName,
            skinDescription
        } = message;
        const distFilePath = path.join(__dirname, 'dist.tar.gz');
        const libFilePath = path.join(__dirname, 'lib.tar.gz')
        rollupLibApi.build()
            .then(() => {
                console.log('Building theme package...');
                return packTarGz(path.join(__dirname, 'dist'), distFilePath)
                    .then(() => {
                        return packTarGz(path.join(__dirname, 'lib'), libFilePath);
                    });
            })
            .then(() => {
                console.log('Creating new theme in the system...');
                return post(`${serviceURL}/skin-add-submit`, token, {
                  name: skinName,
                  description: skinDescription,
                  category: 'Probe Category'
                });
            })
            .then((newSkin) => {
                if (newSkin) {
                    console.log('Uploading new theme to the system...');
                    return upload(
                        `${serviceURL}/skin-upload`,
                        token,
                        {
                            'lib': libFilePath,
                            'dist': distFilePath
                        },
                        {skinId: newSkin.id}
                    )
                        .then(() => {
                            socket.emit('skin_uploading_success', newSkin);
                            console.log(`New theme ${newSkin.name} has been successfully created.`);
                        })
                        .catch(error => {
                            return post(`${serviceURL}/skin-add-revert?skinId=${newSkin.id}`, token, {})
                                .then(() => {
                                    console.error(`ERROR: ${error}`);
                                    socket.emit('skin_uploading_error', error);
                                })
                                .catch(error1 => {
                                    console.error(`ERROR: ${error1}`);
                                });
                        });
                } else {
                    console.error(`ERROR: Error creating new theme - missing theme ID.`);
                    socket.emit('skin_uploading_error', 'Error creating new theme: missing theme ID.');
                }
            })
            .catch(error => {
                if (_.isString(error)) {
                    socket.emit('skin_uploading_error', error);
                    console.error(`ERROR: ${error}`);
                } else if (error.message) {
                    socket.emit('skin_uploading_error', error.message);
                    console.error(`ERROR: ${error.message}`);
                } else {
                    socket.emit('skin_uploading_error', JSON.stringify(error));
                    console.error(`ERROR: ${JSON.stringify(error)}`);
                }
            })
            .finally(() => {
                deleteFile(libFilePath);
                deleteFile(distFilePath);
            });
    });
});

io.on('disconnect', (socket) => {

});

io.engine.on("connection_error", (err) => {
    console.log(err.req);      // the request object
    console.log(err.code);     // the error code, for example 1
    console.log(err.message);  // the error message, for example "Session ID unknown"
    console.log(err.context);  // some additional error context
});

app.set('etag', false);
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});
app.use(cors({
    origin: '*'
}));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

httpServer.listen(socketPort);

app.listen(port, () => {
    console.info('Theme SDK server started on port: ' + port);
    console.info('Socket port: ' + socketPort);
});
