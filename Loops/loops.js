/*
Exercise 1: Print Numbers with a For Loop
Write a JavaScript function that uses a for loop to print all numbers from 1 to 10.
 */
for (i=0; i < 10; i++) {
    console.log(i + 1);
}

/*
Exercise 2: Calculate the Sum of Numbers
Write a JavaScript function that calculates the sum of all numbers from 1 to 10 using a while loop. Store the result in a variable and then print the sum at the end.
 */
function sumNumber() {
    let i = 1;
    let sum = 0;
    while (i <= 10) {
        sum = sum + i;
        i++;
    }
    return sum;
}
console.log(sumNumber());

/*
Exercise 3: Count Down with a For Loop
Write a JavaScript function that uses a for loop to count down from 10 to 1 and print each number.
 */
for (i = 10; i >= 1; i--) {
    console.log(i);
}

/*
Exercise 4: Print Even Numbers with a While Loop
Write a JavaScript function that uses a while loop to print all even numbers from 1 to 20.
 */
function evenNumbers () {
    let i= 2;
    let limit = 20
    while (i <= limit) {
        console.log(i);
        i+= 2;
    }
}

evenNumbers();

/*
Exercise 5: Reverse a String with a For Loop
Write a JavaScript function that takes a string as input and uses a for loop to print the characters of the string in reverse order. For example, if the input is "hello,"
 */
function reverseString () {
    let original = "Hello";
    let reversed = "";
    for (let i = original.length - 1; i >= 0; i--) {
        reversed += original[i];
    }
    console.log(reversed);
}
reverseString();

/*
Exercise 1: Print Multiplication Table
Write a JavaScript function that uses a for loop to print the multiplication table for a given number. Prompt the user to enter a number, and then print the multiplication table for that number from 1 to 10. For example, if the user enters 5
 */
function multiplicationTable () {
    let number = parseInt(prompt("Write a number"));
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}
multiplicationTable();

/*
Exercise 2: Calculate Factorial
Write a JavaScript function that calculates the factorial of a number using a for loop.
Prompt the user to enter a number, and then use a for loop to calculate and print the factorial of that number.
The factorial of a non-negative integer n is denoted as n! and is the product of all positive integers from 1 to n.
For example, 5! (read as "five factorial") is equal to 5 x 4 x 3 x 2 x 1 = 120.
 */

function factorial () {
    let number = parseInt(prompt("Select a number"))
    if (number === 0 || number === 1)
        return 1;
    for (let i = 2; i <= number; i++) {
        number *= i;
    }
    return number;
}




