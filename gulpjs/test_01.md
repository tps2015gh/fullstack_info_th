##### > [ติดตั้ง Gulp.js](./setup_gulp.md) | [Back](../readme.md)

ทดสอบตาม URL https://code-web-developer.blogspot.com/2014/07/gulpjs.html


```batch
PS D:\test\testgulp> npm install -g gulp
PS D:\test\testgulp> npm install --save-dev gulp
npm install -g gulp
npm install --save-dev gulp
```

#### Directory ที่ติดตั้งเพื่อทดสอบ จะมี ข้อมูลแบบนี้ 
```batch
Directory: D:\test\testgulp
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         6/30/2023  10:53 AM                node_modules
-a----         6/30/2023  10:53 AM         147654 package-lock.json
-a----         6/30/2023  10:53 AM             52 package.json
```

#### ตรวจสดูรายละเอียดของไฟล์ package.json 

```powershell
PS D:\test\testgulp> type .\package.json
{
  "devDependencies": {
    "gulp": "^4.0.2"
  }
}
PS D:\test\testgulp>
```
จะเห็นว่า มี library ที่โหลดมาใน node_modules จำนวนมากหลายร้อยรายการ ดังนี้  จากเท่าที่ทดสอบลองมา จะพบว่า มี รายการ 278 Folder  
```powershell
PS D:\test\testgulp> (dir .\node_modules\).length
278
```
 
#### สร้างไฟล์ที่มีชื่อว่า gulpfile.js ขึ้นมา  
 
```js
// โหลด package "gulp" มาใช้ (บรรทัดนี้ต้องใส่เสมอ)
var gulp = require('gulp');

// สร้าง task ชื่อว่า "taskName" ขึ้นมา พร้อมกับระบุงานที่จะให้ task นี้ทำ
gulp.task('taskName', function() {
    // ระบุว่า task นี้ทำอะไร
    Console.log("do Task 1234");
});
```

เพื่อเป็นการทดสอบว่า gulp.js ทำงานได้แล้ว เราอาจสร้าง task ง่ายๆ ขึ้นมา ลองดู task ต่อไปนี้

```js
var gulp = require('gulp');

// สร้าง task ที่มีชื่อว่า "siamhtml"
gulp.task('siamhtml', function() {
    // ให้แสดงข้อความ "SiamHTML" ออกมาทาง console
    console.log('SiamHTML');
});
```

หลังจากสร้าง gulp.js แล้วจะได้ข้อมูลดังนี้ 
```batch
    Directory: D:\test\testgulp
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         6/30/2023  10:53 AM                node_modules
-a----         6/30/2023  11:15 AM            268 gulp.js
-a----         6/30/2023  10:53 AM         147654 package-lock.json
-a----         6/30/2023  10:53 AM             52 package.json
```

---
#### 3. รัน gulp.js
รัน task ชื่อ  **siamhtml**  
```batch
gulp siamhtml
```

ผลการรันจริงๆ พบว่า ไม่สามารถรันได้  ไม่รู้ว่าทำไม 
```batch
PS D:\test\testgulp> gulp
[11:16:58] No gulpfile found
PS D:\test\testgulp> gulp gulp.js
[11:17:35] No gulpfile found
PS D:\test\testgulp> gulp siamhtml
[11:17:47] No gulpfile found
```

ค้น Google พบว่า ที่ StackOverflow แจ้งว่า ให้เปลี่ยนชื่อไฟล์เป็น **gulpfile.js** แทน  
https://stackoverflow.com/questions/38937095/no-gulpfile-found


เปลี่ยนชื่อไฟล์ และ ลองลิสต์ Task 
เปลี่ยนชื่อไฟล์ 
```batch
PS D:\test\testgulp> copy .\gulp.js .\gulpfile.js
PS D:\test\testgulp> gulp
[11:23:13] Using gulpfile D:\test\testgulp\gulpfile.js
[11:23:13] Task never defined: default
[11:23:13] To list available tasks, try running: gulp --tasks
```

ลองลิสต์ Task 
```batch
PS D:\test\testgulp> gulp --tasks
[11:23:23] Tasks for D:\test\testgulp\gulpfile.js
[11:23:23] └── siamhtml
PS D:\test\testgulp>
```

ผลการรัน Task 
```batch
PS D:\test\testgulp> gulp siamhtml
[11:27:17] Using gulpfile D:\test\testgulp\gulpfile.js
[11:27:17] Starting 'siamhtml'...
SiamHTML
[11:27:17] The following tasks did not complete: siamhtml
[11:27:17] Did you forget to signal async completion?
PS D:\test\testgulp>
```
