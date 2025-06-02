// Web Authoring Banner Animation
// Abstract representation of web development: nodes, connections, and flowing code

let nodes = [];
let codeParticles = [];
let connections = [];
let canvas;

function setup() {
  // Create canvas and attach to banner div
  const bannerDiv = document.getElementById('banner-animation');
  if (!bannerDiv) return;
  
  canvas = createCanvas(windowWidth, 300);
  canvas.parent('banner-animation');
  canvas.style('position', 'absolute');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '1');
  canvas.style('pointer-events', 'none');
  
  // Initialize nodes (representing HTML elements)
  for (let i = 0; i < 8; i++) {
    nodes.push({
      x: random(width * 0.1, width * 0.9),
      y: random(height * 0.2, height * 0.8),
      baseX: 0,
      baseY: 0,
      size: random(8, 15),
      pulse: random(TWO_PI),
      connections: []
    });
  }
  
  // Set base positions for subtle movement
  for (let node of nodes) {
    node.baseX = node.x;
    node.baseY = node.y;
  }
  
  // Create connections between nearby nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let distance = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      if (distance < 150 && random() > 0.3) {
        connections.push({
          from: i,
          to: j,
          opacity: random(0.1, 0.3),
          flowProgress: random(1)
        });
      }
    }
  }
  
  // Initialize code particles (representing CSS/JS flowing through)
  for (let i = 0; i < 12; i++) {
    codeParticles.push({
      x: random(width),
      y: random(height),
      speedX: random(-0.5, 0.5),
      speedY: random(-0.3, 0.3),
      size: random(2, 4),
      opacity: random(0.1, 0.4),
      character: random(['<', '>', '{', '}', '(', ')', '[', ']', '=', ';'])
    });
  }
}

function draw() {
  clear(); // Transparent background
  
  // Update and draw code particles
  for (let particle of codeParticles) {
    // Gentle floating movement
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    
    // Wrap around edges
    if (particle.x < 0) particle.x = width;
    if (particle.x > width) particle.x = 0;
    if (particle.y < 0) particle.y = height;
    if (particle.y > height) particle.y = 0;
    
    // Draw particle
    fill(255, 255, 255, particle.opacity * 255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(particle.size * 3);
    text(particle.character, particle.x, particle.y);
  }
  
  // Draw connections between nodes
  for (let connection of connections) {
    let fromNode = nodes[connection.from];
    let toNode = nodes[connection.to];
    
    stroke(255, 255, 255, connection.opacity * 255);
    strokeWeight(1);
    line(fromNode.x, fromNode.y, toNode.x, toNode.y);
    
    // Animated flow along connection
    connection.flowProgress += 0.01;
    if (connection.flowProgress > 1) connection.flowProgress = 0;
    
    let flowX = lerp(fromNode.x, toNode.x, connection.flowProgress);
    let flowY = lerp(fromNode.y, toNode.y, connection.flowProgress);
    
    fill(255, 255, 255, 150);
    noStroke();
    ellipse(flowX, flowY, 3, 3);
  }
  
  // Update and draw nodes
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    
    // Subtle breathing animation
    node.pulse += 0.02;
    let pulseSize = node.size + sin(node.pulse) * 2;
    
    // Gentle floating movement
    node.x = node.baseX + sin(frameCount * 0.005 + i) * 10;
    node.y = node.baseY + cos(frameCount * 0.007 + i) * 8;
    
    // Draw node with glow effect
    for (let r = pulseSize + 10; r > 0; r--) {
      let alpha = map(r, 0, pulseSize + 10, 0.4, 0);
      fill(255, 255, 255, alpha * 255);
      noStroke();
      ellipse(node.x, node.y, r, r);
    }
    
    // Core node
    fill(255, 255, 255, 200);
    ellipse(node.x, node.y, pulseSize, pulseSize);
  }
}

function windowResized() {
  if (canvas) {
    resizeCanvas(windowWidth, 300);
    // Reposition nodes proportionally
    for (let node of nodes) {
      node.baseX = map(node.baseX, 0, width, 0, windowWidth);
      node.x = node.baseX;
    }
  }
}
