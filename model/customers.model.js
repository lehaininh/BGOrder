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
	}
};

module.exports = customersModel;
