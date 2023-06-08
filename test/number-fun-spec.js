const chai = require("chai");
const { reciprocal, returnsThree } = require("../problems/number-fun");
const expect = chai.expect;

describe("returnsThree", () => {
  it("should return 3", () => {
    expect(returnsThree()).to.equal(3);
  })
})

describe("reciprocal", () => {
  it("should return reciprocal of given argument", () => {
    expect(reciprocal(10)).to.equal(1/10);
    expect(reciprocal(100)).to.equal(1/100);
  })

  it("should throw RangeError if argument is out of bounds", () => {
    expect(() => reciprocal(0)).to.throw(RangeError);
    expect(() => reciprocal(1000001)).to.throw(RangeError);
  })
})