const expect = require('chai').expect;
let sum = require('../src/sum').sum;

describe('Sum of 2 numbers', () => {
  it('#1 should add 2 same numbers correctly', () => {
    const result = sum(6,6);
    expect(result).to.equal(12);
  });
  it('#2 should add 2 same negative numbers correctly', () => {
    const result = sum(-5,-5);
    expect(result).to.equal(-10);
  });
  it('#3 should add 2 different numbers correctly', () => {
    const result = sum(1,2);
    expect(result).to.equal(3);
  });
  it('#4 should add 2 different numbers correctly', () => {
    const result = sum(-6,-5);
    expect(result).to.equal(-11);
  });
  it('#5 should add 2 negatives same numbers correctly', () => {
    const result = sum(-2,-2);
    expect(result).to.equal(-4);
  });
  it('#6 should add 2 numbers of different signs correctly', () => {
    const result = sum(-3, 3);
    expect(result).to.equal(0);
  });
  it('#7 should add 2 to Infinity', () => {
    const result = sum(2, Infinity)
    expect(result).to.equal(Infinity)
  })
  it('#8 should add 2 to -Infinity', () => {
    const result = sum(2, -Infinity)
    expect(result).to.equal(-Infinity)
  })
  it('#9 should add 2 to a string', () => {
    const result = sum(2, "string")
    expect(result).to.equal('2string')
  })
  it('#11 should return 2', () => {
    const result = sum(2, null)
    expect(result).to.equal(2)
  })
});
