const Shapes = require('../library/shapes');

let title = "asd";
let shape = "Circle";
let textColour = "green";
let shaperColour = "black";

let logo = new Shapes(title, textColour, shape, shaperColour)

test('testing for circle object', () => {
    expect(logo.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="black" /><text x="50" y="50" fill="green" text-anchor="middle" dominant-baseline="central" font-size="20">asd</text></svg>`)
});

test('Testign for title', () => expect(logo.title).toBe(title));