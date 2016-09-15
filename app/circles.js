
import { findLowestPositionForCircleCenter } from './place_circle.js';

let c = document.getElementById('circles');
let ctx = c.getContext('2d');

c.width = screen.width;
c.height = screen.height;

const xBorderRight = screen.width;
const yBorderBottom = screen.height;

let circles = [];

function newCircle( position, colour, radius ) {
  return {
    position,
    colour,
    radius
  };
}

function addCircle( circle ) {
  circles.push(circle);
}

function drawCircle() {
  circles.forEach((circle) => {
    ctx.fillStyle = circle.colour;
    ctx.beginPath();
    ctx.arc(circle.position[0], circle.position[1], circle.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  })
}

function randomRadius() {
  return Math.round(Math.random() * 100)
}

let radius = randomRadius();
addCircle(newCircle(findLowestPositionForCircleCenter(radius, circles, xBorderRight, 0, yBorderBottom), '#9e9e9e', radius));
radius = randomRadius();
addCircle(newCircle(findLowestPositionForCircleCenter(radius, circles, xBorderRight, 0, yBorderBottom), '#9e9e9e', radius));

function clear() {
  ctx.clearRect(0, 0, c.width, c.height);
}

function setup() {

}

function render() {
  drawCircle();
}

function queue() {
  window.requestAnimationFrame(run);
}

function run() {
  clear();
  setup();
  render();
  queue();
}

export { run }
