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


    //this writes the svg file and notifies the users it has been generated
    fs.writeFile('logo.svg', newLogo.render(), (err) => {
        if (err) throw err;
        console.log('Logo.svg has been generated!');
      });
}

module.exports = { generateLogo }