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
    events.sort((a,b) => a.start - b.start);

    let currentTime = start;
    events.forEach(event => {
        event.startTime = currentTime;
        currentTime += event.duration;
    });

    const schedule = {};
    events.forEach(event => {
        schedule[event.name] = event.startTime;
    });
    return schedule;
}

const start = "9:00";
const result2 = scheduleEvents(events,start);
console.log(result2);

/*
Path Finder - level 3
Objective: Write a function findPath(maze, start, end) that determines a path through a maze.
Description:
The Maze: The maze is represented as a 2D array where each element can either be 0 or 1. A 0
represents an open space where one can move, and a 1 represents a wall which cannot be traversed.
Start and End Points: The start and end parameters are coordinates in the maze, given as an array of two numbers, [rowIndex, columnIndex].
Your function should find a path from the start coordinate to the end coordinate.
Moving Through the Maze: You can move up, down, left, or right, but cannot move diagonally.
Also, you cannot go outside the bounds of the maze.
Return Value: The function should return an array of strings, each string being a move: 'up', 'down', 'left', or 'right'.
This array should represent the sequence of moves that leads from the start to the end point.
If no path is possible, the function can return an indication of this, like null or an empty array.
 */