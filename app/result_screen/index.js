import Hammer from 'hammerjs';
import { LADDER } from './content';
import { getRating } from './get_rating';

const paneSize = 220;
const zDepth = paneSize / (2 * Math.tan(Math.PI / 8));
let degree = 0;
let lastDirection = '';
let maxV = 0;

function startDegree () {
  degree = 360 - ((getRating() - 1) * 45);
}

reset(degree);

function reset (deg) {
  const panes = [].slice.call(document.getElementsByTagName('LI'));
  panes.forEach((el, index) => {
    if (degree < 0) degree = 360 + degree;
    const depth = zDepth;
    const xAngle = ((45 * index) + deg) % 360;
    if (xAngle < 70 || xAngle > 280) {
      panes[index].style.display = 'block';
      panes[index].style.webkitTransform = `rotateX(${xAngle}deg) translateZ(${depth}px)`;
    } else {
      panes[index].style.display = 'none';
    }
  });
}

const text = document.getElementById('text');

const body = document.querySelector('body');
// create a simple instance
// by default, it only adds horizontal recognizers
const mc = new Hammer(body);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

// listen to events...
function addPan () {
  mc.on('panup pandown panend', function (ev) {
    if (ev.type === 'panup') {
      addClass(text, 'blurry-text');
      degree += 3;
      reset(degree);
      lastDirection = 'panup';
      if (ev.velocityY < maxV) {
        maxV = ev.velocityY;
      }
    }
    if (ev.type === 'pandown') {
      addClass(text, 'blurry-text');
      degree -= 3;
      reset(degree);
      lastDirection = 'pandown';
      if (ev.velocityY > maxV) {
        maxV = ev.velocityY;
      }
    }
    if (ev.type === 'panend') {
      if (maxV < 0) {
        maxV = maxV * -1;
      }
      if (lastDirection === 'panup') {
        momentum('panup', maxV);
      } else {
        momentum('pandown', maxV);
      }
      maxV = 0;
    }
  });
}

function momentum (direction, velocity) {
  if (velocity <= 3) {
    clearTimeout(tout);
    const tout = setTimeout(function () { snapMove(direction); }, 50);
    return velocity;
  }
  const newVel = velocity - 0.3;
  if (direction === 'panup') {
    degree += (4 * newVel);
  }
  if (direction === 'pandown') {
    degree -= (4 * newVel);
  }
  reset(degree);
  setTimeout(function () { momentum(direction, newVel); }, 30);
}

function snapMove (direction) {
  if (direction === 'pandown') {
    degree -= 3;
  }
  if (direction === 'panup') {
    degree += 3;
  }
  reset(degree);
  if (degree % 45 > 3) {
    setTimeout(function () { snapMove(direction); }, 30);
  } else {
    removeClass(text, 'blurry-text');
    degree = degree % 360;
    setContent(Math.round((360 - degree) / 45) + 1);
    return degree;
  }
}

text.addEventListener('click', function () {
  if (text.className.includes('enlarge-text')) {
    removeClass(text, 'enlarge-text');
    addPan();
  } else {
    addClass(text, 'enlarge-text');
    panOff();
  }
}, false);

function hasClass (el, className) {
  if (el.classList) return el.classList.contains(className);
  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass (el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass (el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

function panOff () {
  mc.off('panup pandown panend tap press');
}

function setContent (rating) {
  console.log(rating);
  if (rating < 1) rating = 1;
  if (rating > 8) rating = 1;
  const [title, body] = LADDER[rating - 1];
  text.innerHTML =
    `<p id='title'>${title}</p>
    <p id='text-body'>${body}</p>`;
}

function onLoad () {
  addPan();
  console.log('Your rating is: ', getRating());
  setContent(getRating());
  startDegree();
  document.getElementById(`${'pane' + getRating()}`).style.backgroundColor = '#00688B';
  reset(degree);
}

function onUnload () {
  mc.off('panup pandown panend tap press');
}

export default {
  onLoad,
  onUnload
};
