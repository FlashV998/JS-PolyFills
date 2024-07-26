//OBJECT.KEYS
//The Object.keys method in JavaScript returns an array of a
// given object's own enumerable property names, in the same order as we get with a normal loop.




if(!Object.Keys){
    Object.keys = function(obj) {
        if(obj != Object(obj)){
            throw new Error("Property is applied on Non-Object")
        }

        var result=[]
        for(key in obj){
            if(Object.prototype.hasOwnProperty.call(obj,key)){
                result.push(key);
            }
        }
        return result
    }
}

// Explanation of the Polyfill
// Check for Existence: The polyfill checks if Object.keys is already defined.
// Type Check: It throws a TypeError if the argument is not an object.
// Property Enumeration: It iterates over all properties of the object using a for...in loop.
// Filter Own Properties: It uses Object.prototype.hasOwnProperty to ensure only the object's own properties are included.
// Collect and Return: It collects the properties into an array and returns it.





//OBJECT.VALUES
// The Object.values method in JavaScript returns an array of a given object's own enumerable property values,
// in the same order as provided by a for...in loop (the difference being that a for-in loop enumerates properties
// in the prototype chain as well).




if(!Object.Keys){
    Object.keys = function(obj) {
        if(obj != Object(obj)){
            throw new Error("Property is applied on Non-Object")
        }

        var result=[]
        for(key in obj){
            if(Object.prototype.hasOwnProperty.call(obj,key)){
                result.push(obj[key]);
            }
        }
        return result
    }
}

// Explanation of the Polyfill
// Check for Existence: The polyfill checks if Object.keys is already defined.
// Type Check: It throws a TypeError if the argument is not an object.
// Property Enumeration: It iterates over all properties of the object using a for...in loop.
// Filter Own Properties: It uses Object.prototype.hasOwnProperty to ensure only the object's own properties are included.
// Collect and Return: It collects the properties into an array and returns it.