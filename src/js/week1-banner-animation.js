// Week 1 Banner Animation - Mondrian-inspired geometric design matching hero branding
let week1Canvas;
let time = 0;
let rectangles = [];
let gridLines = [];

// Brand colors from CSS variables
const brandColors = {
  primary: [77, 25, 121],      // #4d1979
  secondary: [139, 92, 246],   // #8B5CF6
  accent: [236, 72, 153],      // #EC4899
  white: [255, 255, 255],
  dark: [45, 55, 72]
};

function setup() {
  // Create canvas to fit the banner container
  week1Canvas = createCanvas(windowWidth, 200);
  week1Canvas.parent('week1-banner-animation');
  week1Canvas.style('position', 'absolute');
  week1Canvas.style('top', '0');
  week1Canvas.style('left', '0');
  week1Canvas.style('z-index', '1');
  
  // Initialize Mondrian-style rectangles
  initializeGeometry();
}

function initializeGeometry() {
  rectangles = [];
  gridLines = [];
  
  // Create vertical grid lines
  for (let i = 0; i < 8; i++) {
    gridLines.push({
      x: (width / 8) * i,
      y1: 0,
      y2: height,
      isVertical: true,
      weight: random(1, 3),
      opacity: random(0.3, 0.8)
    });
  }
  
  // Create horizontal grid lines
  for (let i = 0; i < 4; i++) {
    gridLines.push({
      x: 0,
      y: (height / 4) * i,
      x2: width,
      isVertical: false,
      weight: random(1, 3),
      opacity: random(0.3, 0.8)
    });
  }
  
  // Create animated rectangles in Mondrian style
  for (let i = 0; i < 12; i++) {
    rectangles.push({
      x: random(0, width - 60),
      y: random(0, height - 40),
      w: random(30, 80),
      h: random(20, 60),
      colorIndex: floor(random(4)),
      alpha: random(0.4, 0.8),
      animationOffset: random(TWO_PI),
      speed: random(0.01, 0.03)
    });
  }
}

function draw() {
  // Gradient background matching hero section
  drawBrandedBackground();
  
  // Update animation time
  time += 0.015;
  
  // Draw animated grid system (Mondrian-inspired)
  drawAnimatedGrid();
  
  // Draw floating branded rectangles
  drawBrandedRectangles();
  
  // Add subtle HTML tag-inspired elements
  drawCodeElements();
  
  // Overlay pattern similar to hero nav
  drawOverlayPattern();
}

function drawBrandedBackground() {
  // Multi-layer gradient matching the brand
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let r = lerp(brandColors.primary[0], brandColors.dark[0], inter);
    let g = lerp(brandColors.primary[1], brandColors.dark[1], inter);
    let b = lerp(brandColors.primary[2], brandColors.dark[2], inter);
    stroke(r, g, b, 180);
    line(0, i, width, i);
  }
}

function drawAnimatedGrid() {
  // Animated grid lines in Mondrian style
  gridLines.forEach((line, index) => {
    let animatedOpacity = line.opacity + sin(time + index * 0.5) * 0.2;
    stroke(255, 255, 255, animatedOpacity * 255);
    strokeWeight(line.weight);
    
    if (line.isVertical) {
      let animatedX = line.x + sin(time * 0.5 + index * 0.3) * 2;
      line(animatedX, line.y1, animatedX, line.y2);
    } else {
      let animatedY = line.y + cos(time * 0.4 + index * 0.4) * 1.5;
      line(line.x, animatedY, line.x2, animatedY);
    }
  });
}

function drawBrandedRectangles() {
  // Floating rectangles in brand colors (Mondrian-inspired)
  rectangles.forEach((rect, index) => {
    let currentColor;
    switch(rect.colorIndex) {
      case 0: currentColor = brandColors.primary; break;
      case 1: currentColor = brandColors.secondary; break;
      case 2: currentColor = brandColors.accent; break;
      default: currentColor = brandColors.white; break;
    }
    
    // Animate position slightly
    let animX = rect.x + sin(time * rect.speed + rect.animationOffset) * 3;
    let animY = rect.y + cos(time * rect.speed * 0.7 + rect.animationOffset) * 2;
    
    // Animate alpha
    let animAlpha = rect.alpha + sin(time * 0.8 + rect.animationOffset) * 0.2;
    
    fill(currentColor[0], currentColor[1], currentColor[2], animAlpha * 255);
    noStroke();
    rect(animX, animY, rect.w, rect.h);
    
    // Add subtle border in Mondrian style
    stroke(255, 255, 255, animAlpha * 100);
    strokeWeight(1);
    noFill();
    rect(animX, animY, rect.w, rect.h);
  });
}

function drawCodeElements() {
  // HTML-inspired elements that match the academic coding theme
  for (let i = 0; i < 6; i++) {
    let x = (width / 7) * (i + 1);
    let y = height / 2 + sin(time * 0.6 + i * 0.8) * 20;
    let size = 8 + sin(time * 0.9 + i * 0.4) * 3;
    
    // Draw as small squares representing code blocks
    fill(brandColors.secondary[0], brandColors.secondary[1], brandColors.secondary[2], 150 + sin(time + i) * 50);
    noStroke();
    rectMode(CENTER);
    rect(x, y, size, size);
    
    // Add connection lines representing DOM structure
    if (i < 5) {
      let nextX = (width / 7) * (i + 2);
      let nextY = height / 2 + sin(time * 0.6 + (i + 1) * 0.8) * 20;
      stroke(brandColors.white[0], brandColors.white[1], brandColors.white[2], 80);
      strokeWeight(1);
      line(x, y, nextX, nextY);
    }
  }
  rectMode(CORNER);
}

function drawOverlayPattern() {
  // Subtle overlay pattern matching the hero nav design
  stroke(255, 255, 255, 30);
  strokeWeight(0.5);
  
  // Vertical lines
  for (let x = 0; x < width; x += width / 20) {
    if (random() > 0.7) {
      line(x, 0, x, height);
    }
  }
  
  // Horizontal lines
  for (let y = 0; y < height; y += 20) {
    if (random() > 0.8) {
      line(0, y, width, y);
    }
  }
}

function windowResized() {
  if (week1Canvas) {
    resizeCanvas(windowWidth, 200);
    initializeGeometry(); // Reinitialize for new dimensions
  }
}
