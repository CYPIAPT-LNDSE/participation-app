
import { findLowestPositionForCircleCenter } from './place_circle.js';

let c = document.getElementById('circles');
let ctx = c.getContext('2d');

let xBorderRight = window.innerWidth;
let yBorderBottom = window.innerHeight;

let circles = [];

function newCircle (position, colour, radius) {
  return {
    position,
    colour,
    radius
  };
}

function addCircle (circle) {
  circles.push(circle);
}

function drawCircle () {
  circles.forEach((circle) => {
    ctx.beginPath();
    ctx.arc(circle.position[0], circle.position[1], circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.colour;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#292f33';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(circle.position[0] - circle.radius / 3.5, circle.position[1] - circle.radius / 3.5, circle.radius / 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.fillStyle = 'black';
    var text = 'hello';
    var font = `bold ${circle.radius}px`;
    ctx.font = font;
    var width = ctx.measureText(text).width;
    var height = ctx.measureText('w').width;
    ctx.fillText(text, circle.position[0] - (width / 2), circle.position[1] + (height / 2));
  });
}

function randomRadius () {
  return Math.round(Math.random() * 100);
}

let radius = randomRadius();
addCircle(newCircle(findLowestPositionForCircleCenter(radius, circles, xBorderRight, 0, yBorderBottom), '#63d1f4', radius));
radius = randomRadius();
addCircle(newCircle(findLowestPositionForCircleCenter(radius, circles, xBorderRight, 0, yBorderBottom), '#63d1f4', radius));

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

function clear () {
  ctx.clearRect(0, 0, c.width, c.height);
}

function setup () {

}

function render () {
  drawCircle();
}

function queue () {
  start = requestAnimationFrame(run);
}

function run () {
  clear();
  setup();
  render();
  queue();
}

let start = () => { return requestAnimationFrame(run); };
let stop = () => { cancelAnimationFrame(start); };

const onLoad = (containerNode) => {
  console.log('££££££££££££££££££');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  console.log(c.width, c.height, c);
  start();
};

const onUnload = () => {
  stop();
};

export default {
  onLoad,
  onUnload
};
