
:house: [Back To Readme](/readme.md) | :arrow_up: [Back To Gulp Readme](/gulpjs/readme.md)



---
#### รัน gulp watch ผ่าน  api ใน nodejs 

> อ้างอิง https://gulpjs.com/docs/en/api/watch/ 
>  
 

> สร้าง folder  d:\test
สร้าง folder  d:\test\gulpwatch1
cd d:\test\gulpwatch1
สร้าง folder d:\test\gulpwatch1\input

สร้าง ไฟล์  app1.js ดังนี้ 
```js
console.log("start app1.js");
for(var i = 0; i< 10 ; i++){
    console.log("" + i + ",");
}
```

ไปที่  d:\test\gulpwatch1
> cd d:\test\gulpwatch1
> 
สร้าง ไฟล์  something.js ดังนี้ 
```js
console.log("start something.js !!! ");
for(var i = 0; i< 10 ; i++){
    console.log(" " + i + ",");
}
```

สร้าง watcher1.js ดังนี้
```js
const { watch } = require('gulp');
console.log("init .." );
watch(['input/*.js', '!input/something.js'], function(cb) {
  // body omitted
  console.log("  CHANGED ");
  cb();
});
console.log("end .. but start watching " );
```

Run  node  watcher1   :o:
>PS D:\test\gulpwatch1> node .\watcher1.js
init ..
end .. but start watching

ทดลองแก้ไข ไฟล์  app1.js  จะแจ้งเตือนแบบนี้  :o:


>PS D:\test\gulpwatch1> node .\watcher1.js
init ..
end .. but start watching
 CHANGED
 CHANGED
 CHANGED

> ====================================
 จากตัวอย่างจะเป็นการใช้ gulp api 
 ยังไม่ทราบว่า แสดงผลชื่อไฟล์อย่างไร 
 ยังไม่ทราบว่า ใช้  กับ gulpfile อย่างไร 
====================================