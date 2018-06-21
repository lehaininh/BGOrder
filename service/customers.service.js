const ordersModel = require("../model/orders.model.js");
const customersModel = require("../model/customers.model.js");
const populateSerivce = require("./populate.service.js");
const logger = require("../util/logger.js");

const customersService = {
	getOrdersByCustomerID: customer_id => {
		return ordersModel.getOrdersByCustomerID(customer_id)
			.then(orders => {
				return populateSerivce.populateInfoForOrders(orders);
			});
	},

	getCustomersByIDs: customer_ids => {
		return customersModel.getCustomersByIDs(customer_ids);
	}
};

module.exports = customersService;
