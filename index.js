const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX = 0;
let mouseY = 0;
let playerBlob;
let blobs = [];
let zoom = 1;
let offsetX = canvas.width / 2;
let offsetY = canvas.height / 2;
function init() {
  // playerBlob = new Blob(canvas.width / 2, canvas.height / 2);
  playerBlob = new Blob(0, 0);
  for (let i = 0; i < 500; i++) {
    // blobs[i] = new Blob(canvas.width / 2 - 100, canvas.height / 2 - 130, 16);
    // blobs[i+1] = new Blob(canvas.width / 2 + 100, canvas.height / 2 - 120, 16);
    blobs[i] = new Blob(
      randomInt(-canvas.width, canvas.width),
      randomInt(-canvas.height, canvas.height),
      16
    );
  }
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  playerBlob.update();
  for (let i = blobs.length - 1; i >= 0; i--) {
    blobs[i].draw(false, "orange");
    if (playerBlob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }
  requestAnimationFrame(animate);
}

init();
animate();
