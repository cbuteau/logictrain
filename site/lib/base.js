'use strict';
define('lib/base', [], function() {

  var TYPECODES = {
    BOOLEAN: 0,
    NUMBER: 1,
    STRING: 2,
    FUNCTION: 3,
    OBJECT: 4,
    UNDEFINED: 5,
    NULL: 6,
    DATE: 7,
    ARRAY: 8
  }

  function iterate(array, context, callback) {
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      callback(context, item, i);
    }
  }

  function unoptimizedTrap(callback) {
    try {
      callback();
    } catch (e) {
      console.error(e);
    }
  }

  function getType(object) {
    // Simple tests and then duck typign to disern the value.
    if (object === undefined) {
      return TYPECODES.UNDEFINED;
    }
    if (object === null) {
      return TYPECODES.NULL;
    }
    if ((object === true) || (object === false)) {
      return TYPECODES.BOOLEAN;
    }
    if (object.apply && object.call && object.bind) {
      return TYPECODES.FUNCTION;
    }
    if (object.getDay && object.getYear && object.getMonth && object.getHours && object.getMinutes && object.getSeconds) {
      return TYPECODES.DATE;
    }
    if (object.toString && object.valueOf && object.toPrecision) {
      return TYPECODES.NUMBER;
    }
    if (object.trim && object.indexOf && object.toLowerCase && object.toUpperCase) {
      return TYPECODES.STRING;
    }
    if (object.map && object.indexOf && object.push && object.slice) {
      return TYPECODES.ARRAY;
    }
    if (object.isPrototypeOf && object.hasOwnProperty && object.toString) {
      return TYPECODES.OBJECT;
    }

    /* istanbul ignore next */
    return TYPECODES.UNMAPPED;
  }

  function cloneObject(object) {
    var newObj = object.constructor();
    var keys = Object.keys(object);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var prop = object[key];
      unoptimizedTrap(function() {
        newObj[key] = copyType(prop);
      });
    }
    return newObj;
  }

  function cloneArray(array) {
    var newArray = [];
    iterate(array, newArray, function(context, item) {
        context.push(copyType(item));
    });
    return newArray;
  }

  function copyType(object) {
      var type = getType(object);
      if (type === TYPECODES.OBJECT) {
        unoptimizedTrap(function() {

        });
        return cloneObject(object);
      } else if (type === TYPECODES.ARRAY) {
        return cloneArray(object);
      } else {
        return object;
      }
  }

  function compareObjects(original, comparison) {
    var keys = Object.keys(original);
    var counter = { pass: 0, fail:0 };
    iterate(keys, counter, function(context, item) {
      var propOrig = original[item];
      var propComp = comparison[item];
      if (compareTypes(propOrig, propComp)) {
        context.pass++;
      } else {
        context.fail++;
      }
    });

    return counter.pass === keys.length;
    //return false;
  }

  function compareArrays(original, comparison) {
    var counter = { pass: 0, fail: 0 };
    iterate(original, counter, function(context, item, index) {
      var comp = comparison[index];
      if (compareTypes(item, comp)) {
        context.pass++;
      } else {
        context.fail++;
      }
    });
    return counter.pass === original.length;
  }

  function compareTypes(original, comparison) {
    var origType = getType(original);
    var compType = getType(comparison);

    if (origType === compType) {
      // delve deeper
      if (origType === TYPECODES.OBJECT) {
        return compareObjects(original, comparison);
      } else if (origType === TYPECODES.ARRAY) {
        return compareArrays(original, comparison);
      } else {
        // strict compare.
        return original === comparison;
      }
    } else {
      return false;
    }
  }

  Object.prototype.clone = function() {
      return copyType(this);
  };

  Object.prototype.isSame = function(compareobject) {
    return compareTypes(this, compareobject);
  };

  Array.prototype.iterate = function(context, callback) {
    iterate(this, context, callback);
  };

});
