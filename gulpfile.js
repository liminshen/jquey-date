var gulp = require('gulp'),
    // sass = require('gulp-ruby-sass'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify');

var browserSync = require('browser-sync').create();
var fixerBrowsers = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];
gulp.task('less', function() {
    return gulp.src('style/less/*.less')
    	.pipe(less())
        .pipe(autoprefixer({
	      browsers: fixerBrowsers,
	      cascade: true, //是否美化属性值 默认：true 像这样：
	      //-webkit-transform: rotate(45deg);
	      //        transform: rotate(45deg);
	      remove: true //是否去掉不必要的前缀 默认：true
	    }))
	    .pipe(gulp.dest('style/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('style/css'))
        .pipe(notify({ message: 'Styles task complete' }))
        .pipe(browserSync.stream());
});
gulp.task('miniJS',function () {
    return gulp.src(['js/app/*.js','!js/app/*.min.js'])
            .pipe(uglify({
                mangle:{except: ['require' ,'exports' ,'module' ,'$']},//排除混淆关键字
                compress: true,//类型：Boolean 默认：true 是否完全压缩
                preserveComments: 'all' //保留所有注释
            }))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('js/app'))
            .pipe(notify({ message: 'Styles task complete' }))
            .pipe(browserSync.stream());
})
gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: "./",
        port : 8080
    });

    gulp.watch("style/less/*.less", ['less']);
    gulp.watch("js/*.js", ['miniJS']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
gulp.task('build',['miniJS']);
gulp.task('default', ['serve','miniJS']);