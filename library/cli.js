const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes')

const questions = [
    {
        type: 'input',
        message: 'What letters do you want to be used for your logo (maximum of 3 characters)?',
        name: 'title'
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
      .then()
      


      .catch((error) => {
        console.error(error);
      });
}

module.exports = init;