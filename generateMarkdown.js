function generateMarkdown(data) {
    return `
  # ${data.title}
  hello
  # ${data.description}
  # ${data.contents}
  
  `;
  }
  
  module.exports = generateMarkdown;