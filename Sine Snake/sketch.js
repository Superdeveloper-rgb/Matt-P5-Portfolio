let xLoc = [], yLoc = [], numSegments = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  cursor(CROSS);
}

function draw() {
  background(0);
  // frameRate(12);
  
  xLoc[numSegments-1] = mouseX;
  yLoc[numSegments-1] = mouseY;
  
  // xLoc[numSegments-1] = random(width);
  // yLoc[numSegments-1] = random(height);
  
  for(let i = 0; i<numSegments-1; i++){
    xLoc[i] = xLoc[i+1];
    yLoc[i] = yLoc[i+1];
    
    let diameter = sin(map(i,0,numSegments-1,0,PI))*150;
    
    stroke(diameter+100,30,150-diameter);
    ellipse(xLoc[i],yLoc[i], diameter)
  }
}