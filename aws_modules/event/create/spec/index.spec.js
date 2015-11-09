"use strict";

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.JAWS_STAGE = "testing";

describe("event/create/index.js", function () {
    var eventData = undefined;
    var documentClient = undefined;

    beforeEach(function () {
        eventData = require("./event.json");

        documentClient = {
            put: _sinon2.default.spy(function (parameters, callback) {
                callback(null);
            })
        };
    });

    it("should take the request body and insert it into dynamodb", function (done) {
        (0, _index2.default)(eventData, documentClient, function (error) {
            if (error) {
                throw error;
            }

            var parameters = {
                TableName: "events-" + process.env.JAWS_STAGE,
                Item: eventData
            };

            documentClient.put.calledWith(parameters).should.be.true;

            done();
        });
    });
});