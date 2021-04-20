// const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require('inquirer');
const fs = require('fs');
const userTypes = [
    { id: 0, name: 'Employee', icon: '' },
    { id: 1, name: 'Manager', icon: '' },
    { id: 2, name: 'Engineer', icon: '' },
    { id: 3, name: 'Intern', icon: '' },
];
let employees = [];
let manager_question = [];
let engineer_question = [];
(async () => {
    manager_question = await inquirer.prompt([
        {
            type: 'input',
            message: 'Manager\'s Name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'employee_id'
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email' },
        {
            type: 'input',
            message: 'Office Number:',
            name: 'office_number'
        },
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'todo',
            choices: ['Add Engineer', 'Add Intern', 'Build my TEAM']
        },
    ]);
            name: 'office_number'
    const { name, employee_id, email, office_number } = manager_question;
    const manager = new Manager(name, employee_id, email, office_number);
    const manager_role = userTypes.find(user => user.id == manager.role);
    employees.push({
        name: manager.name,
        employee_id: manager.employee_id,
        email: manager.email,
        role: manager_role.name,
        office_number: manager.office_number
    });
    if(manager_question.todo == 'Add Engineer'){
        engineer_question = await inquirer.prompt([
            {
                type: 'input',
                message: 'Engineer\'s Name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Employee ID:',
                name: 'employee_id'
            },
            {
                type: 'input',
                message: 'Email:',
                name: 'email' },
            {
                type: 'input',
                message: 'Github:',
                name: 'github'
            },
            {
                type: 'list',
                message: 'What do you want to do?',
                name: 'todo',
                choices: ['Add Engineer', 'Add Intern', 'Build my TEAM']
            },
        ]);
        const { name, employee_id, email, github } = engineer_question;
        const engineer = new Engineer(name, employee_id, email, github);
        const engineer_role = userTypes.find(user => user.id == engineer.role);
        employees.push({
            name: engineer.name,
            employee_id: engineer.employee_id,
            email: engineer.email,
            role: engineer_role.name,
            github: engineer.github
        });
        // employees.push(engineer_question);
    }else if(manager_question.todo == 'Add Intern'){
        intern_question = await inquirer.prompt([
            {
                type: 'input',
                message: 'Intern\'s Name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Employee ID:',
                name: 'employee_id'
            },
            {
                type: 'input',
                message: 'Email:',
                name: 'email' },
            {
                type: 'input',
                message: 'school:',
                name: 'school'
            },
            {
                type: 'list',
                message: 'What do you want to do?',
                name: 'todo',
                choices: ['Add Engineer', 'Add Intern', 'Build my TEAM']
            },
        ]);
        const { name, employee_id, email, school } = intern_question;
        let intern = new Intern(name, employee_id, email, school);
        const intern_role = userTypes.find(user => user.id == intern.role);
        employees.push({
            name: intern.name,
            employee_id: intern.employee_id,
            email: intern.email,
            role: intern_role.name,
            github: intern.github
        });
        // employees.push(engineer_question);
    }
    // console.log(manager_question);
    // console.log(engineer_question);
    // console.log(employees);
    return employees;
  })()
//   .prompt(questions)
  .then(response => {
    writeUp(response);
});
const writeUp = (data) => {
    console.log(data);
    let employees_list = getEmployees(data);
fs.writeFile("dist/index.html", ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Generator</title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <div id="wrapper">
        <div id="header">
            My Team
        </div>
        <div id="listBoxes">
            ${employees_list}
        </div>
    </div>
</body>
</html>
    
    `, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generating index.html...");
        }
    });
}

function getEmployees(employees){
    return employees.map(employee => `
        <div class="box">
            <div class="employee">
                <div class="topBlue">
                    <div class="name">${employee.name}</div>
                    <div class="jobTitle">${employee.role}</div>
                </div>
                <div class="bottomGray">
                    <ul>
                        <li>
                            <strong>ID:</strong>&nbsp;
                            <div class="idnumber">${employee.employee_id}</div>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:${employee.email}" class="email">${employee.email}</a>
                        </li>
                        ${getAdditionalProperties(employee)}
                    </ul>
                </div>
            </div>
        </div>
    `).join("");
}

function getAdditionalProperties(employee){
    let { role, office_number, github, school } = employee;
    let newProperty = {}
    switch (role) {
        case 'Manager':
            newProperty = {
                name: 'Office Number',
                property: office_number
            };
            break;
        case 'Engineer':
            newProperty = {
                name: 'Github',
                property: '<a href="https://github.com/'+github+'" target="_blank">'+github+'</a>'
            };
            break;
        case 'Intern':
            newProperty = {
                name: 'School',
                property: school
            };
            break;
    }
    return '<li><strong>'+newProperty.name+':</strong> <div class="school">'+newProperty.property+'</div></li>';
}