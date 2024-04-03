const express = require("express")
const swaggerUI = require("swagger-ui-express")
const swaggerSpec = require("./swagger")
const consign = require("consign")
const bodyParser = require("body-parser")

const app = express()

// middlewares config
app.use(express.static("./app/images"))
app.use("/api/swagger", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use(bodyParser.json())

// autoload config
consign()
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .then("config/dbConnection.js")
    .into(app)

module.exports = app