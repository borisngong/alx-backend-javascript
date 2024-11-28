const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  it("SUM: rounding and adding two numbers", () => {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });

  it("SUBTRACT: rounding and subtracting two numbers", () => {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
  });

  it("DIVIDE: rounding and dividing two numbers", () => {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
  });

  it("DIVIDE: handling division by zero", () => {
    expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
  });

  it("SUM: rounding whole numbers", () => {
    expect(calculateNumber("SUM", 2.0, 3.0)).to.equal(5);
  });

  it("SUBTRACT: rounding whole numbers", () => {
    expect(calculateNumber("SUBTRACT", 5.0, 2.0)).to.equal(3);
  });

  it("DIVIDE: rounding whole numbers", () => {
    expect(calculateNumber("DIVIDE", 4.0, 2.0)).to.equal(2);
  });

  it("Invalid type: should throw an error", () => {
    expect(() => calculateNumber("INVALID", 1.4, 4.5)).to.throw("Invalid type");
  });
});
