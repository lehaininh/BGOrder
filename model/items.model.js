const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const itemsModel = {
	getItemByItemIDs: item_ids => {
		if (item_ids && item_ids.length) {
			if (item_ids.length === 0) return Promise.resolve([]);
			const placeholder = item_ids.map(() => "?").join(",");
			const query =
				`SELECT * FROM ${TABLE_NAME.ITEMS}
				WHERE id iN (${placeholder}) AND is_enabled = 1`;
			const values = item_ids;
			return dbUtil.runQuery(query, values);

		} else {
			return Promise.resolve([]);
		}
	},
};

module.exports = itemsModel;
