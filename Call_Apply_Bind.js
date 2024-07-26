//Call Polyfill
// Call fn : will help you to change the `this` with any other refernece/object, and will take a series of args
// Apply fn : similiar to apply but instead of typing multiple variables,it will take a list of args
// Bind fn : will help you to create a new function with a new `this`,any other reference/object,that can be invoked later


// Call Polyfill
//CALL SYNTAX 
//func.call(thisObj, args1, args2, ...)
Function.prototype.MySassyCall=((currentThis,...args)=>{
    currentThis.fnToBeCalled =  currentThis   // updating this of function first 
    currentThis.fnToBeCalled(...args)// invoking fn instantly, similiar to this.handleAnyFunction()  , where this represent reference to currenct function

})


// Apply Polyfill
//APPLY SYNTAX
//func.apply(thisObj, argumentsArray);
// func is a function that needs to be invoked with a different this object
// thisObj is an object or a value that needs to be replaced with the this keyword present inside the function func
// argumentsArray can be an array of arguments, array object, or the arguments keyword itself.

Function.prototype.MySassyApply=((currentThis,args=[])=>{
//error Handling
if(typeof args !== Object && !Array.isArray(args)){
    throw new Error('Invalid Argument List is provide')
}
if(typeof currentThis !== 'function'){
    throw new Error('Invalid Ref provided')
}

    currentThis.fnToBeCalled =  currentThis   // updating this of function first 
    currentThis.fnToBeCalled(...args)// invoking fn instantly, similiar to this.handleAnyFunction()  , where this represent reference to currenct function
})



// Bind Polyfill
//BIND SYNTAX
//func.bind(thisObj, arg1, arg2, ..., argN);
// func is a function that needs to be invoked with a different this object
// thisObj is an object or a value that needs to be replaced with the this keyword present inside the function func
// argumentsArray can be an array of arguments, array object, or the arguments keyword itself.

Function.prototype.MySassyApply=((currentThis,...args)=>{
    //error Handling
    if(typeof currentThis !== 'function'){
        throw new Error('Invalid Ref provided')
    }
    
        currentThis.fnToBeCalled =  currentThis   // updating this of function first 
        return function (params) { // since BIND always returns a fn , that fn can also have a their own set of arguments
            fnToBeCalled.apply(currentThis,[...params,...args])
        }
    })
    