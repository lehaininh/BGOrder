const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const reportsModel = {
	getItemReport: () => {
		const query =
			`SELECT count(*) as order_time, items.item_name
				FROM ${TABLE_NAME.ORDERS} as orders
			LEFT JOIN ${TABLE_NAME.ITEMS} as items ON items.id = orders.item_id
			GROUP BY (orders.item_id)
			ORDER BY order_time DESC, item_name`;
		return dbUtil.runQuery(query, []);
	},
};

module.exports = reportsModel;
