const leapYears = function(givenYear) {
    // leapYear -> divisible by 4
    // not divisible by 100, unless also divisible by 400
    if (givenYear % 4 === 0){
        if (givenYear % 100 === 0 && !(givenYear % 400 === 0)){
            return false;
        }
        return true;
    }
    
    return false;
};

// Do not edit below this line
module.exports = leapYears;
