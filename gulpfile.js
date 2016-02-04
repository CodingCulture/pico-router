var gulp = require('gulp');
var path = require('path');
var babel = require('gulp-babel');

/**
 * Sets the defaults Gulp Task.
 */
gulp.task('default', function(){
   console.log('Run gulp build');
});

/**
 * Minifies and concatenates (React) JavaScript to one file.
 * This file will be written to web/dist/js/napoleon-react.js
 */
gulp.task('build', function(){
    return gulp.src('src/router.react.js')
        .pipe(babel({
            presets: ['es2015','stage-0','react']
        }))
        .pipe(gulp.dest('dist'));
});
