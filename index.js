// create consts for fs and inquirer

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileASync = util.promisify(fs.writeFile);

const generateMarkdownFile = require("./utils/generateMarkdownFile");



// questions to prompt user to make a readme file

const questions = [
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",           
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project including wins and struggles encountered:",
           
        },
        {
            type: "input",
            name: "installation",
            message: "What were the steps to get the development environment running?",
            
            },
        {
            type: "input",
            name: "credits",
            message: "List your collaborators, if any with links to their GitHub accounts",
          
            },
            {

            type: "input",
            name: "license",
            message: "Let other developers know what they can or cannot do with your project",
            
        }
    
        
    ];

    // need to place a function here to promt user with questions
function promptQuestion(questions) {
    return inquirer.prompt(questions);
}

    // place function here to write the file after questions are answered by user
function writeToFile(fileName, data) {
    writeFileASync(fileName, data);
}


    // figure out how to init this so that it actually does something
const init = function (async) {
    try {
        const answer = await promptQuestion(questions);

        const md = await generateMarkdownFile(answer);

        writeToFile("README.md", md);
    } catch (err) {

    }
};