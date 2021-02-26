const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const request = require("./routes/requestRoutes");
const app = express();
const PORT = config.get("serverPort");



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

app.use(express.json());
app.use("/" ,request);


const start = async() => {
    try {
        await mongoose.connect(config.get("dbURL"));


        app.listen(PORT, () => {
            console.log("Server started at " + PORT + " port");
        });
    } catch (e) {
        
    }
}

start();