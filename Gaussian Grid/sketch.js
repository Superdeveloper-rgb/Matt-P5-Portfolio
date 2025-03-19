function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}
let num = 30;
let rows = num;
let columns = num;
let counter = 0;

function draw() {
  background(255);
  translate((0.5*width)/columns, (0.5*height)/rows);

  counter+=0.01;
  
  for(let x = 0;x<columns;x++) {
    for(let y = 0;y<rows;y++) {

      let n = noise(x/50,y/50,lerp(counter, counter+((mouseX-mouseY)/100), 0.1));
      fill(0);
      ellipse(
      (x*width)/columns,
        (y*height)/rows,
        (n * 80 - 30)
      )
    }
  }
}