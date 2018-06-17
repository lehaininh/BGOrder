const dbUtil = require("../util/mysql.js");
const shortID = require("shortid");
const TABLE_NAME = dbUtil.TABLE_NAME;

const crmModel = {
	getCRMCredential: () => {
		const query =
			`SELECT * FROM ${TABLE_NAME.CRM_CREDENTIAL}`;
		const values = [];
		return dbUtil.runQuery(query, values);
	},

	getCRMUserList: (user_ids = null) => {
		if (user_ids) {
			const placeholder = user_ids.map(() => "?").join(",");
			const query =
				`SELECT * FROM ${TABLE_NAME.CRM_USER}
			WHERE id in (${placeholder})`;
			const values = user_ids;
			return dbUtil.runQuery(query, values);
		} else {
			const query = `SELECT * FROM ${TABLE_NAME.CRM_USER}`;
			return dbUtil.runQuery(query, []);
		}
	},

	getCRMAccountList: (crm_account_ids = null) => {
		var query, values;
		if (crm_account_ids) {
			const placeholder = crm_account_ids.map(() => "?").join(",");
			query =
				`SELECT * FROM ${TABLE_NAME.CRM_ACCOUNT}
			WHERE id in (${placeholder})`;
			values = crm_account_ids;
		} else {
			query = `SELECT * FROM ${TABLE_NAME.CRM_ACCOUNT}`;
			values = [];
		}
		return dbUtil.runQuery(query, values);
	},

	getCRMCampaignList: (campaign_ids = null) => {
		var query, values;
		if (campaign_ids) {
			const placeholder = campaign_ids.map(() => "?").join(",");
			query =
				`SELECT * FROM ${TABLE_NAME.CRM_CAMPAIGN}
			WHERE id in (${placeholder})`;
			values = campaign_ids;
		} else {
			query = `SELECT * FROM ${TABLE_NAME.CRM_CAMPAIGN}`;
			values = [];
		}
		return dbUtil.runQuery(query, values);
	},

	getCRMTaskList: (task_ids = null) => {
		var query, values;
		if (task_ids) {
			const placeholder = task_ids.map(() => "?").join(",");
			query =
				`SELECT * FROM ${TABLE_NAME.CRM_TASK}
			WHERE id in (${placeholder})`;
			values = task_ids;
		} else {
			query = `SELECT * FROM ${TABLE_NAME.CRM_TASK}`;
			values = [];
		}
		return dbUtil.runQuery(query, values);
	},

	updateCRMCredential: (credential) => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_CREDENTIAL}
			SET user_name=?, password=?, access_token=?, download_token=?, refresh_token=?`;
		const values = [credential.user_name, credential.password, credential.access_token, credential.download_token,
			credential.refresh_token];
		return dbUtil.runQuery(query, values);
	},

	updateCRMAccount: (accounts) => {
		if (accounts.length === 0) return Promise.resolve([]);
		const placeholder = accounts.map(() => "(?, ?, ?)").join(",");
		const query =
			`INSERT INTO ${TABLE_NAME.CRM_ACCOUNT} (id, crm_id, name)
			VALUES ${placeholder}
			ON DUPLICATE KEY UPDATE id = id`;
		const values = [];
		const account_ids = [];
		accounts.forEach(account => {
			const account_id = shortID.generate();
			account_ids.push(account_id);
			values.push(account_id);
			values.push(account.crm_id);
			values.push(account.name);
		});
		return dbUtil.runQuery(query, values)
			.then(() => crmModel.getCRMAccountList(account_ids));
	},

	updateCRMUser: (users) => {
		if (users.length === 0) return Promise.resolve([]);
		const placeholder = users.map(() => "(?, ?, ?, ?, ?)").join(",");
		const query =
			`INSERT INTO ${TABLE_NAME.CRM_USER} (id, crm_id, user_name, full_name, email)
			VALUES ${placeholder}
			ON DUPLICATE KEY UPDATE id = id`;
		const values = [];
		const user_ids = [];
		users.forEach(user => {
			const user_id = shortID.generate();
			user_ids.push(user_id);
			values.push(user_id);
			values.push(user.crm_id);
			values.push(user.user_name);
			values.push(user.full_name);
			values.push(user.email);
		});
		return dbUtil.runQuery(query, values)
			.then(() => crmModel.getCRMUserList(user_ids));
	},

	updateCRMCampaign: (campaigns) => {
		if (campaigns.length === 0) return Promise.resolve([]);
		const placeholder = campaigns.map(() => "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)").join(",");
		const query =
			`INSERT INTO ${TABLE_NAME.CRM_CAMPAIGN} (id, crm_id, name, crm_account_id, crm_sales_id,
				campaign_type, geo, advertiser, booked_mails, won_date)
			VALUES ${placeholder}
			ON DUPLICATE KEY UPDATE id = id`;
		const values = [];
		const campaign_ids = [];
		campaigns.forEach(campaign => {
			const campaign_id = shortID.generate();
			campaign_ids.push(campaign_id);
			values.push(campaign_id);
			values.push(campaign.crm_id);
			values.push(campaign.name);
			values.push(campaign.account_id);
			values.push(campaign.sales_id);
			values.push(campaign.campaign_type);
			values.push(campaign.geo);
			values.push(campaign.advertiser);
			values.push(campaign.booked_mails);
			values.push(campaign.won_date);
		});
		return dbUtil.runQuery(query, values)
			.then(() => crmModel.getCRMCampaignList(campaign_ids));
	},

	updateCRMTask: (tasks) => {
		if (tasks.length === 0) return Promise.resolve([]);
		const placeholder = tasks.map(() => "(?, ?, ?, ?)").join(",");
		const query =
			`INSERT INTO ${TABLE_NAME.CRM_TASK} (id, crm_id, crm_campaign_id, crm_campaign_manager_id)
			VALUES ${placeholder}
			ON DUPLICATE KEY UPDATE id = id`;
		const values = [];
		const task_ids = [];
		tasks.forEach(task => {
			const task_id = shortID.generate();
			task_ids.push(task_id);
			values.push(task_id);
			values.push(task.crm_id);
			values.push(task.crm_campaign_id);
			values.push(task.crm_campaign_manager_id);
		});
		return dbUtil.runQuery(query, values)
			.then(() => crmModel.getCRMTaskList(task_ids));
	},

	updateLastUserUpdateTime: (update_time) => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_CREDENTIAL} SET last_user_time = ?`;
		const values = [update_time];
		return dbUtil.runQuery(query, values);
	},

	updateLastAccountUpdateTime: (update_time) => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_CREDENTIAL} SET last_account_time = ?`;
		const values = [update_time];
		return dbUtil.runQuery(query, values);
	},

	updateLastOpportunityTime: (update_time) => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_CREDENTIAL} SET last_opportunity_time = ?`;
		const values = [update_time];
		return dbUtil.runQuery(query, values);
	},

	updateLastTaskTime: (update_time) => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_CREDENTIAL} SET last_task_time = ?`;
		const values = [update_time];
		return dbUtil.runQuery(query, values);
	},
};

module.exports = crmModel;
