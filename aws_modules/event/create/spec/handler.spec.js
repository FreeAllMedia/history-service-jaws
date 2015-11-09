"use strict";

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _rewire = require("rewire");

var _rewire2 = _interopRequireDefault(_rewire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlerModule = (0, _rewire2.default)("../handler.js");
var handler = handlerModule.handler;

describe(".handler(event, context)", function () {
    var mockEvent = undefined;
    var mockAWS = undefined;
    var mockCreateEvent = undefined;
    var mockDocumentClient = undefined;

    beforeEach(function () {
        mockEvent = require("./event.json");

        mockDocumentClient = _sinon2.default.spy();

        mockAWS = {
            DynamoDB: {
                DocumentClient: function DocumentClient() {
                    return mockDocumentClient;
                }
            }
        };

        mockCreateEvent = _sinon2.default.spy(function (event, documentClient, callback) {
            callback();
        });

        handlerModule.__set__("AWS", mockAWS);
        handlerModule.__set__("createEvent", mockCreateEvent);
    });

    it("should pass the event to createEvent", function (_done) {
        var mockContext = {
            done: function done() {
                mockCreateEvent.calledWith(mockEvent).should.be.true;
                _done();
            }
        };

        handler(mockEvent, mockContext);
    });

    it("should pass the documentClient to createEvent", function (_done2) {
        var mockContext = {
            done: function done() {
                mockCreateEvent.calledWith(mockEvent, mockDocumentClient).should.be.true;
                _done2();
            }
        };

        handler(mockEvent, mockContext);
    });

    it("should return the string 'OK' as the response body", function (done) {
        var mockContext = {
            done: _sinon2.default.spy(function () {
                mockContext.done.calledWith(undefined, "OK").should.be.true;
                done();
            })
        };

        handler(mockEvent, mockContext);
    });
});