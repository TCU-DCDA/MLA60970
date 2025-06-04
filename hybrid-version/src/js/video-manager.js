// Video Management System for MALA60970 Course
// Handles YouTube video embedding and placeholder functionality

class VideoManager {
    constructor() {
        this.videoData = {
            // Week 1 Videos
            'week1-video1': {
                id: 'YOUR_VIDEO_ID_1',
                title: 'Course Orientation & VS Code Setup',
                duration: '18:32',
                description: 'Welcome to the course! Learn to set up your development environment.'
            },
            'week1-video2': {
                id: 'YOUR_VIDEO_ID_2', 
                title: 'HTML Basics & Document Structure',
                duration: '22:15',
                description: 'Master the fundamentals of HTML and semantic markup.'
            },
            'week1-video3': {
                id: 'YOUR_VIDEO_ID_3',
                title: 'GitHub Setup & Version Control', 
                duration: '20:45',
                description: 'Learn Git basics and deploy your first website.'
            },
            
            // Week 2 Videos
            'week2-video1': {
                id: 'YOUR_VIDEO_ID_4',
                title: 'CSS Fundamentals & Selectors',
                duration: '24:10',
                description: 'Dive into CSS styling and learn how to select elements.'
            },
            'week2-video2': {
                id: 'YOUR_VIDEO_ID_5',
                title: 'Flexbox Layout Mastery',
                duration: '28:22',
                description: 'Master flexbox for modern, responsive layouts.'
            },
            'week2-video3': {
                id: 'YOUR_VIDEO_ID_6',
                title: 'Responsive Design & Media Queries',
                duration: '23:55',
                description: 'Create websites that work on all devices.'
            },
            
            // Week 3 Videos  
            'week3-video1': {
                id: 'YOUR_VIDEO_ID_7',
                title: 'JavaScript Fundamentals',
                duration: '27:30',
                description: 'Learn programming basics with JavaScript.'
            },
            'week3-video2': {
                id: 'YOUR_VIDEO_ID_8',
                title: 'DOM Manipulation & Events',
                duration: '26:45',
                description: 'Make your websites interactive with JavaScript.'
            },
            'week3-video3': {
                id: 'YOUR_VIDEO_ID_9',
                title: 'Debugging with Developer Tools',
                duration: '18:20',
                description: 'Learn to debug and troubleshoot your code.'
            },
            
            // Week 4 Videos
            'week4-video1': {
                id: 'YOUR_VIDEO_ID_10',
                title: 'Project Planning & Structure',
                duration: '22:40',
                description: 'Plan and organize larger web development projects.'
            },
            'week4-video2': {
                id: 'YOUR_VIDEO_ID_11',
                title: 'Deploying to GitHub Pages',
                duration: '19:15',
                description: 'Deploy your projects to the web for everyone to see.'
            },
            'week4-video3': {
                id: 'YOUR_VIDEO_ID_12',
                title: 'Web Performance & Best Practices',
                duration: '24:50',
                description: 'Optimize your websites for speed and accessibility.'
            }
        };
        
        this.initializeVideoPlaceholders();
    }
    
    initializeVideoPlaceholders() {
        const placeholders = document.querySelectorAll('.video-placeholder');
        placeholders.forEach(placeholder => {
            placeholder.addEventListener('click', (e) => {
                const videoId = e.currentTarget.dataset.videoId;
                if (videoId && videoId !== 'YOUR_VIDEO_ID_HERE') {
                    this.embedVideo(e.currentTarget, videoId);
                } else {
                    this.showVideoNotAvailable(e.currentTarget);
                }
            });
        });
    }
    
    embedVideo(placeholder, videoId) {
        const videoData = Object.values(this.videoData).find(video => video.id === videoId);
        if (!videoData) return;
        
        // Create iframe element
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&cc_load_policy=1`;
        iframe.title = videoData.title;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        // Create video embed container
        const videoEmbed = document.createElement('div');
        videoEmbed.className = 'video-embed';
        videoEmbed.appendChild(iframe);
        
        // Replace placeholder with embedded video
        placeholder.parentNode.replaceChild(videoEmbed, placeholder);
        
        // Add video info if needed
        this.addVideoInfo(videoEmbed, videoData);
    }
    
    addVideoInfo(videoEmbed, videoData) {
        const videoInfo = document.createElement('div');
        videoInfo.className = 'video-info';
        videoInfo.innerHTML = `
            <div class="video-title">${videoData.title}</div>
            <div class="video-duration">Duration: ${videoData.duration}</div>
        `;
        videoEmbed.appendChild(videoInfo);
    }
    
    showVideoNotAvailable(placeholder) {
        // Show a message that the video will be available soon
        const message = document.createElement('div');
        message.className = 'video-unavailable-message';
        message.innerHTML = `
            <div class="message-icon">🎬</div>
            <h4>Video Coming Soon!</h4>
            <p>This video will be available when the course begins. Check back on July 7th!</p>
        `;
        message.style.cssText = `
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(16, 185, 129, 0.1));
            border: 2px dashed var(--secondary-color);
            border-radius: 12px;
            padding: 2rem;
            text-align: center;
            color: var(--text-color);
            margin: 1rem 0;
        `;
        
        placeholder.appendChild(message);
        placeholder.style.cursor = 'default';
        placeholder.style.border = '2px dashed var(--secondary-color)';
    }
    
    // Method to batch update video IDs when they become available
    updateVideoIds(videoUpdates) {
        Object.keys(videoUpdates).forEach(key => {
            if (this.videoData[key]) {
                this.videoData[key].id = videoUpdates[key];
            }
        });
    }
    
    // Method to enable video embeds for specific week
    enableWeekVideos(weekNumber) {
        const weekVideos = document.querySelectorAll(`[data-week="${weekNumber}"] .video-placeholder`);
        weekVideos.forEach(placeholder => {
            placeholder.style.opacity = '1';
            placeholder.style.pointerEvents = 'auto';
        });
    }
    
    // Progress tracking
    trackVideoProgress(videoId) {
        const progress = this.getVideoProgress();
        if (!progress.includes(videoId)) {
            progress.push(videoId);
            localStorage.setItem('courseVideoProgress', JSON.stringify(progress));
            this.updateProgressUI();
        }
    }
    
    getVideoProgress() {
        const stored = localStorage.getItem('courseVideoProgress');
        return stored ? JSON.parse(stored) : [];
    }
    
    updateProgressUI() {
        const progress = this.getVideoProgress();
        const totalVideos = Object.keys(this.videoData).length;
        const progressPercent = (progress.length / totalVideos) * 100;
        
        // Update any progress indicators on the page
        const progressBars = document.querySelectorAll('.course-progress-bar');
        progressBars.forEach(bar => {
            bar.style.width = `${progressPercent}%`;
        });
        
        // Update video checkmarks
        progress.forEach(videoId => {
            const videoElement = document.querySelector(`[data-video-id="${videoId}"]`);
            if (videoElement) {
                videoElement.classList.add('completed');
            }
        });
    }
}

// Course playlist management
class PlaylistManager {
    constructor() {
        this.playlists = {
            week1: ['week1-video1', 'week1-video2', 'week1-video3'],
            week2: ['week2-video1', 'week2-video2', 'week2-video3'],
            week3: ['week3-video1', 'week3-video2', 'week3-video3'],
            week4: ['week4-video1', 'week4-video2', 'week4-video3']
        };
    }
    
    createPlaylistEmbed(weekNumber, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const playlist = this.playlists[`week${weekNumber}`];
        if (!playlist) return;
        
        // Create YouTube playlist embed
        const playlistId = 'YOUR_PLAYLIST_ID_WEEK_' + weekNumber;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1`;
        iframe.title = `Week ${weekNumber} Video Playlist`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.width = '100%';
        iframe.style.height = '400px';
        iframe.style.borderRadius = '8px';
        
        container.appendChild(iframe);
    }
}

// Initialize video management when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize video manager
    window.courseVideoManager = new VideoManager();
    window.coursePlaylistManager = new PlaylistManager();
    
    // Update progress UI on page load
    window.courseVideoManager.updateProgressUI();
    
    // Example of how to update video IDs when they become available:
    /*
    window.courseVideoManager.updateVideoIds({
        'week1-video1': 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        'week1-video2': 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        // ... add more as they become available
    });
    */
});

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VideoManager, PlaylistManager };
}
