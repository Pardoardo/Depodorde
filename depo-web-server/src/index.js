// Requiring some dependencies 
const express = require("express");
const path = require('path');
const { StartRouter } = require("./router.js");

// Intialiazing a new express server instance
const server = express();

// Setting the view engine to ejs
server.set('view engine', 'ejs');

// Fixing some stupid bug related to paths
server.set('views', __dirname + '/views'); 

// Defining the assets path
server.use(express.static(path.join(__dirname, 'public')));

// Starting the router in the server
StartRouter(server);

// Getting the port from our .env file 
// (you will need to create this file manually if you downloaded this source code from GitHub)
const port = process.env.PORT || 8080;

// Function called by the "boot.js" to start this web server
function StartWebServer(){
    console.log("[depo-web-server]: starting...");

    server.listen(port, ()=> {
        console.log(`[depo-web-server]: up an running at port ${port}`);
    })
}

module.exports ={
    StartWebServer
}