const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

var inject = require('gulp-inject');

// gulp.task('prefix', function () {
//   var target = gulp.src('./src/index.html');
//   // It's not necessary to read the files (will speed up things), we're only after their paths:
//   var sources = gulp.src(['./docs/**/*.js', './docs/**/*.css'], {read: false});

//   return target.pipe(inject(sources, {addPrefix: '/malljing'}))
//     .pipe(gulp.dest('./docs'));
// });

gulp.task('prefix', function () {
  var target = gulp.src('./src/index.html');
  var path = '/docs'; 
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['.'+ path +'/**/*.js', '.'+ path +'/**/*.css'], {read: false});

  return target.pipe(inject(sources, {
    transform: function(filepath, file, i, length){
      var filepath = filepath.substr(path.length);
      return inject.transform('/malljing' + filepath, file, i, length);
  }}))
    .pipe(gulp.dest('./'+ path));
});


gulp.task('inject', gulp.series(gulp.parallel('styles', 'scripts'), 'inject'));
gulp.task('build', gulp.series('partials', gulp.parallel('inject', 'other'), 'build'));
gulp.task('test', gulp.series('scripts', 'karma:single-run'));
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('serve', gulp.series('inject', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('inject','default', 'browsersync:dist'));
gulp.task('publish:github', gulp.series('prefix','default'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch([
    conf.path.src('index.html'),
    'bower.json'
  ], gulp.parallel('inject'));

  gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
  gulp.watch([
    conf.path.src('**/*.css')
  ], gulp.series('styles'));
  gulp.watch(conf.path.src('**/*.js'), gulp.series('inject'));
  done();
}
