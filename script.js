$(document).ready(readyNow);

function readyNow () {
$('#infoSubmissionButton').on('click', addInfoToArray);

}

let employeeInfoArray = [];

function addInfoToArray () {
    console.log('✨');
    // let newFirstName = $('#firstNameInput').val();
}

// The application should have an input form that collects:
//  _employee first name, last name, ID number, job title, annual salary

// A 'Submit' button should collect the form information, 
// store the information to calculate monthly costs, append information to 
// the DOM and clear the input fields. 

// Using the stored information, calculate monthly costs and append this to 
// the to DOM. 
// If the total monthly cost exceeds $20,000, add a red background color to the 
// total monthly cost.

// Create a delete button that removes an employee from the DOM. 
// For Base mode, it does **not** need to remove that Employee's salary from the 
// reported total.

    // 1. Create an input form that collects the above parameters w/ a submit button.
    //      a. Submit button grabs form info & stores it (in an array? or object?)
    //      b. Submitted info used to calculate monthly costs
    //      c. Monthly cost total appears on the DOM
    //      d. Input fields are cleared
    // 2. Calculate monthly costs using 1.a.
    //      a. Add these to the DOM
    //      b. If monthly cost total exceeds $20k, field background becomes red
    // 3. Create a delete button that removes employee from DOM
