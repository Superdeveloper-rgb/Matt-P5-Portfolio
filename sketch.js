let rows = 40,
  columns = 53.33;
let cars = [];
let spawn = 0;
let img;

function preload(){
  img = loadImage('/mattflix.png');
}

class Car {
  constructor(x, y) {
    this.x = round((width / columns) * floor(x / (width / columns)));
    this.y = round((height / rows) * floor(y / (height / rows)));
    this.dx = 0;
    this.dy = 0;
    this.speed = 5;
  }
  moveCells(numRows, numColumns) {
    if(floor(abs(this.dx)) == 0){
      if(floor(abs(this.dy)) == 0){
        this.dx = (round(numRows) * width) / columns;
        this.dy = (round(-numColumns) * height) / rows;
      }
    }
  }
  position() {
    if (round(this.dx) !== 0) {
      if (this.dx > 0 && this.dx > this.speed) {
        this.x += this.speed;
        this.dx -= this.speed;
      } else if (this.dx < 0 && abs(this.dx) > this.speed) {
        this.x -= this.speed;
        this.dx += this.speed;
      } else if (round(this.dx) != 0 && abs(this.dx) < this.speed) {
        this.x = round((width / columns) * round(this.x / (width / columns)));
        this.dx = 0;
      }
      return;
    }
    if (this.dy > 0 && this.dy > this.speed) {
      this.y += this.speed;
      this.dy -= this.speed;
    } else if (this.dy < 0 && abs(this.dy) > this.speed) {
      this.y -= this.speed;
      this.dy += this.speed;
    } else if (round(this.dy) != 0) {
      this.y = round((height / rows) * round(this.y / (height / rows)));
      this.dy = 0;
    }
  }
  stop() {
    this.dy = 0;
    this.dx = 0;
    this.position();
  }
  paint() {
    fill(205, 52, 120);
    noStroke();
    ellipse(this.x, this.y, height/rows);
  }
}

function setup() {
  //mattflix landing backdrop
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  //stop grid flash
  background(12);

  for (let i = 0; i < 4; i++) {
    let c = new Car(random(0, width), random(0, height));
    cars.push(c);
  }


}

function draw() {
  //draw grid
  translate((0.5 * width) / columns, (0.5 * height) / rows);
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      fill(0, 0, 0, 10);
      stroke(12);
      rect(
        x * (width / columns),
        (y * height) / rows,
        width / columns,
        height / rows
      );
    }
  }

  //draw cars
  for (let i = 0; i < cars.length; i++) {
    cars[i].paint();
    cars[i].position();
    if (floor(abs(cars[i].dx)) == 0 && floor(abs(cars[i].dy)) == 0) {
      cars[i].moveCells(random(-3, 3), random(-3, 3));
    }
  }

  // periodically spawn cars
  if (spawn % 30 === 0) {
    cars.push(new Car(random(0, width), random(0, height)));
  }
  spawn++;

  // Draw logo on top
  for(let i = 3; i < 8; i++){
    image(img, 
      (width/2)-(img.width/2)+(mouseX-img.width-width/2)/20, 
      (height/2)-(img.height/2)+(mouseY-img.height-height/2)/20)
  }

}

function mousePressed() {
  cars.push(new Car(mouseX, mouseY));
}
let drag = 0;
function mouseDragged() {
  drag++;
  if (drag % 4 == 0) {
    cars.push(new Car(mouseX, mouseY));
  }
}
