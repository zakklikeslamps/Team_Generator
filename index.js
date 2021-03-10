const inquirer = require("inquirer");
const fs = require("fs");
const style= require("./dist/style");
const { clear } = require("console");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const { countListener} = require("events");
const Choices = require("inquirer/lib/objects/choices");

let fullTeam = [];

function init() {
    inquirer.prompt([{
        message: "Welcome! Please insert your Team Name.",
        name: "teamName"
    }
    ])

    .then(function (data) {
    let teamName = data.teamName
    fullTeam.push(teamName)
    addManager();
    })
}

function addManager() {
    inquirer.prompt([
        {
        message: "What is your manager's name?",
        name: "name"
        },

        {
        message: "What is your manager's email address?",
        name: "email"
        },

        {
        message: "What is your manager's office number?",
        name: "office"
        }
    ])

    .then(function (data) {
        const name = data.name
        const id= 01
        const email = data.email
        const office = data.office
        const newMember = new Manager(name, id, email, office)
        fullTeam.push(newMember)
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
            message: "What is your engineer's name?",
            name: "name"
            },
    
            {
            message: "What is your engineer's email address?",
            name: "email"
            },
    
            {
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
            fullTeam.push(newMember)
            addMembers();
            })
    }

    function addIntern() {
        inquirer.prompt([
            {
            message: "What is your intern's name?",
            name: "name"
            },
    
            {
            message: "What is your intern's email address?",
            name: "email"
            },
    
            {
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
            fullTeam.push(newMember)
            addMembers();
            })
    }

    function buildTeam() {
        console.log("You have done well. The emperor will be most pleased with you. ")
    }
    
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



    init()
