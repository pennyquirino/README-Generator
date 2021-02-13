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
            name: "githubRepo",
            message: "What is the deloyed URL for this project?"
        },

        {
            type: "input",
            name: "githubProfile",
            message: "What is your Github user name?"
        },

        {
            type: "input",
            name: "projectTitle",
            message: "Project Title",           
        },
        {
            type: "input",
            name: "description",
            message: "Project Description:",
           
        },
        {
            type: "input",
            name: "installation",
            message: "Installation Steps:",
            
            },
        {
            type: "input",
            name: "credits",
            message: "List any collaborators here:",
          
            },
            {

            type: "list",
            name: "license",
            message: "Please select your license you used or select 'none'",
            choices: [
                "MIT",
                "Apache 2.0",
                "Simple 2.0",
                "BSD 2-Clause",
                "none"
            ]
        }

];
    
function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error) return console.log(error);
        console.log(`${fileName} has been generated!`);
    })
}
   

    // need to place a function here to promt user with questions
const promptQuestion = () => {
    return inquirer.prompt(questions)
}




    // figure out how to init this so that it actually does something
const init = async () => {
    try {
        const answers = await promptQuestion()
        .then(function (response) {
            const data = generateMarkdown(response)
            writeToFile("README.md", data)
        })
    } catch (error) {
        console.log(error);

}
}

init ();