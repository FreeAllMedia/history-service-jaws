"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createEvent;

var _nodeUuid = require("node-uuid");

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createEvent(eventData, documentClient, context) {
    eventData.id = _nodeUuid2.default.v1();

    var parameters = {
        TableName: "events-" + process.env.JAWS_STAGE,
        Item: eventData
    };

    documentClient.put(parameters, function (dynamoError) {
        if (dynamoError) {
            throw dynamoError;
        }
        context.done(dynamoError, "");
    });
}