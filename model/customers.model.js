const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const customersModel = {
	getCustomersByIDs: customer_ids => {
		if (customer_ids) {
			if (customer_ids.length === 0) return Promise.resolve([]);
			const placeholder = customer_ids.map(() => "?").join(",");
			const query =
				`SELECT * FROM ${TABLE_NAME.CUSTOMERS}
				WHERE id iN (${placeholder}) AND is_enabled = 1`;
			const values = customer_ids;
			return dbUtil.runQuery(query, values);
		} else {
			const query =
				`SELECT * FROM ${TABLE_NAME.CUSTOMERS}
				WHERE is_enabled = 1`;
			return dbUtil.runQuery(query, []);
		}
	},

	updateCustomerByID: (customer_id, customer) => {
		const query =
			`UPDATE ${TABLE_NAME.CUSTOMERS}
			SET customer_name = ? WHERE id = ?`;
		const values = [customer.customer_name, customer_id];
		return dbUtil.runQuery(query, values)
			.then(() => customersModel.getCustomersByIDs([customer_id]));
	},

	deleteCustomerByID: customer_id => {
		const query =
			`UPDATE ${TABLE_NAME.CUSTOMERS}
			SET is_enabled = 0 WHERE id = ?`;
		const values = [customer_id];
		return dbUtil.runQuery(query, values)
			.then(() => customersModel.getCustomersByIDs([customer_id]));
	}
};

module.exports = customersModel;
