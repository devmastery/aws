var path = require('path');
var __dirname = ".",
    rootpath = path.normalize(__dirname + '../../../');



module.exports = {
    development: {
        name: 'DI Music App',
        bootMessage: "DI Music Web Server started successfully",
        rootpath: rootpath,
        applicationPort:3000
    },
    production: {
        name: 'DI Music App',
        bootMessage: "DI Music Web Server started successfully",
        rootpath: rootpath,
        applicationPort:80
    }
};