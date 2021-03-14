const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.title = "Engineer"
    }

    getGithub() {
        return this.github;
    }

    getPosition() {
        return "Engineer";
    }

};

module.exports = Engineer; 