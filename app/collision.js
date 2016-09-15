import { magnitude, vector2Add, vector2Subtract } from './math_helpers.js';

function findCollisionWithOtherCircles( circle, circles ) {
  return circles.map((circleElement) => {
    return detectCollision(circle, circleElement)
  }).indexOf(true) > -1;
}

function detectCollision( circleOne, circleTwo ) {
  return magnitude(vector2Subtract(circleOne.position, circleTwo.position)) < (circleOne.radius + circleTwo.radius);
}

function detectBoundaryCollision( radius, position, xMax, yMax ) {
  const max = vector2Add(position, [radius, radius]);
  const min = vector2Subtract(position, [radius, radius]);
  return (Math.min(...min) < 0 || max[0] > xMax || max[1] > yMax)
}

export { detectCollision, findCollisionWithOtherCircles, detectBoundaryCollision }
