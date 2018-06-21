const shortID = require("shortid");
const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const ordersModel = {
	createOrders: orders => {
		if (orders && orders.length) {
			const placeholder = orders.map(() => "(?, ?, ?, ?)").join(",");
			const query =
				`INSERT INTO ${TABLE_NAME.ORDERS} (id, customer_id, address_id, item_id)
				VALUES ${placeholder}`;
			const values = [];
			const order_ids = [];
			orders.forEach(order => {
				const order_id = shortID.generate();
				order_ids.push(order_id);
				values.push(order_id);
				values.push(order.customer_id);
				values.push(order.address_id);
				values.push(order.item_id);
			});
			return dbUtil.runQuery(query, values)
				.then(() => ordersModel.getOrderByOrderIDs(order_ids));
		} else {
			return Promise.resolve([]);
		}
	},

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

	getOrdersByAddressID: address_id => {
		if (address_id) {
			const query =
				`SELECT * FROM ${TABLE_NAME.ORDERS}
				WHERE address_id = ? AND is_enabled = 1`;
			const values = address_id;
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
