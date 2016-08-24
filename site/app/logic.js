define('app/logic', ['lib/utils'], function(Utils) {
  function LogicEngine() {
    this.id = 'LogicEngine';
    this._internal = {
      entities: []
    };
  }

  LogicEngine.prototype = {
    initialize: function() {
      // for (var i = 0; i < 100; i++) {
      //   addEntity(i);
      // }
    },

    think: function() {
      if (this._internal.entities.length > 0) {
        Utils.fastForEach(this._internal.entities, function(entity) {
          entity.animate();
        });
      }
    },

    addEntity: function(entity) {
      this._internal.entities.push(entity);
    }
  }

  return LogicEngine;
});
