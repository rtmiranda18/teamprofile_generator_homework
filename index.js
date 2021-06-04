const generateComponent = require('./src/Helper');

// const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require('inquirer');
const fs = require('fs');

let employees = [];

const addEmployee = async () => {
    const employeeQuestions = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Add Team Member:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:"
        },
        {
            type: 'input',
            name: 'github',
            message: "Github:",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "School:",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ]).then(results => {
        let { name, id, email, role, github, school, confirmAddEmployee } = results; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            // console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            // console.log(employee);
        }

        employees.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(employees); 
        } else {
            return employees;
        }
    });
    return employeeQuestions;
}

const addManager = async () => {
    const managerQuestions = await inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Manager\'s Name:', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Office Number:"
        }
    ])
    .then(results => {
        const  { name, id, email, officeNumber } = results; 
        const manager = new Manager(name, id, email, officeNumber);

        employees.push(manager); 
        // console.log(manager); 
    });
    return managerQuestions;
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile is successfully created!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(results => {
    return generateComponent(results);
  })
  .then(page => {
    return writeFile(page);
  })
  .catch(err => {
    console.log(err);
});