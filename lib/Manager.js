const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.title = "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getPosition() {
        return "Manager";
    }

};

module.exports = Manager;