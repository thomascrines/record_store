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

  // returnInventoryContents: function() {
  //   this.inventory.forEach(function(record) {
  //     return (record.artist + ' | ' + record.title + ' | £' + record.price);
  //   });
  // },

  sellRecord: function(record) {
      var searchedRecord = this.inventory.find(function(searchedRecord) {
        return searchedRecord === record;
      });
      var index = this.inventory.indexOf(searchedRecord)
      this.inventory.splice(index);
      this.balance += record.price;
    },
  };

  module.exports = RecordStore;