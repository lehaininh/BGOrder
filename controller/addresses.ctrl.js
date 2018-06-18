const logger = require("../util/logger.js");
const addressesService = require("../service/addresses.service.js");

const addressesController = {
	handleGetOrdersFromAnAddress: (req, res) => {
		const startTime = Date.now();
		const { address_id } = req.params;
		addressesService.getOrdersFromAnAddress(address_id)
			.then(response => {
				const return_data = {
					total: response.length,
					message: "OK",
					orders: response
				};
				const endTime = Date.now();
				logger.info("handleGetOrdersFromAnAddress succeeded in: ", endTime - startTime, "ms");
				res.status(200).send(return_data);
			})
			.catch(err => {
				logger.error("Error handleGetOrdersFromAnAddress: ", err);
				res.status(500).send("Error");
			});
	},
};

module.exports = addressesController;
