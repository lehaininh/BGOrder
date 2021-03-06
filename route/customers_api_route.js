const express = require("express");
const router = express.Router();
const logger = require("../util/logger.js");
const customersController = require("../controller/customers.ctrl.js");

router.get("/byitems", customersController.handleGetCustomerByItemBought);
router.get("/:customer_id", customersController.handleGetCustomerByID);
router.get("/:customer_id/orders", customersController.handleGetCustomersOrders);
router.get("/:customer_id/spending", customersController.handleGetCustomersSpending);
router.get("/:customer_id", customersController.handleGetCustomerByID);

router.put("/:customer_id", customersController.handleUpdateCustomerByID);

router.delete("/:customer_id", customersController.hanleDeleteCustomerByID);

router.get("*", (req, res) => {
	logger.error("Calling customers API without correct path");
	res.status(200).send("Wrong path maybe???");
});


module.exports = router;
