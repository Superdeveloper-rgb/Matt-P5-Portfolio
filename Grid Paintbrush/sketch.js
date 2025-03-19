let rows = 80;
let cols = 80;
let size = 1;
let maxSize = 40;
let cursorRadius = 50;
let feather = 0.9; // 1 is no feather
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colWidth = width/cols;
  rowHeight = height/rows;
  background(0)
}

function draw() {
  // center rows
  translate((0.5*width)/cols, (0.5*height)/rows);
  for(let x = 0; x<cols; x++){
    for(let y = 0;y<rows; y++){
      
          n = cursorRadius - dist(mouseX,mouseY,x*colWidth,y*rowHeight);
          n = feather*n;
          n = n*randomGaussian(1,0.1)
          if(n<=0)n=0;
      if(n>=maxSize)n=maxSize;
      
      fill(map(mouseX,0,width,100,255),map(mouseY,0,height,50,100),200-n)
      if(n>0)ellipse(x*(width/rows),y*(height/cols),size+n);
    }
  }
}