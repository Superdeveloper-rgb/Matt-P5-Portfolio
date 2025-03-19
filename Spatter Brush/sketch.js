let squares = [0,0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function followCircle(id, lag){
  if((squares.length / 2) - 1 < id) {
    squares[id*2] = 0;
    squares[id*2+1] = 0
  }
  stroke(id*20,id*50,100)
  strokeWeight(4)
  ellipse(squares[(2*id)]+randomGaussian(100,1),squares[2*id+1] + randomGaussian(140,10),1);
  squares[(2*id)] = lerp(squares[(2*id)],mouseX-100, lag);
  squares[(2*id+1)] = lerp(squares[2*id+1],mouseY-140,lag);
}

function draw() {
  for(let num = 0; num < 100; num++){
    followCircle(num, map(num,0,50,0,1));
  }
}