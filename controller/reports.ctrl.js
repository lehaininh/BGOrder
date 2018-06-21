const logger = require("../util/logger.js");
const reportsService = require("../service/reports.service.js");

const addressesController = {
	handleGetDefaultItemReport: (req, res) => {
		const startTime = Date.now();
		reportsService.getItemReport()
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					items: response
				};
				const endTime = Date.now();
				logger.info("handleGetDefaultItemReport succeeded in: ",
					endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleGetDefaultItemReport: ", err);
				res.status(500).send("Error");
			});
	},
};

module.exports = addressesController;
