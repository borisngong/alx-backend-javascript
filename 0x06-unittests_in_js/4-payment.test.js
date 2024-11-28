// 4-payment.test.js
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", () => {
  it("should call Utils.calculateNumber and log the correct message", () => {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10); // Stub the function
    const consoleLog = sinon.spy(console, "log"); // Spy on console.log

    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the expected arguments
    sinon.assert.calledWith(stub, "SUM", 100, 20);
    // Check if the console log was called with the correct message
    sinon.assert.calledOnce(consoleLog);
    sinon.assert.calledWith(consoleLog, "The total is: 10");

    // Restore the original functions
    stub.restore();
    consoleLog.restore();
  });
});
