function setup() {
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  // these are all setting colours
  // setting the background to grey
  background(40);

  // this is setting the rotation around the x axis at 60 degrees so that we can see it from that angle
  rotateX(60);
  // noFill makes sure the shapes arent filled, and stroke sets the color of the objects to white
  noFill();
  // stroke is a function within p5js that sets colors
  // stroke(255, 0, 0): Red
  // stroke(0, 255, 0): Green
  // stroke(0, 0, 255): Blue
  // stroke(255, 255, 0): Yellow (Red + Green)
  // stroke(255, 255, 255): White (Red + Green + Blue)
  // stroke(0, 0, 0): Black (no color)
  stroke(255);
  // iterates 100 times to create 100 shapes
  for (var i = 0; i < 100; i++) {
    var r = map(sin(frameCount), -1, 1, 100, 200);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    rotate(frameCount / 20);

    beginShape();
    for (var j = 0; j < 360; j += 60) {
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 50;

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}
