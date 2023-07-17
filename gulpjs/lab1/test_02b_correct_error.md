##### > [ติดตั้ง Gulp.js](./setup_gulp.md) | [Back readme.md](../readme.md)
---
####ทดสอบตาม URL https://code-web-developer.blogspot.com/2014/07/gulpjs.html
---

#### แก้ไข Solve Gulp Error :white_check_mark: :heavy_check_mark:
##### The following tasks did not complete: default
**อ่้างอิง** :  https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async

---

Error ที่พบ 
```js
PS D:\test\testgulp> gulp
[11:46:50] Using gulpfile D:\test\testgulp\gulpfile.js
[11:46:50] Starting 'default'...
SiamHTML
[11:46:50] The following tasks did not complete: default
[11:46:50] Did you forget to signal async completion?
```

มีวิธีแก้ไขหลายวิธี แต่วิธีที่ง่ายที่สุดคือ  
แก้ไขโดย เพิ่ม async ไว้ที่หน้า function 
สร้างไฟล์  **gulpfile.js**
```js
// Solve Gulp Error 
// REF:  https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async

var gulp = require('gulp');
gulp.task('default', async  function() {
    // ให้แสดงข้อความ "SiamHTML" ออกมาทาง console
    console.log('this is default task');
});
gulp.task('test1', async  function() {
    // ให้แสดงข้อความ "SiamHTML" ออกมาทาง console
    console.log('this is test1 task');
});
```

ผลลัพธ์การรัน ได้ผลให้ Error ที่แจ้งไว้หายไป
```batch
PS D:\test\testgulp> gulp
[11:49:19] Using gulpfile D:\test\testgulp\gulpfile.js
[11:49:19] Starting 'default'...
this is default task
[11:49:19] Finished 'default' after 1.97 ms
```
ทดลองรัน task อื่นๆ ชื่อ test1 
```batch
PS D:\test\testgulp> gulp test1
[11:49:27] Using gulpfile D:\test\testgulp\gulpfile.js
[11:49:27] Starting 'test1'...
this is test1 task
[11:49:27] Finished 'test1' after 2.04 ms
```

ทดลองรัน list task 
```batch
PS D:\test\testgulp> gulp --tasks
[11:58:38] Tasks for D:\test\testgulp\gulpfile.js
[11:58:38] ├── default
[11:58:38] └── test1
PS D:\test\testgulp>
```



