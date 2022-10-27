const request = require('request');
const _ = require('lodash');
const fs = require('fs-extra');

function getError(error) {
    if (error.status) {
        return error.error;
    } else if (error.message) {
        return error.message;
    } else if (_.isString(error)) {
        return error;
    } else {
        return JSON.stringify(error);
    }
}

function post(url, token, json) {
    const options = {
        uri: url,
        headers: {
            'X-Auth-Token': token ? token : ''
        },
        method: 'POST',
        json
    };
    return new Promise((resolve, reject) => {
        try {
            request(options, function (error, response, body) {
                if (response) {
                    if (response.statusCode === 200) {
                        resolve(body);
                    } else {
                        reject(getError(error || body));
                    }
                } else {
                    reject(getError(error || body));
                }
            });
        } catch (e) {
            console.error(e);
            reject('Error connection with server');
        }

    });
}

function upload(url, token, files, options) {
    const formData = {};
    return new Promise((resolve, reject) => {
        if (files) {
            _.forOwn(files, (filePath, fileItem) => {
                formData[fileItem] = fs.createReadStream(filePath);
            });
        }
        const requestOptions = {
            url,
            method: "POST",
            formData: {
                ...formData,
                ...options
            },
            headers: {
                'X-Auth-Token': token ? token : ''
            },
        };
        try {
            request(requestOptions, (error, response, body) => {
                if (response) {
                    if (response.statusCode === 200) {
                        _.forOwn(formData, value => {
                            if (value) {
                                value.destroy();
                            }
                        });
                        resolve();
                    } else {
                        reject(getError(error || body));
                    }
                } else {
                    reject(getError(error || body));
                }
            });
        } catch (e) {
            console.error(e);
            reject('Error connection with server');
        }
    })
        .catch(e => {
            _.forOwn(formData, value => {
                if (value) {
                    value.destroy();
                }
            });
            throw e;
        });
}

module.exports = {
    post,
    upload
};
