const Manager = require("../lib/engineer.js");


//Use constructor to set office #
test("set office number using constructor arg", () => {
    const name = 182;
    const man = new Manager("testName", 555, "test@test.com", name);
    expect(man.getOfficeNumber()).toBe(name)
});

//getPosition method should return "Engineer"

test("get position using getPosition()", () => {
    const position = "Manager";
    const man = new Manager("testName", 555, "test@test.com", 182);
    expect(man.getPosition()).toBe(position)
})

//getGithub method to retrieve github username 
test("get office number using getOfficeNumber() method", () => {
    const name = 182;
    const man = new Manager("testUserName", 555, "test@test.com", 182);
    expect(man.getGithub()).toBe(name);
}); 