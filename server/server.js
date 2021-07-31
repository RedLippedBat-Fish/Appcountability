const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
const app = express();

const PORT = 3000;

// ------------------ api router
const apiRouter = require("./routes/api");

// ------------------ boiler plate

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use(express.static(path.resolve(__dirname, "../client")));
// app.use(cookieParser());

// ------------------ all the routes to api

// ------------------ global error handler & listening route

app.use("*", (req, res) => {
  res.status(404).send("Route not Found");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
