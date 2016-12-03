var RecordStore = require('../record_store');
var Record = require('../record');
var Trader = require('../trader');
var assert = require('assert');

describe('Record store function', function() {

  var recordStore;
  var record1;
  var record2;
  var record3;
  var record4;
  var record5;
  var trader;

  beforeEach(function() {
    recordStore = new RecordStore('Tower Records', 'Hamilton', 300.00);
    record1 = new Record('George Michael', 'Faith', 9.89);
    record2 = new Record('Wu Tang Clan', 'Once Upon a Time in Shaolin', 2000000.00);
    record3 = new Record('The Velvet Undeground & Nico', 'The Velvet Undeground & Nico', 25200.00);
    record4 = new Record('Under the Influence', 'Status Quo', 19.99);
    record5 = new Record('Rush', 'Radio Spirits', 29.99);
    trader = new Trader('High Tower', 200.00);
  });

  it('has name', function() {
    assert.equal('Tower Records', recordStore.name);
  });

  it('has location', function() {
    assert.equal('Hamilton', recordStore.location);
  });

  it('has balance', function() {
    assert.equal(300, recordStore.balance);
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
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    recordStore.addRecord(record5);
    assert.equal('Contents:\nGeorge Michael | Faith | £9.89\nWu Tang Clan | Once Upon a Time in Shaolin | £2000000\nThe Velvet Undeground & Nico | The Velvet Undeground & Nico | £25200\nUnder the Influence | Status Quo | £19.99\nRush | Radio Spirits | £29.99\n', recordStore.returnInventoryContents());
  });

  it('can sell record', function() {
    recordStore.addRecord(record1);
    recordStore.sellRecord(record1)
    assert.equal(0, recordStore.inventory.length);
    assert.equal(309.89, recordStore.balance);
  });

  it('can buy record', function() {
    recordStore.buyRecord(record1);
    assert.equal(1, recordStore.inventory.length);
    assert.equal(290.11, recordStore.balance);
  });

  it('can sell record to Trader', function() {
    recordStore.addRecord(record1);
    recordStore.sellRecordToTrader(record1, trader)
    assert.equal(0, recordStore.inventory.length);
    assert.equal(309.89, recordStore.balance);
    assert.equal(190.11, trader.funds);
    assert.equal(record1, trader.collection[0]);
  });

  it('can buy record from trader', function() {
    trader.addRecord(record1);
    recordStore.buyRecord(record1, trader);
    assert.equal(1, recordStore.inventory.length);
    assert.equal(290.11, recordStore.balance);
  })

  it('can return total value of inventory', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    assert.equal(2025209.89, recordStore.returnTotalValueOfInventory());
  });

  it('can return total assets', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    assert.equal('Total Cash: 300\nTotal Value of Inventory: 2025209.89\nTotal Value of Assets: 2025509.89', recordStore.returnTotalAssets());
  });

});