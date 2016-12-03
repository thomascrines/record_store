var Trader = function(name, funds) {
  this.name = name;
  this.funds = funds;
  this.collection = [];
};


Trader.prototype = {
  addRecord: function(record) {
    this.collection.push(record);
  },

  buyRecord: function(record) {
    this.collection.push(record);
    this.funds -= record.price;
  },

  sellRecord: function(record) {
    var searchedRecord = this.collection.find(function(searchedRecord) {
      return searchedRecord === record;
    });
    var index = this.collection.indexOf(searchedRecord)
    this.collection.splice(index);
    this.funds += record.price;
  },
};

module.exports = Trader;