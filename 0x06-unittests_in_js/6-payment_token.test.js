const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a successful response when success is true", (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({
          data: "Successful response from the API",
        });
        done(); // Call done to indicate the async test is complete
      })
      .catch((err) => done(err)); // If there's an error, pass it to done
  });

  it("should resolve to undefined when success is false", (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        expect(result).to.be.undefined; // Check that the resolved value is undefined
        done();
      })
      .catch((err) => done(err));
  });
});
