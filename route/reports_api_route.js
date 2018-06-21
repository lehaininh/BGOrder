const express = require("express");
const router = express.Router();
const logger = require("../util/logger.js");
const reportsController = require("../controller/reports.ctrl.js");

router.get("/default", reportsController.handleGetDefaultItemReport);

router.get("*", (req, res) => {
	logger.error("Calling reports API without correct path");
	res.status(200).send("Wrong path maybe???");
});


module.exports = router;
