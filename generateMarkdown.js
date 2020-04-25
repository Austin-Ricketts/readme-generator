function generateMarkdown(data) {
    return `
  ### ${data.title}
  
  # Description
  ${data.description}
  
  # Table of Contents 
  ${data.contents}

  # Installation

  # Usage

  # License

  # Contributing

  # Tests

  # Questions
  
  
  `;
  }
  
  module.exports = generateMarkdown;