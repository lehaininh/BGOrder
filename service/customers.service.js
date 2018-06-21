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
	},

	updateCustomerByID: (customer_id, customer) => {
		return customersService.getCustomersByIDs([customer_id])
			.then(customers => {
				if (customers && customers.length) {
					return customersModel.updateCustomerByID(customer_id, customer);
				} else {
					throw {
						"client_message": `Customer ${customer_id} doesn't exist`
					};
				}
			});
	},

	deleteCustomerByID: customer_id => {
		return customersService.getCustomersByIDs([customer_id])
			.then(customers => {
				if (customers && customers.length) {
					return customersModel.deleteCustomerByID(customer_id);
				} else {
					throw {
						"client_message": `Customer ${customer_id} doesn't exist`
					};
				}
			});
	}
};

module.exports = customersService;
