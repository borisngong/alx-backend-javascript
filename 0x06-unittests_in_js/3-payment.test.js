const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("should call Utils.calculateNumber with correct arguments", () => {
    const spy = sinon.spy(Utils, "calculateNumber");
    const consoleLog = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(spy, "SUM", 100, 20);

    sinon.assert.calledOnce(consoleLog);

    // Restore the original functions
    spy.restore();
    consoleLog.restore();
  });
});
