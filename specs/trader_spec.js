var Trader = require('../trader');
var Record = require('../record');
var assert = require('assert');

describe('Trader function', function() {

  var trader;
  var record1;

  beforeEach(function() {
    trader = new Trader('High Tower', 200.00);
    record1 = new Record('George Michael', 'Faith', 9.00);
  });

  it('has name', function() {
    assert.equal('High Tower', trader.name);
  });

  it('has funds', function() {
    assert.equal(200, trader.funds);
  });

  it('can buy record', function() {
    trader.buyRecord(record1);
    assert.equal(1, trader.collection.length);
    assert.equal(191, trader.funds);
  });

  it('can sell record', function() {
    trader.addRecord(record1);
    trader.sellRecord(record1);
    assert.equal(0, trader.collection.length);
    assert.equal(209, trader.funds);
  });

});