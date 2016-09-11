var log = require('../utils/log')(module);
var HttpError = require('../error').HttpError;
var errorHandler = require('errorhandler');

var sendHttpError = function (error, res) {
    res.status(error.status);
    res.json(error);
};

module.exports = function (app, express) {
    app.use(function (err, req, res, next) {
        var error = err;
        if (typeof error === 'number') {
            error = new HttpError(error);
        }
        if (error.name === 'ValidationError') {
            log.error(error);
            error = new HttpError(400, error.message);
        }
        if (error instanceof HttpError) {
            sendHttpError(error, res);
        } else if (app.get('env') === 'development') {
            errorHandler()(error, req, res, next);
        } else {
            log.error(error);
            error = new HttpError(500);
            sendHttpError(error, res);
        }
    });
};
