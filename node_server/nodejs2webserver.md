
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

  - [การรัน nodejs ให้เป็น webserver](#การรัน-nodejs-ให้เป็น-webserver)
    - [NVM](#nvm)
      - [[[การติดตั้ง MVM]]](#การติดตั้ง-mvm)
  - [การเขียนโค้ด web server ด้วย  nodejs](#การเขียนโค้ด-web-server-ด้วย--nodejs)
  - [http module](#http-module)
    - [http : reference](#http--reference)
  - [[[ MVC with Express |nodejs2webserver_mvc_with_express]]](#-mvc-with-express-nodejs2webserver_mvc_with_express)
- [http module > code เบื้องต้นใน ของการทำ app](#http-module--code-เบื้องต้นใน-ของการทํา-app)

<!-- /code_chunk_output -->


## การรัน nodejs ให้เป็น webserver 
อ้างอิงจาก: https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module


### NVM 
#### [การติดตั้ง NVM](การติดตั้ง MVM.md)



## การเขียนโค้ด web server ด้วย  nodejs
- ดูที่ https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module


<!-- pagebreak -->
[markdown_using](markdown_using.md)


<!-- pagebreak -->

## http module
### http : reference  
- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction  

<!-- pagebreak -->

##[[ MVC with Express |nodejs2webserver_mvc_with_express]]

# http module > code เบื้องต้นใน ของการทำ app  
```
const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener_json = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
};
const requestListener  = requestListener_json ;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
```

ทีนี้ ถ้าต้องการ ให้มีการ เปลี่ยนเป็น csv แทน ก็ต้องเปลี่ยนโค้ด เป็น 
```
const requestlistener_serve_csv = function (){
    const requestListener = function (req, res) {
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    }
    return requestListener ;
}

const requestListener  = requestListener_json ;

```

