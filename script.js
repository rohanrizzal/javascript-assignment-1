// Function to determine if a number is a multiple of 5
function isMultipleOfFiveChecker(value) {
    return value % 5 === 0; // Check if the number is a multiple of 5
}

// Prompt the user to enter a number
const userNumberInput = prompt("Please input a number:"); // Get user input
const convertedNumber = Number(userNumberInput); // Convert the input to a number

// Validate the user input for multiples of 5
if (!isNaN(convertedNumber)) {
    // Check if the number is a multiple of 5 and output the result
    if (isMultipleOfFiveChecker(convertedNumber)) {
        console.log(`${convertedNumber} is a multiple of 5.`); // Output if it is a multiple
    } else {
        console.log(`${convertedNumber} is not a multiple of 5.`); // Output if it is not a multiple
    }
} else {
    console.log("Invalid input. Please enter a valid number."); // Error message for invalid input
}

// Function to assign grades based on scores
function assignGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 70 && score < 80) {
        return "B";
    } else if (score >= 60 && score < 70) {
        return "C";
    } else if (score >= 50 && score < 60) {
        return "D";
    } else if (score >= 0 && score < 50) {
        return "F";
    } else {
        return "Invalid score"; // Handle invalid scores (like negative numbers or greater than 100)
    }
}

// Test the grading function
const studentScoreInput = prompt("Enter the student's score: "); // Get input from the user
const studentScore = Number(studentScoreInput); // Convert input to a number

// Validate the student score input
if (!isNaN(studentScore)) {
    const grade = assignGrade(studentScore); // Get the grade
    console.log(`The grade for a score of ${studentScore} is: ${grade}`); // Output the grade
} else {
    console.log("Please enter a valid number."); // Error message for invalid input
}
