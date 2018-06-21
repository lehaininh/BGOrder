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
					orders: response
				};
				const endTime = Date.now();
				logger.info("handleGetCustomersOrders succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleGetCustomersOrders: ", err);
				res.status(500).send("Error");
			});
	},

	handleGetCustomerByID: (req, res) => {
		const startTime = Date.now();
		const { customer_id } = req.params;
		customersService.getCustomersByIDs([customer_id])
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					customers: response
				};
				const endTime = Date.now();
				logger.info("handleGetCustomerByID succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleGetCustomerByID: ", err);
				res.status(500).send("Error");
			});
	},

	handleUpdateCustomerByID: (req, res) => {
		const startTime = Date.now();
		const { customer_id } = req.params;
		const { customer } = req.body;
		customersService.updateCustomerByID(customer_id, customer)
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					customers: response
				};
				const endTime = Date.now();
				logger.info("handleUpdateCustomerByID succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleUpdateCustomerByID: ", err);
				if (err.client_message) {
					res.status(500).send(err.client_message);
				} else {
					res.status(500).send("Error");
				}
			});
	},

	hanleDeleteCustomerByID: (req, res) => {
		const startTime = Date.now();
		const { customer_id } = req.params;
		customersService.deleteCustomerByID(customer_id)
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					customers: response
				};
				const endTime = Date.now();
				logger.info("hanleDeleteCustomerByID succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error hanleDeleteCustomerByID: ", err);
				if (err.client_message) {
					res.status(500).send(err.client_message);
				} else {
					res.status(500).send("Error");
				}
			});
	},
};

module.exports = customersController;
