/*jslint es6 */
const Engine = require('./engine.js');

const Path = require('path');

var engineInstance = new Engine();

engineInstance.load({
  filePath: Path.join(__dirname, './test_machine.json'),
  log: console.log
});
