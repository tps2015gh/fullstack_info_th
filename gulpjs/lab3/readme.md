 > npm install gulp
 > npm install gulp-watch
 > npm install gulp-less
 > npm install gulp-concat
 > npm install gulp-uglify

 แล้วสร้าง ไฟล์  gulpfile.js 

 ```js
 //=============================================================================
// REF  
// https://stackoverflow.com/questions/30330656/how-to-use-gulp-watch
//=============================================================================
var gulp = require('gulp'); 
// /    watch = require('gulp-watch');
var concat = require('gulp-concat'); // we can use ES6 const or let her just the same
var uglify = require('gulp-uglify'); // and here as well     

gulp.task('scripts1', function(done) {
      console.log("script1 activeate");
      return gulp.src('input/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function() {
        gulp.watch('input/*.js',gulp.series(['scripts1']))
});

 ```

ให้ file input\app1.js  เป็นดังนี้ 
```js
console.log("start app1.js");
for(var i = 0; i< 15 ; i++){
    console.log("" + i + ",");  
    console.log("\n==== \n");  
}
```
ให้ file input\app2.js  เป็นดังนี้ 
```js
//===================================
console.log("start app2.js");
for(var i = 0; i< 15 ; i++){
    console.log("\n >> " + i + ",");  
}
```

รัน task ด้วย 
> gulp watch 

ได้ผลดังนี้ 
> PS D:\test\gulpwatch1> gulp watch
[11:21:08] Using gulpfile D:\test\gulpwatch1\gulpfile.js
[11:21:08] Starting 'watch'...

จะเห็นว่า มี output ที่ 

จะมี output คล้ายๆ นี้ 

>PS D:\test\gulpwatch1\input> cd ..
PS D:\test\gulpwatch1> gulp watch
[11:23:58] Using gulpfile D:\test\gulpwatch1\gulpfile.js
[11:23:58] Starting 'watch'...
[11:25:01] Starting 'scripts1'...
[11:25:01] Finished 'scripts1' after 58 ms
[11:25:30] Starting 'scripts1'...
[11:25:30] Finished 'scripts1' after 70 ms
[11:25:36] Starting 'scripts1'...
[11:25:36] Finished 'scripts1' after 20 ms
[11:26:51] Starting 'scripts1'...
[11:26:51] Finished 'scripts1' after 32 ms

และ จะมี folder dist เพิ่มขึ้น 
พร้อมทั้ง ไฟล์  app.js 

```text

PS D:\test\gulpwatch1\dist> dir

    Directory: D:\test\gulpwatch1\dist
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         7/17/2023  11:22 AM                js

PS D:\test\gulpwatch1\dist> dir js
  Directory: D:\test\gulpwatch1\dist\js
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         7/17/2023  11:26 AM            244 all.js

PS D:\test\gulpwatch1\dist>
```

เมื่อดู ในไฟล์ all.js จะเห็นว่า เป็นการ รวม 3 file คือ 
app1.js  app2.js  และ notuse.js ไว้ด้วยกัน 
และมีการ นำ comment ออกทั้งหมด 
```batch
PS D:\test\gulpwatch1\dist\js> type all.js
console.log("start app1.js");for(var i=0;i<15;i++)console.log(i+","),console.log("\n==== \n");console.log("start app2.js");for(i=0;i<15;i++)console.log("\n >> "+i+",");console.log("start notuse.js !!! ");for(i=0;i<10;i++)console.log(" "+i+",");
PS D:\test\gulpwatch1\dist\js>
```
ไฟล์ all.js ที่ได้จะเป็นดังนี้ 

```js
console.log("start app1.js");for(var i=0;i<15;i++)console.log(i+","),console.log("\n==== \n");console.log("start app2.js");for(i=0;i<15;i++)console.log("\n >> "+i+",");console.log("start notuse.js !!! ");for(i=0;i<10;i++)console.log(" "+i+",");
```

เมื่อทดสอบ run ดูจะรันได้ ปกติ  

```text
PS D:\test\gulpwatch1\dist\js> node all.js
start app1.js
0,

====

1,

====
start app2.js

 >> 0,

 >> 1,

start notuse.js !!!
 0,
```
