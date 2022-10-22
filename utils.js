function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}

function getMag(dis1, dis2) {
  return Math.sqrt(dis1 * dis1 + dis2 * dis2);
}

function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}