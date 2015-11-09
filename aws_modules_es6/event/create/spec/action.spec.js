import sinon from "sinon";
import createEvent from "../action.js";

process.env.JAWS_STAGE = "testing";

describe("createEvent(eventData, documentClient, callback)", () => {
    let eventData;
    let documentClient;

    beforeEach(() => {
        eventData = {
            userId: 1,
            name: "Clicked Link",
            ipAddress: "127.0.0.1"
        };

        documentClient = {
            put: sinon.spy((parameters, callback) => {
                callback(null);
            })
        };
    });

    it("should take the request body and insert it into dynamodb", done => {
        createEvent(eventData, documentClient, (error) => {
            if (error) { throw error; }

            const parameters = {
                TableName: `events-${process.env.JAWS_STAGE}`,
                Item: eventData
            };

            documentClient.put.calledWith(parameters).should.be.true;

            done();
        });
    });
});
