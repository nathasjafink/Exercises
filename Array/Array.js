/*
Exercise 1: Array Sum
Write a function that takes an array of numbers as input,
and returns the sum of all the numbers in the array.
 */
function arraySum (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    console.log(sum);
    return sum;
}
arraySum([5,10,15,20,25]);

/*
Exercise 2: Array Max
Write a function that takes an array of numbers as input,
and returns the maximum number in the array.
 */
function arrayMax () {
    let array = [1,3,5,7,9];
    let maxvalue = Math.max(...array);
    console.log("Max:", maxvalue);
}
arrayMax();

/*
Exercise 3: Array Average
Write a function that takes an array of numbers as input,
and returns the average of those numbers.
 */

function arrayAvg (array) {
    let sum = 0;
    array.forEach(number => sum += number);
    let average = sum / array.length;
    return average;
}

console.log(arrayAvg([1,5,4]));

/*
Exercise 4: Array Filter
Write a function that takes an array of numbers as input,
and returns a new array containing only the even numbers from the input array.
 */
function arrayFilter (value) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i] % 2 === 0) {
            result.push(value[i]);
        }
    }
    return result;
}

const filteredNumbers = arrayFilter([1,2,3,4,5,6,7,8,9,10]);
console.log(filteredNumbers);

/*
Exercise 5: Array Reversal
Write a function that takes an array as input,
and returns a new array with its elements reversed.
 */
function arrayReversal (array2) {
    const reversed = array2.reverse();
    return reversed;
}
const originalArray = [1,2,3,4,5];
const reversedArray = arrayReversal(originalArray);
console.log(reversedArray);