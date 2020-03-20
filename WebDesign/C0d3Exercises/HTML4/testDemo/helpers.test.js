const helpers = require('./helpers')
/*
 When we run our file with the jest framework, jest provides us
    with a few functions. The function our tests will go inside
    is describe, which takes in 2 arguments (string and function).
*/

// First argument describes the function you are testing;
//   second argument is a function that contains all the tests.
describe('sumAll function', () => {
	// For each test, you need to run the `it` function,
  //    which takes in 2 arguments (string and function).
  
	// First argument describes the test;
  //    second argument is a function that runs the test.
	it('should add numbers', () => {
    // Run the function we want to test
		const result = helpers.sumAll([9,8,7])

		// Pass the result from the function into expect
    // expect returns an object with a toEqual key;
    //    pass what you expect into the `toEqual` function.
    expect(result).toEqual(24)
  })
  it ('should add negative numbers', () => {
    const result = helpers.sumAll([-9, 9, -10, 11])
    expect(result).toEqual(1)
  })
  it (`shouldn't add anything`, () => {
    const result = helpers.sumAll([])
    expect(result).toEqual(0)
  })
})

describe('findLargest number', () => {
  it('should find the largest number from array with all negatives', () => {
		const result = helpers.findLargest([-10, -1, -19])
    expect(result).toEqual(-1)
  })
})
