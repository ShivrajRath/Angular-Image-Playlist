(function () {
  'use strict';

  // Gulp
  var gulp = require('gulp');

  // Plugins
  var connect = require('gulp-connect');
  var jshint = require('gulp-jshint');
  var uglify = require('gulp-uglify');
  var minifyCSS = require('gulp-minify-css');
  var clean = require('gulp-clean');
  var browserify = require('gulp-browserify');
  var concat = require('gulp-concat');
  var jsdoc = require('gulp-jsdoc');
  var jscs = require('gulp-jscs');

  // Paths
  gulp.paths = {
    src: './src',
    app: './src/app',
    components: './src/components',
    configs: './src/configs',
    tmp: './.tmp',
    dist: './dist',
    e2e: './e2e',
    docs: './docs-out'
  };

  var paths = gulp.paths;

  // Tasks
  gulp.task('lint', function () {
    gulp.src([paths.src + '/**/*.js', '!' + paths.src + '/bundled.js', '!' + paths.src + '/**/*spec.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
  });

  gulp.task('jscs', function () {
    gulp.src([paths.src + '/**/*.js', '!' + paths.src + '/bundled.js', '!' + paths.src + '/**/*.spec.js'])
      .pipe(jscs());
  });

  gulp.task('clean', function () {
    gulp.src(paths.dist + '/*')
      .pipe(clean({
        force: true
      }));
    gulp.src(paths.src + '/bundled.js')
      .pipe(clean({
        force: true
      }));
  });

  gulp.task('browserify', function () {
    gulp.src([paths.src + '/app.js'])
      .pipe(browserify({
        insertGlobals: true,
        debug: true
      }))
      .pipe(concat('bundled.js'))
      .pipe(gulp.dest(paths.src));
  });

  gulp.task('connect', function () {
    connect.server({
      root: './',
      port: 8888
    });
  });

  // Gulp task to generate application docs
  gulp.task('docs', function () {
    gulp.src(paths.docs)
      .pipe(clean({
        force: true
      }));
    gulp.src([paths.src + '/**/*.js', '!' + paths.src + '/bundled.js'])
      .pipe(jsdoc('./docs-out'));
  });

  // Gulp default task
  gulp.task('default', ['clean', 'browserify', 'lint', 'connect']);
})();
