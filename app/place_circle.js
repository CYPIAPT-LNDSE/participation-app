
import { findCollisionWithOtherCircles, detectBoundaryCollision } from './collision.js';
import { vector2Add } from './math_helpers.js';

function nextPixel( [x, y], xMax, yMin ) {
  if(x !== xMax) {
    return [x + 1, y];
  };
  if (y === yMin) {
    return null;
  };
  return [1, y - 1];
};

function positionNotAccessible(radius, position, circles) {
  let testPos = [position[0], 0];
  while (testPos[1] < position[1]) {
    if (findCollisionWithOtherCircles({ radius, position: testPos }, circles)) {
      return true;
    }
    testPos = vector2Add(testPos, [0, 1]);
  }
  return false;
}

function checkCenterPosition(radius, position, circles, xMax, yMin, yMax) {
  if (findCollisionWithOtherCircles({ radius, position }, circles) || detectBoundaryCollision(radius, position, xMax, yMax) || positionNotAccessible(radius, position, circles)) {
    return nextPixel(position, xMax, yMin)
  }
  return position;
};



function findLowestPositionForCircleCenter(radius, circles, xMax, yMin, yMax) {
  let exit = false;
  let position = [0, yMax];
  while (exit === false) {
    let newPosition = checkCenterPosition(radius, position, circles, xMax, yMin, yMax);
    if (newPosition === position) {
      return position;
    }
    if (newPosition === null) {
      return null;
    }
    position = newPosition;
  }
}


export { nextPixel, checkCenterPosition, findLowestPositionForCircleCenter };
