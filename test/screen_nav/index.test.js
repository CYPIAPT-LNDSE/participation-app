import test, { beforeEach } from 'ava';
import { getCurrentScreenFromNode } from '../../app/screen_nav';

beforeEach(() => {
  document.body.innerHTML =
    `<div class="screen stuff" id="screen-1">
      Screen 1
      <button class="nav-button" data-next-screen="screen-2">next</button>
      <div>
        <div>
          <p><a>link</a></p>
        </div>
      <div>
    </div>`;
});

test('getCurrentScreenFromNode returns screen containing given element', t => {
  const button = document.querySelector('.nav-button');
  const screen = document.querySelector('.screen');
  t.is(getCurrentScreenFromNode(button), screen);
});

test('getCurrentScreenFromNode returns screen containing given nested element', t => {
  const link = document.querySelector('a');
  const screen = document.querySelector('.screen');
  t.is(getCurrentScreenFromNode(link), screen);
});
