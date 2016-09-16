
import test from 'ava';

import { inCircleArea, clickedCircle } from '../../app/circles_screen/circle_canvas_interaction.js';

test('detects whether point is inside circle', t => {
  const circle = {
    radius: 5, 
    position: [10, 10]
  };

  t.truthy(inCircleArea(10, 10, circle));
  t.falsy(inCircleArea(4, 4, circle));
});

test('returns circle that was clicked on from array', t => {
  const circleOne = {
    radius: 5,
    position: [10, 10]
  };
  const circleTwo = {
    radius: 5,
    position: [20, 20]
  }
  const circleThree = {
    radius: 5,
    position: [40, 40]
  }
  const circles = [circleOne, circleTwo, circleThree];

  t.is(clickedCircle(7, 7, circles), 0);
  t.is(clickedCircle(17, 17, circles), 1);
  t.is(clickedCircle(80, 80, circles), -1);
  t.is(clickedCircle(15, 15, circles), -1);
})

