define('lib/stat', function(){
  function Statistic() {
    this.min = Number.MAX_SAFE_INTEGER;
    this.max = Number.MIN_SAFE_INTEGER;
    this.hasChanged = false;
  };

  Statistic.prototype.set = function(value) {
    if (this.value !== value) {
      this.hasChanged = true;
    }
    this.value = value;
    if (this.value < this.min) {
      this.min = this.value;
    }

    if (this.value > this.max) {
      this.max = this.value;
    }
  }

  return Statistic;
});
