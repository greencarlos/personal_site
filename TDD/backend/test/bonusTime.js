var assert = require("assert")
var bonusTime = require("./../bonusTime")
 
try {
  describe('Test Driven Dev', function(){
    it('checks array', function(){
      assert.equal([1,2,3].indexOf(4), -1)
    })
    it ('should multiply 10000 * 10', function(){
      assert.equal(bonusTime(10000, true), '$100000');
    })
    it ('should multiply 25000 * 10', function(){
      assert.equal(bonusTime(25000, true), '$250000');
    })
    it ('should return 10000', function(){
      assert.equal(bonusTime(10000, false), '$10000');
    })
    it ('should return 60000', function(){
      assert.equal(bonusTime(60000, false), '$60000');
    })
    it ('should return 2 * 20', function(){
      assert.equal(bonusTime(2, true), '$20');
    })
    it ('should return 78', function(){
      assert.equal(bonusTime(78, false), '$78');
    })
    it ('should multiply 67890 * 10', function(){
      assert.equal(bonusTime(67890, true), '$678900');
    })
  })
} catch(e) {console.error(e)}
