var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
  this.condition = ConditionEnum.MINT;
  this.quantity = 1;
};

var ConditionEnum = {
  MINT: 1,
  NEAR_MINT: 2,
  EXCELLENT: 3,
  VERY_GOOD_PLUS: 4,
  VERY_GOOD: 5,
  GOOD: 6,
  FAIR: 7,
  POOR: 8,
  properties: {
    1: {name: "Mint", value: 1},
    2: {name: "Near Mint", value: 2},
    3: {name: "Excellent", value: 3},
    4: {name: "Very Good +", value: 4},
    5: {name: "Very Good", value: 5},
    6: {name: "Good", value: 6},
    7: {name: "Fair", value: 7},
    8: {name: "Poor", value: 8}
  }
};

Record.prototype = {
  setCondition: function(newCondition) {
    this.condition = newCondition;
  },

  returnConditionName: function() {
    return ConditionEnum.properties[this.condition].name;
  },

  setPriceByCondition: function() {
    this.price = this.price * (1 / this.condition);
  },

  returnAsString: function() {
    return ('Artist: ' + this.artist + '\nTitle: ' + this.title + '\nPrice: £' + this.price + '\nCondition: ' + ConditionEnum.properties[this.condition].name + '\nQuantity: ' + this.quantity + '\n\n');
  }

};

module.exports = Record;