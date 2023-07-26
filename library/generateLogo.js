const fs = require("fs");
const SVGLogo = require("./shapes")

function generateLogo(data){

    //create the svg elements with a width of 300 and height of 200
    let svgMarkup = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    //we add a centered text element and its colour
    svgMarkup += `<text x="50" y="50" fill="${data.textColour}" text-anchor="middle" dominant-baseline="central" font-size="20">${data.title}</text>`;

    //this cycles through the conditionals depending on which shape was chosen it will select the correct svg code
    if (data.shape === "Circle"){
        svgMarkup += `<circle cx="50" cy="50" r="45" fill="${data.shapeColour}" />`;
    }
    if (data.shape === "Triangle"){
        svgMarkup += `<polygon points="50,5 5,95 95,95" fill="${data.shapeColour}" />`;
    }
    if (data.shape === "Square"){
        svgMarkup += `<rect width="100" height="100" fill="${data.shapeColour}" />`;
    };
    // closing svg statement 
    svgMarkup += "</svg>";

    fs.writeFile('logo.svg', svgMarkup, (err) => {
        if (err) throw err;
        console.log('SVG file has been saved!');
      });
}

module.exports = { generateLogo }