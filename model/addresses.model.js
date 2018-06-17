const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const addressesModel = {
	getAddressesByIDs: address_ids => {
		if (address_ids) {
			if (address_ids.length === 0) return Promise.resolve([]);
			const placeholder = address_ids.map(() => "?").join(",");
			const query =
				`SELECT * FROM ${TABLE_NAME.ADDRESSES}
				WHERE id iN (${placeholder}) AND is_enabled = 1`;
			const values = address_ids;
			return dbUtil.runQuery(query, values);
		} else {
			const query =
				`SELECT * FROM ${TABLE_NAME.ADDRESSES}
				WHERE is_enabled = 1`;
			return dbUtil.runQuery(query, []);
		}
	}
};

module.exports = addressesModel;
