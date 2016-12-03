var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe('Record store function', function() {

  var recordStore;
  var record1;

  beforeEach(function() {
    recordStore = new RecordStore('Tower Records', 'Hamilton', 345.67);
    record1 = new Record('George Michael', 'Faith', 9.00);
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

  it('can add record', function() {
    recordStore.addRecord(record1);
    assert.equal(1, recordStore.inventory.length);
  });

  it('find record by title', function(){
    recordStore.addRecord(record1);
    assert.equal(record1, recordStore.findRecordByTitle('Faith'));
  });

});