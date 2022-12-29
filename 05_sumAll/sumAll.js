const sumAll = function(firstNum, secondNum) {
    // ERROR if either num is not of type Number
    if (typeof firstNum != "number" || typeof secondNum != "number" ) {
        return "ERROR";
    }

    let lowerNum = Math.min(firstNum, secondNum);
    let higherNum = Math.max(firstNum, secondNum);
    //ERROR if nums are negative
    if (lowerNum < 0){
        return "ERROR";
    }


    let sum = 0;
    for (let i = lowerNum; i <= higherNum; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
