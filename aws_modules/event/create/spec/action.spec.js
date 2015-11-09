"use strict";

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _action = require("../action.js");

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.JAWS_STAGE = "testing";

describe("createEvent(eventData, documentClient, callback)", function () {
    var eventData = undefined;
    var documentClient = undefined;

    beforeEach(function () {
        eventData = {
            userId: 1,
            name: "Clicked Link",
            ipAddress: "127.0.0.1"
        };

        documentClient = {
            put: _sinon2.default.spy(function (parameters, callback) {
                callback(null);
            })
        };
    });

    it("should take the request body and insert it into dynamodb", function (done) {
        (0, _action2.default)(eventData, documentClient, function (error) {
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