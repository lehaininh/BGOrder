const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app.js");
const should = chai.should();

chai.use(chaiHttp);

describe("USER APIs", () => {
	it("should lsit all users available", (done) => {
		chai.request(server)
			.get("/v1/users")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("users");
				res.body.should.have.property("message").eql("OK");

				res.body.users.should.be.a("array");
				res.body.users.length.should.be.eql(res.body.total);
				done();
			});
	});
});
