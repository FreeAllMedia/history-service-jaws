"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createEvent;

var _nodeUuid = require("node-uuid");

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("jaws-core-js/env");

/**
 * Create an entry for the event in the DynamoDB table
 *
 * @param  {Object}             event           The event data to be stored.
 * @param  {DocumentClient}     documentClient  The document client to store the data into.
 * @param  {LambdaContext}      callback        Called after the event is put into DynamoDB.
 * @return {undefined}                          Returns undefined.
 */
function createEvent(event, documentClient, callback) {
    event.id = _nodeUuid2.default.v1();

    var parameters = {
        TableName: "events-" + process.env.JAWS_STAGE,
        Item: event
    };

    documentClient.put(parameters, function (dynamoError) {
        callback(dynamoError);
    });
}