const express = require("express");
const path = require('path');
const { StartRouter } = require("./router.js");

const server = express();

server.set('view engine', 'ejs');

server.set('views', __dirname + '/views'); 

server.use(express.static(path.join(__dirname, 'public')));

StartRouter(server);

const port = process.env.PORT || 8080;

function StartWebServer(){
    console.log("[depo-web-server]: starting...");

    server.listen(port, ()=> {
        console.log(`[depo-web-server]: up an running at port ${port}`);
    })
}

module.exports ={
    StartWebServer
}