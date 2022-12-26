const repeatString = function(str, numberofRepeats) {
    let repeatedString = "";

    if (numberofRepeats < 0){
        return "ERROR";
    }

    for(let i = 0; i < numberofRepeats; i++){
        repeatedString += str;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
