var 	gulp = require('gulp'),
		postcss = require('gulp-postcss'),
		cssImport = require('postcss-import'),
		nested = require('postcss-nested'),
		cssVars = require('postcss-simple-vars'),
		autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe( postcss( [cssImport, cssVars, nested, autoprefixer] ) )
		.pipe( gulp.dest('./app/temp/styles') );
});