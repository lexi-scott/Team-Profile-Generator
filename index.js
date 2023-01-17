const inquirer = require('inquirer')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

let teamList = []
let htmlCards = []

function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'first',
                message: 'What would you like to do?',
                choices: ['Add a manager', 'Add an engineer', 'Add an intern', 'Finish']
            }
        ])
        .then((data) => {
            if (data.first === "Add a manager") {
                addManager();
            }

            else if (data.first === "Add an engineer") {
                addEngineer();
            }

            else if (data.first === "Add an intern") {
                addIntern();
            }

            else if (data.first === "Finish") {
                console.log("you are finished")
                console.log(teamList)
                generateHTML();
                writeToFile("index.html", generateHTML())
            };
        });
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Employee's first and last name:"
            },

            {
                type: "input",
                name: "id",
                message: "Employee's ID:"
            },

            {
                type: "input",
                name: "role",
                message: "Employee's role",
                default: "Engineer"
            },

            {
                type: "input",
                name: "email",
                message: "Employee's email:"
            },

            {
                type: "input",
                name: "github",
                message: "Employee's github:"
            }
        ])
        .then((data) => {
            engineer = new Engineer(data.name, data.id, data.email, data.role, data.github)
            teamList.push(engineer)
            htmlCards.push(engineer.htmlCard())
            buildTeam();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Employee's first and last name:"
            },

            {
                type: "input",
                name: "id",
                message: "Employee's ID:"
            },


            {
                type: "input",
                name: "role",
                message: "Employee's role",
                default: "Intern"
            },

            {
                type: "input",
                name: "email",
                message: "Employee's email:"
            },

            {
                type: "input",
                name: "school",
                message: "Employee's school:"
            }
        ])
        .then((data) => {
            intern = new Intern(data.name, data.id, data.email, data.role, data.school);
            teamList.push(intern);
            htmlCards.push(intern.htmlCard())
            buildTeam();
        });
}

function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Employee's first and last name:"
            },

            {
                type: "input",
                name: "id",
                message: "Employee's ID:"
            },

            {
                type: "input",
                name: "role",
                message: "Employee's role",
                default: "Manager"
            },

            {
                type: "input",
                name: "email",
                message: "Employee's email:"
            },

            {
                type: "input",
                name: "office",
                message: "Office number:"
            }
        ])
        .then((data) => {
            manager = new Manager(data.name, data.id, data.email, data.role, data.office);
            teamList.push(manager);
            htmlCards.push(manager.htmlCard())
            buildTeam();
        });
}

function generateHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="./dist/css/style.css">
    </head>
    
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main class="flex-row justify-center">
        ${(htmlCards.join(''))} 
      </main>
      </body>
      </html>`
}

function writeToFile(filename, data) {
    return fs.writeFileSync((filename), data)
};

buildTeam();




//one function to ask user what do you want to do? intern, engineer, manager or finished. use .then to handle the answer, depending on answer run another function

//then run manager function, intern function, engineer function or finished function.

//addManager, addIntern, addEngineer, finished, introQuestion

// const data = [ Manager, Engineer, Intern ] --> [ { name: "tom"}, {name: }, {}]

// Create a new CARD for each DATA OBJECT (EMPLOYEE)
// for loop to loop through each OBJECT
// function createManagerCard
// function createEngineerCard

//const htmlCards = []


// Then where does the new card go(?)


// generateIndexFile() function -->

// template literals  --> `# ${}    `

// have a function that creates each card
// template literals  --> 

//${for (var i = 0; i < htmlCards.length; i++){return (htmlCards[i])}}