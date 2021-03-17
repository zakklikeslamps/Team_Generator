class Employee {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
    getName(){
        return this.name;
    }

   

    getEmail(){
        return this.email;
    }

    getPosition(){
        return "Employee";
    }
};

module.exports = Employee;