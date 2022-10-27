const fs = require('fs-extra');
const path = require('path');
const tar = require('tar-fs');
const zlib = require('zlib');

function packTarGz (srcDirPath, destFilePath) {
    return new Promise((resolve, reject) => {
        let destFile = fs.createWriteStream(destFilePath);
        tar.pack(srcDirPath).pipe(zlib.createGzip()).pipe(destFile)
            .on('finish', () => { resolve(); })
            .on('error', err => { reject(err); });
    });
}

function deleteFile(filePath) {
    fs.removeSync(filePath);
}

module.exports = {
    packTarGz,
    deleteFile
};
