let g1,g2;
let img;
let xloc = 0;
let yloc = -330;
let jump = 0;

function preload(){
  img = loadImage("background.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  g1 = createGraphics(width,height/2);
}

function draw() {
  background(255);
  image(img,xloc,yloc,img.width*2, height*1.5);
  fill(255)
  ellipse(width/4,height/2,75)
  xloc -= 1;
  yloc += jump;
  if(yloc > -330){
    jump -= 2;
  }else{
    jump = 0;
  }
  fill(0)
  text("Click canvas, then UP arrow ↑ to jump", 100,100)
}

function keyPressed(){
  if(keyCode ===  LEFT_ARROW){
    xloc -= 15;
  }else if (keyCode === RIGHT_ARROW) {
    xloc += 15;
  }else if (keyCode ===  UP_ARROW){
    jump = 30;
  }
    
}