const express = require("express");

const connect = require("./config/db");

const app = express();
app.use(express.json());

const usercontoller = require("./controller/user.controllers");


app.listen(6001 , async () => {

    await connect();
    console.log("Listenng to port 6001");
});