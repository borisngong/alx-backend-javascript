const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", () => {
  let consoleLog;

  // Hook to run before each test
  beforeEach(() => {
    consoleLog = sinon.spy(console, "log"); // Spy on console.log
  });

  // Hook to run after each test
  afterEach(() => {
    consoleLog.restore(); // Restore original console.log
  });

  it("should log the correct total for 100 and 20", () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that the console logged the correct message
    sinon.assert.calledOnce(consoleLog);
    sinon.assert.calledWith(consoleLog, "The total is: 120");
  });

  it("should log the correct total for 10 and 10", () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that the console logged the correct message
    sinon.assert.calledOnce(consoleLog);
    sinon.assert.calledWith(consoleLog, "The total is: 20");
  });
});
