const express = require("express");
const tsRoutes = require("./routes/tsRoutes");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const whitelist = ["http://localhost:8080", "http://localhost:3000"];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.routes();
    this.bodyParser();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(
      helmet({
        crossOriginResourcePolicy: false,
      })
    );
  }
  routes() {
    this.app.use(tsRoutes);
  }
  bodyParser() {
    this.app.use(bodyParser.text({ type: "*/*" }));
  }
}

module.exports = new App().app;
