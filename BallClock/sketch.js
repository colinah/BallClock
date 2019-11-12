let slider, val

function setup() {
  // put setup code here
  createCanvas(400,400)
  
  ballClock = new BallClock
  ballClock.queStart()
  slider = createSlider(1, 60, 1);
  slider.position(10, 10);
  slider.style('width', '80px');
  let val = slider.value();
  frameRate(val);
}

function draw() {
  // put drawing code here
  background(180);
  stroke(0);
  

  ballClock.update();
  ballClock.show();
  this.drawPositions();
  let val = slider.value();
  frameRate(val);
  // this.balls()
  // this.mouse()
}


drawQue = () => {

}

drawPositions = () => {
  // min position
  stroke(0);
  line(250,100,350,100)
  // five min position
  stroke(0);
  line(225,150,350,150)
  // hour posisiton
  stroke(0);
  line(225,200,350,200)
  // QUE POSITIONS
  // QUE POSITIONS
    // Left Side
    line(150,300,150,350)
  // Third From bottom horizontal
    line(175,325,375,325)
  // Right Side
    line(375,275,375,375)
  // Bottom
    line(375,375,120,375)
  // Left opening
    line(120,375,120,350)
  // second from bottom
    line(150,350,350,350)
  // Fourth from bottom
    line(150,300,350,300)
  //Fifth from bottom
    line(175,275,375,275)
    stroke(0)
}



