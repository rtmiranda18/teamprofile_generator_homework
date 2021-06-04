const generateManager = (manager) => {
    return `
        <div class="box">
            <div class="employee">
                <div class="topBlue">
                    <div class="name">${manager.name}</div>
                    <div class="jobTitle">Manager <img src="svgs/manager.svg" alt="Manager" /></div>
                </div>
                <div class="bottomGray">
                    <ul>
                        <li>
                            <strong>ID:</strong>&nbsp;
                            <div class="idnumber">${manager.employee_id}</div>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:${manager.email}" class="email">${manager.email}</a>
                        </li>
                        <li>
                            <strong>Office Number:</strong>
                            <p>${manager.office_number}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

const generateEngineer = (engineer) => {
    return `
        <div class="box">
            <div class="employee">
                <div class="topBlue">
                    <div class="name">${engineer.name}</div>
                    <div class="jobTitle">Engineer <img src="svgs/engineer.svg" alt="Engineer" /></div>
                </div>
                <div class="bottomGray">
                    <ul>
                        <li>
                            <strong>ID:</strong>&nbsp;
                            <div class="idnumber">${engineer.employee_id}</div>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:${engineer.email}" class="email">${engineer.email}</a>
                        </li>
                        <li>
                            <strong>Github:</strong>
                            <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

const generateIntern = (intern) => {
    return `
        <div class="box">
            <div class="employee">
                <div class="topBlue">
                    <div class="name">${intern.name}</div>
                    <div class="jobTitle">Intern <img src="svgs/intern.svg" alt="Intern" /></div>
                </div>
                <div class="bottomGray">
                    <ul>
                        <li>
                            <strong>ID:</strong>&nbsp;
                            <div class="idnumber">${intern.employee_id}</div>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:${intern.email}">${intern.email}</a>
                        </li>
                        <li>
                            <strong>School:</strong>
                            <p>${intern.school}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

const generatePage = function (employees_list) {   
    return ` 
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
    </html>`
}

const generateHTML = (data) => {

    teamComposition = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        /* Call Manager Method */
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            teamComposition.push(managerCard);
        }

        /* Call Engineer Method */
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            teamComposition.push(engineerCard);
        }

        /* Call Intern Method */
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            teamComposition.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = teamComposition.join('')

    // return to generated page
    const generateTeam = generatePage(employeeCards); 
    return generateTeam;

}

module.exports = generateHTML; 