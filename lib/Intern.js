const Employee = require("./Employee.js");
class Intern extends Employee {
  constructor(name, employee_id, email, school) {
    super(name, employee_id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;