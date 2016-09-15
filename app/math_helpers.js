function add (a, b) {
  return a + b;
}

function vector2Add ([x1, y1], [x2, y2]) {
  return [add(x1, x2), add(y1, y2)];
}

function vector2Subtract ([x1, y1], [x2, y2]) {
  return [add(x1, -x2), add(y1, -y2)];
}

function magnitude ([x, y]) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function vector2Theta ([x, y]) {
  return Math.atan(y / x);
}

function cartesian2ToPolar ([x, y]) {
  return [magnitude([x, y]), vector2Theta([x, y])];
}

function polar2ToCartesian ([r, theta]) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

export { add, vector2Add, vector2Subtract, magnitude, vector2Theta, cartesian2ToPolar, polar2ToCartesian };

