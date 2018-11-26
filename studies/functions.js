/*
Functions: Functions are created by using the keyword function followed by the name of the function
            First we must declare a function
            Second we call a function see line the arguments go into the function call
            Function parameters are place holders to minipulate certain data that we pass into the function.
            We create parameters inside of the parenthesis after the function name,
            once a function hits a return statement it stops running.
            Functions also can change variables in their parent scope(s) and local variables, 
            but parent scopes can not access values in the child scope
*/
/**
 * Scopes: Scopes are the place in which certain variables can be accesssed such as
 * functions can access global variables, but the global scope can not access variables inside of a function.
 * As the same with functions that are created inside of another function(AKA Child functions) and the function
 * that it is surrounded by(AKA Parent function), the child function can access the global scope and the parent function scope,
 * but the parent function only has access to the global scope.
 * 
*/
/*
    Closure: When a function is accessing a value in the global scope the value can continue to exist even after
            the function has returned
*/
function thisFunc(param1, param2){
    return param1 + param2;
}
thisFunc("this", "that"); // evaluates to "thisthat";

//We can also assign functions to variables
var otherFunc = function(){
    return 1 + 1;
};
