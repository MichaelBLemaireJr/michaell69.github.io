/*
IF statement: if statements check a certain contition and if that condition evaluates to true
              then it will run the following block of code but if the statement evaluates to false
              it defaults to an else statements code
*/  
if(true){
    console.log("this is true");
} else{
    console.log("this is false");
}

/*
ElSE-If: You can link if-else-if statements together controlling which code runs
         bepending on the state of a certain variable and still default to an else
*/
let bool = false;
if(bool === true){
    console.log("true");
} else if(typeof bool === "string"){
    console.log("this is a string");
} else {
    console.log("this is false");
}