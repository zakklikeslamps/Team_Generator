const inquirer = require("inquirer");
const fs = require("fs");
const stule= require("./dist/style");
const { clear } = require("console");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const { countListener} = require("events");

let fullTeam = [];

