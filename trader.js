var Trader = function(name, funds) {
  this.name = name;
  this.funds = funds;
  this.collection = [];
};


Trader.prototype = {
  addRecord: function(record) {
    this.collection.push(record);
    this.funds -= record.price;
  },
};

module.exports = Trader;