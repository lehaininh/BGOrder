const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app.js");
const should = chai.should();

chai.use(chaiHttp);

//describe("Order APIs", () => {
	//it("should list all orders of H1RWL-VZm user", (done) => {
		//chai.request(server)
			//.get("/v1/customers/H1RWL-VZm/orders")
			//.end((err, res) => {
				//res.should.have.status(200);
				//res.body.should.be.a("object");
				//res.body.should.have.property("total");
				//res.body.should.have.property("orders");
				//res.body.should.have.property("message").eql("OK");
				//res.body.orders.should.be.a("array");
				//res.body.orders.length.should.be.eql(res.body.total);
				//done();
			//});
	//});
	//it("should list all orders of SJT2IWNbm address", (done) => {
		//chai.request(server)
			//.get("/v1/addresses/SJT2IWNbm/orders")
			//.end((err, res) => {
				//res.should.have.status(200);
				//res.body.should.be.a("object");
				//res.body.should.have.property("total");
				//res.body.should.have.property("orders");
				//res.body.should.have.property("message").eql("OK");
				//res.body.orders.should.be.a("array");
				//res.body.orders.length.should.be.eql(res.body.total);
				//done();
			//});
	//});
	//it("should get order with ID = SJAIObVWX", (done) => {
		//chai.request(server)
			//.get("/v1/orders/SJAIObVWX")
			//.end((err, res) => {
				//res.should.have.status(200);
				//res.body.should.be.a("object");
				//res.body.should.have.property("total");
				//res.body.should.have.property("orders");
				//res.body.should.have.property("message").eql("OK");
				//res.body.orders.should.be.a("array");
				//res.body.orders.length.should.be.eql(res.body.total);
				//done();
			//});
	//});
	//it("should give error on deleting order with ID = Hk2kqZEW", (done) => {
		//chai.request(server)
			//.delete("/v1/orders/Hk2kqZEW")
			//.end((err, res) => {
				//res.should.have.status(500);
				//res.error.text.should.be.a("string");
				//done();
			//});
	//});
	//it("should delete an order with ID = Hk2kqZEWX", (done) => {
		//chai.request(server)
			//.delete("/v1/orders/Hk2kqZEWX")
			//.end((err, res) => {
				//res.should.have.status(200);
				//res.body.should.be.a("object");
				//res.body.should.have.property("total");
				//res.body.should.have.property("orders");
				//res.body.should.have.property("message").eql("OK");
				//res.body.orders.should.be.a("array");
				//res.body.orders.length.should.be.eql(0);
				//done();
			//});
	//});
//});

describe("Reports APIs", () => {
	it("should get default report, right order", (done) => {
		chai.request(server)
			.get("/v1/reports/default")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("items");
				res.body.should.have.property("message").eql("OK");
				res.body.items.should.be.a("array");
				res.body.items.length.should.be.eql(res.body.total);
				const items = res.body.items;
				let right_order = true;
				items.forEach((item, idx) => {
					if (idx) {
						if ((items[idx].order_time > items[idx-1].order_time) || (
							(items[idx].order_time === items[idx-1].order_time) &&
							(items[idx].item_name < items[idx-1].item_name)
						)) {
							right_order = false;
						}
					}
				});
				right_order.should.be.eql(true);
				done();
			});
	});
});

describe("Customers APIs", () => {
	it("should get customer with ID = SJIH8ZVZ7", (done) => {
		chai.request(server)
			.get("/v1/customers/SJIH8ZVZ7")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("customers");
				res.body.should.have.property("message").eql("OK");
				res.body.customers.should.be.a("array");
				res.body.customers.length.should.be.eql(1);
				done();
			});
	});
	it("should delete customer with ID = SJIH8ZVZ7", (done) => {
		chai.request(server)
			.delete("/v1/customers/SJIH8ZVZ7")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("customers");
				res.body.should.have.property("message").eql("OK");
				res.body.customers.should.be.a("array");
				res.body.customers.length.should.be.eql(0);
				done();
			});
	});
	it("should give error trying to delete customer with ID = abcdef", (done) => {
		chai.request(server)
			.delete("/v1/customers/abcdef")
			.end((err, res) => {
				res.should.have.status(500);
				res.error.text.should.be.a("string");
				done();
			});
	});
	it("should get user spending with ID = HkTEU-N-m", (done) => {
		chai.request(server)
			.get("/v1/customers/HkTEU-N-m/spending")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.not.have.property("total");
				res.body.should.have.property("spending");
				res.body.spending.should.be.a("object");
				done();
			});
	});
});
