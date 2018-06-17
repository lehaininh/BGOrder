const mysql = require("mysql");
const config = require("../config/index.js");
const logger = require("../util/logger.js");
const connection_config = {
	connectionLimit: 10,
	connectionTimieout: 30000,
	acquireTimeout: 30000,
	host: config.DATABASE.HOST,
	user: config.DATABASE.USER,
	password: config.DATABASE.PASSWORD,
	database: config.DATABASE.NAME
};
const pool = mysql.createPool(connection_config);

module.exports.runQuery = (query, values) => {
	return new Promise((resolve, reject) => {
		pool.getConnection((pool_err, connection) => {
			if (pool_err) {
				logger.error("Error with connection: ", pool_err);
				reject(pool_err);
			} else {
				connection.query(query, values, (query_error, result) => {
					if (query_error) {
						connection.release();
						logger.error("Error with query: ", query, " and values: ", values);
						reject(query_error);
					} else {
						connection.release();
						resolve(result);
					}
				});
			}
		});
	});
};

module.exports.TABLE_NAME = {
	"CUSTOMERS": "customers",
	"ORDERS": "orders"
};
