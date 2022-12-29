const removeFromArray = function(argArray, ...theArgs) {
    for (let i = 0; i < theArgs.length; i++){
        // Loop backwards because it is splicing elements in place
        // which shifts the index of elements
        // the shift would cause us to skip some elements if looping forward
        for (j = argArray.length; j >= 0; j--){
            // if arg is present in array remove by splicing out
            if (theArgs[i] === argArray[j]){
                argArray.splice(j, 1);
            }
        }
    }
    return argArray;
};

// Do not edit below this line
module.exports = removeFromArray;
