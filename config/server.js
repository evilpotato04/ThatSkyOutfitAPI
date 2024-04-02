const express = require("express");
const consign = require("consign");

const app = express();

// middlewares config
app.use(express.static("./app/images"));

// autoload config
consign()
    .include("config/dbConnection.js")
    .into(app);

module.exports = app;