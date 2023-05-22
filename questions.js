const licenses = require("./licenses");

const questions = [
  {
    type: "input",
    name: "projectName",
    message: "what is the title of your project?",
    default: "README GENERATOR",
  },
  {
    type: "input",
    name: "projectDescription",
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

      - What was your motivation?
      - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
      - What problem does it solve?
      - What did you learn?
      Enter your description: `,
    default: "Description Pending...",
  },
  {
    type: "input",
    name: "projectInstructions",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    default: "instructions pending...",
  },
  {
    type: "input",
    name: "projectUsage",
    message: `Provide instructions and examples for use. Include screenshots as needed.

      To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

          \`\`\`md
          ![alt text](assets/images/screenshot.png)
          \`\`\`
       `,
    default: "Usage pending...",
  },
  {
    type: "input",
    name: "projectCredits",
    message: `List your collaborators, if any, with links to their GitHub profiles.

  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

  If you followed tutorials, include links to those here as well.`,
    default: `no credits`,
  },

  {
    type: "checkbox",
    name: "projectLicense",
    message:
      "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
    choices: licenses,
  },

  {
    type: "input",
    name: "projectEmail",
    message: "enter your email:",
  },
  {
    type: "input",
    name: "projectGitUser",
    message: "enter your github username:",
  },
];
module.exports = questions;
