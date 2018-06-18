const logger = require("../util/logger.js");
const ordersService = require("../service/orders.service.js");

const addressesController = {
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

	handleCreateOrder: (req, res) => {
		//const startTime = Date.now();
		//const { customer_id } = req.params;
		//customersService.getOrdersByCustomerID(customer_id)
			//.then(response => {
				//const return_data = {
					//total: response.length,
					//message: "OK",
					//orders: response
				//};
				//const endTime = Date.now();
				//logger.info("handleGetCustomersOrders succeeded in: ", endTime - startTime, "ms");
				//res.status(200).send(return_data);
			//})
			//.catch(err => {
				//logger.error("Error handleGetCustomersOrders: ", err);
				//res.status(500).send("Error");
			//});
	},
};

module.exports = addressesController;
