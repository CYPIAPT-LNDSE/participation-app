import test from 'ava';
import { add, vector2Add, magnitude, vector2Theta, cartesian2ToPolar, polar2ToCartesian } from '../app/math_helpers.js'

function threedpAcc(x) {
  if (typeof x === 'object') {
    return x.map((el) => {  return el.toFixed(3) });
  };
  return x.toFixed(3);
};

test('adds two numbers', t => {
  t.is(add(1, 2), 3);
});

test('adds two 2d vectors', t => {
  t.deepEqual(vector2Add([1, 2], [2, 1]), [3, 3]);
});

test('calculates the magnitude of a vector', t => {
  t.is(threedpAcc(magnitude([3, 4])), threedpAcc(5));
});

test('calculates the theta of a vector', t => {
  t.is(threedpAcc(vector2Theta([4, 4])), threedpAcc(Math.PI / 4));
});

test('converts cartesian vector to polar vector', t => {
  t.deepEqual(threedpAcc(cartesian2ToPolar([4, 4])), threedpAcc([magnitude([4, 4]), Math.PI / 4]));
});

test('converts polar vector to cartesian vector', t => {
  t.deepEqual(threedpAcc(polar2ToCartesian([5, 0])), threedpAcc([5, 0]));
  t.deepEqual(threedpAcc(polar2ToCartesian([magnitude([4, 4]) , Math.PI / 4])), threedpAcc([4, 4]));
});

