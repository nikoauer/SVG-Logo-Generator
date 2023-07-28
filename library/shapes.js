class SVGLogo {
  constructor(title, textColour, shape, shapeColour) {
    this.title = title;
    this.textColour = textColour;
    this.shape = shape;
    this.shapeColour = shapeColour;
  }

  render = () => {
      let svgMarkup = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    if (this.shape === "Circle"){
        svgMarkup += `<circle cx="50" cy="50" r="45" fill="${this.shapeColour}" />`;
    }

    if (this.shape === "Triangle") {
      svgMarkup += `<polygon points="50,5 5,95 95,95" fill="${this.shapeColour}" />`;
    }
    if (this.shape === "Square") {
      svgMarkup += `<rect width="100" height="100" fill="${this.shapeColour}" />`;
    }

    //we add a centered text element and its colour input
    svgMarkup += `<text x="50" y="50" fill="${this.textColour}" text-anchor="middle" dominant-baseline="central" font-size="20">${this.title}</text>`;

    // closing svg statement
    svgMarkup += "</svg>";

    console.log(svgMarkup)

    return svgMarkup;
  };
}

module.exports = SVGLogo;
