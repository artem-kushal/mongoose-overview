var log = require('../utils/log')(module);
var path = require('path');
var chartDataController = require('../controllers/chartDataCtrl');

module.exports = function (app) {
    // app.get('/', function(req, res){
    //    res.sendFile(Path.resolve(__dirname + '/../../client/app/index.html'));
    // });
    app.get('/chartdata', chartDataController.add);
    app.post('/chartdata', chartDataController.add);
    app.put('/chartdata/:id', chartDataController.add);
    app.delete('/chartdata/:id', chartDataController.add);
};
