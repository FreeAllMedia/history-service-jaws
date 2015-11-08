import sinon from "sinon";
import awsmFile from "../../aws_modules_es6/event/create/awsm.json";
import createEvent from "../../aws_modules_es6/event/create/createEvent.js";

process.env.JAWS_STAGE = "testing";

describe("createEvent(eventData, documentClient, context)", () => {
    let eventData,
        documentClient,
        context;

    beforeEach(() => {
        eventData = {
            userId: 1,
            name: "Clicked Link",
            ipAddress: "127.0.0.1"
        };

        context = {};

        documentClient = {
            put: sinon.spy(function mockPut(parameters, callback) {
                callback(null);
            })
        };
    });

    describe("(API Gateway)", () => {
        it("should have an endpoint of 'event/create'", () => {
            awsmFile.apiGateway.cloudFormation.Path.should.eql("event/create");
        });
        it("should respond to HTTP method 'POST'", () => {
            awsmFile.apiGateway.cloudFormation.Method.should.eql("POST");
        });
        it("should repond with http status code '200'", () => {
            awsmFile.apiGateway.cloudFormation.Responses.default.statusCode.should.eql("200");
        });
    });

    it("should take the request body and insert it into dynamodb", done => {
        context.done = sinon.spy(() => {
            const parameters = {
                TableName: `events-${process.env.JAWS_STAGE}`,
                Item: eventData
            };

            documentClient.put.calledWith(parameters).should.be.true;

            done();
        });

        createEvent(eventData, documentClient, context);
    });

    it("should respond with a blank body", done => {
        context.done = sinon.spy(() => {
            context.done.calledWith(null, "").should.be.true;
            done();
        });

        createEvent(eventData, documentClient, context);
    });
});
