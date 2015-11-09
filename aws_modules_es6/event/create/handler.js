/**
 * Must use es5-style requires due to this issue:
 * https://github.com/speedskater/babel-plugin-rewire/issues/71
 */
const AWS = require("aws-sdk");
const createEvent = require("./index.js").default;

/**
 * Handle a create event request
 *
 * @method handler
 * @param  {Object}         event       JSON data sent in with the request
 * @param  {LambdaContext}  context     The AWS Lambda context
 * @return {undefined}                  Returns nothing
 */
export function handler(event, context) {
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

    createEvent(event, documentClient, (error) => {
        context.done(error, "OK");
    });
}
