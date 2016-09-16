import test from 'ava';
import { nextPixel,
         positionNotAccessible,
         checkCenterPosition,
         findLowestPositionForCircleCenter } from '../../app/circles_screen/place_circle';

test('finds correct next pixel', t => {
  const xMax = 20;
  const yMin = 1;

  t.deepEqual(nextPixel([1, 15], xMax, yMin), [2, 15]);
  t.falsy(nextPixel([20, 1], xMax, yMin));
  t.deepEqual(nextPixel([20, 5], xMax, yMin), [1, 4]);
});

test('returns correct value indicating appropriate center for circle', t => {
  const circleOne = {
    radius: 2.5,
    colour: '#9e9e9e',
    position: [5, 15]
  };
  const circleTwo = {
    radius: 2.5,
    colour: '#9e9e9e',
    position: [10, 15]
  };
  const circleThree = {
    radius: 2.5,
    colour: '#9e9e9e',
    position: [20, 15]
  };
  const circles = [
    circleOne,
    circleTwo,
    circleThree
  ];
  const xMax = 30;
  const yMax = 30;

  t.deepEqual(checkCenterPosition(2.5, [15, 15], circles, xMax, 0, yMax), [15, 15]);
  t.deepEqual(checkCenterPosition(3, [15, 15], circles, xMax, 0, yMax), [16, 15]);
  t.falsy(checkCenterPosition(3, [30, 0], circles, xMax, 0, yMax), [16, 15]);
});

test('returns lowest and leftmost position for center of circle', t => {
  const circleOne = {
    radius: 3,
    colour: '#9e9e9e',
    position: [3, 21]
  };
  const circleTwo = {
    radius: 3,
    colour: '#9e9e9e',
    position: [9, 21]
  };
  const circleThree = {
    radius: 3,
    colour: '#9e9e9e',
    position: [21, 21]
  };
  const circles = [
    circleOne,
    circleTwo,
    circleThree
  ];
  const xMax = 24;
  const yMax = 24;

  t.deepEqual(findLowestPositionForCircleCenter(3, circles, xMax, 0, yMax), [15, 21]);
  t.deepEqual(findLowestPositionForCircleCenter(6, circles, xMax, 0, yMax), [15, 14]);
  t.deepEqual(findLowestPositionForCircleCenter(50, circles, xMax, 0, yMax), null);
});

test('returns false if position is accessible and true if blocked by other circles', t => {
  const circleOne = {
    radius: 3,
    colour: '#9e9e9e',
    position: [3, 21]
  };
  const circleTwo = {
    radius: 3,
    colour: '#9e9e9e',
    position: [9, 21]
  };
  const circleThree = {
    radius: 3,
    colour: '#9e9e9e',
    position: [21, 21]
  };
  const circles = [
    circleOne,
    circleTwo,
    circleThree
  ];

  t.falsy(positionNotAccessible(1, [5, 5], circles));
  t.truthy(positionNotAccessible(3, [3, 19], circles));
});
