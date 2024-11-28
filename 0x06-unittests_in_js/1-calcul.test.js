const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("SUM: rounding and adding two numbers", () => {
    assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
  });

  it("SUBTRACT: rounding and subtracting two numbers", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });

  it("DIVIDE: rounding and dividing two numbers", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });

  it("DIVIDE: handling division by zero", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });

  it("SUM: rounding whole numbers", () => {
    assert.strictEqual(calculateNumber("SUM", 2.0, 3.0), 5);
  });

  it("SUBTRACT: rounding whole numbers", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 5.0, 2.0), 3);
  });

  it("DIVIDE: rounding whole numbers", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 4.0, 2.0), 2);
  });

  it("Invalid type: should throw an error", () => {
    assert.throws(() => calculateNumber("INVALID", 1.4, 4.5), {
      name: "Error",
      message: "Invalid type",
    });
  });
});
