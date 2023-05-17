const questions = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utilities/generateMarkdown");

function askQuestions() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    const readme = generateMarkdown(responses);
    fs.writeFile("test.md", readme, function (err) {
      console.log(err);
    });
  });
}

function main() {
  console.log(questions);
  askQuestions();
}

main();
