let squares = [0,0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function followCircle(id, lag){
  if((squares.length / 2) - 1 < id) {
    squares[id*2] = 0;
    squares[id*2+1] = 0
  }
  stroke(255,id*40,100)
  strokeWeight(4)
  ellipse(squares[(2*id)],squares[2*id+1],1);
  squares[(2*id)] = lerp(squares[(2*id)],mouseX, lag);
  squares[(2*id+1)] = lerp(squares[2*id+1],mouseY,lag);
}

function draw() {
  for(let num = 0; num < 10; num++){
    followCircle(num, map(num,0,50,0,1));
  }
  filter(BLUR, 0.01)
}