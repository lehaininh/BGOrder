const ENDPOINTS = {
	"TEST": "/v1/test",
	"CUSTOMERS": "/v1/customers",
	"ADDRESSES": "/v1/addresses"
};
const TEST_ROUTE = require("./test_api_route.js");
const CUSTOMERS_ROUTE = require("./customers_api_route.js");
const ADDRESSES_ROUTE = require("./addresses_api_route.js");

const routing = {
	createRoute: (app) => {
		app.use(ENDPOINTS.TEST, TEST_ROUTE);
		app.use(ENDPOINTS.CUSTOMERS, CUSTOMERS_ROUTE);
		app.use(ENDPOINTS.ADDRESSES, ADDRESSES_ROUTE);
	}
};

module.exports = routing;
