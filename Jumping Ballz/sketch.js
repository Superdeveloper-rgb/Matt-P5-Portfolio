class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.centerSize = random(20, 68);
    this.centerCol = color(random(255), random(255), random(255));

    this.petalLength = random(20, 80);
    this.petalWidth = random(10, 45);
    this.numPetals = random(8, 20);
    this.petalColor = color(random(255), random(255), random(255));

    this.vX = random(-5, 5);
    this.vY = 5;
    this.rotation = 0;
    this.angularV = random(-5, 5);
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    // for (let i = 0; i < this.numPetals; i++) {
    //   fill(this.petalColor);
    //   ellipse(
    //     this.centerSize / 2 + this.petalLength / 4,
    //     0,
    //     this.petalLength,
    //     this.petalWidth
    //   );
    //   rotate(360 / this.numPetals);
    // }
    fill(this.centerCol);
    ellipse(0, 0, this.centerSize);
    pop();
  }

  move() {
    this.y += this.vY;
    this.x += this.vX;
    this.rotation += this.angularV;
    
    if(this.x + this.centerSize/2 > width || this.x -this.centerSize/2 < 0){
      this.vX = -this.vX
    }
    if(this.y + this.centerSize/2 > height || this.y - this.centerSize/2 < 0){
      this.vY = -this.vY
    }
    if(this.y + this.centerSize + 10 <height){
      this.vY += 0.8;
    }
  }
}

let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for(let i = 0; i < 8; i++){
    let newFlower = new Flower(random(100,150),random(100,150))
    flowers.push(newFlower);
  }

  
}

function draw() {
  background(220);
  fill(0)
  text('Click & Drag', 100,100)
  for(let i = 0; i < flowers.length; i++){
    flowers[i].show();
    flowers[i].move()
  }
}

function mouseDragged() {
  flowers.push(new Flower(mouseX, mouseY));
}
