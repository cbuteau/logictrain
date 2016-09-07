'use strict';

define('lib/entity',['lib/utils'], function(Utils) {
  function EntityClass() {
    this.id = Utils.getNewId();
    // Object.defineProperty(this, 'name', {
    //   value: 'EnityClass',
    //   writeable: true
    // });
  }

  return EntityClass;
});
