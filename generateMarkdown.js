function generateMarkdown(data) {
  return `
# ${data.title}

### Description
![standard-readme compliant](${data.badge})

${data.description}

### Table of Contents 

1. [Installation](#installation)\n
2. [Usage](#usage)\n
3. [License](#license)\n
4. [Contributing](#contributing)\n
5. [Tests](#tests)\n
6. [Questions](#questions)

### Installation

### Usage

### License

![standard-readme compliant](${data.license})
(${data.licenseInfo})

Copyright ${data.copyright} © [${data.website}](${data.weblink})

### Contributing

Standard README should follow the [Contributor Covenant](https://www.contributor-covenant.org/version/1/3/0/code-of-conduct/) Code of Conduct.

### Tests

### Questions

`;
}

module.exports = generateMarkdown;