let vid;
let sensitivity = 100; //0-255
function setup() {
  createCanvas(windowWidth, 400);
  vid = createCapture(VIDEO, { flipped: true });
  vid.hide();
}

function draw() {
  background(255, 100, 100);
  let vWidth = 500;
  let vHeight = 360;
  image(vid, width / 2 - vWidth / 2, height / 2 - vHeight / 2, vWidth, vHeight);
  loadPixels();

  for (let i = 0; i < pixels.length; i += 4) {
    let brightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
    let red = pixels[i];
    let green = pixels[i + 1];
    let blue = pixels[i + 2];
    
    if (green > 75 && blue > 75) {
        pixels[i] = brightness;
        pixels[i + 1] = brightness;
        pixels[i + 2] = brightness;
    }

  }
  updatePixels();
}
