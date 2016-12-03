var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
};


Record.prototype = {
  talk: function() {
    return("I am " + this.name + ".");
  },

  };

  module.exports = Record;