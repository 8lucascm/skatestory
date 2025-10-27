const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Paths
const paths = {
  src: {
    html: 'src/**/*.html',
    css: 'src/css/**/*.css',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*'
  },
  dist: 'dist'
};

// CSS Task
function css() {
  return gulp.src(paths.src.css)
    .pipe(postcss([
      tailwindcss,
      autoprefixer,
      cssnano
    ]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(browserSync.stream());
}

// JavaScript Task
function js() {
  return gulp.src(paths.src.js)
    .pipe(terser())
    .pipe(gulp.dest(`${paths.dist}/js`))
    .pipe(browserSync.stream());
}

// HTML Task
function html() {
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
}

// Images Task
function images() {
  return gulp.src(paths.src.images)
    .pipe(gulp.dest(`${paths.dist}/images`));
}

// Watch Task
function watch() {
  browserSync.init({
    server: {
      baseDir: paths.dist
    },
    port: 3000
  });

  gulp.watch(paths.src.html, html);
  gulp.watch(paths.src.css, css);
  gulp.watch(paths.src.js, js);
  gulp.watch(paths.src.images, images);
}

// Build Task
const build = gulp.series(
  gulp.parallel(html, css, js, images)
);

// Serve Task
const serve = gulp.series(build, watch);

// Export tasks
exports.css = css;
exports.js = js;
exports.html = html;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.serve = serve;
exports.default = serve;

