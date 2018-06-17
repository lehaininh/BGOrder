const logger = require("../util/logger.js");
const customersModel = require("../model/customers.model.js");
const addressesModel = require("../model/addresses.model.js");

const addressInfo = {
	populateAddressInfoForOrder: (orders, addresses) => {
		const populated_records = [];
		const addresses_object = {};
		addresses.forEach(address => addresses_object[address.id] = address);
		orders.forEach(order => {
			const populated_record = Object.assign({}, order);
			populated_record.address = addresses_object[populated_record.address_id];
			populated_records.push(populated_record);
		});
		return populated_records;
	},
};

const itemInfo = {
};

const customerInfo = {
	populateCustomerInfoForOrder: (orders, customers) => {
		const populated_records = [];
		const customers_object = {};
		customers.forEach(customer => customers_object[customer.id] = customer);
		orders.forEach(order => {
			const populated_record = Object.assign({}, order);
			populated_record.customer = customers_object[populated_record.customer_id];
			populated_records.push(populated_record);
		});
		return populated_records;
	},
};

const populateService = {
	populateInfoForOrders: orders => {
		let customers_ids = [];
		let addresses_ids = [];
		orders.forEach(order => customers_ids.push(order.customer_id));
		orders.forEach(order => addresses_ids.push(order.address_id));
		customers_ids = customers_ids.filter((value, idx, a) =>
		{ return idx == a.indexOf(value); });
		addresses_ids = addresses_ids.filter((value, idx, a) =>
		{ return idx == a.indexOf(value); });
		return Promise.all([
			customersModel.getCustomersByIDs(customers_ids),
			addressesModel.getAddressesByIDs(addresses_ids)
		])
			.then(([customers, addresses]) => {
				let populated_orders;
				populated_orders = customerInfo.populateCustomerInfoForOrder(orders, customers);
				populated_orders = addressInfo.populateAddressInfoForOrder(orders, addresses);
				return populated_orders;
			});
	}
};

module.exports = populateService;
