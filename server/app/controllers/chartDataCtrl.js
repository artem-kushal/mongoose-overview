var log = require('./../utils/log')(module);
var ChartDataModel = require('../models/chartData');
var chartDataService = require('../data_layer/chartDataService');

var chartDataController = {
    add: function (req, res, next) {
        chartDataService.add().then(function (chartData) {
            log.info('chartData created');
            return res.send({ chartData: chartData });
        }, function (err) {
            return next(err);
        });
    }
};

module.exports = chartDataController;
