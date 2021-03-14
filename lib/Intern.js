const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.title = "Intern"
    }

    getSchool() {
        return this.school;
    }

    getPosition() {
        return "Intern";
    }

};

module.exports = Intern;