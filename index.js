// makes the new page
const makeHTML = require('./src/generateHTML');

// Team profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// team array
const teamArray = [];

// start of manager prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInout)) {
                    console.log ("Please enter manager's ID!")
                    return false;
                } else {
                    console.log ("Please enter the manager's name!");
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            messsage: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log ('Please enter an office number!')
                    return false
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manger (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manger);
    })
};