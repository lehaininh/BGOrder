const ENDPOINTS = {
	"TEST": "/v1/test",
	"CUSTOMERS": "/v1/customers"
};
const TEST_ROUTE = require("./test_api_route.js");
const CUSTOMERS_ROUTE = require("./customers_api_route.js");

const routing = {
	createRoute: (app) => {
		app.use(ENDPOINTS.TEST, TEST_ROUTE);
		app.use(ENDPOINTS.CUSTOMERS, CUSTOMERS_ROUTE);
	}
};

module.exports = routing;
