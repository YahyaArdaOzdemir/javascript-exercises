const removeFromArray = function(array , ...num) {
    for(let i = array.length-1; i>=0; i--){
        for(const number of num){
            if(array[i] === number ){
                array.splice(i , 1)
                
            }
        }

    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
