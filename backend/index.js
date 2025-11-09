// in package.json, we need key entry ["type" : "module"] just before
// Dubug option
import http from "http";
// const http = require("node:http");

const server = http.createServer((req, res) => {
    // res.write("Node JS first lab.");
    // res.end();
    if (req.url == "/Login")
    {
        res.write("Login credentials received for processing.");
        res.end();
    }
    if (req.url == "/Signup") {
      res.write("Signup details received for processing.");
      res.end();
    }
})

server.listen(5000);