const fs = require("fs");
const SVGLogo = require("./shapes")

//then the users answers will be saved using the SVG logo constructor
function generateLogo(data){

    let newLogo = new SVGLogo (
        data.title,
        data.textColour,
        data.shape,
        data.shapeColour
    )

    //create the svg elements with a width of 300 and height of 200
    let svgMarkup = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    //this cycles through the conditionals depending on which shape was chosen it will select the correct svg code
    if (newLogo.shape === "Circle"){
        svgMarkup += `<circle cx="50" cy="50" r="45" fill="${newLogo.shapeColour}" />`;
    }
    if (newLogo.shape === "Triangle"){
        svgMarkup += `<polygon points="50,5 5,95 95,95" fill="${newLogo.shapeColour}" />`;
    }
    if (newLogo.shape === "Square"){
        svgMarkup += `<rect width="100" height="100" fill="${newLogo.shapeColour}" />`;
    };

    //we add a centered text element and its colour
    svgMarkup += `<text x="50" y="50" fill="${newLogo.textColour}" text-anchor="middle" dominant-baseline="central" font-size="20">${newLogo.title}</text>`;

    // closing svg statement 
    svgMarkup += "</svg>";

    //this writes the svg file and notifies the users it has been generated
    fs.writeFile('logo.svg', svgMarkup, (err) => {
        if (err) throw err;
        console.log('Logo.svg has been generated!');
      });
}

module.exports = { generateLogo }