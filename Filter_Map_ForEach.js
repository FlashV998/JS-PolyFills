//FILTER
//The Array.prototype.filter method in JavaScript creates a new array with all elements
// that pass the test implemented by the provided function.

//Syntax
// arr.filter(callback(element[, index[, array]])[, thisArg])
// Parameters
// callback: A function to test each element of the array. Invoked with three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter was called upon.
// thisArg (optional): Value to use as this when executing callback.


//Polyfill
if (!Array.prototype.filter) {
    Array.prototype.filter = function (callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.filter called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        var result = [];
        var o = Object(this);
        var len = o.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in o) {
                var val = o[i];
                if (callback.call(thisArg, val, i, o)) {
                    result.push(val);
                }
            }
        }

        return result;
    };
}

// MAP
//   The Array.prototype.map method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array.

//   Syntax
//   arr.map(callback(element[, index[, array]]),[thisArg])

//   Parameters
//   callback: Function that produces an element of the new array, taking three arguments:
//   element: The current element being processed in the array.
//   index (optional): The index of the current element being processed in the array.
//   array (optional): The array map was called upon.
//   thisArg (optional): Value to use as this when executing callback.

if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.map called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        var o = Object(this);
        var len = o.length >>> 0;
        var result = new Array(len);

        for (var i = 0; i < len; i++) {
            if (i in o) {
                result[i] = callback.call(thisArg, o[i], i, o);
            }
        }

        return result;
    };
}

// FOREACH
//  The Array.prototype.map method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array.

// Syntax
// arr.map(callback(element[, index[, array]])[, thisArg])

// Parameters
// callback: Function that produces an element of the new array, taking three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array map was called upon.
// thisArg (optional): Value to use as this when executing callback.

if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.map called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      var o = Object(this);
      var len = o.length >>> 0;
      var result = new Array(len);
  
      for (var i = 0; i < len; i++) {
        if (i in o) {
          result[i] = callback.call(thisArg, o[i], i, o);
        }
      }
  
      return result;
    };
  }
  