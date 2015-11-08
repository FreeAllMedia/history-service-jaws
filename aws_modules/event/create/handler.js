"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = handler;
/**
 * Must use es5-style requires due to this issue:
 * https://github.com/speedskater/babel-plugin-rewire/issues/71
 */
var AWS = require("aws-sdk");
var createEvent = require("./action.js");

/**
 * Handle a create event request
 *
 * @method handler
 * @param  {Object}         event       JSON data sent in with the request
 * @param  {LambdaContext}  context     The AWS Lambda context
 * @return {undefined}                  Returns nothing
 */
function handler(event, context) {
  var documentClient = new AWS.DynamoDB.DocumentClient();

  createEvent(event, documentClient, function (error) {
    context.done(error, "");
  });
}