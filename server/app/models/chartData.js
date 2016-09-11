var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChartData = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    legend: { type: String, default: 'x' },
    width: {
        type: Number,
        min: [0, 'Too few eggs'],
        max: 500
    },
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChartData', ChartData);
