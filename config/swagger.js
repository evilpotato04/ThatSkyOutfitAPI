const swaggerJSDoc = require("swagger-jsdoc")

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "That Sky Outfit API",
        version: "1.0.0",
        description: "This is an API to query clothes and accessories from the game Sky: Children of the Light.",
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Dev server',
      },
    ]
}

const options = {
    swaggerDefinition,
    apis: ["./app/routes/*.js"] // Path to the API routes in your Node.js application
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec

