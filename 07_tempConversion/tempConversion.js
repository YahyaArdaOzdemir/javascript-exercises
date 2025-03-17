const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) / (9/5);
  if(Number.isInteger(celcius)){
  return celcius;}
  else{
  return +celcius.toFixed(1);
  }
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * (9/5)) + 32;
  if(Number.isInteger(fahrenheit)){
  return fahrenheit;}
  else{
    return +fahrenheit.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
