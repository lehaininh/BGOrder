const express = require("express");
const router = express.Router();
const logger = require("../util/logger.js");
const ordersController = require("../controller/orders.ctrl.js");

router.get("/:order_id", ordersController.handleGetOrderByOrderID);
router.put("/:order_id", ordersController.handleUpdateOrderByID);
router.delete("/:order_id", ordersController.handleDeleteOrderByID);

router.post("/", ordersController.handleCreateOrder);

router.get("*", (req, res) => {
	logger.error("Calling addresses API without correct path");
	res.status(200).send("Wrong path maybe???");
});


module.exports = router;
