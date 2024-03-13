import 'dotenv/config';

import serverless from 'serverless-http';
import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

if (process.env.NODE_ENV === "local") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export const handler = serverless(app);
// https://hr93rg8j9h.execute-api.us-east-1.amazonaws.com 