'use strict';
define(function(require) {
  //var Config = require('app/configuration');
  var RafEngine = require('lib/rafengine');
  //var ConfigLoader = require('app/configloader');

  //var config = new Config();
  var Renderer = require('app/render');
  var LogicEngine = require('app/logic');

  var engine = new RafEngine();
  window.engine = engine;

  var rend = new Renderer();
  engine.addModule(rend);

  var logic = new LogicEngine();
  engine.addModule(logic);

  engine.start();
/*
  var loader = new ConfigLoader();
  loader.fetch(function done(data) {
    console.log(data);
    config.setData(data);
    var engine = new RafEngine();
    window.engine = engine;
    engine.setConfig(config);
  });
  */

});
