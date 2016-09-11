var mongoose = require('mongoose');
var log = require('./../utils/log')(module);
var config = require('./config');
var db = mongoose.connection;
mongoose.connect(config.get('mongoose:uri'));

db.on('error', function (err) {
    log.error('connection error:', err.message);
});

db.once('open', function callback() {
    log.info('Connected to DB!');
});

module.exports = db;
