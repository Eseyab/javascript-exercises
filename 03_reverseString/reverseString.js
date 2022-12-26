const reverseString = function(stringToReverse) {
    let reversedString = "";
    for (let i = stringToReverse.length; i >= 0; i--) {
        reversedString += stringToReverse.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
