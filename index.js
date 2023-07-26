const inquirer = require("inquirer");
const fs = require("fs");
const SVGLogo = require("./library/shapes");
const generateLogo = require("./library/generateLogo")

// the init function starts the program and prompts user with these 4 questions 
function init (){
inquirer
  .prompt([
  {
    type: "input",
    message: "What letters do you want to be used for your logo (maximum of 3 characters)?",
    name: "title",
  },
  {
    type: "input",
    message: "What colour would you like your font?",
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
    message: "What colour would you like your shape to be?",
    name: "shapeColour",
  },
])
//then the users answers will be saved using the SVG logo constructor
.then((answers) => {
  let svgPproperties = new SVGLogo (
    answers.title,
    answers.textColour,
    answers.shape,
    answers.shapeColour
    ) 
      generateLogo(svgProperties)
  })
.catch((error) => {
      console.error("Error Occured:", error);
    });
}

init();

