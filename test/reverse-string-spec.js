// Your code here
const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string.js");

describe("reverseString", () => {
  it("should reverse the string", () => {
    // const expectedString = "nuf";
    expect(reverseString("fun")).to.equal("nuf");
    expect(reverseString("test")).to.equal("tset");
  })

  it("should input the string", () => {
    expect(() => reverseString(0)).to.throw(Error);
    expect(() => reverseString(null)).to.throw(Error);
  })
})