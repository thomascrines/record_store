var RecordStore = require('../record_store');
var assert = require('assert');

describe('RecordStore function', function() {

  var recordStore;

  beforeEach(function() {
    recordStore = new RecordStore('Tower Records', 'Hamilton', 345.67);
  });

  it('has name', function() {
    assert.equal('Tower Records', recordStore.name);
  });

  it('has location', function() {
    assert.equal('Hamilton', recordStore.location);
  });

  it('has balance', function() {
    assert.equal(345.67, recordStore.balance);
  });

  it('inventory starts empty', function() {
    assert.equal(0, recordStore.inventory.length);
  });

});