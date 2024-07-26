// OBJECT>ENTRIES
//Object.entries takes an object as an argument and returns an array of arrays. Each inner array has two elements: 
//the first is a property key, and the second is the corresponding property value.

// const obj = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(obj);

// console.log(entries);
//  Output: [["a", 1], ["b", 2], ["c", 3]]



//Polyfill
if (!Object.entries) {
    Object.entries = function(obj) {
      var ownProps = Object.keys(obj),
          i = ownProps.length,
          resArray = new Array(i); // preallocate the Array
      while (i--) {
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
      }
  
      return resArray;
    };
  }
  