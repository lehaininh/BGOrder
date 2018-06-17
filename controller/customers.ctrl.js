const logger = require("../util/logger.js");
const customersService = require("../service/customers.service.js");

const customersController = {
	handleGetCustomersOrders: (req, res) => {
		const startTime = Date.now();
		const { customer_id } = req.params;
		customersService.getOrdersByCustomerID(customer_id)
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					users: response
				};
				const endTime = Date.now();
				logger.info("handleGetUserList succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleGetUserList: ", err);
				res.status(500).send("Error");
			});
	},
};

module.exports = customersController;
