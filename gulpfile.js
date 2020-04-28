const gulp = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function css() {
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function image() {
    return src('src/images/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
    .pipe(browserSync.stream())
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.watch('./src/images/*', image);
  gulp.watch('./sass/**/*.scss', css);
  gulp.watch('./*.html').on('change', browserSync.reload)
}


exports.watch = watch;
