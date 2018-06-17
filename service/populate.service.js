const logger = require("../util/logger.js");
const itemsModel = require("../model/items.model.js");
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
			populated_record.customer_address =
				populated_record.address.full_address;
			populated_records.push(populated_record);
		});
		return populated_records;
	},
};

const itemInfo = {
	populateItemInfoForOrder: (orders, items) => {
		const populated_records = [];
		const items_object = {};
		items.forEach(item => items_object[item.id] = item);
		orders.forEach(order => {
			const populated_record = Object.assign({}, order);
			populated_record.item = items_object[populated_record.item_id];
			populated_record.item_name = populated_record.item.item_name;
			populated_record.price = populated_record.item.item_price;
			populated_record.currency = populated_record.item.price_currency;
			populated_records.push(populated_record);
		});
		return populated_records;
	},
};

const customerInfo = {
	populateCustomerInfoForOrder: (orders, customers) => {
		const populated_records = [];
		const customers_object = {};
		customers.forEach(customer => customers_object[customer.id] = customer);
		orders.forEach(order => {
			const populated_record = Object.assign({}, order);
			populated_record.customer = customers_object[populated_record.customer_id];
			populated_record.customer_name = populated_record.customer.customer_name;
			populated_records.push(populated_record);
		});
		return populated_records;
	},
};

const populateService = {
	populateInfoForOrders: orders => {
		let customers_ids = [];
		let addresses_ids = [];
		let items_ids = [];
		orders.forEach(order => customers_ids.push(order.customer_id));
		orders.forEach(order => addresses_ids.push(order.address_id));
		orders.forEach(order => items_ids.push(order.item_id));
		customers_ids = customers_ids.filter((value, idx, a) =>
		{ return idx == a.indexOf(value); });
		addresses_ids = addresses_ids.filter((value, idx, a) =>
		{ return idx == a.indexOf(value); });
		items_ids = items_ids.filter((value, idx, a) =>
		{ return idx == a.indexOf(value); });
		return Promise.all([
			customersModel.getCustomersByIDs(customers_ids),
			addressesModel.getAddressesByIDs(addresses_ids),
			itemsModel.getItemByItemIDs(items_ids)
		])
			.then(([customers, addresses, items]) => {
				let populated_orders;
				populated_orders = customerInfo.populateCustomerInfoForOrder(orders, customers);
				populated_orders = addressInfo.populateAddressInfoForOrder(
					populated_orders, addresses);
				populated_orders = itemInfo.populateItemInfoForOrder(
					populated_orders, items);
				return populated_orders;
			});
	}
};

module.exports = populateService;
