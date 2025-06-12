# Contributing to MLA60970 Web Authoring Course

## Project Structure

```
MLA60970/
├── index.html                 # Main landing page
├── README.md                  # Project documentation
├── package.json              # Node.js dependencies
├── LICENSE                   # Project license
├── CONTRIBUTING.md           # This file
├── archive/                  # Historical files
├── docs/                     # Documentation and planning
├── images/                   # Static images
├── practice/                 # Practice exercises and experiments
└── src/                      # Main source code
    ├── assets/               # Course materials and resources
    ├── css/                  # Stylesheets
    │   └── backups/         # CSS backup files
    ├── examples/            # Interactive demos and tutorials
    ├── js/                  # JavaScript files
    └── pages/               # HTML pages for each week/section
```

## File Naming Conventions

- HTML files: `kebab-case.html`
- CSS files: `kebab-case.css`
- JavaScript files: `camelCase.js` or `kebab-case.js`
- Documentation: `UPPERCASE.md` for project docs, `lowercase.md` for content

## Development Guidelines

1. Always test changes in multiple browsers
2. Ensure responsive design works on mobile devices
3. Validate HTML and CSS before committing
4. Use semantic HTML elements
5. Follow accessibility best practices

## CSS Organization

- `styles.css` - Main stylesheet for the entire site
- `course.css` - Course-specific styling for educational content
- `schedule-standalone.css` - Specific styling for schedule pages
- `backups/` - Previous versions and experimental styles

## JavaScript Organization

- `main.js` - Core site functionality
- `course-navigation.js` - Navigation for course pages
- `banner-animation.js` - Homepage animations
- `video-manager.js` - Video player controls
