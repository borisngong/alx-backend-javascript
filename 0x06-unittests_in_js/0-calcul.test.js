const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("adding two whole floating point numbers", () => {
    assert.strictEqual(calculateNumber(12.0, 22.0), 34);
  });

  it("rounding down the second floating point number", () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it("rounding down both floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.4, 3.4), 5);
  });

  it("rounding down the first floating point number", () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it("rounding up the second floating point number", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it("rounding up both floating point numbers", () => {
    assert.strictEqual(calculateNumber(3.6, 3.5), 8);
  });

  it("rounding up the first floating point number", () => {
    assert.strictEqual(calculateNumber(3.6, 3.0), 7);
  });

  it("rounding down both floating point numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(3.499999, 5.499999), 8);
  });
});
