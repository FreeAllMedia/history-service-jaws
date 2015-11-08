import uuid from "node-uuid";

export default function createEvent(eventData, documentClient, context) {
    eventData.id = uuid.v1();

    const parameters = {
        TableName: `events-${process.env.JAWS_STAGE}`,
        Item: eventData
    };

    documentClient.put(parameters, (dynamoError) => {
        if (dynamoError) { throw dynamoError; }
        context.done(dynamoError, "");
    });
}
