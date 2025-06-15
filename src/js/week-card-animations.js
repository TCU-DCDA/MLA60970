// Week Card Animations using p5.js
// Simple animations for week link cards

let videoSketch = function(p) {
    let angle = 0;
    let pulseScale = 1;
    
    p.setup = function() {
        p.createCanvas(80, 80);
        p.noLoop(); // We'll handle animation manually
    };
    
    p.draw = function() {
        p.clear();
        
        // Purple gradient background circle
        let centerX = p.width / 2;
        let centerY = p.height / 2;
        
        // Pulsing background circle
        pulseScale = 0.8 + 0.2 * Math.sin(angle * 0.05);
        p.fill(139, 92, 246, 100);
        p.noStroke();
        p.ellipse(centerX, centerY, 60 * pulseScale);
        
        // Video camera body
        p.fill(77, 25, 121);
        p.rect(centerX - 15, centerY - 8, 30, 16, 3);
        
        // Camera lens
        p.fill(236, 72, 153);
        p.ellipse(centerX - 8, centerY, 12);
        
        // Lens reflection (animated)
        let reflectionOffset = 2 * Math.sin(angle * 0.03);
        p.fill(255, 255, 255, 150);
        p.ellipse(centerX - 8 + reflectionOffset, centerY - 1, 4);
        
        // Play button (triangle)
        p.fill(255);
        p.triangle(centerX + 5, centerY - 5, centerX + 5, centerY + 5, centerX + 12, centerY);
        
        // Recording light (blinking)
        if (Math.sin(angle * 0.1) > 0) {
            p.fill(255, 100, 100);
            p.ellipse(centerX + 12, centerY - 8, 4);
        }
        
        angle++;
    };
    
    p.animate = function() {
        p.draw();
    };
};

let bookSketch = function(p) {
    let angle = 0;
    let pageFlip = 0;
    
    p.setup = function() {
        p.createCanvas(80, 80);
        p.noLoop();
    };
    
    p.draw = function() {
        p.clear();
        
        let centerX = p.width / 2;
        let centerY = p.height / 2;
        
        // Glowing background
        let glowIntensity = 0.5 + 0.3 * Math.sin(angle * 0.03);
        p.fill(236, 72, 153, 50 * glowIntensity);
        p.noStroke();
        p.ellipse(centerX, centerY, 70);
        
        // Book base
        p.fill(77, 25, 121);
        p.rect(centerX - 12, centerY - 10, 24, 20, 2);
        
        // Book spine
        p.fill(139, 92, 246);
        p.rect(centerX - 12, centerY - 10, 4, 20, 2);
        
        // Pages (animated)
        pageFlip = Math.sin(angle * 0.04) * 3;
        p.fill(255, 255, 255);
        for (let i = 0; i < 3; i++) {
            let offset = i * 2 + pageFlip;
            p.rect(centerX - 8 + offset, centerY - 8, 16, 16, 1);
        }
        
        // Text lines on pages
        p.stroke(200);
        p.strokeWeight(1);
        for (let i = 0; i < 4; i++) {
            let y = centerY - 4 + i * 3;
            p.line(centerX - 6, y, centerX + 6, y);
        }
        p.noStroke();
        
        // Bookmark (animated)
        let bookmarkY = centerY - 10 + 2 * Math.sin(angle * 0.02);
        p.fill(236, 72, 153);
        p.rect(centerX + 8, bookmarkY, 3, 12);
        p.triangle(centerX + 8, bookmarkY + 12, centerX + 11, bookmarkY + 12, centerX + 9.5, bookmarkY + 15);
        
        // Floating knowledge particles
        for (let i = 0; i < 3; i++) {
            let particleAngle = angle * 0.02 + i * 2;
            let radius = 25 + i * 5;
            let x = centerX + Math.cos(particleAngle) * radius;
            let y = centerY + Math.sin(particleAngle) * radius;
            
            p.fill(139, 92, 246, 100);
            p.ellipse(x, y, 3);
        }
        
        angle++;
    };
    
    p.animate = function() {
        p.draw();
    };
};

let cssSketch = function(p) {
    let angle = 0;
    let waveOffset = 0;
    
    p.setup = function() {
        p.createCanvas(80, 80);
        p.noLoop();
    };
    
    p.draw = function() {
        p.clear();
        
        let centerX = p.width / 2;
        let centerY = p.height / 2;
        
        // Pulsing background
        let pulseScale = 0.9 + 0.2 * Math.sin(angle * 0.04);
        p.fill(139, 92, 246, 60);
        p.noStroke();
        p.ellipse(centerX, centerY, 70 * pulseScale);
        
        // CSS code symbol background
        p.fill(77, 25, 121);
        p.rect(centerX - 18, centerY - 12, 36, 24, 4);
        
        // CSS brackets - animated
        let bracketOffset = 2 * Math.sin(angle * 0.03);
        p.fill(236, 72, 153);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(20);
        p.text('{', centerX - 12 + bracketOffset, centerY - 2);
        p.text('}', centerX + 12 - bracketOffset, centerY - 2);
        
        // CSS properties lines (animated wave)
        p.stroke(255);
        p.strokeWeight(2);
        for (let i = 0; i < 3; i++) {
            let y = centerY - 6 + i * 4;
            let waveY = y + Math.sin(waveOffset + i * 0.5) * 1;
            p.line(centerX - 8, waveY, centerX + 8, waveY);
        }
        p.noStroke();
        
        // Floating style particles
        for (let i = 0; i < 4; i++) {
            let particleAngle = angle * 0.02 + i * 1.5;
            let radius = 28 + i * 3;
            let x = centerX + Math.cos(particleAngle) * radius;
            let y = centerY + Math.sin(particleAngle) * radius;
            
            p.fill(139, 92, 246, 150);
            p.rect(x - 1, y - 1, 2, 2);
        }
        
        angle++;
        waveOffset += 0.1;
    };
    
    p.animate = function() {
        p.draw();
    };
};

let layoutSketch = function(p) {
    let angle = 0;
    let gridOffset = 0;
    
    p.setup = function() {
        p.createCanvas(80, 80);
        p.noLoop();
    };
    
    p.draw = function() {
        p.clear();
        
        let centerX = p.width / 2;
        let centerY = p.height / 2;
        
        // Animated background glow
        let glowIntensity = 0.6 + 0.4 * Math.sin(angle * 0.03);
        p.fill(236, 72, 153, 40 * glowIntensity);
        p.noStroke();
        p.ellipse(centerX, centerY, 75);
        
        // Flexbox container
        p.fill(77, 25, 121);
        p.rect(centerX - 16, centerY - 14, 32, 28, 3);
        
        // Animated flex items
        let flexOffset = Math.sin(angle * 0.04) * 2;
        p.fill(139, 92, 246);
        p.rect(centerX - 12, centerY - 10 + flexOffset, 8, 8, 2);
        p.rect(centerX - 2, centerY - 10 - flexOffset, 8, 8, 2);
        p.rect(centerX + 8, centerY - 10 + flexOffset * 0.5, 8, 8, 2);
        
        // Layout grid lines (animated)
        p.stroke(236, 72, 153, 100);
        p.strokeWeight(1);
        
        let gridShift = Math.sin(gridOffset) * 2;
        // Vertical grid lines
        for (let i = 0; i < 3; i++) {
            let x = centerX - 8 + i * 8 + gridShift;
            p.line(x, centerY + 2, x, centerY + 12);
        }
        // Horizontal grid lines
        for (let i = 0; i < 2; i++) {
            let y = centerY + 4 + i * 6 + gridShift * 0.5;
            p.line(centerX - 8, y, centerX + 8, y);
        }
        p.noStroke();
        
        // Responsive indicators
        p.fill(255, 255, 255, 200);
        p.ellipse(centerX - 14, centerY + 10, 3);
        p.ellipse(centerX, centerY + 10, 3);
        p.ellipse(centerX + 14, centerY + 10, 3);
        
        angle++;
        gridOffset += 0.08;
    };
    
    p.animate = function() {
        p.draw();
    };
};

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Create p5 instances for each canvas
    let videoCanvas = document.getElementById('video-animation');
    let bookCanvas = document.getElementById('book-animation');
    let cssCanvas = document.getElementById('css-animation');
    let layoutCanvas = document.getElementById('layout-animation');
    
    // Week 1 animations
    if (videoCanvas && bookCanvas) {
        let videoP5 = new p5(videoSketch, videoCanvas);
        let bookP5 = new p5(bookSketch, bookCanvas);
        
        // Week 1 hover effects
        videoCanvas.parentElement.parentElement.addEventListener('mouseenter', function() {
            videoP5.loop();
        });
        
        videoCanvas.parentElement.parentElement.addEventListener('mouseleave', function() {
            videoP5.noLoop();
        });
        
        bookCanvas.parentElement.parentElement.addEventListener('mouseenter', function() {
            bookP5.loop();
        });
        
        bookCanvas.parentElement.parentElement.addEventListener('mouseleave', function() {
            bookP5.noLoop();
        });
    }
    
    // Week 2 animations
    if (cssCanvas && layoutCanvas) {
        let cssP5 = new p5(cssSketch, cssCanvas);
        let layoutP5 = new p5(layoutSketch, layoutCanvas);
        
        // Week 2 hover effects
        cssCanvas.parentElement.parentElement.addEventListener('mouseenter', function() {
            cssP5.loop();
        });
        
        cssCanvas.parentElement.parentElement.addEventListener('mouseleave', function() {
            cssP5.noLoop();
        });
        
        layoutCanvas.parentElement.parentElement.addEventListener('mouseenter', function() {
            layoutP5.loop();
        });
        
        layoutCanvas.parentElement.parentElement.addEventListener('mouseleave', function() {
            layoutP5.noLoop();
        });
    }
    
    // Animation loop for all animations
    function animate() {
        if (videoCanvas && bookCanvas) {
            new p5(videoSketch, videoCanvas).animate();
            new p5(bookSketch, bookCanvas).animate();
        }
        if (cssCanvas && layoutCanvas) {
            new p5(cssSketch, cssCanvas).animate();
            new p5(layoutSketch, layoutCanvas).animate();
        }
        requestAnimationFrame(animate);
    }
    
    // Start animations
    animate();
});
