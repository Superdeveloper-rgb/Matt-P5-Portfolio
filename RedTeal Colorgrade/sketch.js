let vid;
function setup() {
  createCanvas(400, 400);
  vid = createCapture(VIDEO, {flipped: true});
  vid.hide();
}

function draw() {
  background(220);
  image(vid,0,0)
  loadPixels();
  
  for(let i = 0; i < pixels.length; i+=4){
    pixels[i] = 100; // red
    pixels[i+1] += 10// green
    pixels[i+2] += 10 // blue
    pixels[i+3] = pixels[i] * 2 // alpha
  }
  updatePixels();
}