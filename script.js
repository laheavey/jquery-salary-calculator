$(document).ready(readyNow);

function readyNow () {
    $('#infoSubmissionButton').on('click', addInfo);
    $('body').on('click', '#removeEmployeeButton', removeEmployee);
    $('body').on('click', '#bankruptcy', declareBankruptcy);
    $('body').on('click', '#resetButton', resetPage);
    renderTable ();
    renderCosts();
}

// DUMMY DATA: Left this to make your life easier
let employeeInfoArray = [

    {
        firstName: 'Lauren',
        lastName: 'Heavey',
        idNumber: '1234',
        jobTitle: 'Professional',
        annualSalary: 50000
    },
    {
        firstName: 'Kat',
        lastName: 'Lapitsky',
        idNumber: '10000',
        jobTitle: 'Cool Change Mgmt Consultant!! ',
        annualSalary: 240000
    },
    {
        firstName: 'RiCh LaDy',
        lastName: 'OoOoOoH',
        idNumber: '99',
        jobTitle: 'idk how people make this kind of money',
        annualSalary: 6000000
    }
];

// Takes data from input fields, adds it to array, clears input fields again
function addInfo () {
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

    renderTable ();
    renderCosts ();

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
}

// Grabs info from array and puts it into a table w/ a button. Divides annual salary, 
// formats into USD. Also put some styling in here related to heights.
function renderTable () {
    $('tbody').empty();
    for (let employee of employeeInfoArray) {
        let employeeMonthlySalary = employee.annualSalary / 12;
        let formattedSalary = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(employeeMonthlySalary);
        $('tbody').append(`
        <tr>
            <td id="employeeFirstName">${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${formattedSalary}</td>
            <td class="buttonCell"><button id="removeEmployeeButton">Remove Employee</button></td>
        </tr>
        `);
    }
    $('#costSection').height($('#employeeInputTable').height());
}

// Adds salaries of each employee in array.
let monthlyCosts = 0;
let totalSalaries = 0;
function calculateCosts () {
    totalSalaries = 0;
    for (let employee of employeeInfoArray) {
        totalSalaries += (parseInt(employee.annualSalary)/12);
    }
    monthlyCosts = parseInt(totalSalaries);
    return monthlyCosts;
}

// Runs calculateCosts function, displays total, runs overBudget function
function renderCosts () {
    $('#displayedCost').empty();
    calculateCosts();
    $('#displayedCost').append(`$${monthlyCosts}`);
    overBudget();
}

// Evaluates value of monthlyCosts and alters DOM depending on valuation.
function overBudget () {    
    $('#alertEmojis').empty();
    if (totalSalaries > 20000) {
        $('#displayedCost').css({ "background-color": "#FF1654", "color": "#FFFFFF",});
        $('#displayedCost').append(` 🚨`);
        $('#displayedCost').prepend(`🚨 `);
        if (totalSalaries > 500000) {
            $('#alertEmojis').append(`
            <button id="bankruptcy">Uh-oh</button>
            `);
        }
    } else {
        $('#displayedCost').css({ "background-color": "#E3F2E8", "color": "#0B2832"});
    }
}

// Removes employee from table and array. Runs renderCosts and renderTable functions.
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

// Hides majority of page, reveals surprise element.
function declareBankruptcy () {
    $('main').hide();
    $('#startOver').css({ "display": "block"});
}

// Clears array and resets monthlyCosts total. 
// Displays main page again, hides surprise element. 
function resetPage () {
    $('main').show();
    $('#startOver').css({"display":"none"});
    employeeInfoArray.splice(0,employeeInfoArray.length);
    monthlyCosts = 0;
    renderTable ();
    renderCosts ();
}

// BASE MODE 

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

// STRETCH MODE 

    // ✅ Add styling or extra functionality that fits with the theme of this assignment.

    // ✅ Once the employee is deleted, update the _Total Monthly Cost_ section on the page 
    // to reflect the employee's removal. _HINT:_ You will need to figure out which employee 
    // was removed, in order to subtract their salary from the total. Consider using `.text()` 
    // as a getter, or look into jQuery's `.data()` function. This is tricky!


