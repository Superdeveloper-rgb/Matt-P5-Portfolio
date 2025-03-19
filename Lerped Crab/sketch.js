function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}
let x = 0;
function draw() {
  x = lerp(x,mouseX, 0.08)
  background(220);
  fill(randomGaussian(x), randomGaussian(x-100),randomGaussian(x-50))
  stroke(50,10,20)
  translate(width/2, height/2);
  ellipse(0,0,30);
  rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
    rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
    rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  scale(0.8);
      rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  scale(0.8);    rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  scale(0.8);    rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  scale(0.8);
      rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  scale(0.8);
      rotate(x);
  translate(50,0);
  ellipse(0,0,30);
  line(0,0,-50,0);
  scale(0.8);

}