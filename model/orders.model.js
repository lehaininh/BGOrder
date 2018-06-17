const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const ordersModel = {
	getOrderByOrderIDs: order_ids => {
		if (order_ids && order_ids.length) {
			if (order_ids.length === 0) return Promise.resolve([]);
			const placeholder = order_ids.map(() => "?").join(",");
			const query =
				`SELECT * FROM ${TABLE_NAME.ORDERS}
				WHERE id iN (${placeholder}) AND is_enabled = 1`;
			const values = order_ids;
			return dbUtil.runQuery(query, values);

		} else {
			return Promise.resolve([]);
		}
	},

	getOrdersByCustomerID: customer_id => {
		if (customer_id) {
			const query =
				`SELECT * FROM ${TABLE_NAME.ORDERS}
				WHERE customer_id = ? AND is_enabled = 1`;
			const values = customer_id;
			return dbUtil.runQuery(query, values)
				.then(orders => {
					const order_ids = orders.map(order => order.id);
					return ordersModel.getOrderByOrderIDs(order_ids);
				});
		} else {
			return Promise.resolve([]);
		}
	},
};

module.exports = ordersModel;
