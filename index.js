const inquirer = require("inquirer");
var fs = require("fs");
const { type } = require("os");
const { default: Choices } = require("inquirer/lib/objects/choices");

inquirer
  .prompt([
    {
      name: "Title",
      type: "input",
      message: "What is the title to your Readme?",
    },
    {
      name: "description",
      type: "input",
      message: "What is your description?",
    },

    {
      name: "Installation",
      type: "input",
      message: "How do we install your program?",
    },
    {
      name: "credits",
      type: "input",
      message: "Any credits you would like to give?",
    },
    {
      name: "license",
      type: "list",
      message: "Any licenses you need to add?",
      choices: [
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      ],
    },
    {
      name: "Usage",
      type: "input",
      message: "What Usage is there?",
    },
    {
      name: "Test",
      type: "input",
      message: "What test have you done?",
    },
    {
      name: "Questions",
      type: "input",
      message: "Enter email? incase anyone has a question about your program",
    },
  ])
  .then((answer) => {
    console.log("Hello your README", answer.Title, "has been made.");
    makingReadMe(answer); // Pass the answer to the function
  });

const makingReadMe = (answer) => {
  //this function is creating the readme and adding the user input
  fs.writeFile(
    "README.md",
    `# ${answer.Title} ${answer.license} 
    \n\n ## Description\n${answer.description}
    \n\n## Table of Contents\n[Description](#Description) [Installation](#installation) [Credits](#credits) [License](#license) [Usage](#usage) [Test](#test) [Questions](#questions)
    \n\n## Installation\n${answer.Installation}
    \n\n## Credits\n${answer.credits}
    \n\n## License\n${answer.license}
    \n\n## Usage\n${answer.Usage}
    \n\n## Test\n${answer.Test}
    \n\n## Questions\n${answer.Questions}`,
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};
