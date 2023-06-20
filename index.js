//===============================================================================================================
// from URL this  
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
//===============================================================================================================

const http = require("http");

const host = 'localhost';
const port = 8000;

// const requestListener = function (req, res) {};
const requestListener_json = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
};

const requestlistener_serve_csv = function (){
    const requestListener = function (req, res) {
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    }
    return requestListener ;
}

const requestListener  = requestListener_json ;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});