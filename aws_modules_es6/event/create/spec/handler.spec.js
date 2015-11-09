import sinon from "sinon";
import rewire from "rewire";

const handlerModule = rewire("../handler.js");
const handler = handlerModule.handler;

describe("event/create/handler.js", () => {
    let mockEvent;
    let mockAWS;
    let mockCreateEvent;
    let mockDocumentClient;

    beforeEach(() => {
        mockEvent = require("../event.json");

        mockDocumentClient = sinon.spy();

        mockAWS = {
            DynamoDB: {
                DocumentClient: () => {
                    return mockDocumentClient;
                }
            }
        };

        mockCreateEvent = sinon.spy((event, documentClient, callback) => {
            callback();
        });

        handlerModule.__set__("AWS", mockAWS);
        handlerModule.__set__("createEvent", mockCreateEvent);
    });

    it("should pass the event to createEvent", done => {
        const mockContext = {
            done: () => {
                mockCreateEvent.calledWith(mockEvent).should.be.true;
                done();
            }
        };

        handler(mockEvent, mockContext);
    });

    it("should pass the documentClient to createEvent", done => {
        const mockContext = {
            done: () => {
                mockCreateEvent.calledWith(mockEvent, mockDocumentClient).should.be.true;
                done();
            }
        };

        handler(mockEvent, mockContext);
    });

    it("should return the string 'OK' as the response body", done => {
        const mockContext = {
            done: sinon.spy(() => {
                mockContext.done.calledWith(undefined, "OK").should.be.true;
                done();
            })
        };

        handler(mockEvent, mockContext);
    });
});
