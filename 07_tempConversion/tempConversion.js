const convertToCelsius = function(temperature) {
  let unroundedCelsius = (temperature - 32) * 5/9;
  let roundedCelsius = Math.round(unroundedCelsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function(temperature) {
  let unroundedFahrenheit = temperature * (9/5) + 32;
  let roundedFahrenheight = Math.round(unroundedFahrenheit * 10) / 10;
  return roundedFahrenheight;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
