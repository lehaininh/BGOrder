const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const accountModel = {
	getUnsavedAccounts: () => {
		const query =
			`SELECT * FROM ${TABLE_NAME.CRM_ACCOUNT}
			WHERE saved = 0 ORDER BY created_at LIMIT 500`;
		const values = [];
		return dbUtil.runQuery(query, values);
	},

	updateAccountsAsSaved: (account_ids) => {
		const placeholder = account_ids.map(() => "?").join(",");
		const query =
			`UPDATE ${TABLE_NAME.CRM_ACCOUNT}
			SET saved = 1 WHERE id IN (${placeholder})`;
		const values = account_ids;
		return dbUtil.runQuery(query, values);
	},

	updateAllAccountsAsUnsaved: () => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_ACCOUNT}
			SET saved = 0`;
		return dbUtil.runQuery(query, []);
	}
};

module.exports = accountModel;
