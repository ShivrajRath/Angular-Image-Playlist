(function () {
  'use strict';

  // Gulp
  var gulp = require('gulp');

  // Plugins
  var jshint = require('gulp-jshint');
  var uglify = require('gulp-uglify');
  var minifyCSS = require('gulp-minify-css');
  var clean = require('gulp-clean');
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var concat = require('gulp-concat');
  var jsdoc = require('gulp-jsdoc');
  var jscs = require('gulp-jscs');
  var less = require('gulp-less');
  var browserSync = require('browser-sync');
  var reload = browserSync.reload;

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
  var srcDev = [paths.src + '/**/*.js',
    '!' + paths.src + '/bundled.js', '!' + paths.src + '/**/*.spec.js'];

  // Tasks
  gulp.task('lint', function () {
    gulp.src(srcDev)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
  });

  gulp.task('jscs', function () {
    gulp.src(srcDev)
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
    gulp.src(paths.src + '/css')
      .pipe(clean({
        force: true
      }));
  });

  gulp.task('browserify', function () {
    return browserify(paths.src + '/app.js')
      .bundle()
      .pipe(source('bundled.js'))
      .pipe(gulp.dest(paths.src));
  });

  gulp.task('less', function () {
    gulp.src([paths.src + '/less/app.less', paths.src + '/less/vendor.less'])
      .pipe(less())
      .pipe(gulp.dest(paths.src + '/css'));
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

  gulp.task('browserSync', function () {
    browserSync({
      server: {
        baseDir: './src'
      }
    });
  });

  // Gulp default task
  gulp.task('default', ['clean', 'browserify', 'jscs', 'lint', 'less'], function () {

    // Reload on file change
    gulp.watch(paths.src + '/**/*.html', [reload]);
    gulp.watch(paths.src + '/less/**/*.less', [less, reload]);
    gulp.watch(srcDev, ['browserify', 'lint', 'jscs', reload]);

    // BrowserSync after all tasks
    browserSync({
      server: {
        baseDir: './src'
      }
    });

  });

})();
