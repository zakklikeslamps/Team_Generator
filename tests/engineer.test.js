const Engineer = require("../lib/engineer.js");


//Use constructor to set Github username
test("set github username using constructor arg", () => {
    const name = "GithubZakk";
    const eng = new Engineer(name);
    expect(eng.name).toBe(name)
});

//getPosition method should return "Engineer"

test("get position using getPosition()", () => {
    const position = "Engineer";
    const eng = new Engineer("testName", 555, "test@test.com", "GithubZakk");
    expect(eng.getPosition()).toBe(position)
})

//getGithub method to retrieve github username 
test("get Github username using getGithub() method", () => {
    const name = "GithubZakk";
    const eng = new Engineer("testUserName", 555, "test@test.com", name);
    expect(eng.getGithub()).toBe(name);
}); 