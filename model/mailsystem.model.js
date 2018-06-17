const dbUtil = require("../util/mysql.js");
const TABLE_NAME = require("../util/mysql.js").TABLE_NAME;

const mailingSystemModel = {
	//Beyond
	getBeyondCredential: () => {
		const query =
			`SELECT * FROM ${TABLE_NAME.BEYOND_CREDENTIAL}`;
		return dbUtil.runQuery(query, []);
	},

	updateBeyondCredential: (new_beyond_credential) => {
		const query =
			`UPDATE ${TABLE_NAME.BEYOND_CREDENTIAL}
			SET shared_key = ?, secret_key = ?, api_server = ?`;
		const values = [
			new_beyond_credential.shared_key,
			new_beyond_credential.secret_key,
			new_beyond_credential.api_server];
		return dbUtil.runQuery(query, values)
			.then(() => mailingSystemModel.getBeyondCredential());
	},


	updateSessionIDForBeyond: (session_id) => {
		const query =
			`UPDATE ${TABLE_NAME.BEYOND_CREDENTIAL}
			SET session_id = ?`;
		const values = [session_id];
		return dbUtil.runQuery(query, values);
	},

	updateLastGetDateForBeyond: (last_get_date) => {
		const query =
			`UPDATE ${TABLE_NAME.BEYOND_CREDENTIAL}
			SET last_get_date = ?`;
		const values = [last_get_date];
		return dbUtil.runQuery(query, values);
	},

	//Kajomi
	getKajomiCredential: () => {
		const query =
			`SELECT * FROM ${TABLE_NAME.KAJOMI_CREDENTIAL}`;
		return dbUtil.runQuery(query, []);
	},

	updateKajomiCredential: (new_kajomi_credential) => {
		const query =
			`UPDATE ${TABLE_NAME.KAJOMI_CREDENTIAL}
			SET shared_key = ?, secret_key = ?, api_server = ?`;
		const values = [
			new_kajomi_credential.shared_key,
			new_kajomi_credential.secret_key,
			new_kajomi_credential.api_server];
		return dbUtil.runQuery(query, values)
			.then(() => mailingSystemModel.getKajomiCredential());
	},

	updateSessionIDForKajomi: (session_id) => {
		const query =
			`UPDATE ${TABLE_NAME.KAJOMI_CREDENTIAL}
			SET session_id = ?`;
		const values = [session_id];
		return dbUtil.runQuery(query, values);
	},

};

module.exports = mailingSystemModel;
