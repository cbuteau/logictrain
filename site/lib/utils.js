'use strict';
define('lib/utils', [], function() {
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
    }
  };

  return Utils.getInstance();

//  return Utils;
});
