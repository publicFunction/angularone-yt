var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
    console.log("Hello World!")
});

gulp.task('sass', function() {
    return gulp.src('sass/*')
        .pipe(sass())
        .pipe(gulp.dest('styles/'))
});