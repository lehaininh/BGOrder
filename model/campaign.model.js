const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const campaignModel = {
	getUnsavedCampaigns: () => {
		const query =
			`SELECT * FROM ${TABLE_NAME.CRM_CAMPAIGN}
			WHERE saved = 0 ORDER BY created_at LIMIT 500`;
		const values = [];
		return dbUtil.runQuery(query, values);
	},

	updateCampaignsAsSaved: (campaign_ids) => {
		const placeholder = campaign_ids.map(() => "?").join(",");
		const query =
			`UPDATE ${TABLE_NAME.CRM_CAMPAIGN}
			SET saved = 1 WHERE id IN (${placeholder})`;
		const values = campaign_ids;
		return dbUtil.runQuery(query, values);
	},

	updateAllCampaignsAsUnsaved: () => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_CAMPAIGN}
			SET saved = 0`;
		return dbUtil.runQuery(query, []);
	}
};

module.exports = campaignModel;
