# Schedule Integration - MALA60970

## Overview
The course schedule has been successfully integrated into the larger MALA60970 project structure, moving from inline CSS to a clean, maintainable external CSS architecture.

## Changes Made

### 1. **New Files Created**
- `src/pages/schedule.html` - Main schedule page integrated with site design
- `src/css/schedule-standalone.css` - Portable schedule styles for standalone use
- Archive files moved: `archive_draft_schedule.html`, `archive_improved_schedule.html`

### 2. **CSS Architecture**
- **External Stylesheets**: All styling moved from inline CSS to external files
- **Modular Design**: Schedule styles integrated into `src/css/course.css`
- **Responsive Design**: Mobile-first approach with card-based layout on small screens
- **Accessibility**: Proper ARIA labels, semantic structure, and screen reader support

### 3. **Design Integration**
- **Consistent Branding**: Matches existing site color scheme and typography
- **Navigation**: Added schedule link to all page navigation menus
- **Responsive Tables**: Convert to card layout on mobile devices using data-label attributes
- **Visual Hierarchy**: Color-coded due dates (yellow for regular, green for major assignments)

### 4. **Technical Improvements**
- **Semantic HTML5**: Proper header structure and semantic elements
- **CSS Variables**: Consistent use of CSS custom properties
- **Print Styles**: Optimized for printing
- **Performance**: Reduced inline styles for better caching and maintainability

## File Structure
```
src/
├── pages/
│   └── schedule.html          # Main integrated schedule page
├── css/
│   ├── styles.css            # Base styles (unchanged)
│   ├── course.css            # Enhanced with schedule styles
│   └── schedule-standalone.css # Portable schedule styles
└── js/
    └── course-navigation.js   # Navigation scripts (unchanged)
```

## Usage

### Integrated Version
The main schedule is available at `src/pages/schedule.html` and uses the full site design system.

### Standalone Version
For external use or embedding, use `schedule-standalone.css` with basic HTML structure.

## Mobile Responsiveness
- Tables convert to card layout on screens < 768px wide
- Data-label attributes provide context for each cell
- Touch-friendly sizing and spacing
- Maintains readability across all device sizes

## Accessibility Features
- Semantic table structure with proper headers
- ARIA labels for screen readers
- High contrast color schemes
- Keyboard navigation support
- Print-friendly layouts

## Future Considerations
- Could add calendar integration
- Assignment due date reminders
- Progress tracking features
- Export to calendar formats (iCal, etc.)
