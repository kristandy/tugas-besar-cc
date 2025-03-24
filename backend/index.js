//import express
const express = require("express");
const terapisRoutes = require("./src/routes/terapis-routes.js");
const errorHandler = require("./src/utils/error-handler");

//import CORS
const cors = require("cors");

//Import bodyParser
const bodyParser = require("body-parser");

//init app
const app = express();

//use cors
app.use(cors());

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//define port
const port = 3000;

//route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/terapis", terapisRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 Route
app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

//start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
