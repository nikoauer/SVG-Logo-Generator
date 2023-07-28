const inquirer = require("inquirer");
const fs = require("fs");
const SVGLogo = require("./library/shapes");
const { generateLogo } = require("./library/generateLogo")

// the init function starts the program and prompts user with these 4 questions 
function init (){
inquirer
  .prompt([
  {
    type: "input",
    message: "What letters do you want to be used for your logo (maximum of 3 characters)?",
    name: "title",
    validate: title => title.length <= 3 || "Letters need to be 3 or less!"
  },
  {
    type: "input",
    message: "What colour would you like your font (Hexidecimal colours are accepted)?",
    name: "textColour",
  },
  {
    type: "list",
    message: "What shape would you like?",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },
  {
    type: "input",
    message: "What colour would you like your shape to be (Hexidecimal colours are accepted)?",
    name: "shapeColour",
  },
])
// this takes the users data and sends it to the generateLogo function
.then((response) => {generateLogo(response)
  })
.catch((error) => {
      console.error("Error Occured:", error);
    });
}

init();

