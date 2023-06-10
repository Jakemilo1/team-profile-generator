name = "John";
id = 1;
email = "John@bootcampemail.com";
role = "";

class Employee {
    constructor() {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return role = "Employee";
    }
};

module.exports = Employee;