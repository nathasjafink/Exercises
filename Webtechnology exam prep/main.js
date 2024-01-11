/*
Question 1:
Create an HTML page with 2 input fields and a button.
The first input should be related to age, the other to a name.
When clicking the button, the text "clicked on button" should be logged to the console.
Log out the age and the name entered in the input fields. If the age is larger than 40,
render to the page the string "You are old".
If the age is less than 40, render "You are young".
 */

const btn = document.querySelector('#btn');
const resultDiv = document.querySelector('#result-div');

function ageAndNameLogged () {
    const inputAge = document.querySelector('#age').value;
    const inputName = document.querySelector('#name').value;

    console.log(inputAge,inputName);

    if (inputAge < 40) {
        const ptag = document.createElement('p');
        ptag.textContent = 'You are young';
        resultDiv.innerHTML = "";
        resultDiv.appendChild(ptag);
    } else if (inputAge > 40) {
        const ptag = document.createElement('p');
        ptag.textContent = 'You are old';
        resultDiv.innerHTML = "";
        resultDiv.appendChild(ptag);
    }
}

btn.addEventListener('click', function () {
    console.log('Clicked on button');
    ageAndNameLogged();
});

/*
Question 2:
Create a function that, when called, visualizes a line chart with the following data:
const ages = [4, 23, 26, 28, 67];
When clicking a button, change the background color of the page.
 */
const dataAges = [4, 23, 26, 28, 67];
const btnChangesColour = document.querySelector('#btn2');
function createChart () {
    const ctx = document.querySelector('#chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Views',
                data: dataAges,
                borderColor: 'darkblue',
                backgroundColor: 'black'
            }],
            labels: dataAges.map((_, index) => 2018 + index * 2),
        }
    });
}
createChart()
btnChangesColour.addEventListener('click', function () {
    document.body.style.backgroundColor = "lightblue";
});


/*
Question 3:
Create a function called arrayAdder that takes two parameters: an array of numbers and a number.
Add the number to all numbers in the array. Return the new array with the added number.
Render the first element of the array to the page.

Here is an example:

const newAddedArray = arrayAdder([3, 4, 8], 2);
console.log(newAddedArray); // [5, 6, 10]
 */

function arrayAdder (arrayOfNumbers, numberToAdd) {
    const newArray = arrayOfNumbers.map(num => num + numberToAdd);
    return newArray;
}

function renderFirstElement (array) {
    const resultDiv = document.querySelector('#result');
    const pTag = document.createElement('p');
    resultDiv.innerHTML = "";
    pTag.textContent = array[0];
    resultDiv.appendChild(pTag);
}

const newAddedArray = arrayAdder([3, 4, 8], 2);
renderFirstElement(newAddedArray);
console.log(newAddedArray);

/*
Question 4:
Create a function called waiter that takes the number of seconds to wait.
When waiter is called, it should wait for the specified number of seconds
and log out "Done with waiting" to the console.
Instead of logging "Done with waiting," log out "Waited NUMBER_OF_SECONDS,"
where NUMBER_OF_SECONDS is the number the function is called with.
Instead of just calling waiter when the script is loaded, call the function when a button is clicked.
 */

function waiter (numberOfSeconds) {
    setTimeout(function () {
        console.log('Waited ' + numberOfSeconds + ' Seconds');
    }, numberOfSeconds * 1000);
}

document.querySelector('#wait-btn').addEventListener('click', function () {
    waiter(1);
})


/*
Question 5:
The following API endpoint: https://dog.ceo/dog-api/documentation/ is related to dogs.
Fetch the data from this endpoint, log out the data structure, and answer the following questions:

How many breeds of retriever are there?
Render the first breed name to the page.
 */

function fetchDogDataReteriever () {
    fetch('https://dog.ceo/dog-api/')
        .then(response => {
            console.log("response Status", response);
            return response.json();
        })
        .then(dogData => {
            console.log("Api response", dogData);
        })
}
fetchDogDataReteriever()