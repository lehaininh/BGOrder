const ordersModel = require("../model/orders.model.js");
const populateSerivce = require("./populate.service.js");
const logger = require("../util/logger.js");

const customersService = {
	getOrdersFromAnAddress: address_id => {
		return ordersModel.getOrdersByAddressID(address_id)
			.then(orders => {
				return populateSerivce.populateInfoForOrders(orders);
			});
	},
};

module.exports = customersService;
