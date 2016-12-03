var Record = function(artist, title, price, condition) {
  this.artist = artist;
  this.title = title;
  this.price = price;
  this.condition = ConditionEnum.MINT;
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
    1: {name: "mint", value: 1},
    2: {name: "near mint", value: 2},
    3: {name: "excellent", value: 3},
    4: {name: "very good plus", value: 4},
    5: {name: "very good", value: 5},
    6: {name: "good", value: 6},
    7: {name: "fair", value: 7},
    8: {name: "poor", value: 8}
  }
};


Record.prototype = {
  setCondition: function(newCondition) {
    this.condition = newCondition;
  },

  returnConditionName: function() {
    return ConditionEnum.properties[this.condition].name;
  }

};

module.exports = Record;