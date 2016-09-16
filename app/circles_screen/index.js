
import { calculateRadius, findLowestPositionForCircleCenter } from './place_circle.js';
/*
 import { inCircleArea } from './circle_canvas_interaction.js';
*/

let c = document.getElementById('circles');
let ctx = c.getContext('2d');

let xBorderRight = window.innerWidth;
let yBorderBottom = window.innerHeight;

/*
c.addEventListener('click', (event) => {
  const x = event.pageX;
  const y = event.pageY;
  }, false);
*/

let circles = [];

function newCircle (position, colour, radius, tag) {
  return {
    position,
    colour,
    radius,
    tag
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
    var text = circle.tag;
    var font = `bold ${circle.radius}px`;
    ctx.font = font;
    var width = ctx.measureText(text).width;
    var height = ctx.measureText('w').width;
    ctx.fillText(text, circle.position[0] - (width / 2), circle.position[1] + (height / 2));
  });
}

function displayCircles (questions, screenDimensions) {
  questions.map((question) => {
    const radius = calculateRadius(question.score, screenDimensions);
    addCircle(newCircle(findLowestPositionForCircleCenter(radius, circles, xBorderRight, 0, yBorderBottom), question.colour, radius, question.tag));
  });
}

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

let start = () => requestAnimationFrame(run);
let stop = () => { cancelAnimationFrame(start); };

const onLoad = (containerNode) => {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const questions = JSON.parse(window.localStorage.getItem('activityData')).items;
  displayCircles(questions, { width: c.width, height: c.height });
  start();
};

const onUnload = () => {
  stop();
};

export default {
  onLoad,
  onUnload
};
