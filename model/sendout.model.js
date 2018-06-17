const dbUtil = require("../util/mysql.js");
const shortID = require("shortid");
//let logger = require("../util/logger.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const sendoutModel = {
	getSendoutBySendoutIDs: (sendout_ids) => {
		if (sendout_ids.length === 0) return Promise.resolve([]);
		const placeholder = sendout_ids.map(() => "?").join(",");
		const query =
			`SELECT * FROM ${TABLE_NAME.SENDOUT}
			WHERE id IN (${placeholder})`;
		const values = sendout_ids;
		return dbUtil.runQuery(query, values);
	},

	getUnsavedSendouts: () => {
		const query =
			`SELECT id FROM ${TABLE_NAME.SENDOUT}
			WHERE saved = 0 ORDER BY created_at LIMIT 500`;
		const values = [];
		return dbUtil.runQuery(query, values)
			.then(sendouts => {
				const sendout_ids = sendouts.map(sendout => sendout.id);
				return sendoutModel.getSendoutBySendoutIDs(sendout_ids);
			});
	},

	updateBeyondSendout: (sendouts) => {
		if (sendouts.length === 0) return Promise.resolve([]);
		const placeholder = sendouts.map(() => "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)").join(",");
		const query =
			`INSERT INTO ${TABLE_NAME.SENDOUT}
				(id, name, audience, mailing_system, mailing_system_identifier, 
				openning, openner, click, clicker, sent_mails, send_date)
			VALUES ${placeholder}
			ON DUPLICATE KEY UPDATE openning=VALUES(openning), openner=VALUES(openner), click=VALUES(click),
				clicker=VALUES(clicker), sent_mails=VALUES(sent_mails)`;
		const values = [];
		const sendout_ids = [];
		sendouts.forEach(sendout => {
			const sendout_id = shortID.generate();
			sendout_ids.push(sendout_id);
			values.push(sendout_id);
			values.push(sendout.name);
			values.push(sendout.audience);
			values.push(sendout.mailing_system);
			values.push(sendout.mailing_system_identifier);
			values.push(sendout.openning);
			values.push(sendout.openner);
			values.push(sendout.click);
			values.push(sendout.clicker);
			values.push(sendout.sent_mails);
			values.push(sendout.send_date);
		});
		return dbUtil.runQuery(query, values)
			.then(() => sendoutModel.getSendoutBySendoutIDs(sendout_ids));
	},

	updateKajomiSendout: (sendouts) => {
		if (sendouts.length === 0) return Promise.resolve([]);
		const placeholder = sendouts.map(() => "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)").join(",");
		const query =
			`INSERT INTO ${TABLE_NAME.SENDOUT}
				(id, sender, subject, mailing_system, mailing_system_identifier,
				openning, openner, click, clicker, sent_mails, send_date)
			VALUES ${placeholder}
			ON DUPLICATE KEY UPDATE openning=VALUES(openning), openner=VALUES(openner), click=VALUES(click),
				clicker=VALUES(clicker), sent_mails=VALUES(sent_mails)`;
		const values = [];
		const sendout_ids = [];
		sendouts.forEach(sendout => {
			const sendout_id = shortID.generate();
			sendout_ids.push(sendout_id);
			values.push(sendout_id);
			values.push(sendout.sender);
			values.push(sendout.subject);
			values.push(sendout.mailing_system);
			values.push(sendout.mailing_system_identifier);
			values.push(sendout.openning);
			values.push(sendout.openner);
			values.push(sendout.click);
			values.push(sendout.clicker);
			values.push(sendout.sent_mails);
			values.push(sendout.send_date);
		});
		return dbUtil.runQuery(query, values)
			.then(() => sendoutModel.getSendoutBySendoutIDs(sendout_ids));
	},

	updateAllSendoutsAsUnsaved: () => {
		const query =
			`UPDATE ${TABLE_NAME.SENDOUT}
			SET saved = 0`;
		return dbUtil.runQuery(query, []);
	},

	updateSendoutsAsSaved: (sendout_ids) => {
		const placeholder = sendout_ids.map(() => "?").join(",");
		const query =
			`UPDATE ${TABLE_NAME.SENDOUT}
			SET saved = 1 WHERE id IN (${placeholder})`;
		const values = sendout_ids;
		return dbUtil.runQuery(query, values);
	}
};

module.exports = sendoutModel;
