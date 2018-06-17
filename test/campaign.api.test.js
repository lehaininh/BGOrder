const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app.js");
const should = chai.should();

chai.use(chaiHttp);

describe("CAMPAIGN APIs", () => {
	//it("should list all campaigns available", (done) => {
		//chai.request(server)
			//.get("/v1/campaigns")
			//.end((err, res) => {
				//res.should.have.status(200);
				//res.body.should.be.a("object");
				//res.body.should.have.property("total");
				//res.body.should.have.property("campaigns");
				//res.body.should.have.property("message").eql("OK");

				//res.body.campaigns.should.be.a("array");
				//res.body.campaigns.length.should.be.eql(res.body.total);
				//done();
			//});
	//});
	it("should lsit all campaigns available in a period of time", (done) => {
		const from_date = new Date();
		const to_date = new Date();
		from_date.setDate(from_date.getDate() - 3);
		const request_data = {
			from: from_date,
			to: to_date
		};
		chai.request(server)
			.get("/v1/campaigns")
			.query(request_data)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("total");
				res.body.should.have.property("campaigns");
				res.body.should.have.property("message").eql("OK");

				res.body.campaigns.should.be.a("array");
				res.body.campaigns.length.should.be.eql(res.body.total);
				done();
			});
	});
});
