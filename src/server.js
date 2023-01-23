// Imports
const http = require("http");

// Establish Port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Webserver Code
const onRequest = (request, response) => {
    console.log(request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Server");
    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`listening on port ${port}`);
});








// Test Functions
/*
const myData = require("./myData.js");
const _ = require("underscore");

const helloWorld = () => {
    console.log("Hello World");
};

helloWorld();
helloWorld();
helloWorld();

myData.getMessage();

const myArray = [1, 2, 3, 4, 5];
console.log(_.chunk(myArray, 2));
*/