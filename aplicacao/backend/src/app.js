const express = require("express");
const tsRoutes = require("./routes/tsRoutes");
const bodyParser = require("body-parser");


class App {
  constructor() {
    this.app = express();
    this.routes();
    this.bodyParser();
  }

  routes() {
    this.app.use(tsRoutes);
  }
  bodyParser() {
    this.app.use(bodyParser.text({ type: "*/*" }));
  }
}

module.exports = new App().app;
