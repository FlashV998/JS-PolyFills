//CURRYING
//Functional programming technique where a function, instead of taking all arguments at once, takes them one at a time. 
//W/O Currying
// function add(x, y, z) {
//     return x + y + z;
//   }

//   console.log(add(1, 2, 3)); // 6

//With Currying
// function add(x) {
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       }
//     }
//   }

//   console.log(add(1)(2)(3)); // 6


// Polyfill Example

Function.prototype.MySpicyCurry = ((...args) => {
    let originalFunction = this
    if (args.length >= originalFunction.length) {
        return originalFunction.apply(this, args)
    }

    return function (...newArgs) {
        return originalFunction.mySpicyCurry(...args, ...newArgs);
    }
})

// Example
// Suppose we call the curried function with all arguments at once:

// javascript

// const result = curriedAdd(1, 2, 3); // args = [1, 2, 3]
// console.log(result); // Output: 6
// Explanation
// args is [1, 2, 3] and originalFunction.length is 3 (the number of parameters add expects).
// args.length is 3, which is equal to originalFunction.length.
// The condition args.length >= originalFunction.length is true, so the function is called with the collected arguments using originalFunction.apply(this, args).
// The result is add(1, 2, 3), which returns 6.
// Part 2: Collecting More Arguments
// javascript

// return function(...newArgs) {
//     return originalFunction.mySpicyCurry(...args, ...newArgs);
// };
// Example
// Suppose we call the curried function with one argument at a time:

// javascript

// const step1 = curriedAdd(1);           // args = [1]
// const step2 = step1(2);                // args = [1, 2]
// const result = step2(3);               // args = [1, 2, 3]
// console.log(result); // Output: 6
// Explanation
// First Call:

// javascript

// const step1 = curriedAdd(1); // args = [1]
// args is [1] and originalFunction.length is 3.
// args.length is 1, which is less than originalFunction.length.
// The condition args.length >= originalFunction.length is false.
// A new function is returned to collect more arguments.
// Second Call:

// javascript

// const step2 = step1(2); // args = [1, 2]
// args is now [1, 2].
// args.length is 2, which is still less than originalFunction.length.
// The condition args.length >= originalFunction.length is false.
// Another new function is returned to collect more arguments.
// Third Call:

// javascript

// const result = step2(3); // args = [1, 2, 3]
// args is now [1, 2, 3].
// args.length is 3, which is equal to originalFunction.length.
// The condition args.length >= originalFunction.length is true.
// The function originalFunction is called with all collected arguments using originalFunction.apply(this, args).
// The result is add(1, 2, 3), which returns 6.
// Summary
// Part 1: Checks if enough arguments have been collected to call the original function. If yes, it calls the function with those arguments.
// Part 2: If not enough arguments have been collected, it returns a new function to collect more arguments. This process continues until all required arguments are collected.







