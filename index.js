const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'is this working?',
        name: 'answer'
    }
]

function init() {
    inquirer.prompt(questions)
      .then((data) => { console.log(`${data.answer}`)
  
      })
      .catch((error) => {
        console.error(error);
      });
  } 

  init();