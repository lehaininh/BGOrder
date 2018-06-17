const express = require("express");
const router = express.Router();
const logger = require("../util/logger.js");
const testController = require("../controller/test.ctrl.js");

router.get("/", testController.handleGetTestAPICall);

router.get("*", (req, res) => {
	logger.error("Calling test API without correct path");
	res.status(200).send("Wrong path maybe???");
});


module.exports = router;
