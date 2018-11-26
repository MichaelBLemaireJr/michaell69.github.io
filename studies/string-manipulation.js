/*
    You can manipulate strings using methods and operators
    The operators you can use on strings are += and +
    These operators add numbers to the string or combine
*/
let stringNum = "fifty";
/**
 * Split is a string method that takes a string and loops through each character
 * and seperates the string at each point where it runs into the same character that is given
 * and returns an array filled with those strings. If given and empty string
 * split returns the string seperated at each character
*/
console.log(stringNum.split(""));
/**
 * toLowerCase takes a string and returns a new string with the same letters, but
 * they are all lower case, has no side effects
 */
 let str = "YUP";
 console.log(str.toLowerCase()); // logs "yup"
 /**
 * toUpperCase takes a string and returns a new string with the same letters, but
 * they are all upper case, has no side effects
*/
 let str2 = "yup";
 console.log(str2.toUpperCase()); // logs "YUP";
 
console.log(stringNum + 50); //logs "fifty50"

console.log(stringNum); //Does not change the originaL value

stringNum += 50; //short version of stringNum = stringNum + 50;

console.log(stringNum); //reassigned

//methods do not change the original string but return new values
let newStr = "This is a new string";
console.log(newStr.replace("string", "Meme")); //logs "This is a new Meme"
console.log(newStr); //newStr hasnt changed