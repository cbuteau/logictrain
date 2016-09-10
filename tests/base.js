
require(['lib/base', 'lib/utils'], function(Base, Utils) {
  describe('Base...', function() {
    describe('Clone...', function() {
      it ('Basic', function() {
        var testObj = {
          name: 'My Test Object',
          flag: false,
          int: 10,
          float: 3.14,
          arrayOfNumbers: [10, 20, 30, 40, 50, 60, 70, 80, 90]
        };

        var cloned = Utils.deepclone(testObj);
        expect(Utils.isSame(testObj, cloned)).toBe(true);
      });

      it ('Date clone', function() {
        console.log('really');
        var start = new Date('12/11/1971');
        var comp = new Date(start.getTime());

        expect(Utils.isSame(start, comp)).toBe(true);
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
    })
  });
});
