const logger = require("../util/logger.js");
const ordersService = require("../service/orders.service.js");

const addressesController = {
	handleGetDefaultItemReport: (req, res) => {
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
				logger.info("handleGetDefaultItemReport succeeded in: ",
					endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleGetDefaultItemReport: ", err);
				res.status(500).send("Error");
			});
	},
};

module.exports = addressesController;
