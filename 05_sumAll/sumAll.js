const sumAll = function(x, y) {
let sum = 0;
if(x<0 || y<0){
    return 'ERROR';
}
if(!Number.isInteger(x) || !Number.isInteger(y)){
    return 'ERROR';
}
if(x<y){
for(i=x; i<=y;i++){
    sum += i;
}}
else{
    for(i=x; i>=y;i--){
        sum += i;
    }
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
