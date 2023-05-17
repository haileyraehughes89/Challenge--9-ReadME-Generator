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
];

module.exports = questions;
