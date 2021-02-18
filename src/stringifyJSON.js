// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = '';
  if (Array.isArray(obj)) {
    string += '[';
    for (var i = 0; i < obj.length; i++) {
      var value = obj[i];
      if (typeof value !== 'function' && typeof value !== 'undefined') {
        result = stringifyJSON(value);
        string += result;
        if (i !== obj.length - 1) {
          string += ',';
        }
      }
    }
    string += ']';
  } else if (typeof obj === 'object') {
    if (obj === null) {
      return string += null;
    }
    var string = '{';
    var lengthOfObject = Object.keys(obj).length;
    var counter = 0;
    for (var key in obj) {
      counter += 1;
      var value = obj[key];
      if (typeof value !== 'function' && typeof value !== 'undefined') {
        string += '"' + key + '"' + ':';
        result = stringifyJSON(value);
        string += result;
        if (counter !== lengthOfObject) {
          string += ',';
        } else {
          string = string;
        }
      }
    }
    string += '}';
  } else if (typeof obj === 'string') {
    return string += '"' + obj + '"';
  } else {
    return string += obj;
  }
  return string;
};
