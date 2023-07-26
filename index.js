const inquirer = require("inquirer");
const fs = require("fs");
const SVGLogo = require("./library/shapes");

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
.then((answers) => {
  let SVGproperties = new SVGLogo (
    answers.title,
    answers.textColour,
    answers.shape,
    answers.shapeColour
    ) 
      generateLogo(SVGproperties)
  })
.catch((error) => {
      console.error("Error Occured:", error);
    });
}

init();

function generateLogo(SVGproperties) {
 return console.log(SVGproperties.shape)
}