let rows = 20;
let cols = 20;
let size = 1;
let maxSize = 30;
let cursorRadius = 400;
let feather = 0.06; // 1 is no feather
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colWidth = width/cols;
  rowHeight = height/rows;
}

function draw() {
  background(255);
  // center rows
  translate((0.5*width)/cols, (0.5*height)/rows);
  for(let x = 0; x<cols; x++){
    for(let y = 0;y<rows; y++){
      
          n = cursorRadius - dist(mouseX,mouseY,x*colWidth,y*rowHeight);
          n = feather*n;
          if(n<=0)n=0;
      if(n>=maxSize)n=maxSize;
      translate(n*feather, 0)     
      fill(0)
      ellipse(x*(width/rows),y*(height/cols),size+n);
      n = 1;
    }
  }
}