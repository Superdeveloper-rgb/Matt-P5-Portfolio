let xVelocity = 8;
let yVelocity = 10;
let diameter = 90;
let acceleration = 0; // velocity = mass * acceleration
let x = diameter/2, y = diameter/2;
let loops = 0;
let loopsdir = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(255);
  textAlign('center');
  text("use mouse to bounce", windowWidth/2, 100)
  background('rgba(0,0,0,0.04)');
  loops += loopsdir;
  if(loops > 254) loopsdir = -1;
  if(loops < 1) loopsdir = 1;
  let r = map(x,diameter/2,width-diameter/2,100,255);
  let g = map(x,diameter/2,height-diameter/2,loops,100);
  let b = map(x,diameter/2,width-diameter/2,255,0);
  fill (r,g,b)
  stroke(r,g,b)
  
  ellipse(x,y,diameter)
  
  x+=xVelocity;
  y+=yVelocity;
  
  if(x>windowWidth - diameter/2 || x<diameter/2 ) {
    xVelocity = -xVelocity;
  }
  if(y>windowHeight - diameter/2 || y<diameter/2) {
    yVelocity = -yVelocity;
  }
  
    if(mouseX > (x - diameter/2) && mouseX < (x + diameter/2) ){
      if(mouseY > y - diameter/2 && mouseY < y + diameter/2){
       if(mouseX-x<0) {xVelocity = xVelocity} else {xVelocity = -xVelocity}
               if(mouseY-y<0) {yVelocity = yVelocity} else {yVelocity = -yVelocity}
      }
    }
 
}