/*
 ASSIGNMENT OPERATORS: =, +=, -=, *=, /=, and %=
 = is the basic assignment operator it assigns a variable to a value,
 += adds the following value to the value preseeding this operator then reassigns the new value to the previous variable
 -= does the same operation as += execpt subtracts instead of adds
 *= muiltiplies
 /= divides
 %= division remainder
*/
let teacher = "Andy";
teacher += " and Cain";
console.log(teacher); // logs "Andy and Cain"
let num = 42;
num -= 2;
console.log(num); // logs 40;
num *= 2;
console.log(num); // logs 80
num /= 4;
console.log(num); // logs 20
num %= 2;
console.log(num); // logs 0;
/*
ARITHMATIC OPERATORS: they do maths
+ adds
- subtracts
* multiplies
/ divides
% Modulus
++ increments by 1
-- Decrements by 1
*/
 let maths = 0;
 console.log(maths + 2); // logs 2
 console.log(maths - 2); //logs -2
 console.log(maths * 2); //logs 0
 console.log(maths / 2); //logs 0
 console.log(maths % 2); //logs 0
 console.log(maths++); //logs 1
 console.log(maths--); //logs -1
/*
COMPARISON OPERATORS: compares two values and returns a boolean on whether or not the comparison is true or not
=== hard comparson to see if the two values are exactly the same and checks the datatypes
== soft comparison to see if the two values are the same and doesn't check datatypes
!= checks if the two values are diffrent but doesn't check type
!== checks to see if the two values are diffent and does check type
> checks to see if the first value is greater in value than the second value
< checks if the first value is smaller than the second value
>= checks to see if the first value is greater than or equal to in value than the second value
<= if the first value is smaller than or equal to the second value
*/
let me = "Michael";
console.log(me === "michael"); // logs false
console.log(maths == "0"); // logs true
console.log(maths != "0"); // logs false
console.log(maths !== "0"); //logs true
console.log(maths > -1); //logs true
console.log(maths < -1); //logs false;
console.log(maths >= 0); // logs true
console.log(maths <= 1); //logs true
/*
LOGICAL OPERATORS:
&& and
|| or
! not
*/
if(1 > maths && -1 < maths){
 return 0;
} else if(maths === 0 || maths == "0"){
 return true;
} else if( !maths === 42){
 return "This ain't it chief";
}

/**
 * TERNARY OPERATORS: Ternary operators take 3 operands and act simular to if-else
 * statements
 * ? acts as the end of the conditional statement in which we will evaluate to the
 * value to the left of ? if the condition set is true;
 * : acts as a else statement, basically saying that if the condition is false return this value
 * 
*/
var canVote = age => age >= 18 ? true:false;

/**
 * URNARY OPERATORS: take only one operands
 * typeof: returns a string of what datatype the value your using it on is, but 
 * it does not return the correct datatypes on null, arrays, and Date
*/
console.log(typeof {}); // logs "object"
console.log(typeof 42); // logs "number"
console.log(typeof []); // logs "object"
console.log(typeof "i am string"); //logs "string"
console.log(typeof true); // logs "boolean"
console.log(typeof function(){}); // logs "function"
console.log(typeof Date); //logs "object";