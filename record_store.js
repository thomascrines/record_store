var RecordStore = function(name, location, balance) {
  this.name = name;
  this.location = location;
  this.balance = balance;
  this.inventory = [];
};


RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },

  findRecordByTitle: function(title) {
    var searchedRecord = this.inventory.find(function(searchedRecord) {
      return searchedRecord.title === title;
    });
    return searchedRecord;
  },

  findRecordByArtist: function(name) {
    var searchedRecord = this.inventory.find(function(searchedRecord) {
      return searchedRecord.artist === name;
    });
    return searchedRecord;
  },

  returnInventoryContents: function() {
    this.inventoryList = "Contents:\n",
    this.inventory.forEach(function(record) {
      this.inventoryList += (record.artist + ' | ' + record.title + ' | £' + record.price + '\n');
    }.bind(this));
    return this.inventoryList;
  },

  sellRecord: function(record) {
    var searchedRecord = this.inventory.find(function(searchedRecord) {
      return searchedRecord === record;
    });
    var index = this.inventory.indexOf(searchedRecord)
    this.inventory.splice(index);
    this.balance += record.price;
  },

  sellRecordToTrader: function(record, trader) {
    this.sellRecord(record);
    trader.addRecord(record);
  },

  returnTotalValueOfInventory: function() {
    this.totalValue = 0;
    this.inventory.forEach(function(record) {
      this.totalValue += record.price;
    }.bind(this));
    return this.totalValue;
  },

  returnTotalAssets: function() {
    return 'Total Cash: ' + this.balance + '\nTotal Value of Inventory: ' + this.returnTotalValueOfInventory() + '\nTotal Value of Assets: ' + (this.balance + this.returnTotalValueOfInventory());
  }

};

module.exports = RecordStore;