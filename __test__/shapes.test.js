const SVGLogo = require('../library/shapes');

// Testing for Circle shape
test('testing for circle object', () => {
  let title = "XYX";
  let shape = "Circle";
  let textColour = "green";
  let shapeColour = "black";

  let logo = new SVGLogo(title, textColour, shape, shapeColour);

  expect(logo.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="black" /><text x="50" y="50" fill="green" text-anchor="middle" dominant-baseline="central" font-size="20">XYX</text></svg>`);
});


// Test for Triangle shape
test('testing for triangle object', () => {
    let title = "ABC";
    let shape = "Triangle";
    let textColour = "blue";
    let shapeColour = "red";
  
    let logo = new SVGLogo(title, textColour, shape, shapeColour);
  
    expect(logo.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 5,95 95,95" fill="red" /><text x="50" y="50" fill="blue" text-anchor="middle" dominant-baseline="central" font-size="20">ABC</text></svg>`);
  });

  //Test for Square shape
  test('testing for square object', () => {
    let title = "123";
    let shape = "Square";
    let textColour = "yellow";
    let shapeColour = "purple";
  
    let logo = new SVGLogo(title, textColour, shape, shapeColour);
  
    expect(logo.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="purple" /><text x="50" y="50" fill="yellow" text-anchor="middle" dominant-baseline="central" font-size="20">123</text></svg>`);
  });