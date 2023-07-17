<style>
    r {color:red;}
</style>
##### > [ติดตั้ง Gulp.js](./setup_gulp.md) | [Back](../readme.md)

ทดสอบตาม URL https://code-web-developer.blogspot.com/2014/07/gulpjs.html

***

หลังจากทดลองแล้ว พบ error  :x::x:
<r>ReferenceError: sass is not defined</r>

ดีงข้อมูล task list ได้ดังนี้ แสดงได้  :heavy_check_mark:
```batch
PS D:\test\testgulp> gulp --tasks
[13:54:04] Tasks for D:\test\testgulp\gulpfile.js
[13:54:04] └── sass
```

Source Code ในไฟล์  gulpfile.js คือ 
```js
var gulp = require('gulp');
 
gulp.task('sass', async function () {
    // ให้คอมไพล์ .scss ทุกไฟล์ที่อยู่ในโฟลเดอร์ scss
    return gulp.src(['scss/**/*.scss'])
        .pipe(sass({
            compass: true, // ใช้ Compass
            style: 'compressed', // เลือก output แบบ compressed
        }))
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('css')) // เก็บไฟล์ css ไว้ที่โฟลเดอร์ css
});
```
คาดว่า เพราะยังไม่ได้ ติดตั้ง sass ในระบบ  :question:
ใน stackoverflow บอกว่า ให้ เพิ่ม  require gulp-sass ด้วย คล้ายๆดังนี้   (file-001)
```js
var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('app/scss/mystyles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['sass']);
```

ลองดูแล้วพบว่า  :x::x:
```batch
PS D:\test\testgulp> gulp
Error: Cannot find module 'gulp-sass'
Require stack:
- D:\test\testgulp\gulpfile.js
- C:\Users\DELL\AppData\Roaming\nvm\v18.16.0\node_modules\gulp\node_modules\gulp-cli\lib\shared\require-or-import.js
- C:\Users\DELL\AppData\Roaming\nvm\v18.16.0\node_modules\gulp\node_modules\gulp-cli\lib\versioned\^4.0.0\index.js
- C:\Users\DELL\AppData\Roaming\nvm\v18.16.0\node_modules\gulp\node_modules\gulp-cli\index.js
- C:\Users\DELL\AppData\Roaming\nvm\v18.16.0\node_modules\gulp\bin\gulp.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1075:15)
    at Module._load (node:internal/modules/cjs/loader:920:27)
    at Module.require (node:internal/modules/cjs/loader:1141:19)
    at require (node:internal/modules/cjs/helpers:110:18)
    at Object.<anonymous> (D:\test\testgulp\gulpfile.js:20:12)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Module.require (node:internal/modules/cjs/loader:1141:19) {
  code: 'MODULE_NOT_FOUND',
  ```

