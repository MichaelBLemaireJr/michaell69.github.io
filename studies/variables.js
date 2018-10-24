/*
 there are muliple variable key words with there own subtle diffrences
 these are "var", "const", & "let
 
 var is the one you use becaue it holds to its own scope only whether that be global or local
 
 const can not be reassigned and they are block scoped meaning that the block of code they are in are the only scope they exist
 also they do not get hoisted to the top of the scope during runtime the only time they are recognized when running are when they declared
 
 let is scope locked to only that local scope
*/
var name = "Michael"; 
const NAME_LAST = "LeMaire";
let age = 42;
console.log(name); //prints "Michael"
console.log(NAME_LAST); //prints "LeMaire"
console.log(age); //prints 42
