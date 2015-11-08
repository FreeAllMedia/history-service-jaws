import AWS from "aws-sdk";
import createEvent from "./createEvent.js";

/**
 * Handle a create event request
 *
 * @method handler
 * @param  {Object} event   JSON data sent in with the request
 * @param  {LambdaContext} context The AWS Lambda context
 * @return {undefined} Returns nothing
 */
export function handler(event, context) {
    context.done(null, process.env.JAWS_STAGE);

    const documentClient = new AWS.DynamoDB.DocumentClient();
    createEvent(event, documentClient, context);
}
