const fibonacci = function(a) {
    if(a !== +a) a = +a;
    if(a < 0) return "OOPS";
    if (a <= 1) return a;
    let result = 0;
    let first = 1;
    let second = 0; 
    for(let i = 2; i <= a; i++){
        result = first + second
        second = first;
        first = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
