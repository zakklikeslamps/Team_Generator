const Intern = require("../lib/intern.js");


//Use constructor to set school
test("set school name using constructor arg", () => {
    const name = "UPENN";
    const int = new Intern(name);
    expect(int.name).toBe(name)
});

//getPosition method should return "Intern"

test("get position using getPosition() method", () => {
    const position = "Engineer";
    const int = new Intern("testName", 555, "test@test.com", "GithubZakk");
    expect(int.getPosition()).toBe(position)
})

//getSchool method to retrieve school name
test("get school using getSchool() method", () => {
    const name = "GithubZakk";
    const int = new Intern("testUserName", 555, "test@test.com", name);
    expect(int.getGithub()).toBe(name);
}); 