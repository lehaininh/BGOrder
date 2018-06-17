const default_config = require("./config.default.js");
const development_config = require("./config.development.js");
const production_config = require("./config.production.js");

var config;
switch (process.env.NODE_ENV) {
	case "development":
		config = development_config;
		break;
	case "production":
		config = production_config;
		break;
	default:
		config = default_config;
		break;
}

module.exports = config;
