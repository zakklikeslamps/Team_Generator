const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./assets/style.css");
const {clear} = require("console");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const {countListener} = require("events");
//const Choices = require("inquirer/lib/objects/choices");

let finalTeam = [];

function init() {
    inquirer.prompt([
        {
        type: 'input',
        message: "Welcome! Please insert your Team Name.",
        name: "teamName"
        }
    ])
    .then(function (data) {
        let teamName = data.teamName
        finalTeam.push(teamName)
        addManager();
    })
}

function addManager() {
    inquirer.prompt([
        {
        type: 'input',
        message: "What is your manager's name?",
        name: "name"
        },

        {
        type: 'input',
        message: "What is your manager's email address?",
        name: "email"
        },

        {
        type: 'input',
        message: "What is your manager's office number?",
        name: "officeNumber"
        }
    ])
    .then(function (data) {
        console.log('DATA --> ', data)
        const name = data.name
        const email = data.email
        const office = data.officeNumber
        //ERROR V
        const newMember = new Manager(name, email, office);
        console.log('NEW MEMBER ---> ', newMember)
        finalTeam.push(newMember)
        addMembers();
    })
}

    function addMembers() {
        inquirer.prompt([{
            type: "list",
            message: "Do you have more team members to add?",
            choices: ["Yes: Add Engineer", "Yes: Add Intern", "No: Team is complete"],
            name: "memberData"   
            }
        ])
        
        .then(function (data) {
            switch (data.memberData) {
                case "Yes: Add Engineer":
                    addEngineer();
                    break;

                case "Yes: Add Intern":
                    addIntern();
                    break;

                case "No: Team is complete":
                    buildTeam();
                    break;
            }
        })
    }

    function addEngineer() {
        inquirer.prompt([
            {
            type: 'input',
            message: "What is your engineer's name?",
            name: "name"
            },
    
            {
            type: 'input',
            message: "What is your engineer's email address?",
            name: "email"
            },
    
            {
            type: 'input',
            message: "What is your engineer's Github account?",
            name: "github"
            }
        ])
    
        .then(function (data) {
            const name = data.name
            const id= 02
            const email = data.email
            const office = data.office
            const newMember = new Engineer(name, id, email, office)
            finalTeam.push(newMember)
            addMembers();
            })
    }

    function addIntern() {
        inquirer.prompt([
            {
            type: 'input',
            message: "What is your intern's name?",
            name: "name"
            },
    
            {
            type: 'input',
            message: "What is your intern's email address?",
            name: "email"
            },
    
            {
            type: 'input',
            message: "What school does your intern attend?",
            name: "school"
            }
        ])
    
        .then(function (data) {
            const name = data.name
            const id= 03
            const email = data.email
            const office = data.office
            const newMember = new Intern(name, id, email, office)
            finalTeam.push(newMember)
            addMembers();
            })
    }

    function buildTeam() {
        console.log("You have done well. The emperor will be most pleased with you. ")

        let buildHtml = []
        let htmlStart = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
        crossorigin="anonymous"/>

        <link rel="stylesheet" href="./dist/style.css" />
        <title>${finalTeam[0]}</title>
        </head>

        <body>
        <div class="banner-bar">
        <h1>${finalTeam[0]}</h1>
        </div>

        <div class="card-container">
        `
        buildHtml.push(htmlStart);
        for (let i = 1; i < finalTeam.length; i++) {
            let object = `
            <div class="card-container">
            <div class="card-top">
            <h2>${finalTeam[i].name}</h2>
            <h2>${finalTeam[i].title}</h2>
            </div>
            <div class="card-bottom">
            <p>Employee ID: ${finalTeam[i].id}</p>
            <p>
              email: <a href="mailto:${finalTeam[i].email}">${finalTeam[i].email}</a>
              <a href="https://github.com/${finalTeam[i].github}"
                >${finalTeam[i].github}</a>
            </p>
            `
            if (finalTeam[i].officeNumber) {
                object += `<p>officeNumber: ${finalTeam[i].officeNumber}</p>
                `
            }

            if (finalTeam[i].github) {
                object += `<p>github: <a href="https://github.com/${finalTeam[i].github}">${finalTeam[i].github}</p>
                `
            }

            if (finalTeam[i].school) {
                object += `<p>school: ${finalTeam[i].school}</p>
                `
            }

            object += `
            </div>
            </div>
            `

            buildHtml.push(object);
        }

        const htmlEnd = `
        </div>
        </body>
        </html>
        `

        buildHtml.push(htmlEnd);
        fs.writeFile(`./dist/${finalTeam[0]}.html`, buildHtml.join(""), function(err) {

        })
    }

    init()
    
        /*function addMembers() {
            inquirer.prompt([{
                type: "list",
                message: "Do you have more team members to add?",
                choices: ["Yes: Add Engineer", "Yes: Add Intern", "No: Team is complete"],
                name: "memberData"   
                }
            ])
            
            .then(function (data) {
                switch (data.memberData) {
                    case "Yes: Add Engineer":
                        addEngineer();
                        break;
    
                    case "Yes: Add Intern":
                        addIntern();
                        break;
    
                    case "No: Team is complete":
                        buildTeam();
                        break;
                }
            })
        }*/



    
