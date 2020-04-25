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
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "contents",
        message: "Enter items for Table of Contents."
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

/*function init() {

}

init();*/