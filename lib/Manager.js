const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email)
        this.officeNumber = officeNumber;
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