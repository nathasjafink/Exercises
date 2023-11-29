/*
Color Mixer - level 1
Description: Create a function mixColors(color1, color2) that takes two color names as strings (e.g., 'red', 'blue')
and returns the name of the new color created by mixing them. Assume only primary and secondary colors are used.
 */
const colorPalette = {
    "primary_colors": ["red", "blue", "yellow"],
    "secondary_colors": ["orange", "green", "purple"]
}

function colorMixer (color1, color2) {
    if (colorPalette.primary_colors.includes(color1) &&
        colorPalette.primary_colors.includes(color2) ||
        colorPalette.secondary_colors.includes(color2) &&
        colorPalette.secondary_colors.includes(color1)) {
        return "purple";
    }
    if
        (colorPalette.primary_colors.includes(color1) &&
        colorPalette.primary_colors.includes(color2)) {
        return "yellow";
    } else if
        (colorPalette.secondary_colors.includes(color1) &&
        colorPalette.secondary_colors.includes(color2)) {
        return "purple";
    } else {
        return "Colors is not included in the color palette!"
    }

}

const result = colorMixer("red","blue");
console.log(result);

/*
Temperature Converter - Level 1
Objective: Write a function convertTemperature(temp, unit) that converts temperatures between Celsius and Fahrenheit.
The unit parameter specifies the unit to convert to ('C' for Celsius, 'F' for Fahrenheit).
 */
function celciusToFahreneit(a) {
    const fahrenheit = (a * 1.8) + 32
    return fahrenheit
}

function fahrenheitToCelcius (a) {
    const celcius = (a - 32) / 1.8
    return celcius
}

function convertTemperature(inputScale,degrees) {
    if (inputScale === 'fahrenheit'){
        return fahrenheitToCelcius(degrees)
    } else if (inputScale === 'celcius') {
        return celciusToFahreneit(degrees)
    } else {
        return 'invalid input'
    }

}

console.log(convertTemperature('celcius', 30));
console.log(convertTemperature('fahrenheit',86));

/*
Event Scheduler - level 3
Objective: Write a function scheduleEvents(events, start) that takes an array of event objects
(each with a name and duration in minutes) and a start time.
The function should return a schedule mapping each event to its start time.
 */

const events = [
    { name: "Meeting", duration: 30 },
    { name: "Workshop", duration: 45 }
];

function scheduleEvents (events,start) {

}