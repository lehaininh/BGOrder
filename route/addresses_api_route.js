const express = require("express");
const router = express.Router();
const logger = require("../util/logger.js");
const addressesController = require("../controller/addresses.ctrl.js");

router.get("/:address_id/orders", addressesController.handleGetOrdersFromAnAddress);

router.get("*", (req, res) => {
	logger.error("Calling addresses API without correct path");
	res.status(200).send("Wrong path maybe???");
});


module.exports = router;
