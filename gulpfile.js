const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('default', function(){

});

gulp.task('sass', function () {
    return gulp.src('./.sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./style/css/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: "./"
    });

    gulp.watch("./.sass/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
