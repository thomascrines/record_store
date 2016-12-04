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
  var trader1;
  var trader2;

  beforeEach(function() {
    recordStore = new RecordStore('Tower Records', 'Hamilton', 300.00);
    record1 = new Record('George Michael', 'Faith', 9.90);
    record2 = new Record('Wu Tang Clan', 'Once Upon a Time in Shaolin', 2000000.00);
    record3 = new Record('The Velvet Undeground & Nico', 'The Velvet Undeground & Nico', 25200.00);
    record4 = new Record('Under the Influence', 'Status Quo', 19.99);
    record5 = new Record('Rush', 'Radio Spirits', 29.99);
    trader1 = new Trader('High Tower', 200.00);
    trader2 = new Trader('Mahoney', 200.00);
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
    assert.equal('Contents:\nGeorge Michael | Faith | £9.9\nWu Tang Clan | Once Upon a Time in Shaolin | £2000000\nThe Velvet Undeground & Nico | The Velvet Undeground & Nico | £25200\nUnder the Influence | Status Quo | £19.99\nRush | Radio Spirits | £29.99\n', recordStore.returnInventoryContents());
  });

  it('can sell record', function() {
    recordStore.addRecord(record1);
    recordStore.sellRecord(record1)
    assert.equal(0, recordStore.inventory.length);
    assert.equal(309.9, recordStore.balance);
  });

  it('can buy record', function() {
    recordStore.buyRecord(record1);
    assert.equal(1, recordStore.inventory.length);
    assert.equal(290.1, recordStore.balance);
  });

  it('can sell record to Trader', function() {
    recordStore.addRecord(record1);
    recordStore.sellRecordToTrader(record1, trader1)
    assert.equal(0, recordStore.inventory.length);
    assert.equal(309.9, recordStore.balance);
    assert.equal(190.1, trader1.funds);
    assert.equal(record1, trader1.collection[0]);
  });

  it('can buy record from trader', function() {
    trader1.addRecord(record1);
    recordStore.buyRecord(record1, trader1);
    assert.equal(1, recordStore.inventory.length);
    assert.equal(290.1, recordStore.balance);
  });

  it('can arrange private sale', function() {
    trader1.addRecord(record1);
    recordStore.arrangePrivateSale(trader1, trader2, record1);
    assert.equal(208.91, trader1.funds);
    assert.equal(0, trader1.collection.length);
    assert.equal(190.1, trader2.funds);
    assert.equal(record1, trader2.collection[0]);
    assert.equal(300.99, recordStore.balance);
  });

  it('can return total value of inventory', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    assert.equal(2025209.9, recordStore.returnTotalValueOfInventory());
  });

  it('can return total assets', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    assert.equal('Total Cash: 300\nTotal Value of Inventory: 2025209.9\nTotal Value of Assets: 2025509.9', recordStore.returnTotalAssets());
  });

});