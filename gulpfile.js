var gulp = require('gulp');

gulp.task('css', function () {
	var concat = require('gulp-concat');
	var postcss = require('gulp-postcss');
	var tailwindcss = require('tailwindcss');
	var replace = require('gulp-replace');
	return gulp.src('src/**/*.css')
		.pipe(concat('lib.css'))
		.pipe(postcss([
			tailwindcss('./tailwind.js'),
			require('autoprefixer'),
		]))
		.pipe(gulp.dest('build/'))
		.pipe(gulp.dest('docs/'));
});

gulp.task('styleguide', ['css'], function () {
	var livingcss = require('gulp-livingcss');
	return gulp.src('docs/lib.css')
		.pipe(livingcss('docs'))
		.pipe(gulp.dest('docs'));
});

gulp.task('watch', function() {
	var livereload = require('gulp-livereload');
	livereload.listen({ port: 35730 });
	gulp.watch(['tailwind.js', 'src/**/*.css'], ['styleguide']);
});
