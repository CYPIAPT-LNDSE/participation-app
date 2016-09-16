
window.requestAnimFrame = (function (callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function animate (canvas) {
  var context = canvas.getContext('2d');
  var time = (new Date()).getTime();
  // update
  var widthScale = (Math.sin(time / 200) * 0.1 + 0.9) * 1;
  var heightScale = (-1 * Math.sin(time / 200) * 0.1 + 0.9) * 1;
  // clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  // draw
  context.beginPath();
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.scale(widthScale, heightScale);
  context.arc(0, 0, 65, 0, 2 * Math.PI, false);
  context.restore();
  context.fillStyle = '#8ED6FF';
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = '#555';
  context.stroke();
  context.beginPath();
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.scale(widthScale, heightScale);
  context.arc(-30, -30, 15, 0, 2 * Math.PI, false);
  context.restore();
  context.fillStyle = 'white';
  context.fill();
  // request new frame
  window.requestAnimFrame(function () {
    animate(canvas);
  });
}

var canvas = document.getElementById('homepage-canvas');

const onLoad = () => {
  console.log('loading homepage...');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 1.5;
  console.log(canvas);
  animate(canvas);
};

const onUnload = () => {
  console.log('unloading homepage...');
};

export default {
  onLoad,
  onUnload
};
