const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What letters do you want to be used for your logo?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'What colour would you like your font?',
        name: 'textColour'
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'

    },
    {
        type: 'input',
        message: 'What colour would you like your shape to be?',
        name: 'shapeColour'
    }
]

function init() {
    inquirer.prompt(questions)
      .then((data) => { console.log(`${data.shapeColour}`)
  
      })
      .catch((error) => {
        console.error(error);
      });
  } 

  init();