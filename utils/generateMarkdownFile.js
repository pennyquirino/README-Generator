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
function renderLicenseURL(license) {
    switch(license) {
    case "MIT":
        return "https://opensource.org/licenses/MIT";
    case "Unlicense":
        return "https://https://opensource.org/licenses/unlicense";
    case "Apache 2.0":
        return "https://opensource.org/licenses/Apache-2.0";
    case "Simple 2.0":
        return "https://opensource.org/licenses/Simple-2.0";
    case "BSD 2 Clause":
        return "https://opensource.org/licneses/BSD-2-Clause";
    }
}

// create function to get license section of file if any
function renderLicenseSection(license) {
    return `# ${data.projectTitle} is released under ${license} and is open source`;
}


// creat function to generate the README file
function generateMarkdownFile(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseURL = renderLicenseURL(data.license);
    const licenseSection = renderLicenseSection(data.license);
}

return `# ${data.projectTitle}

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

`;



// don't forget module exports