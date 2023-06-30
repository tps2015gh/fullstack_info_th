##### > [ติดตั้ง Gulp.js](./setup_gulp.md) | [Back](../readme.md)

ทดสอบตาม URL https://code-web-developer.blogspot.com/2014/07/gulpjs.html


สร้างไฟล์  **gulpfile.js**
```js
var gulp = require('gulp');
// สร้าง task default 
gulp.task('default', ['sass'], function() {
    // เมื่อไฟล์ scss มีการเปลี่ยนแปลง ก็จะสั่งให้ task "sass" ทำงาน
    gulp.watch("scss/**/*.scss", ['sass']);
});
```

พบว่า เมื่อรัน แล้ว Error ดังนี้
```batch 
PS D:\test\testgulp> gulp
AssertionError [ERR_ASSERTION]: Task function must be specified
    at Gulp.set [as _setTask] (D:\test\testgulp\node_modules\undertaker\lib\set-task.js:10:3)
    at Gulp.task (D:\test\testgulp\node_modules\undertaker\lib\task.js:13:8)
    at Object.<anonymous> (D:\test\testgulp\gulpfile.js:4:6)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
```