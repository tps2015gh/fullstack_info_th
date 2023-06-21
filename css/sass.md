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
    > - > (this error )
    > - > (must use > npm sass -v ) 
  > - sass -watch app/sass:public/stylesheets
  >

## run  sass
>  หลัง install พบว่า รันไม่ได้ แต่ รันได้ ผ่าน  พบ error เลยลองรันแบบนี้ก็ผ่าน
>  c:\programdata\chocolatey\lib\sass\bin\sass.exe  .\a.scss  .\a.css
> จะเป็นการ แปลง .\a.scss เป็น  .\a.css 

a.scss
```scss
$font-stack: Helvetica, sans-serif
$primary-color: #333
body
  font: 100% $font-stack
  color: $primary-color
```
a.css
```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
/*# sourceMappingURL=a.css.map */
```

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
  
> - Sass Tutorial - https://www.w3schools.com/sass/default.php

### อื่นๆ อ้างอิง 
- [Package manager Chocolatey](../packagemanger/chocolatey_pm.md)
 
