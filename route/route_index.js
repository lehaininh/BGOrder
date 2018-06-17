const ENDPOINTS = {
	"TEST": "/v1/test",
};
const TEST_ROUTE = require("./test_api_route.js");

const routing = {
	createRoute: (app) => {
		app.use(ENDPOINTS.TEST, TEST_ROUTE);
	}
};

module.exports = routing;
