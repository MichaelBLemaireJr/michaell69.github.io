/*
    You can manipulate strings using methods and operators
    The operators you can use on strings are += and +
    These operators add numbers to the string or combine
*/
let stringNum = "fifty";
console.log(stringNum + 50); //logs "fifty50"
console.log(stringNum); //Does not change the originaL value
stringNum += 50; //short version of stringNum = stringNum + 50;
console.log(stringNum); //reassign

//methods do not change the original string but return new values
let newStr = "This is a new string";
console.log(newStr.replace("string", "Meme")); //logs "This is a new Meme"
console.log(newStr); //newStr hasnt changed