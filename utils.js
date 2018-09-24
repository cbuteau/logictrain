
exports.iterate = function(array, context, callback) {
  var len = array.length;

  for (var i = 0; i < len; i++) {
    var item = array[i];
    callback(context, item, i);
  }
}

return exports;
