import awsmFile from "../awsm.json";

describe("awsm.json", () => {
    describe("apiGateway", () => {
        it("should have an endpoint of 'event/create'", () => {
            awsmFile.apiGateway.cloudFormation.Path.should.eql("event/create");
        });
        it("should respond to HTTP method 'POST'", () => {
            awsmFile.apiGateway.cloudFormation.Method.should.eql("POST");
        });
        it("should repond with http status code '200'", () => {
            awsmFile.apiGateway.cloudFormation.Responses.default.statusCode.should.eql("200");
        });
    });
});
