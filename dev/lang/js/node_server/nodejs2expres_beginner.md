
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [NodeJS Express for Beginner](#nodejs-express-for-beginner)
    - [start code](#start-code)
    - [Code to wait query from browser and respose is :](#code-to-wait-query-from-browser-and-respose-is-)
    - [สามารถทำเป็นหลาย  URL Path ได้ด้วย](#สามารถทําเป็นหลาย--url-path-ได้ด้วย)

<!-- /code_chunk_output -->


#NodeJS Express for Beginner

- https://www.digitalocean.com/community/tutorials/nodejs-express-basics
- setup Project  with this  : https://www.digitalocean.com/community/tutorials/nodejs-express-basics#step-1-setting-up-the-project
  - npm init -y
  - (ยกเลิก) npm install express@4.17.1
  - npm install -g express@4.17.1 

### start code  
- Create Express Server > start with  

```javascript
const express = require('express');
const app = express();
```
###  Code to wait query from browser and respose is : 

```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Successful response.');
});
```

***
### สามารถทำเป็นหลาย  URL Path ได้ด้วย  

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

>app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

>app.get('/', (req, res) => {
  res.send('Successful response.');
});

> app.listen(3000, () => console.log('Example app is listening on port 3000.'));
```

ในตัวอย่าง เว็บนี้ ระบุตอนท้ายว่า สามารถทำ index อัตโนมัติได้ด้วย . แต่คิดว่าไม่จำเป็นในที่นี้จึงไม่ทำเอกสารไว้ 
