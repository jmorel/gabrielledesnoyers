var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    return gulp
        .src('./less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./less/*.less', ['less']);
});

gulp.task('default', ['watch']);
