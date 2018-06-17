const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const userModel = {
	getUnsavedUsers: () => {
		const query =
			`SELECT * FROM ${TABLE_NAME.CRM_USER}
			WHERE saved = 0 ORDER BY created_at LIMIT 500`;
		const values = [];
		return dbUtil.runQuery(query, values);
	},

	updateUsersAsSaved: (user_ids) => {
		const placeholder = user_ids.map(() => "?").join(",");
		const query =
			`UPDATE ${TABLE_NAME.CRM_USER}
			SET saved = 1 WHERE id IN (${placeholder})`;
		const values = user_ids;
		return dbUtil.runQuery(query, values);
	},

	updateAllUsersAsUnsaved: () => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_USER}
			SET saved = 0`;
		return dbUtil.runQuery(query, []);
	}
};

module.exports = userModel;
