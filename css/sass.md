### Page SASS 
> SASS - https://sass-lang.com/documentation/js-api/

###Setup ติดตั้ง SASS 
SASS page ( npm ) - https://www.npmjs.com/package/sass
- Install Sass  - https://www.w3schools.com/sass/sass_installation.php 
- Install Sass - https://sass-lang.com/install
  > มีทางเลือกในการติดตั้ง 3 แบบ คือ 
  > - npm install -g sass
  > - choco install sass
  > - brew install sass/sass/sass
### ตรวจสอบหลังการติดตั้ง SaSS 
- คำสั่งหลังการติดตั้ง
  > - sass -version
  > - sass -watch app/sass:public/stylesheets

### Learning  SASS
> - SASS Basic - https://sass-lang.com/guide

> - การใช้งาน SaSS  - https://www.designil.com/sass-css-scss-tutorial/

> - SaSS Introduction - https://www.w3schools.com/sass/sass_intro.php
>   - จะมีการ นิยามตัวแปรได้ด้วย 
>   - เช่น ตัวแปร $bgcolor ตั้งค่าให้เป็นค่า lightblue
>   - @import file https://www.w3schools.com/sass/sass_import.php
>   - @mixin ซึ่งสามารถ นำมาใช้ เป็นส่วนประกอบได้ โดย @import  https://www.w3schools.com/sass/sass_mixin_include.php
>   - @extend แชร์ common property value  https://www.w3schools.com/sass/sass_extend.php
>   - มี ฟังก์ชั่นให้ใช้ บางส่วน
```
/* Define standard variables and values for website */
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

/* Use the variables */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}
```
  
> - Sass Tutorial - https://www.w3schools.com/sass/default.php

### อื่นๆ อ้างอิง 
- [Package manager Chocolatey](./packagemanger/chocolatey_pm)
 
