import sinon from "sinon";
import createEvent from "../action.js";

process.env.JAWS_STAGE = "testing";

describe("event/create/action.js", () => {
    let eventData;
    let documentClient;

    beforeEach(() => {
        eventData = require("./event.json");

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
