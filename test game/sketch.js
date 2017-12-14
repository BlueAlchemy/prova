var circle = {

	x:0,
  y:200,
	diameter: 50
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,255,255);
}

function draw() {

fill(0,40,250);
//ellipse(circle.x, circle.y,circle.diameter,circle.diameter);
circle.x+=1;
circle.y=mouseY;
stroke(4);
ellipse(200,200,200,200);

}
