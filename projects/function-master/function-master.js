//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = [];
    for(let key in object){
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var str = "";
    var keys = Object.keys(object);
    for(let i = 0; i < keys.length; i++){
         if(i === keys.length - 1){
            str += keys[i];
        }else{
            str += keys[i] + " ";
        }
    }
       
    
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var str = "";
    var stringValues = [];
    for(let key in object){
        if(typeof object[key] === "string"){
            stringValues.push(object[key]);
        }
    }
    for(let i = 0; i < stringValues.length; i++){
         if(i === stringValues.length - 1){
            str += stringValues[i];
        }else{
            str += stringValues[i] + " ";
        }
    }
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var newString = "";
    for(let i = 0; i < string.length; i++){
        if(i === 0){
            newString += string[i].toUpperCase();
        } else{
            newString += string[i];
        }
    }
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitString = string.split(" ");
    var newStr = "";
    for(let i = 0; i < splitString.length; i++){
        if(i === splitString.length - 1){
            newStr += capitalizeWord(splitString[i]);
        }else{
            newStr += capitalizeWord(splitString[i]) + " ";
        }
    }
    return newStr;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var str = "";
    if(object.noises === undefined){
        return "there are no noises";
    } else if(object.noises.length === 0){
        return "there are no noises";
    } else if(Array.isArray(object.noises)){
        
        for(let i = 0; i < object.noises.length; i++){
            if(i === object.noises.length - 1){
                str += object.noises[i];
            } else{
                str += object.noises[i] + " ";
            }
        }
         return str;
    }
   
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let str = string.split(" ");
    for(let i = 0; i < str.length; i++){
        if(str[i] === word){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    var obj = object;
    if(object.friends === undefined){
        return false;
    } else{
        obj.friends.push(name);
        return obj;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.friends === undefined){
        return false;
    } else{
        for(let i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                return true;
            }
        }
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nonFriend = [];
  for(var i = 0; i < array.length; i++){
      if(name !== array[i].name && array[i].friends.indexOf(name)){
          nonFriend.push(array[i].name);
      }
      
  }
  return nonFriend;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(let key in object){
        for(let i = 0; i < array.length; i++){
            if(key === array[i]){
            delete object[key];
        }
        }
        
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    array.sort();
    for(var i = array.length; i--;){
        if(array[i] === array[i - 1]){
            array.splice(i,1);
    }
    
  }
  return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}