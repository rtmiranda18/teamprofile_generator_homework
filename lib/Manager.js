const Employee = require("./Employee.js");
module.exports = class Manager extends Employee {
  constructor(name, employee_id, email, office_number) {
    super(name, employee_id, email);
    this.office_number = office_number;
  }

  getRole () {
    return "Manager";
  }
}