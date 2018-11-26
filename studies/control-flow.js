/*
IF statement: if statements check a certain contition and if that condition evaluates to true
              then it will run the following block of code but if the statement evaluates to false
              it defaults to an else statements code
*/  
if(true){
    console.log("this is true");
}
/**
 * Else statement: else statements are what an if else statement defaults to if all 
 * of the above if statements evaluate to false, but else statements are not mandatory 
*/
else{
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

/*
SWITCH: swtich works like an if statement exect it checks one variable and checks
case means that if the value put into the switch statement equals the value you check for
to the right of the case keyword then we will run the code that in inbetween the case statement
and the break keyword.
switch statements use the break keyword to indicate that we do not have to check the next case
When the switch statement runs into a break statement it stops running
if all of the case statements evaluate to false then we run the code thats to the right of the colon
*/
switch(bool){
    case "hello": 
        console.log("hello");
        break;
    case true: 
        console.log(true);
        break;
    default: 
        console.log(false);
}
