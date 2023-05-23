let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width;
let height;

let resize = function () {
  width = window.innerWidth * 2;
  height = window.innerHeight * 2;
  canvas.width = width;
  canvas.height = height;
};
window.onresize = resize;
resize();

ctx.fillStyle = "red";

// records the location of the ball
let state = {
  x: width / 2,
  y: height / 2,
};

function update(progress) {
  // update state of world for elapsed time since last render
  state.x += progress; // controls speed of ball
  if (state.x > width) {
    state.x -= width; // go back to start
  }
}

function draw() {
  // draws the ball to the screen
  ctx.clearRect(0, 0, width, height); // clears the previous frame
  ctx.fillRect(state.x - 10, state.y - 10, 60, 30); // draws the current frame
}

function loop(timeStamp) {
  let progress = timeStamp - lastRender;

  update(progress);
  draw();

  lastRender = timeStamp;
  window.requestAnimationFrame(loop);
}

let lastRender = 0;
window.requestAnimationFrame(loop);
