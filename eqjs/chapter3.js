//Minimum
//
function min(a, b){
    if(a > b){
       return b; 
    } else if(b > a){
        return a;
    }
}

//recursion
//
function isEven(number){
    //if number is less than 0
    if(number < 0){
        //call isEven on that negative number making it a positive
        return isEven(-number);
        //if the number equals one after being subtracted multiple times it is odd
    } else if(number === 1){
        return false;
    } else if(number === 0){
        return true;
    } else{
        //if we do not get an answer on the other else ifs then we must recurse the number -2
        return isEven(number - 2);
    }
}

//Counting beans
//
function countB(string){
    return countChar(string, "B");
}

function countChar (string, letter){
    var countedChar = 0;
    for(let i =0; i <= string.length - 1; i++){
        if(string[i] === letter){
            countedChar++;
        }
    }
    return countedChar;
}
