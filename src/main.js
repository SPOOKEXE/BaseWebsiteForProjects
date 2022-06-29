
// Variables //
var canvas = null;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	print("Canvas Size ; ", windowWidth, windowHeight)
}

function setup() {
	print("Canvas Size ; ", windowWidth, windowHeight)
	frameRate(60);
	canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
}
