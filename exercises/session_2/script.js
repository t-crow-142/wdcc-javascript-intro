/* 
    Session 2
    Example and exercises

    WDCC JavaScript Workshop | 07/05/2022 | Created by Tyne Crow
*/

const heading = document.getElementById("top");
console.log(heading);

/* Get required element references */
const exampleButton = document.getElementById("runExample");
const exerciseButton = document.getElementById("runExercise");
const exerciseTwoButton = document.getElementById("runExerciseTwo");

/* Add required click event listeners */
exampleButton.addEventListener("click", runExample);
exerciseButton.addEventListener("click", runExercise);
exerciseTwoButton.addEventListener("click", runExerciseTwo);


/* runExample function: all code inside of the curly braces will run when 'Run example' button is clicked*/
function runExample(){
    console.log("Running example...");
    
    /* Array of data for this example */
    const rainfall = [23,45,12,0,34,-6,56];

    /* Get required element references */
    const displayExample = document.getElementById("displayExample");
    const rainfallList = document.getElementById("rainfallList");
    const totalDisplay = document.getElementById("total");
    const averageDisplay = document.getElementById("average");

    /* Create variable to store the total that is calculated */
    let totalRainfall = 0;
    let validMeasurements = 0;
    
    /* Loop through all values in the array */
    for (let i = 0; i < rainfall.length; i++) {
        /* Check that numbers are not negative */
        if (rainfall[i] >= 0){
            /* If the numbers are not negative, add to total */
            totalRainfall += rainfall[i];
            /* Increment valid measurements */
            validMeasurements++;
        }
    }

    /* Use the calculated total and number of valid measurements to calculate the average */
    const average = totalRainfall / validMeasurements;

    /* Loop through all numbers in the array to display them in the list items */
    for (let i = 0; i < rainfall.length; i++) {
        /* Check that numbers are not negative */
        if (rainfall[i] >= 0){
            /* If the numbers are not negative, add as item to the list */
            rainfallList.innerHTML += `<li> Item ${i + 1}: ${rainfall[i]}</li>`;
        }
    }
    /* Note: the list items could have been generated within the first loop so you could do this without the use of the second loop */

    /* Display the total and average: */
    totalDisplay.innerText += totalRainfall;
    averageDisplay.innerText += average;

}





/* runExercise function: all code inside of the curly braces will run when 'Run exercise' button is clicked*/
function runExercise(){
    console.log("Running exercise...");
    
    const languages = ["HTML","CSS","JavaScript"];
    const descriptions = [
        "HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet. Each retrieval unit is known as a Web page (from World Wide Web), and such pages frequently contain hypertext links that allow related pages to be retrieved.",
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
        "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well."
    ];

    /* WRITE YOUR CODE FOR THE EXERCISE HERE: */


}
/* Do NOT write code for the exercise outside of the curly braces */


/* runExerciseTwo function: all code inside of the curly braces will run when 'Run exercise' button is clicked*/
function runExerciseTwo(){
    console.log("Running exercise two...");

    const emotions = ["admiration","adoration","amusement","anger","anxiety","awe","awkwardness","boredom","calmness","confusion","craving","disgust","fear","horror","joy","nostalgia","sadness","happiness"];

    const adjectives = ["agreeable","alert","alive","amused","angry","annoyed","annoying","anxious","arrogant","ashamed","attractive","average","awful","bad","beautiful","better", "bewildered","black","bloody","blue","blue-eyed","blushing","bored","brainy","brave","breakable","bright","busy"];

    const nouns = ["goldfish","form","goose","chicken","face","library","circle","guitar","kitten","worm","carrot","cannon","boat","wombat","spoon","sock"];

    const verbs = ["dancing","shouting","shaking","twisting","singing","waddling","meowing","shivering","barking","slithering"];

    const adverbs = ["boldly","bravely","brightly","cheerfully","deftly","devotedly","eagerly","elegantly","faithfully","fortunately","achingly","angrily","annoyingly","anxiously","badly"];

    const locations = ["on top of the highest mountain","in the darkest depths of the sea","inside a small box","alone at a bus stop","behind the refridgerator"];

    /* WRITE YOUR CODE FOR THE EXERCISE HERE: */



}
/* Do NOT write code for the exercise outside of the curly braces */