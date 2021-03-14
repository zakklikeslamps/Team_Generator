const Employee = require("../lib/employee.js");

//Test that Employee is an object
test("Is employee an object?", () => {
    const noob = new Employee;
    expect(typeof(noob)).toBe("object");
});

//Constructor sets name, id, email
test("set name using constructor arg", () => {
    const name = "Zakk";
    const noob = new Employee(name);
    expect(noob.name).toBe(name)

});

test(" set id using constructor arg", () => {
    const id = 555;
    const noob = new Employee("testName", id);
    expect(noob.id).toBe(id);
})

test(" set email using constructor arg", () => {
    const email = "test@test.com";
    const noob = new Employee("testName", 1, email);
    expect(noob.email).toBe(email)
})

//Use getName method to get name
test("get name using getName"(), () => {
    const name = "Zakk";
    const noob = new Employee(name);
    expect(noob.getName()).toBe(name)
})

//Use getId method to get id
test("get id using getId"(), () => {
    const id = 555;
    const noob = new Employee("testName", id);
    expect(noob.getId()).toBe(id)
})

//Use getEmail method to get email
test("get email using getEmail"(), () => {
    const email = "test@test.com";
    const noob = new Employee("testName", email);
    expect(noob.getEmail()).toBe(email)
})

//Use getPosition method to get position
test("get position using getPosition"(), () => {
    const position = "Employee";
    const noob = new Employee("testName", 555, "test@test.com");
    expect(noob.getPostition()).toBe(position)
})