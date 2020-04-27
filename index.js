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
        name: "repoLink",
        message: "Please add a link to your repository here."
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please add a note about how to install your application."
    },
    {
        type: "input",
        name: "usageName1",
        message: "Please write the name of a dependency here."
    },
    {
        type: "input",
        name: "usageLink1",
        message: "Please link to that dependency here."
    },
    {
        type: "input",
        name: "usageName2",
        message: "Please write the name of another dependency here."
    },
    {
        type: "input",
        name: "usageLink2",
        message: "Please write a link to that dependency here."
    },
    {
        type: "input",
        name: "license",
        message: "Please enter a link for your license badge here."
    },
    {
        type: "input",
        name: "licenseInfo",
        message: "Please place a link to information regarding your license here."
    },
    {
        type: "input",
        name: "copyright",
        message: "What year are you copyrighting this?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please write information about tests here."
    },
    {
        type: "input",
        name: "developer",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "profile",
        message: "Please provide a link to your GitHub profile."
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
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