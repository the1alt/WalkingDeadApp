'use strict';


/**
 * This example:
 *  Uses the built-in BrowserSync server for HTML files
 *  Watches & compiles SASS files
 *  Watches & injects CSS files
 */
var browserSync = require('browser-sync');
var gulp = require('gulp');
var sass = require('gulp-sass');
var size = require('gulp-size');
var uncss = require('gulp-uncss');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');


//init tyo reload brower
var reload = browserSync.reload;


// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        port: 8066,
        server: {
            baseDir: './', //base
            index: 'index.html' //fichier a chargé
        }
    });
});

// reload a server
gulp.task('browser-reload', function() {
    reload({ stream: true });
});

// Clean log, comments, remove old files
gulp.task('clean', function() {
    return gulp.src(['dist/css', 'dist/js', 'dist/images'], { read: false })
        .pipe(clean());
});

// Sass task, will run when any SCSS files change.
gulp.task('css', function() {
    return gulp.src('sass/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'expanded', }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        // .pipe(uncss({
        //         html: ['*.html']
        //     }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify('Style Modifié'));
});

//For js
gulp.task('js', function() {
    // Order By initi, filters, controllers...
    return gulp.src([ //ordre a respecter
            'app/app.js',
            'app/routes.js',
            'app/shared/factories/*.factory.js', //all controllers
            'app/shared/filters/*.filter.js', //all controllers
            'app/shared/directives/*.directive.js', //all controllers
            'app/**/*.controller.js' //all controllers
        ])
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) // débogage de mes pipes
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('.'))
        //.pipe(uglify()) //minify js
        .pipe(gulp.dest('dist/js')) // repertoire distant
        .pipe(notify('Js Modifié')); // notification
});



// Images
gulp.task('images', function() {
    return gulp.src('assets/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(reload({ stream: true }))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images compressées' }));
});


// Default task to be run with `gulp`
gulp.task('default', ['browser-sync', 'css', 'js'], function() {
    gulp.watch('sass/**/*.scss', ['css']);
    // gulp.watch('assets/images/', ['images']);
    gulp.watch('app/**/**/*.js', ['js']);
    // gulp.watch(['*.html', 'partials/*.html']).on('change', browserSync.reload); //reload on HTML
    gulp.src('*').pipe(size());

});
