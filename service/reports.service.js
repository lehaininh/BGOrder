const reportsModel = require("../model/reports.model.js");
const populateSerivce = require("./populate.service.js");
const logger = require("../util/logger.js");

const reportsService = {
	getItemReport: () => {
		return reportsModel.getItemReport();
	},
};

module.exports = reportsService;
