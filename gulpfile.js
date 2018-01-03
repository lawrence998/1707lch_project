// 引入gulp模块，得到一个对象/函数
let gulp = require('gulp');
let sass = require('gulp-sass');

let path = {
    sass:'./src/sass/*.scss',
    js:'./src/js/*.js'
}

//创建任务
//编译sass文件
gulp.task('compileSass',function(){
    //返回文件流
    gulp.src(path.sass)
    .pipe(sass({outputStyle:'compact'}))
    // 参数outputStyle：
        // nested(默认）
        // expanded：展开
        // compact：单行
        // compressed：压缩
    //输出
    .pipe(gulp.dest('./src/css'));
});

// 自动化任务
// 监听sass文件修改，自动编译
gulp.task('jtSass',function(){
    // 监听这个文件，当文件有修改时，执行响应任务
    gulp.watch(path.sass,['compileSass']);
})