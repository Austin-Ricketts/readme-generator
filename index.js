const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "badge",
        message: "Put a link for your badge here."
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "license",
        message: "Please enter your license badge here."
    },
    {
        type: "input",
        name: "copyright",
        message: "What year are you copyrighting this?"
    },
    {
        type: "input",
        name: "website",
        message: "What is the name of your website?"
    },
    {
        type: "input",
        name: "weblink",
        message: "Please put the link to your website here."
    },
]).then(function(data) {
    const stringToWrite = generateMarkdown(data);

  fs.writeFile("readme.md", stringToWrite, function(err) {

    if (err) {
      return console.log(err);
    }

    //generateMarkdown;
    

  });
});