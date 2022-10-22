class Blob {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius || 64;
    this.speed = 10;
  }

  update() {
    this.draw(true);
  }

  eats(other) {
    var distanceX = this.x - other.x;
    var distanceY = this.y - other.y;
    var magnitude = getMag(distanceX, distanceY);

    if (magnitude < this.radius * 2 + other.radius) {
      let sum = Math.PI * this.radius * this.radius + Math.PI * other.radius * other.radius;
      this.radius = Math.sqrt(sum / Math.PI);

      return true;
    } else return false;
  }

  draw(bool = false, color = "white") {
    context.save();
    context.beginPath();

    context.translate(canvas.width / 2 - playerBlob.x, canvas.height / 2 - playerBlob.y);
    let newzoom = 64 / playerBlob.radius;
    zoom = lerp(zoom, newzoom, 0.1);
    context.scale(zoom, zoom);
    // context.translate(-playerBlob.x, -playerBlob.y); // ? useless

    if (!bool) {
      context.translate(this.x, this.y);
      // ? source: https://jsfiddle.net/117ft1Lf/4/
      if (mouseX != 0 || mouseY != 0) {
        var distanceX = mouseX - playerBlob.x - offsetX;
        var distanceY = mouseY - playerBlob.y - offsetY;

        var magnitude = getMag(distanceX, distanceY);
        var deltaX = (distanceX * this.speed) / magnitude;
        var deltaY = (distanceY * this.speed) / magnitude;

        this.x -= deltaX;
        this.y -= deltaY;
      }
    }

    context.fillStyle = color;
    context.arc(0, 0, this.radius * 2, 0, Math.PI * 2, false);

    context.fill();
    context.closePath();
    context.restore();
  }
}
