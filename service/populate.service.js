const logger = require("../util/logger.js");
const customersModel = require("../model/customers.model.js");

const addressInfo = {
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
		orders.forEach(order => customers_ids.push(order.customer_id));
		customers_ids = customers_ids.filter((value, idx, a) =>
		{ return idx == a.indexOf(value); });
		return customersModel.getCustomersByIDs(customers_ids)
			.then(customers => {
				return customerInfo.populateCustomerInfoForOrder(orders, customers);
			});
	}
};

module.exports = populateService;
