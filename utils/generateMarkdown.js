
    
//  create function to generate license if present
function renderLicenseBadge(license){
    switch(license) {
        case "MIT": 
            return "![GitHub License Badge](https://img.shields.io/badge/License-MIT-blue.svg)";
         case "Apache 2.0":
            return "![GitHub License Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        case "Simple 2.0":
            return "![GitHub License Badge](https://img.shields.io/badge/License-simple-blue.svg)";
        case "BSD 2-Clause":
            return "![GitHub License Badge](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)";
        
              }
          }


// create function to get license URL
function renderLicenseURL(license) {
    switch(license) {
    case "MIT":
        return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
        return "https://opensource.org/licenses/Apache-2.0";
    case "Simple 2.0":
        return "https://opensource.org/licenses/Simple-2.0";
    case "BSD 2-Clause":
        return "https://opensource.org/licneses/BSD-2-Clause";
    }
}

// create function to get license section of file if any
function renderLicenseSection(license) {
    if(license === "none") {
        return ``;
    } else {
        return `## License
This project and its source code is released under the [${license}](${renderLicenseURL(license)}) license.`;
    }
   
}


// creat function to generate the README file
function generateMarkdown(data) {
    

return `# ${data.projectTitle}

${renderLicenseBadge(data.license)}


## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Credits](#credits)



## Description
${data.description}


## Installation
${data.installation}

## Credits
${data.credits}

${renderLicenseSection(data.license)}


## Check out more of my work via my GitHub Profile at: ${data.githubProfile}

`;

}


// don't forget module exports
module.exports = generateMarkdown;