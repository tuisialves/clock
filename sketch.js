

function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)

}

function draw() {
  background(255)
  translate(width/2,height/2)

  stroke (166,232,166); 
	fill(255);
	ellipse(0,0,450,450);
	
 
  
  
  
  //hours
  if(hour()>12){
    var hour12 = hour()-12
  } else {
    var hour12 = hour()
  }
  drawNendle(hour12,12,10,90,["#7ACE91"])
  
  //minutes
  drawNendle(minute(),60,6,150,["#72BA86"])
  
  // seconds
  drawNendle(second(),60,1,180,["#3EC163"]) 
  
  stroke (171, 255, 171);
  fill(0)
  ellipse(0,0,15)
  
  for (var r = 1; r <= 12; r++) {
        push();
        rotate(r * 30);
        fill(171,255,171);
        noStroke();
        ellipse(170,100,10,10);
        pop();
    }
  
  
}

function drawNendle(needlevalue,needlerange,needleweight,needleradius,needlecol){
  var angle = map(needlevalue,0,needlerange,-90,270)
  stroke(needlecol)
  strokeWeight(needleweight)
  line(0,0,needleradius*cos(angle),needleradius*sin(angle))
}