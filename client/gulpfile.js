var gulp = require('gulp');
var browserify = require('browserify');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

var filePaths = {
    bundleFile: './app/dist/bundle.js',
    serveDir: './app',
    entryFile: 'app/index.jsx',
    watchFiles: ['./app/**/*.jsx', '!app/dist/bundle.js']
};

gulp.task('serve', function() {
    browserSync({
        files: filePaths.bundleFile,
        server: {
            baseDir: [filePaths.serveDir]
        },
        notify: false
    });
});

gulp.task('build', function () {
    return browserify({
        entries: filePaths.entryFile, 
        extensions: ['.jsx'], 
        debug: true
    })
    .transform('babelify', {
        presets: ['es2015', 'react'],
        sourceMapsAbsolute: true
    })
    .bundle()
    .on('error', function (err) {
        console.log(err.stack);
     })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(filePaths.watchFiles, ['build']);
});

gulp.task('default', ['build', 'watch', 'serve']);