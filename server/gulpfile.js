var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var browserSync = require('browser-sync');

var options = {
    continueOnError: false, // default = false, true means don't emit error event 
    pipeStdout: false, // default = false, true means stdout is written to file.contents 
    customTemplatingThing: 'test' // content passed to gutil.template() 
};

gulp.task('db', function () {
    plugins.exec('c:\MongoDB\bin\mongod --dbpath c:\MongoDB\data', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('start', function () {
    plugins.exec('node app/main.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', ['start'], function () {
    gulp.watch('app/**/**.js').on('change', function() {
        ['start'];
    });
});

gulp.task('default', ['db', 'watch', 'start']);
