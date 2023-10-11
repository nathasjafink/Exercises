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

