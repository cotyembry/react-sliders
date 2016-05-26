var gulp = require('gulp');
//var shell = require('shelljs');
var shell = require('gulp-shell');

gulp.task('watch', function() {
	gulp.watch('./*.js', ['webpack']);
	gulp.watch('./*.jsx', ['webpack']);
	gulp.watch('./src/*.js', ['webpack']);
	gulp.watch('./src/*.jsx', ['webpack']);
});

gulp.task('webpack', function() {
	gulp.src('./')
	.pipe(shell('webpack'))
	.pipe(shell('perl /Applications/CustomScripts/customchrome.pl'))
	.pipe(shell('perl ./sleep1.pl'))
	.pipe(shell('/usr/bin/env osascript ~/Desktop/utils/commandR.scpt'))

	//.pipe(shell('~/Desktop/utils/commandR.scpt'))
});
