const request = require("request");
const { expect } = require("chai");

const BASE_URL = "http://localhost:7865";

describe("Index page", () => {
  it("should return status code 200", (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message", (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });

  it("should return content type text/html", (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(response.headers["content-type"]).to.include("text/html");
      done();
    });
  });
});

describe("Cart page", () => {
  it("should return status code 200 for numeric id", (done) => {
    request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message for numeric id", (done) => {
    request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("should return status code 404 for non-numeric id", (done) => {
    request.get(`${BASE_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
