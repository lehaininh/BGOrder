const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app.js");
const should = chai.should();

chai.use(chaiHttp);

describe("Order APIs", () => {
	it("should list all orders of H1RWL-VZm user", (done) => {
		chai.request(server)
			.get("/v1/customers/H1RWL-VZm/orders")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("orders");
				res.body.should.have.property("message").eql("OK");
				res.body.orders.should.be.a("array");
				res.body.orders.length.should.be.eql(res.body.total);
				done();
			});
	});
	it("should list all orders of SJT2IWNbm address", (done) => {
		chai.request(server)
			.get("/v1/addresses/SJT2IWNbm/orders")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("orders");
				res.body.should.have.property("message").eql("OK");
				res.body.orders.should.be.a("array");
				res.body.orders.length.should.be.eql(res.body.total);
				done();
			});
	});
	it("should get order with ID = SJAIObVWX", (done) => {
		chai.request(server)
			.get("/v1/orders/SJAIObVWX")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("orders");
				res.body.should.have.property("message").eql("OK");
				res.body.orders.should.be.a("array");
				res.body.orders.length.should.be.eql(res.body.total);
				done();
			});
	});
	it("should give error on deleting order with ID = Hk2kqZEW", (done) => {
		chai.request(server)
			.delete("/v1/orders/Hk2kqZEW")
			.end((err, res) => {
				res.should.have.status(500);
				res.error.text.should.be.a("string");
				done();
			});
	});
	it("should delete an order with ID = Hk2kqZEWX", (done) => {
		chai.request(server)
			.delete("/v1/orders/Hk2kqZEWX")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("orders");
				res.body.should.have.property("message").eql("OK");
				res.body.orders.should.be.a("array");
				res.body.orders.length.should.be.eql(0);
				done();
			});
	});
});
