const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const logger = require("./util/logger.js");
const config = require("./config/index.js");
const routing = require("./route/route_index.js");
const app = express();

app.use(morgan("combined", {"stream": logger.stream}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("dist"));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", config.CORS);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

routing.createRoute(app);

module.exports = app;
