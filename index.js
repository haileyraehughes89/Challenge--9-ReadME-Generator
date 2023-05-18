const questions = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utilities/generateMarkdown");
const licenses = require("./licenses");

function askQuestions() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    const readme = generateMarkdown(responses);
    fs.writeFile("README.md", readme, function (err) {
      console.log(err);
    });
  });
}

function main() {
  askQuestions();
}

main();
