// questions to prompt user to make a readme file

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project including wins and struggles encountered:"
        },
        {
            type: "input",
            name: "installation",
            message: "What were the steps to get the development environment running?",
        },
        {
            type: "input",
            name: "credits",
            message: "List your collaborators, if any with links to their GitHub accounts"
        },
        {
            type: "input",
            name: "license",
            message: "Let other developers know what they can or cannot do with your project"
        }
    ]);
} 
