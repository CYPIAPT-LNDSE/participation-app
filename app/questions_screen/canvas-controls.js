const canvas = document.getElementById('ballCanvas');
const context = canvas.getContext('2d');

canvas.width = window.screen.width;
canvas.height = window.screen.height / 2;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

export function render (currentActivity) {
  context.beginPath();
  context.arc(
    centerX,
    centerY,
    canvas.width / ((6 - currentActivity.score) * 1.75 + 1.75),
    0,
    2 * Math.PI,
    false);
  context.fillStyle = currentActivity.colour;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = '#292f33';
  context.stroke();

  context.beginPath();
  context.arc(
    (centerX - canvas.width / ((6 - currentActivity.score) * 1.75 + 1.75) / 3.5),
    (centerY - canvas.width / ((6 - currentActivity.score) * 1.75 + 1.75) / 3.5),
    (canvas.width / ((6 - currentActivity.score) * 1.75 + 1.75) / 5),
    0,
    2 * Math.PI, false);
  context.fillStyle = 'white';
  context.fill();
}

export function clear () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
