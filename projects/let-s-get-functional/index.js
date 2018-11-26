// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-michaell69");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, function(element){
        return element.gender === "male";
    }).length;
};

var femaleCount = function(array){
    return _.reduce(array, function(accumulator, currentEle){
        if(currentEle.gender === "female"){
            accumulator++;
        }
        return accumulator;
    }, 0);
};

var oldestCustomer = function(array){
    var oldest;
    _.each(array, function(element, i){
        if(i === 0){
            oldest = element;
        }else if(element.age > oldest.age){
            oldest = element;
        }
    });
    return oldest.name;
};

var youngestCustomer = (array) => {
    let youngest;
    _.each(array, function(element, i){
        if(i === 0){
            youngest = element;
        }else if(element.age < youngest.age){
            youngest = element;
        }
    });
    return youngest.name;
};

var averageBalance = (array) => {
    let balances = [];
    let average;
    let sum = 0;
    _.each(array, function(customer){
        var currentBal = customer.balance.split(",");
        var currentBal2 = currentBal[0].split("");
        // console.log(currentBal2);
        // console.log(currentBal);
       balances.push(Number(currentBal2[1] + currentBal[1]));
    });
    // console.log(balances)
    _.each(balances, function(element){
        sum += element;
    });
    average = sum/balances.length;
    return average;
};

var firstLetterCount = function(array, char){
    return _.reduce(array, function(accumulator, customer){
        if(customer.name[0] === char.toUpperCase()){
            accumulator++;
        }
        return accumulator;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, character){
    // console.log(customer);
    return _.reduce(array, function(accumulator, currentCust){
        if(currentCust.name.toUpperCase() === customer.toUpperCase()){
            _.each(currentCust.friends, function(object){
                if(object.name[0].toUpperCase() === character.toUpperCase()){
                    accumulator++;
                }
            });
        }
        return accumulator;
    }, 0);
};

var friendsCount = function(array, name){
    var arr  = [];
    if(name === undefined){
        return [];
    }
    _.each(array, (customer) => {
        _.each(customer.friends, function(friend){
            if(friend.name.toUpperCase() === name.toUpperCase()){
                arr.push(customer.name);
            }
        });
    });
    // console.log(arr);
    return arr;
};

var topThreeTags = function(arr){
    let topTags = [];
    let tag = {};
    _.each(arr, function(customer){
        _.each(customer.tags, function(currentTag){
            let keys = Object.keys(tag);
            if(_.contains(keys, currentTag)){
                tag[currentTag]++;
            }else{
                tag[currentTag] = 1;
            }
        });
    });
    
    let vals =  Object.keys(tag).map(function(key) {
    return tag[key];
});
    let sortedValues = _.unique(vals.sort(function(a, b){return b-a}));
    console.log(sortedValues);
    _.each(sortedValues, function(element, index){
        _.each(tag, function(value, key){
            if(topTags.length === 3){
            return;
        } else if(tag[key] >= element){
            topTags.push(key);
        }
        });
    });
   
    return _.unique(topTags);
};

var genderCount = (arr) =>{
    var genders = {
        male: 0,
        female: 0,
        transgender: 0,
    };
    _.each(arr, function(customer){
        if(customer.gender === "male"){
            genders.male++;
        } else if(customer.gender === "female"){
            genders.female++;
        } else{
            genders.transgender++;
        }
    });
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
