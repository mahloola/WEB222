/* WEB222 Assignment 02 */

const users = require('./users.json');
var today = new Date(); // object storing the current date

var dob = new Date(users[0].birthDate); // Date of birth object used to test Task 1.


// Task 1: getAge (Definition)
function getAge(birthDate, currentDate) {

    var msDifference = currentDate - birthDate;
    var yearsDifference = msDifference / (1000 * 60 * 60 * 24 * 365);
    return yearsDifference;

}

// Task 2: getAvg (Definition)
function getAvg() {

    var ageSum = 0;
    var avgAge = 0;
    var today = new Date();

    for (var i = 0; i < users.length; i++) {
        
        ageSum += getAge(new Date(users[i].birthDate), today);

    }

    avgAge = ageSum / users.length;
    return avgAge;
}

const userUtils = { // userUtils object holding the methods for Tasks 3, 4, 5, 6
    
    // Task 3: getManagers (Definition)
    getManagers: function(){

    var managerList = [];

        for (var i = 0; i < users.length; i++) {
            if (users[i].isManager == true){
                managerList.push(" " + users[i].name.first + " " + users[i].name.last);
            }
        }
        return managerList;
    },

    // Task 4: getLongestName (Definition)
    getLongestName: function(){

        var longestName = "";
    
        for (var i = 0; i < users.length; i++) {
            if (((users[i].name.first).length + (users[i].name.last).length) > longestName.length) { // check for longest (first + last) name
                longestName = " " + users[i].name.first + " " + users[i].name.last; // create the formatted full name
            }
        }
    
        return longestName;
    },

    // Task 5: searchByName (Definition)
    searchByName: function(keyWord, fuzzy) {
        var listOfMatches = [];
    
        if (!fuzzy) {
            for (var i = 0; i < users.length; i++) {
    
                if (users[i].name.first == keyWord) {
                    listOfMatches.push(" " + users[i].name.first)
                }
                else if (users[i].name.last == keyWord) {
                    listOfMatches.push(" " + users[i].name.last);
                }
    
            }
        }
    
        else {
            for (i = 0; i < users.length; i++) {
    
                if ((users[i].name.first).startsWith(keyWord)) {
                    listOfMatches.push(" " + users[i].name.first);
                }
                else if ((users[i].name.last).startsWith(keyWord)) {
                    listOfMatches.push(" " + users[i].name.last);
                }
    
            }
        }
    
        return listOfMatches;
    },

    // Task 6: mostCommonCountry (Definition)
    mostCommonCountry: function(users) {
    
        var userCountries = [];
    
        for (var i = 0; i < users.length; i++) {   
            userCountries[users[i].address.country]=users[i].accessCount;
        }
        
        return userCountries;
    }

};

///// TESTING /////

// Task 1: getAge
console.log("Your age is " + getAge(dob, today).toFixed(1) + " years old.");

// Task 2: getAvg
console.log("The average age in \'users\' is " + getAvg().toFixed(1) + " years old.");

// Task 3: getManagers
console.log("The managers in \'users\' are:" + userUtils.getManagers() + ".");

// Task 4: getNameLength
console.log("The longest name in \'users\' is:" + userUtils.getLongestName() + ".");

// Task 5: searchByName
console.log("Name search query results:" + userUtils.searchByName("Pa", true) + ".");

// Task 6: mostCommonCountry
console.log("The most common country in \'users\' is: " + userUtils.mostCommonCountry(users) + ".");
