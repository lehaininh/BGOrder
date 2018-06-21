const logger = require("../util/logger.js");
const ordersService = require("../service/orders.service.js");

const addressesController = {
	handleCreateOrder: (req, res) => {
		const startTime = Date.now();
		const { order } = req.body;
		ordersService.createOrder(order)
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					orders: response
				};
				const endTime = Date.now();
				logger.info("handleCreateOrder succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleCreateOrder: ", err);
				res.status(500).send("Error");
			});
	},

	handleGetOrderByOrderID: (req, res) => {
		const startTime = Date.now();
		const { order_id } = req.params;
		ordersService.getOrderByOrderIDs(order_id)
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					orders: response
				};
				const endTime = Date.now();
				logger.info("handleGetOrderByOrderID succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleGetOrderByOrderID: ", err);
				res.status(500).send("Error");
			});
	},

	handleUpdateOrderByID: (req, res) => {
		const startTime = Date.now();
		const { order_id } = req.params;
		const { order } = req.body;
		ordersService.updateOrder(order_id, order)
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					orders: response
				};
				const endTime = Date.now();
				logger.info("handleUpdateOrderByID succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleUpdateOrderByID: ", err);
				if (err.client_message) {
					res.status(500).send(err.client_message);
				} else {
					res.status(500).send("Error");
				}
			});
	}
};

module.exports = addressesController;
