const fs = require("fs");
const SVGLogo = require("./shapes")
const path = require("path")

//then the users answers will be saved using the SVG logo constructor
function generateLogo(data){

    let newLogo = new SVGLogo (
        data.title,
        data.textColour,
        data.shape,
        data.shapeColour
        )
    
        const folderPath = "./output";
        const fileName = "logo.svg";
        const filePath = path.join(folderPath, fileName);
    //this writes the svg file and notifies the users it has been generated
    fs.writeFile(filePath, newLogo.render(), (err) => {
        if (err){
            console.log("Error generated:", err);
        } else {
        console.log('Logo.svg has been generated!');
      }
    });
}

module.exports = { generateLogo }