// questions to prompt user to make a readme file

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a title name to continue");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project including wins and struggles encountered:",
            validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description of your project to continue");
            }
            return true;
        },
        
            type: "input",
            name: "installation",
            message: "What were the steps to get the development environment running?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter your installation steps to continue");
                }
                return true;
            },
        
            type: "input",
            name: "credits",
            message: "List your collaborators, if any with links to their GitHub accounts",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter any collaborators to continue or N/A");
                }
                return true;
            },

            type: "input",
            name: "license",
            message: "Let other developers know what they can or cannot do with your project",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please list your license for this project or N/A");
                }
                return true;
            }
        }
    ]);
} 
