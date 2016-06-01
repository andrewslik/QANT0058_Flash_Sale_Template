var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver');

gulp.task('js', function () {
    gulp.src(['js/**/*.js'])
        .pipe(concat('banner.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('banner/'))
        .pipe(notify({
            message: 'Finished minifying JavaScript'
        }));
});

gulp.task('html', function () {
    gulp.src('banner/*.html')
});

gulp.task('watch', function () {
    gulp.watch('js/**/*', ['js']);
    gulp.watch(['banner/*.html'], ['html']);
});

gulp.task('webserver', function () {
    gulp.src('banner/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'html', 'js', 'webserver']);
