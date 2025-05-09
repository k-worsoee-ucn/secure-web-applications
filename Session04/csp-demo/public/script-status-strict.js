// Check if jQuery loaded
window.onload = function() {
    if (window.jQuery) {
        document.getElementById('script-status').textContent = 'jQuery Status: Loaded successfully!';
        document.getElementById('script-status').className = 'success';
    } else {
        document.getElementById('script-status').textContent = 'jQuery Status: Failed to load';
        document.getElementById('script-status').className = 'error';
    }
}; 