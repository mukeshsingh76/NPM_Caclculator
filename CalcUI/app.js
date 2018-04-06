var calculator = require("sogeticalculator");

var radius = 5;
var area = calculator.circlearea(radius);
var perimeter = calculator.circleperimeter(radius);

console.log("Area of circle for radius : " + radius + " is : " + area);
console.log(
  "Perimeter of circle for radius : " + radius + " is : " + perimeter
);
