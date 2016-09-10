'use strict';
define('lib/utils', ['lib/base'], function(Base) {
  var instance = null;

  // MooTools singleton.
  // var Utils = new Class({});
  //
  // Utils.fastForEach = function(list, callback) {
  //   for (var i = 0; i < list.length; i++)
  //   {
  //     var item = list[i];
  //     unoptimizedTrap(callback(item));
  //   }
  // };
  //
  // Utils.unoptTrap = function(callback) {
  //   try {
  //     callback();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  function Utils() {
    if (instance !== null) {
      throw new Error('Use getInstance function');
    }
  }

  Utils.getInstance = function() {
    if (instance === null) {
      instance = new Utils();
    }

    return instance;
  }

  Utils.prototype = {
    idCounter: 0,
    fastForEach: function(list, callback) {
      for (var i = 0; i < list.length; i++)
      {
        var item = list[i];
        this.unoptTrap(function() {
          callback(item);
        });
      }
    },
    unoptTrap: function(callback) {
      try {
        callback();
      } catch (e) {
        console.error(e);
      }
    },
    getNewId: function() {
      this.idCounter++;
      return this.idCounter;
    },
    deepclone: function(object) {
      return Base.deepclone(object);
    },
    isSame: function(object, comparison) {
      return Base.isSame(object,comparison);
    }
  };

  return Utils.getInstance();

//  return Utils;
});
