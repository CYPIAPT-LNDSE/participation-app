
import { magnitude, vector2Subtract } from './math_helpers.js';

function inCircleArea (x, y, { radius, position }) {
  return magnitude(vector2Subtract([x, y], position)) < radius;
}

function clickedCircle (x, y, circles) {
  return circles.map((circle) => {
    return inCircleArea(x, y, circle);
  }).indexOf(true);
}

export { inCircleArea, clickedCircle };

