// questions to prompt user to make a readme file

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "",
            message: ""
        },
        {
            type: "input",
            name: "",
            message: "",
        },
        {
            type: "input",
            name: "",
            message: ""
        },
        {
            type: "input",
            name: "",
            message: " "
           
        },
        {
            type: "input",
            name: "",
            message: ""
        },
        {
            type: "input",
            name: "",
            message: ""
        },
        {
            type: "input",
            name: "",
            message: ""
        },
        {
            type: "input",
            name: "",
            message: ""
        },
        {
            type: "input",
            name: "",
            message: ""
        }
    ]);
} 
