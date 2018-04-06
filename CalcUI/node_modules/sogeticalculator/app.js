var circlearea = function(radius) {
  return Math.PI * radius * radius;
};

module.exports.circlearea = circlearea;
module.exports.circleperimeter = radius => 2 * Math.PI * radius;
