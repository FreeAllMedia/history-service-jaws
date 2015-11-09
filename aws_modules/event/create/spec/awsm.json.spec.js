"use strict";

var _awsm = require("../awsm.json");

var _awsm2 = _interopRequireDefault(_awsm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("awsm.json", function () {
    describe("apiGateway", function () {
        it("should have an endpoint of 'event/create'", function () {
            _awsm2.default.apiGateway.cloudFormation.Path.should.eql("event/create");
        });
        it("should respond to HTTP method 'POST'", function () {
            _awsm2.default.apiGateway.cloudFormation.Method.should.eql("POST");
        });
        it("should repond with http status code '200'", function () {
            _awsm2.default.apiGateway.cloudFormation.Responses.default.statusCode.should.eql("200");
        });
    });
});