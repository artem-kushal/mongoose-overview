var winston = require('winston');
var config = require('../libs/config');

function getLogger(module) {
    var path = module.filename.split('/').slice(-2).join('/');
    var loggers = {};
    var appEnv = config.get('NODE_ENV') || 'development';
    loggers.development = new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                level: 'debug',
                label: path
            })
        ]
    });
    loggers.production = new winston.Logger({
        transports: [
            new winston.transports.File({
                name: 'error-file',
                filename: 'file-error.log',
                level: 'error'
            })
        ]
    });
    return loggers[appEnv];
}

module.exports = getLogger;
