// create consts for fs and inquirer

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileASync = util.promisify(fs.writeFile);





// questions to prompt user to make a readme file

const questions = [
        {
            type: "input",
            name: "githubProfile",
            message: "What is your GitHub Profile URL?"
        },

        {
            type: "input",
            name: "githubRepo",
            message: "What is the deloyed URL for this project?"
        },

        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
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

            type: "list",
            name: "license",
            message: "Please select your license you used or select unlicensed",
            choices: [
                "MIT",
                "Apache 2.0",
                "Simple 2.0",
                "BSD 2-Clause",
                "none"
            ]
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
const init = async () => {
    try {
        const answer = await promptQuestion(questions);

        const md = await generateMarkdown(answer);

        writeToFile("README.md", md);
    } catch (err) {
        console.log("Success! Your README file has been generated.");

    }
};

init ();