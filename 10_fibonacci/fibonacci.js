const fibonacci = function(n) {
    // return error if not convertible to a number or if number is less than 1
    if(isNaN(Number(n)) || n < 1){
        return "OOPS";
    }
    if (n == 1 || n == 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
