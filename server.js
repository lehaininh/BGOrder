const http = require("http");
const app = require("./app.js");
const logger = require("./util/logger.js");
var server;
try {
	server = http.createServer(app);
	server.listen(3333);
	logger.verbose("API SERVER IS RUNNING ON PORT 3333..");
} catch (ex) {
	logger.error("API SERVER HAS TROUBLE STARTING: ", ex);
}
