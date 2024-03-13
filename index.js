const serverless = require("serverless-http");
const express = require("express");
const app = express();

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