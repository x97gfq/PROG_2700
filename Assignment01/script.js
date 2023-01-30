
function convertTemperature(temperature, temperatureType) {
  var result = 0;
  if (temperatureType === 'Fahrenheit') {
    result = (temperature - 32) * (5/9); 
  } else {
    result = (temperature * (9/5)) + 32
  }
  return result;
}

var result1  = convertTemperature(10,"Celcius");
alert(result1);

var result2 = convertTemperature(65,"Fahrenheit");
alert(result2);

//Bonus point if you write a second function that converts kilometers to miles, and vice-verse. 
