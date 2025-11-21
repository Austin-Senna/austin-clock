let lastMinute = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
  strokeCap(ROUND); 
}

function draw() {
  // 1. TRAIL EFFECT: 
  if (second() % 2 === 0) {
    background(30); 
  } else {
    noStroke();
    fill(30, 30, 35, 25); 
    rect(0, 0, width, height);
  }
  
  let h = hour();
  let m = minute();
  let s = second();
  
  if (m !== lastMinute) {
    console.log("Current Minute: " + m);
    lastMinute = m;
  }

  let hAngle = map(h % 12 + m/60, 0, 12, 0, 360); 
  let mAngle = map(m + s/60, 0, 60, 0, 360);
  let sAngle = map(s, 0, 60, 0, 360);

  translate(width / 2, height / 2);

  // 2. BLINKING STARS
  push();
  noStroke();
  for (let i = 0; i < 12; i++) {
    
    fill(255, 50);
    circle(0, -180, 5); 
    
    fill(220,200,100, 10);
    circle(0, -180, 20);
    rotate(30);
  }
  pop();

  // --- HOUR ARM ---
  push();
  rotate(hAngle); 
  
  stroke(220, 220, 130); 
  strokeWeight(10);
  line(0, 0, 0, -100);
  
  fill(30); 
  noStroke();
  circle(0, 0, 8); 
  
  translate(0, -100); 
  
      // --- MINUTE ARM ---
      push();
      rotate(mAngle - hAngle); 
      
      stroke(150, 150, 255); 
      strokeWeight(6);
      line(0, 0, 0, -80); 
      
      fill(30); 
      noStroke();
      circle(0, 0, 6);
      
      translate(0, -80); 
      
          // --- SECOND ARM ---
          push();
          rotate(sAngle - mAngle); 
          
          stroke(255, 255, 200); 
          strokeWeight(3);
          line(0, 0, 0, -50); 
          
          noStroke();
          fill(255);
          circle(0, -50, 8);
          
          fill(255, 255, 255, 30);
          circle(0, -50, 18);
        
          fill(30)
          circle(0, 0, 4)
          
          pop(); 
      pop(); 
  pop(); 
  
  fill(255);
  noStroke();
  circle(0, 0, 20);
  fill(30);
  circle(0, 0, 8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}