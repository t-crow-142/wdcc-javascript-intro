/* 
    Session 1
    Example and exercises

    WDCC JavaScript Workshop | 07/05/2022 | Created by Tyne Crow
*/

/* Get required element references */
const exampleButton = document.getElementById("runExample");
const exerciseButton = document.getElementById("runExercise");

/* Add required click event listeners */
exampleButton.addEventListener("click", runExample);
exerciseButton.addEventListener("click", runExercise);

/* runExample function: all code inside of the curly braces will run when 'Run example' button is clicked*/
function runExample(){
    console.log("Running example...");

    /* Get required element references */
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const titleInput = document.getElementById("title");
    const ageInput = document.getElementById("age");

    const displayExample = document.getElementById("displayExample");

    /* Get values of inputs */
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const title = titleInput.value;
    const age = ageInput.value;

    /* Calculate age in dog years */
    const dogYears = parseFloat(age) * 7;

    /* Generate welcome message */
    const welcomeMessage = `Welcome ${title} ${firstName} ${lastName}; you are ${dogYears} years old in dog years.`;

    displayExample.innerText = welcomeMessage;


}

/* runExample function: all code inside of the curly braces will run when 'Run exercise' button is clicked*/
function runExercise(){
    console.log("Running exercise...");
    /* WRITE YOUR CODE FOR THE EXERCISE HERE: */
    


}
/* Do NOT write code for the exercise outside of the curly braces */