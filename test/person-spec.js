// Your code here
const chai = require("chai");
const expect = chai.expect;

const Person = require("../problems/person");

// describe('Person', () => {
//     it('property exist in instance', () => {
//         expect(this.name).to.be.an.instanceOf(Person)
//     })
// } )
let person;
let otherPerson;
beforeEach(() => {
  person = new Person("john", 45);
  otherPerson = new Person("malik", 85);
});

describe("Person constructor", () => {

  it("should set the name property and age", () => {
    expect(person).to.have.property("name");
    expect(person).to.have.property("age");
  });

  describe('sayHello', () => {
    it('should say hello to person', () => {
        expect(person.sayHello()).to.equal(`Hello, john.`)
        expect(otherPerson.sayHello()).to.equal(`Hello, malik.`)
    })
  })

  describe('visit otherperson', () => {
    it('should return a string that person visted other person', () => {
        expect(person.visit(otherPerson)).to.equal(`john visited malik`)
    })
})
})
