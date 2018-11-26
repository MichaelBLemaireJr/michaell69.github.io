/*
Variables- Variables hold information so we don't lose them while the program is running
variables are declared using the key word "var" and an appropraite name for the data its storing
Finally you must use the assignment operator "=" followed by the data you want to store
*/
var string = "";

/*
 there are muliple variable key words with there own subtle diffrences
 these are "var", "const", & "let
 
 var is the one you use becaue it holds to its own scope only whether that be global or local
 
 const can not be reassigned and they are block scoped meaning that the block of code they are in are the only scope they exist
 also they do not get hoisted to the top of the scope during runtime the only time they are recognized when running are when they declared
 
 let is block locked to only that block scope otherwise its exactly like var
*/
var name = "Michael"; 
const NAME_LAST = "LeMaire";
let age = 42;
console.log(name); //prints "Michael"
console.log(NAME_LAST); //prints "LeMaire"
console.log(age); //prints 42
/*
Hoisting is when a block of code is ran the variable names get Hoisting to the top and evaluated first but not what they are assigned to
that gets evaluated when it comes to that line
*/
