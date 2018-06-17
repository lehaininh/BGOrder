const ordersModel = require("../model/orders.model.js");
//const populateSerivce = require("./populate.service.js");
const logger = require("../util/logger.js");

const customersService = {
	getOrdersByCustomerID: customer_id => {
		return ordersModel.getOrdersByCustomerID(customer_id)
			.then(res => {
				logger.debug("REMOVEME - DEBUG: ", res);
			});
	},
};

module.exports = customersService;
