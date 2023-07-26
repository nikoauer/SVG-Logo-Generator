
function generateLogo(svgProperties){
    //create the svg elements with a width of 300 and height of 200
    let svgMarkup = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    //we add a centered text element and its colour
    svgMarkup += `<text x="50" y="50" fill="${svgProperties.textColour}" text-anchor="middle" dominant-baseline="central" font-size="20">${svgProperties.title}</text>`;

    if (svgProperties.shape === "Circle"){
        svgMarkup += `<circle cx="50" cy="50" r="45" fill="${svgProperties.shapeColour}" />`;
    }
    if (svgProperties.shape === "Triangle"){
        svgMarkup += `<polygon points="50,5 5,95 95,95" fill="${svgProperties.shapeColour}" />`;
    }
    if (svgProperties.shape === "Square"){
        svgMarkup += `<rect width="100" height="100" fill="${svgProperties.shapeColour}" />`;
    };

    svgMarkup += "</svg>";
}






module.exports = generateLogo