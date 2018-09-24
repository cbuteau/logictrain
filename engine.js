/*jslint es6 */
'use strict';

//var babel_register = require('babel-register');

const fs = require('fs');
//var fs = require('fs');

class Definition {
  constructor(options) {
    this.name = options.name;
  }
}

class Instance {
  constructor(def, options) {
    this.definition = def;
    this.options = options;
  }
}

// let internals = {
//   loadDefinitions: function (data, options) {
//     options.log('Enter loadDefinitions');
//     options.log('Exit loadDefinitions');
//   },
//   loadStructure: function (data, options) {
//     options.log('Enter loadStructure');
//     options.log('Exit loadStructure');
//   }
// };

class Internals {
  constructor() {
  }
  loadDefintions(data, options) {
    options.log('Enter loadDefintions');
    var defs = {};
    let len = data.defintions.length;
    for (var i = 0; i < len; i++) {
      var def = data.defintions[i];
      // maybe copy date?
      defs[def.name] = def;
    }
    options.log('Exit loadDefintions');
    return defs;
  }
  loadStructure(data, defintions, options) {
    options.log('Enter loadStructure');
    // lookup definition by name...link
    var keys = Object.getOwnPropertyNames(data.structure);

    options.log('Exit loadStructure');
  }
}

let internals = new Internals();


class Engine {
  constructor() {
  }
  load(options) {
    var parsed = JSON.parse(fs.readFileSync(options.filePath));
    this.definitions = internals.loadDefintions(parsed, options);
    this.structure = internals.loadStructure(parsed, this.definitions, options);
  }
  run() {
    // RUn the State Engine...duh
  }
}

// Node JS isn't ready for ES6...ttry this.
module.exports = Engine;

///export default Engine;
