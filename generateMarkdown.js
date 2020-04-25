function generateMarkdown(data) {
    return `
  ### ${data.title}
  
  # Description
  ${data.description}
  
  # Table of Contents 
  
  [1. Installation](#installation)
  [2. Usage](#usage)
  [3. License](#license)
  [4. Contributing](#contributing)
  [5. Tests](#tests)
  [6. Questions](#questions)

  # Installation

  # Usage

  # License

  Copyright ${data.copyright} [U+00A9] [${data.website}](${data.weblink})

  # Contributing

  # Tests

  # Questions

  
  `;
  }
  
  module.exports = generateMarkdown;