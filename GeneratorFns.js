//Generator Function in JavaScript
//A generator function in JavaScript allows you to define an iterative algorithm by writing a function
//that can be paused and resumed. 
//It provides a way to produce a sequence of values on demand,
//rather than computing them all at once and returning them in an array.

// Key Elements of Generator Functions
// The function* Keyword: The asterisk (*) in the function declaration indicates that the function is a generator function.

// yield Keyword:
// Used within a generator function to pause the function execution and return a value. The generator function can be resumed later from where it was paused.

// return Keyword:
// Ends the generator function execution and optionally returns a value. If return is used, the generator is considered complete, and further calls to next() will return an object with done set to true.

// next() Method:
// Invokes the generator function, resuming its execution. Each call to next() returns an object with value and done properties. The value is the result of the yield expression, and done indicates whether the generator has completed.

// for...of Loop:
// Can be used to iterate over values produced by a generator function.

// Polyfill for generator functions
function createGeneratorFunction() {
    var iterator = {
        next: function (value) {
            var result = function (value) {
                var state = 0;
                return function (nextValue) {
                    var result;
                    if (state === 0) {
                        state = 1;
                        result = { value: 1, done: false };
                    } else if (state === 1) {
                        state = 2;
                        result = { value: 2, done: false };
                    } else if (state === 2) {
                        state = 3;
                        result = { value: 3, done: true };
                    }
                    return result;
                };
            }
            return result;
        }
    };
    return iterator;
}

// Optimized Code

var generator = createGeneratorFunction(function(value) {
    var state = 0;
    return function(nextValue) {
      var result;
      if (state === 0) {
        state = 1;
        result = { value: 1, done: false };
      } else if (state === 1) {
        state = 2;
        result = { value: 2, done: false };
      } else if (state === 2) {
        state = 3;
        result = { value: 3, done: true };
      }
      return result;
    };
  }());

  
// Polyfill for generator functions
function createGeneratorFunction(generatorBody) {
    var iterator = {
      next: function(value) {
        var result = generatorBody(value);
        return result;
      }
    };
    return iterator;
  }
  
  // Example usage
  
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: true }
  
// Example usage


console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: true }
