const serverless = require("serverless-http");
const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Define Swagger specification options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chat app API',
      version: '0.0.1',
      description: 'API documentation for Chat app',
    },
    servers: [{
      url: 'http://localhost:3000/', // Adjust the URL according to your deployment environment
    }],
  },
  // Path to the API specs
  apis: ['./index.js'], // Point to the file containing your API endpoints
};

// Initialize Swagger-jsdoc
const specs = swaggerJsdoc(options);

// Serve Swagger UI at the endpoint /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Define your API routes in index.js
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});


app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

// Define a new API endpoint and document it with Swagger
/**
 * @swagger
 * /api/greet:
 *   get:
 *     summary: Greet the user
 *     description: Returns a greeting message.
 *     responses:
 *       200:
 *         description: A greeting message.
 */
app.get("/api/greet", (req, res, next) => {
  return res.status(203).json({
    message: "Hello, welcome API!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports.handler = serverless(app);
// https://hr93rg8j9h.execute-api.us-east-1.amazonaws.com 