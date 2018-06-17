const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const taskModel = {
	getUnsavedTasks: () => {
		const query =
			`SELECT * FROM ${TABLE_NAME.CRM_TASK}
			WHERE saved = 0 ORDER BY created_at LIMIT 500`;
		const values = [];
		return dbUtil.runQuery(query, values);
	},

	updateTasksAsSaved: (task_ids) => {
		const placeholder = task_ids.map(() => "?").join(",");
		const query =
			`UPDATE ${TABLE_NAME.CRM_TASK}
			SET saved = 1 WHERE id IN (${placeholder})`;
		const values = task_ids;
		return dbUtil.runQuery(query, values);
	},

	updateAllTasksAsUnsaved: () => {
		const query =
			`UPDATE ${TABLE_NAME.CRM_TASK}
			SET saved = 0`;
		return dbUtil.runQuery(query, []);
	}
};

module.exports = taskModel;
