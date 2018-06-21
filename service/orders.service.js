const ordersModel = require("../model/orders.model.js");
const populateSerivce = require("./populate.service.js");
const logger = require("../util/logger.js");

const ordersService = {
	getOrderByOrderIDs: order_id => {
		return ordersModel.getOrderByOrderIDs([order_id])
			.then(orders => {
				return populateSerivce.populateInfoForOrders(orders);
			});
	},

	createOrder: order => {
		return ordersModel.createOrders([order]);
	}
};

module.exports = ordersService;
