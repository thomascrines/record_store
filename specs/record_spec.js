var Record = require('../record');
var assert = require('assert');

describe('Record function', function() {

  var record1;

  beforeEach(function() {
    record1 = new Record('George Michael', 'Faith', 9.00);
  });

  it('has artist', function() {
    assert.equal('George Michael', record1.artist);
  });

  it('has title', function() {
    assert.equal('Faith', record1.title);
  });

  it('has price', function() {
    assert.equal(9.00, record1.price);
  });

  it('has condition', function() {
    assert.equal(1, record1.condition)
  });

  it('has condition', function() {
    assert.equal('mint', record1.returnConditionName())
  });

  it('can set condition', function() {
    record1.setCondition(6);
    assert.equal('good', record1.returnConditionName());
  })

});