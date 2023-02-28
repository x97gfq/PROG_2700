
function convertTemperature(temperature, temperatureType) {
    var val;
    if (temperatureType == "celcius") {
        val = (temperature * (9/5)) + 32;
    } else {
        val = (temperature - 32) * (5/9);
    }
    return val;
};

var result = convertTemperature(12, "celcius");
alert(result);

var result1 = convertTemperature(65, "fahrenheit");
alert(result1);


/*
//convert 10 c to f
var result = (10 * (9/5)) + 32;
alert(result);

//convert 65 f to c
var result1 = (65 - 32) * (5/9);
alert(result1);
*/

