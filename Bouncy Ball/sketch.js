let gravity = 0.8; // 1 is normal
let x = 100;
let y = 100;
let velX = 15;
let velY = gravity;
let bounceFactor = 0.8; // 1 is bounciest 
let radius = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    fill(255);
  textAlign('center');
  text("use mouse to spawn ball", windowWidth/2, 100)
  text("changes color based on velocity", windowWidth/2, 125)
  background('rgba(0,0,0,0.2)')
  y+=velY;
  x+=velX;
  velY+=gravity;
  if(y > (windowHeight-radius)) {
    y=windowHeight-radius;
    velY = -1 * bounceFactor * velY
    if(radius > 10) radius-=10;
  }
    if(x > (windowWidth-radius) || x < (0+radius)) {
    velX = -1 * bounceFactor * velX;
      x += velX;
  }
  let xHue = map(velX, -30, 30, 0, 255 );
  let yHue = map(velY, -40, 40, 0, 255 );
  fill(255,xHue,yHue);
  circle(x,y,radius*2);
}
function mouseClicked(){
  x = mouseX;
  y = mouseY;
  velY = gravity;
  velX-=10;
  radius = 100;
}