const Employee = require("./Employee.js");
class Engineer extends Employee {
  constructor(name, employee_id, email, github) {
    super(name, employee_id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole () {
    return "Engineer";
  }
}
module.exports = Engineer;