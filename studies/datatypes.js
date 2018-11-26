/**
 * Strings are simple datatypes that are any letters, numbers, or symbols you want inside of quotes
 * strings have there own propteries like length 
*/
var string = "@#abc42";

/*
Numbers can't be used as variable names they are apart of the computer themselves unlike words there are only so many numbers 
but words have no meaning to computers
*/
42;
//var 42 = "This WIll not work";

/*
Boolean is a primitive datatype consisting of true and false
*/
var trues = true;
var falsey = false;

/*
Array: Arrays are a complex datatype that can hold a infinite amount of data and have a 0-indexed list and can also hold other complex datatypes
also are accessed using bracket notation
*/
var arr = ["lol", 45, ["wmeme", 45, {doit: "onem"}]]
console.log(arr[0]); //logs "lol" to the console
//Objects: Another complex datatype but is created using curly brackets {} and hold data using key-value pairs
//the keys are always strings and can be accessed using bracket or dot notation
var obj = {
  name: "Michael",
  nameLast: "LeMaire",
  age: 18,
};
console.log(obj["name"]); //logs "Michael"
console.log(obj.age); //logs 18

/*
Function: a reusable block of code that has parameters that are used as place holders
and stops when it runs into a return statement
*/
function print(value){
 console.log(value);
 return value;
}

//undefined is a keyword that signifies if something has a value
var something;
console.log(something); //prints undefined

//null is an intentional absence of somethings value
 
//NaN(Not a Number) represents when we use a method ment for an interger on a value that isnt an interger; 

//Infinite is a keyword that mathmatically is greater than anyother number and negative infinity is the opposite
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;

//Primitive data types hold up to 8MB of storage and are immutable
//these datatypes include numbers, strings, boolean, null, and undefined

//Complex data types can hold an infinite amount of data and store any type of data
//these datatypes include arrays, objects, functions 

//Copy by value means to directly refrence the whole value
//Copy by refrence means to refrence a value inside an complex datatype
var bool = true;
console.log(bool); //refrence by copy

var array = ["sdv", 5+4, [42]];
console.log(array[1]); //copy by refrence