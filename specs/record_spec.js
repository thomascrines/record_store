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

  it('has condition name', function() {
    assert.equal('Mint', record1.returnConditionName())
  });

  it('can set condition', function() {
    record1.setCondition(6);
    assert.equal('Good', record1.returnConditionName());
  });

  it('can set price by condition', function() {
    record1.setCondition(6);
    record1.setPriceByCondition();
    assert.equal(1.50, record1.price);
  });

  it('can return as string', function() {
    assert.equal('Artist: George Michael\nTitle: Faith\nPrice: £9\nCondition: Mint\nQuantity: 1\n\n', record1.returnAsString());
  })

});