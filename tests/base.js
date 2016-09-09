
// if (typeof require === 'function')
// {
//   var base = require('./site/lib/base');
// }


describe('Base coverage', function() {

  describe('Load module', function() {
    require(['lib/base'], function(Base) {

    });
  });

  describe('Clone', function() {
    it ('Basic Test', function() {
      var testObj = {
        name: 'My Test Object',
        flag: false,
        int: 10,
        float: 3.14,
        arrayOfNumbers: [10, 20, 30, 40, 50, 60, 70, 80, 90]
      };

      var cloned = testObj.clone();

      expect(testObj.isSame(cloned)).toBe(true);

    });

    it ('', function() {
      console.log('really');
      var start = new Date('12/11/1971');
      var comp = new Date(start.getTime());

      expect(start.isSame(comp)).toBe(true);
      //expect(true).toBe(false);
    });

  });

  describe('Iterate', function() {
    it ('Array Total', function() {
      var array = [ 10, 20, 30, 40, 50, 60, 70, 80, 90];
      var sumObj = { total: 0 };
      array.iterate(sumObj, function(context, item) {
        context.total += item;
      });
      expect(sumObj.total).toBe(450);
    });

    it ('Build Sentence', function() {
      var array = [ 'A', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];
      var sentObj = { full: '' };
      array.iterate(sentObj, function(context, item) {
        context.full += item += ' ';
      });
      expect(sentObj.full).toBe('A quick brown fox jumped over the lazy dog ');
    });
  });
});
