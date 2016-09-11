var nConf = require('nconf');

nConf.argv()
    .env()
    .file({ file: './app/config.json' });

module.exports = nConf;
