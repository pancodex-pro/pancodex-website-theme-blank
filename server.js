const path = require("path");
const {runServer} = require('@pancodex/sdk-lib');

runServer({
    distDirPath: path.join(__dirname, 'dist'),
    libDirPath: path.join(__dirname, 'lib'),
    dataDirPath: path.join(__dirname, 'data')
});
