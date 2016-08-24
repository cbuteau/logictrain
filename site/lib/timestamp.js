define('lib/timestamp',[], function() {
  function Timestamp() {
    var now = new Date();
    this.value = now.getTime();
  };

  // Timestamp.prototype.lessThan(that) {
  //   return (this.value < that.value);
  // };

  // Timestamp.prototype.subtract = function(timestamp) {
  //   return this.value - timestamp.value;
  // };

  Timestamp.prototype = {
    subtract: function(timestamp) {
      return this.value - timestamp.value;
    }
  };

  return Timestamp;
});
