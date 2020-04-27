function generateMarkdown(data) {
  return `
# ${data.title}

### Description
![standard-readme compliant](${data.badge})(${data.repoLink})

${data.description}

### Table of Contents 

1. [Installation](#installation)\n
2. [Usage](#usage)\n
3. [License](#license)\n
4. [Contributing](#contributing)\n
5. [Tests](#tests)\n
6. [Questions](#questions)

### Installation

${data.installation}

### Usage

This project uses [${data.usageName1}](${data.usageLink1}).
And [${data.usageName2}](${data.usageLink2}).

### License

![standard-readme compliant](${data.license})
(${data.licenseInfo})

Copyright ${data.copyright} © [${data.developer}](${data.repoLink})

### Contributing

If you have questions about contributing please email ${data.developer} at (${data.email}).

Standard README should follow the [Contributor Covenant](https://www.contributor-covenant.org/version/1/3/0/code-of-conduct/) Code of Conduct.

### Tests

${data.tests}

### Questions

If you have any questions please contact [${data.developer}](${data.profile})
You can email me here: (${data.email})

`;
}

module.exports = generateMarkdown;