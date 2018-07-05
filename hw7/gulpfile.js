var gulp = require('gulp');
var path = require('path');
var scss = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('scss', function() {
    gulp.src(path.resolve(__dirname, 'src', 'scss', '**/*.scss')).pipe(scss())
    .pipe(gulp.dest(path.resolve(__dirname, 'src', 'css')))
    .pipe(browserSync.reload({
        stream : true
    }));
});

gulp.task ('watch', ['browserSync'], function() {
    gulp.watch(path.resolve(__dirname, 'src', 'scss', '**/*.scss'), ['scss']);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: path.resolve(__dirname)
        }   
    })
});