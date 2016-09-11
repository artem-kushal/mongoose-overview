var ChartDataModel = require('../models/chartData');

var chartDataService = {
    add: function () {
        var chartData = new ChartDataModel({
            title: 'testTitle',
            subtitle: 'testSubtitle',
            width: 10
        });
        return chartData.save();
    }
}

module.exports = chartDataService;
