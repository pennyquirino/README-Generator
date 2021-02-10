// create function to generate license if present
function renderLicenseBadge(license){
    switch(license) {
        case "MIT":
            return "https://img.shields.io/badge/License-MIT-blue.svg";
        case "Unlicense":
            return "https://img.shields.io/badge/License-unlicense-blue.svg";
        case "Apache 2.0":
            return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        case "Simple 2.0":
            return "https://img.shields.io/badge/License-simple-blue.svg";
        case "BSD 2 Clause":
            return "https://img.shields.io/badge/License-BSD%202--Clause-blue.svg";
        
              }
          }


// create function to get license URL


// create function to get license section of file if any
function renderLicenseSection(license) {
    return `# ${data.projectTitle} is released under ${license} and is open source`;
}


// creat function to generate the README file


// Table of Contents




## Table of Contents
* [Installation](#installation)
* [Credits](#credits)
* [License](#license)

## Description
${installation}


## Installation
${data.installation}

## Credits
${data.credits}

## License
${data.license}



// don't forget module exports