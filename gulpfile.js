var gulp = require('gulp');
var browserify = require('browserify');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync({
        files: './app/dist/bundle.js',
        server: {
            baseDir: ['./app', './']
        },
        notify: false
    });
});

gulp.task('build', function () {
    return browserify({
        entries: 'app/main.jsx', 
        extensions: ['.jsx'], 
        debug: true
    })
    .transform('babelify', {
        presets: ['es2015', 'react'],
        sourceMapsAbsolute: true
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['.app/*.jsx', '!app/dist/bundle.js'], ['build']);
});

gulp.task('default', ['build', 'watch', 'serve']);