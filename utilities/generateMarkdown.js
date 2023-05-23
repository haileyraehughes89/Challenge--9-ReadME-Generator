function generateMarkdown({
  projectName,
  projectDescription,
  projectInstructions,
  projectUsage,
  projectCredits,
  projectLicense,
  projectEmail,
  projectGitUser,
}) {
  const template = `
  # ${projectName} ${projectLicense}


## Description

  <span style="color:#F4F1BB">
  ${projectDescription}
  </span>
  
  ## Installation Instructions
  
  <span style="color:#F4F1BB">
  ${projectInstructions}
  </span>
  
## Tabel of Contents:
<div style="color:pink">
<li>
<a href="#usage" style="color:pink">Usage</a>
</li>
<li>
<a href="#credits" style="color:pink">Credits</a>
</li>
<li>
<a href="#questions" style="color:pink">Questions</a>
</li>
<li>
<a href="#features" style="color:pink">Features</a>
</li>
</div>


## Usage

  ${projectUsage}


## Credits

<span id="credits" style="color:#F4F1BB">
  ${projectCredits}
</span>

## Questions: 

- Email: 
<a id="#questions" href="https://www.google.com/" style="color: #E85F5C">${projectEmail}</a>


- GitHub:
<a href="https://www.google.com/" style="color: #E85F5C">https://github.com/${projectGitUser}</a>

## Features

<span id="features" style="color:#F4F1BB">
  ""
</span>


## Tests`;

  return template;
}

module.exports = generateMarkdown;
