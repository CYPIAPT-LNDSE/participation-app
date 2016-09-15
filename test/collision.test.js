import test from 'ava';
import { detectCollision, findCollisionWithOtherCircles, detectBoundaryCollision } from '../app/collision.js';

test('detects collision between two circles', t => {
  const circleOne = {
    position: [10, 10],
    colour: '#9e9e9e',
    radius: 10
  };
  const circleTwo = {
    position: [20, 20],
    colour: '#9e9e9e',
    radius: 1
  };
  const circleThree = {
    position: [20, 20],
    colour: '#9e9e9e',
    radius: 50
  };

  t.falsy(detectCollision(circleOne, circleTwo));
  t.truthy(detectCollision(circleOne, circleThree));
});

test('detects any collisions with array of circles', t => {
  const circleOne = {
    position: [10, 10],
    colour: '#9e9e9e',
    radius: 20
  };
  const circleTwo = {
    position: [20, 20],
    colour: '#9e9e9e',
    radius: 20
  };
  const circleThree = {
    position: [30, 30],
    colour: '#9e9e9e',
    radius: 1 
  };
  const circleFour = {
    position: [40, 40],
    colour: '#9e9e9e',
    radius: 1
  };

  t.falsy(findCollisionWithOtherCircles(circleOne, [circleThree, circleFour]));
  t.truthy(findCollisionWithOtherCircles(circleOne, [circleTwo, circleFour]))
});

test('detects circle boundary collision', t => {
  const circleOne = {
    position: [5, 5],
    colour: '#9e9e9e',
    radius: 10
  }
  const circleTwo = {
    position: [20, 20],
    colour: '#9e9e9e',
    radius: 10
  }
  t.truthy(detectBoundaryCollision(circleOne.radius, circleOne.position, 10, 10));
  t.falsy(detectBoundaryCollision(circleTwo.radius, circleTwo.position, 50, 50));
})

