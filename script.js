$(document).ready(readyNow);

function readyNow () {
    $('#infoSubmissionButton').on('click', addInfo);
    $('body').on('click', '#removeEmployeeButton', removeEmployee);

    renderTable ();
    renderCosts();

}

let employeeInfoArray = [
    // DUMMY DATA
    // {
    //     firstName: 'Lauren',
    //     lastName: 'Heavey',
    //     idNumber: '1234',
    //     jobTitle: 'professional',
    //     annualSalary: 450000
    // }
];

function addInfo () {
    // console.log('✨');
    let newFirstName = $('#firstNameInput').val();
    let newLastName = $('#lastNameInput').val();
    let newIDNumber = $('#employeeIDInput').val();
    let newJobTitle = $('#jobTitleInput').val();
    let newAnnualSalary = $('#annualSalaryInput').val();

    let employeeInfoObject = {
        firstName: newFirstName,
        lastName: newLastName,
        idNumber: newIDNumber,
        jobTitle: newJobTitle,
        annualSalary: newAnnualSalary
    }

    employeeInfoArray.push(employeeInfoObject);
    // console.log(employeeInfoArray);
    renderTable ();
    renderCosts ();

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');


}

function renderTable () {
    // console.log('🫧')
    $('tbody').empty();
    for (let employee of employeeInfoArray) {
        $('tbody').append(`
        <tr>
            <td id="employeeFirstName">${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td><button id="removeEmployeeButton">Remove Employee</button></td>
        </tr>
        `)
    }
}

let monthlyCosts = 0;

function calculateCosts () {
    let totalSalaries = 0
    for (let employee of employeeInfoArray) {
        totalSalaries += parseInt(employee.annualSalary);
        // console.log(monthlyCosts);
    }
    monthlyCosts = parseInt(totalSalaries);
    return monthlyCosts;
}

function renderCosts () {
    $('#displayedCost').empty();
    calculateCosts();
    // Number(monthlyCosts);
    $('#displayedCost').append(`$${monthlyCosts}`);
    overBudget();
}

function overBudget () {    
    if (monthlyCosts > 20000) {
        $('#displayedCost').css({ "background-color": "red"});
    }
}

function removeEmployee () {
    let buttonLineFirstName = $(this).closest('tr').children('#employeeFirstName').text();
    let remainingEmployees = [];
    for (let employee of employeeInfoArray) {
        if (buttonLineFirstName !== employee.firstName) {
            remainingEmployees.push(employee);
        } 
    }
    employeeInfoArray = remainingEmployees;
    renderTable(); 
    renderCosts();
}

// BASE MODE 🅱️

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

    // 1. ✅ Create an input form that collects the above parameters w/ a submit button.
    //      a. ✅ Submit button grabs form info & stores it (in an array? or object?)
    //      b. ✅ Info added to table on the DOM
    //      c. ✅ Input fields are cleared
    // 2. Calculate monthly costs using 1.a.
    //      a. ✅ Add these to the DOM
    //      b. ✅ If monthly cost total exceeds $20k, field background becomes red
    // 3. ✅ Create a delete button that removes employee from DOM

// STRETCH MODE 🙆‍♀️

// Add styling or extra functionality that fits with the theme of this assignment.

// Once the employee is deleted, update the _Total Monthly Cost_ section on the page 
//to reflect the employee's removal. _HINT:_ You will need to figure out which employee 
//was removed, in order to subtract their salary from the total. Consider using `.text()` 
//as a getter, or look into jQuery's `.data()` function. This is tricky!


