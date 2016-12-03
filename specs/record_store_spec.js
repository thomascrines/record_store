var RecordStore = require('../record_store');
var Record = require('../record');
var Trader = require('../trader');
var assert = require('assert');

describe('Record store function', function() {

  var recordStore;
  var record1;
  var trader;

  beforeEach(function() {
    recordStore = new RecordStore('Tower Records', 'Hamilton', 345.67);
    record1 = new Record('George Michael', 'Faith', 9.00);
    trader = new Trader('High Tower', 200.00);
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

  it('find record by artist', function(){
    recordStore.addRecord(record1);
    assert.equal(record1, recordStore.findRecordByArtist('George Michael'));
  });

  it('can return inventory', function() {
    recordStore.addRecord(record1);
    assert.equal('Contents:\nGeorge Michael | Faith | £9\n', recordStore.returnInventoryContents());
  });

  it('can sell record', function() {
    recordStore.addRecord(record1);
    recordStore.sellRecord(record1)
    assert.equal(0, recordStore.inventory.length);
    assert.equal(354.67, recordStore.balance);
  });

  it('can sell record to Trader', function() {
    recordStore.addRecord(record1);
    recordStore.sellRecordToTrader(record1, trader)
    assert.equal(0, recordStore.inventory.length);
    assert.equal(354.67, recordStore.balance);
    assert.equal(191, trader.funds);
    assert.equal(record1, trader.collection[0]);
  });

  it('can return total value of inventory', function() {
    recordStore.addRecord(record1);
    assert.equal(9, recordStore.returnTotalValueOfInventory());
  });

  it('can return total assets', function() {
    recordStore.addRecord(record1);
    assert.equal('Total Cash: 345.67\nTotal Value of Inventory: 9\nTotal Value of Assets: 354.67', recordStore.returnTotalAssets());
  });

});