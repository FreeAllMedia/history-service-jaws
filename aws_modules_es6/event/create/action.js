import uuid from "node-uuid";

/**
 * Create an entry for the event in the DynamoDB table
 *
 * @param  {Object}             event           The event data to be stored.
 * @param  {DocumentClient}     documentClient  The document client to store the data into.
 * @param  {LambdaContext}      callback        Called after the event is put into DynamoDB.
 * @return {undefined}                          Returns undefined.
 */
export default function createEvent(event, documentClient, callback) {
    event.id = uuid.v1();

    const parameters = {
        TableName: `events-${process.env.JAWS_STAGE}`,
        Item: event
    };

    documentClient.put(parameters, (dynamoError) => {
        callback(dynamoError);
    });
}
