var 	gulp = require('gulp'),
		postcss = require('gulp-postcss'),
		cssImport = require('postcss-import'),
		nested = require('postcss-nested'),
		cssVars = require('postcss-simple-vars'),
		autoprefixer = require('autoprefixer'),
		mixins = require('postcss-mixins');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe( postcss( [cssImport, mixins, cssVars, nested, autoprefixer] ) )
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe( gulp.dest('./app/temp/styles') );
});