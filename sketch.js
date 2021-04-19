
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  fill(255);
  textSize(24);
  textStyle("italics");
  text("Tick Tock clock by NISTHA DEB..",350,50);
  fill("white");
  textSize(18);
  text("White Colour Indicates value of every Hour",400,90);
  text("Pink Colour Indicates value of every Minute",400,120);
  text("Yellow Colour Indicates value of every second",400,150);
  text("So Let us now respect the value of all these",400,180);
  text("as , each of them is really really imortant",400,210);
  text("and none of these can be buyed by MONEY...",400,240);
  text("SO DONT WASTE TIME....",400,270);



translate(200,200);
rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke("yellow");
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);

  stroke("pink");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);

  stroke("light blue");
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke("yellow");
  line(0,0,100,0);
  pop();

  push();
  rotate(end2);
  stroke("pink");
  line(0,0,75,0);

  push();
  rotate(end3);
  stroke("light blue");
  line(0,0,50,0);

  stroke("black");
  point (0,0);

 

  drawSprites();
}