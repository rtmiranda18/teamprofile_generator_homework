const Employee = require("./Employee.js");
module.exports = class Intern extends Employee {
  constructor(name, employee_id, email, school) {
    super(name, employee_id, email);
    this.school = school;
    this.role = 3;
    this.office_number = '';
    this.github = '';
  }

  getSchool() {
    let school = this.school;
    return school;
  }

  getRole() {
    let role = this.role;
    return role;
  }
}