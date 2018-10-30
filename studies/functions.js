/*
Functions: Functions are created by using the keyword function followed by the name of the function
            First we must declare a function
            Second we call a function see line 9the arguments go into the function call
            Function parameters are place holders for where we want the arguments to go
            to specify outputs we create parameters inside of the parenthasis after the function name
            and to specify the out put we use a return statement, once a function hits a return statement it stops running.
            Functions also can change variables in their parent scope(s) and local variables, 
            but parent scopes can not access values in the child scope
*/
function thisFunc(param1, param2){
    return param1 + param2;
}
thisFunc("this", "that");

//We can also assign functions to variables
var otherFunc = function(){
    return 1 + 1;
};
/*
    Closure: When a function is accessing a value in the global scope the value can continue to exist even after
            the function has returned
*/