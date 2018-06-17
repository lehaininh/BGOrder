const logger = require("../util/logger.js");

const testController = {
	handleGetTestAPICall: (req, res) => {
		res.status(200).send("Test API works fine");
	},
};

module.exports = testController;
