window.addEventListener("mousemove", (evt) => {
  var rect = canvas.getBoundingClientRect();

  mouseX = evt.clientX - rect.left || 0;
  mouseY = evt.clientY - rect.top || 0;
});
