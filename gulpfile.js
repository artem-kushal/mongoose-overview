var gulp = require('gulp');
var browserify = require('browserify');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('serve', function() {
    gulp.src('app')
        .pipe(plugins.webserver({
            port:'9090',
            livereload: true,
            open: true
        }));
});

gulp.task('build', function () {
    return browserify({entries: 'app/main.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch', 'serve']);