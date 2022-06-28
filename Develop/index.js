// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message:'What is your name?',
    },
    {
        type: 'input',
        name: 'quest',
        message: 'What is your quest?',
    },
    {
        type: 'list',
        name: 'color',
        message: 'What is your favorite color?',
        choices: ['Red', 'Yellow', 'Blue', "I don't know!"],
    },
    {
        type: 'list',
        name: 'swallow',
        message: 'What is the average flight speed of a swallow?',
        choices: ['African?', 'European?'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        console.log('Generate README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
