var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
    console.log("Hello World!")
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles/'))
});

gulp.task('js', function() {
    return gulp.src('js/**/*.js')
        .pipe(gulp.dest('javascripts/'))
});