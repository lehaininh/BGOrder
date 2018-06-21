const ordersModel = require("../model/orders.model.js");
const populateSerivce = require("./populate.service.js");
const logger = require("../util/logger.js");

const ordersService = {
	createOrder: order => {
		return ordersModel.createOrders([order]);
	},

	getOrderByOrderIDs: order_id => {
		return ordersModel.getOrderByOrderIDs([order_id])
			.then(orders => {
				return populateSerivce.populateInfoForOrders(orders);
			});
	},

	updateOrder: (order_id, order) => {
		return ordersModel.getOrderByOrderIDs([order_id])
			.then(orders => {
				if (orders && orders.length) {
					const updating_order = Object.assign({}, orders[0], order);
					return ordersModel.updateOrder(order_id, updating_order);
				} else {
					throw {
						"client_message": `Order ${order_id} doesn't exist`
					};
				}
			});
	},
};

module.exports = ordersService;
