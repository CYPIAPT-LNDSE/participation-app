import test from 'ava';
import add from '../app/add';

test('adds two numbers', t => {
  t.is(add(1, 2), 3);
});
