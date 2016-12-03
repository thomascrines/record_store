var RecordStore = function(name, location, balance) {
  this.name = name;
  this.location = location;
  this.balance = balance;
  this.inventory = [];
};


RecordStore.prototype = {
  talk: function() {
    return("I am " + this.name + ".");
  },

  };

  module.exports = RecordStore;