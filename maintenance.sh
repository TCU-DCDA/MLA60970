#!/bin/bash
# MLA60970 Project Maintenance Script

echo "🧹 Starting MLA60970 project maintenance..."

# Change to project directory
cd "$(dirname "$0")"

echo "📂 Current directory: $(pwd)"

# Remove any .DS_Store files
echo "🗑️  Removing .DS_Store files..."
find . -name ".DS_Store" -type f -delete

# Remove backup files that might accumulate
echo "🗑️  Cleaning up backup files..."
find . -name "*.backup" -type f -exec mv {} ./src/css/backups/ \; 2>/dev/null || true
find . -name "*~" -type f -delete 2>/dev/null || true

# Check for broken links in HTML files
echo "🔗 Checking for potential broken links..."
grep -r "href=" src/pages/ src/examples/ | grep -E "\.\./.*\.\./.*" && echo "⚠️  Found potentially complex relative paths" || echo "✅ Relative paths look clean"

# Check CSS file sizes for potential issues
echo "📊 CSS file sizes:"
ls -lh src/css/*.css 2>/dev/null | awk '{print $5 "\t" $9}' || echo "No CSS files found"

# Check for TODO comments
echo "📝 TODO items found:"
grep -r "TODO\|FIXME\|XXX" src/ --include="*.html" --include="*.css" --include="*.js" | wc -l | xargs echo "Count:"

# Git status
echo "📋 Git status:"
git status --porcelain

echo "✅ Maintenance complete!"
echo "💡 Run 'git add . && git commit -m \"chore: project cleanup and organization\"' to commit changes"
