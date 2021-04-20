module.exports = class Employee {
    constructor(name, employee_id, email) {
        this.name = name;
        this.employee_id = employee_id;
        this.email = email;
        this.role = 0;
        this.office_number = '';
        this.github = '';
        this.school = '';
    }
    getName() {
        let name = this.name;
        return name;
    }

    getId() {
        let employee_id = this.employee_id;
        return employee_id;
    }

    getEmail() {
        let email = this.email;
        return email;
    }

    getRole() {
        let role = this.role;
        return role;
    }
}