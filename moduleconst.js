var ColorEmbed = 15944039;
var ColorRed = 15944039;
var ColorWhite = 16711422;

let randomInt = function(min, max) { return Math.floor(Math.random() * (max - min) + min); }
let randomGreenColor = function() {
  let red = randomInt(0,127);
  let green = randomInt(128,255);
  let blue = randomInt(0,127);
  let result = ((red << 16) | (green << 8) | (blue << 0));
  return result;
}
let randomOrangeColor = function() {
  let red = 255;
  let green = randomInt(0,255);
  let blue = randomInt(0,127);
  let result = ((red << 16) | (green << 8) | (blue << 0));
  return result;
}
let randomPinkColor = function() {
  let red = 255;
  let green = randomInt(20,230);
  let blue = randomInt(140,255);
  let result = ((red << 16) | (green << 8) | (blue << 0));
  return result;
}

module.exports = {
  ColorEmbed,
  ColorRed,
  ColorWhite,
  RandomInt: randomInt,
  ColorRandomGreen: randomGreenColor,
  ColorRandomOrange: randomOrangeColor,
  ColorRandomPink: randomPinkColor
}