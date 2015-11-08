"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = handler;

var _awsSdk = require("aws-sdk");

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _createEvent = require("./createEvent.js");

var _createEvent2 = _interopRequireDefault(_createEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handle a create event request
 *
 * @method handler
 * @param  {Object} event   JSON data sent in with the request
 * @param  {LambdaContext} context The AWS Lambda context
 * @return {undefined} Returns nothing
 */
function handler(event, context) {
  context.done(null, process.env.JAWS_STAGE);

  var documentClient = new _awsSdk2.default.DynamoDB.DocumentClient();
  (0, _createEvent2.default)(event, documentClient, context);
}