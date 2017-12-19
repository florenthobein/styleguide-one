var gulp = require('gulp');

// Generate the css library
gulp.task('css', function () {
	var concat = require('gulp-concat');
	var postcss = require('gulp-postcss');
	var tailwindcss = require('tailwindcss');
	var replace = require('gulp-replace');
	return gulp.src('css/**/*.css')
		.pipe(concat('lib.css'))
		.pipe(postcss([
			tailwindcss('./tailwind.js'),
			require('autoprefixer'),
		]))
		.pipe(gulp.dest('build/'))
		.pipe(gulp.dest('docs/'));
});

// Replace constants in the fixtures
gulp.task('fixtures', function () {
	var htmlreplace = require('gulp-html-replace');
	var options = require('./tailwind.js');
	// Remplacements
	var replacements = {};
	for (var category in options) {
		for (var key in options[category]) {
			replacements[category+'-'+key] = typeof options[category][key] === 'string' ? options[category][key] : (
				options[category][key] instanceof Array ? options[category][key].join(', ') : ''
			);
		}
	}
	gulp.src('fixtures/**/*.html')
		.pipe(htmlreplace(replacements, { keepBlockTags:true }))
		.pipe(gulp.dest('fixtures'));
});

// Generate the styleguide
gulp.task('styleguide', ['css', 'fixtures'], function () {
	var livingcss = require('gulp-livingcss');
	return gulp.src('docs/lib.css')
		.pipe(livingcss('docs'))
		.pipe(gulp.dest('docs'));
});

// Development mode
gulp.task('watch', function() {
	var livereload = require('gulp-livereload');
	livereload.listen({ port: 35730 });
	gulp.watch(['tailwind.js', 'css/**/*.css'], ['styleguide']);
});
