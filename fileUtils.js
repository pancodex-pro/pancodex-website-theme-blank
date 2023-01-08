const fs = require('fs-extra');
const path = require('path');
const klawSync = require('klaw-sync');

function readAllFilesInDir(dirPath) {
    const resultList = [];
    const fileList = klawSync(dirPath, {nodir: true});
    if (fileList && fileList.length > 0) {
        fileList.forEach((fileItem) => {
            const {path: filePath} = fileItem;
            resultList.push({
                filePath,
                fileName: path.basename(filePath),
                fileData: fs.readFileSync(filePath, {encoding: 'utf8'})
            });
        });
    }
    return resultList;
}

module.exports = {
    readAllFilesInDir
};
