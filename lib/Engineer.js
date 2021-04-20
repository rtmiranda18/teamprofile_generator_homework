const Employee = require("./Employee.js");
module.exports = class Engineer extends Employee {
  constructor(name, employee_id, email, github) {
    super(name, employee_id, email);
    this.name = this.getName();
    this.employee_id = employee_id;
    this.email = email;
    this.github = github;
    this.office_number = '';
    this.school = '';
    this.role = 2;
  }

  getGithub() {
    let github = this.github;
    return github;
  }

  getRole() {
    let role = this.role;
    return role;
  }
}