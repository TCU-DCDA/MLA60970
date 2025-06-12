# MALA60970: Web Authoring - Video Topics & YouTube Embed Framework

## Video Content Structure

### Week 1: HTML Foundations & Setup (3 Videos)

#### Video 1.1: Course Orientation & VS Code Setup (15-20 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Welcome and course overview
- Installing Visual Studio Code
- Essential VS Code extensions:
  - Live Server
  - Prettier - Code formatter
  - Auto Rename Tag
  - HTML CSS Support
- Setting up workspace and file organization
- VS Code interface tour

#### Video 1.2: HTML Basics & Document Structure (20-25 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- HTML document structure
- Essential HTML elements
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Forms and accessibility basics
- HTML validation

#### Video 1.3: GitHub Setup & Version Control (18-22 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Creating GitHub account
- Git basics in VS Code
- Repository creation and management
- GitHub Pages for hosting
- Basic Git workflow

---

### Week 2: CSS Styling & Layout (3 Videos)

#### Video 2.1: CSS Fundamentals & Selectors (22-25 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- CSS syntax and selectors
- Color, typography, and spacing
- Box model fundamentals
- CSS specificity
- Developer tools for debugging

#### Video 2.2: Flexbox Layout Mastery (25-30 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Flexbox concepts and properties
- Common layout patterns
- Navigation bars and card layouts
- Practical flexbox exercises

#### Video 2.3: Responsive Design & Media Queries (20-25 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Mobile-first design approach
- CSS media queries
- Responsive units and images
- Testing responsive designs

---

### Week 3: JavaScript Basics (3 Videos)

#### Video 3.1: JavaScript Fundamentals (25-30 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- JavaScript syntax and data types
- Variables, functions, and operators
- Conditional statements and loops
- Console.log() for debugging

#### Video 3.2: DOM Manipulation & Events (25-30 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Understanding the DOM
- Selecting and modifying elements
- Event handling and user interactions
- Creating interactive features

#### Video 3.3: Debugging with Developer Tools (15-20 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Browser developer tools navigation
- JavaScript debugging techniques
- Common errors and solutions
- Performance optimization basics

---

### Week 4: Integration & Projects (3 Videos)

#### Video 4.1: Project Planning & Structure (20-25 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Project planning and wireframing
- File organization strategies
- Code architecture and documentation
- Creating a style guide

#### Video 4.2: Deploying to GitHub Pages (18-22 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Web hosting and deployment
- GitHub Pages setup
- Custom domains (optional)
- Updating live sites

#### Video 4.3: Web Performance & Best Practices (20-25 minutes)
**YouTube Video ID**: `YOUR_VIDEO_ID_HERE`
**Topics Covered:**
- Web performance optimization
- Accessibility fundamentals
- SEO basics for developers
- Cross-browser compatibility

---

## Implementation Instructions

### How to Add YouTube Videos:

1. **Get YouTube Video ID**: From URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`

2. **Replace Placeholder Code**: 
   ```html
   <!-- Replace this placeholder -->
   <div class="video-placeholder">
       <div class="video-icon">▶</div>
       <p>Video Title</p>
   </div>
   
   <!-- With this embedded video -->
   <div class="video-embed">
       <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
               title="Video Title" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen>
       </iframe>
   </div>
   ```

3. **Video Parameters**: Add these parameters to YouTube embed URLs:
   - `?rel=0` - Hide related videos
   - `&modestbranding=1` - Minimal YouTube branding
   - `&cc_load_policy=1` - Show captions by default

### Example Full Embed Code:
```html
<div class="video-embed">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&cc_load_policy=1" 
            title="Course Orientation & VS Code Setup" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>
    <div class="video-info">
        <h5>Course Orientation & VS Code Setup</h5>
        <p>Duration: 18 minutes • Essential tools setup</p>
    </div>
</div>
```

## Additional Features to Consider

### Video Playlists
- Create YouTube playlists for each week
- Embed entire playlists for easy navigation

### Video Transcripts
- Provide downloadable transcripts for accessibility
- Include key code snippets mentioned in videos

### Interactive Elements
- Add timestamps for easy navigation
- Include "Try It Yourself" sections after each video
- Link to relevant code examples and exercises

### Progress Tracking
- Add checkboxes for video completion
- Local storage to save student progress
- Visual progress indicators

This framework provides a solid foundation for your course videos while maintaining the modern, professional aesthetic of your site.
