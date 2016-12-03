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
        var searchedRecord = this.inventory.find( function(searchedRecord) {
          return searchedRecord.title === title;
        })
        return searchedRecord;
      }, 

  };

  module.exports = RecordStore;