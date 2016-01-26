var maxWaterDepth = 100
var waterDepth = maxWaterDepth
var baselineDepth = 200
var watershedLabel = 'None'

function setup() {
  createCanvas(480, 270);	// width, height
  stroke(0);
}

function draw() {
  background(255);

  // build mountains
  fill('gray');
  triangle_upright(80, 75, 100, 100);
  triangle_upright(180, 75, 100, 100);

  // build rain
  fill('cyan')
  triangle_upright(50, waterDepth, -10, 10) 
  triangle_upright(100, waterDepth, -10, 10) 
  triangle_upright(150, waterDepth, -10, 10) 
  triangle_upright(200, waterDepth, -10, 10) 
  
  // move rain 
  waterDepth = (waterDepth + 1.0) % maxWaterDepth

  // mark watershed
  fill('red')
  rect(30, baselineDepth, 50, 5)

  fill('yellow')
  rect(30 + 50, baselineDepth, 100, 5)

  fill('green')
  rect(30 + 150, baselineDepth, 50, 5)

  // label current hover watershed
  textFont("Helvetica")
  textSize(14)
  fill('black')
  text(watershedLabel, baselineDepth + 20, 150)
}

function triangle_upright(x1, y1, vertical, base_span){
	// creates an upright isoceles triangle
	return triangle(
		x1, y1,
		x1 - base_span / 2.0, y1 + vertical,
		x1 + base_span / 2.0, y1 + vertical
	)
}

function mouseMoved(){
	if (mouseX < 80 && mouseX > 30){
		watershedLabel = 'Red Watershed'
	} else if (mouseX < 180 && mouseX > 80){
		watershedLabel = 'Yellow Watershed'
	} else if (mouseX < 230 && mouseX > 180){
		watershedLabel = 'Green Watershed'
	} else {
		watershedLabel = ''
	}
}