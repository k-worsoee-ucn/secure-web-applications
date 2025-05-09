// Check if scripts loaded
window.onload = function() {
    if (window.jQuery) {
        document.getElementById('jquery-status').textContent = 'jQuery Status: Loaded successfully!';
        document.getElementById('jquery-status').className = 'success';
    } else {
        document.getElementById('jquery-status').textContent = 'jQuery Status: Failed to load';
        document.getElementById('jquery-status').className = 'error';
    }

    if (window._) {
        document.getElementById('lodash-status').textContent = 'Lodash Status: Loaded successfully!';
        document.getElementById('lodash-status').className = 'success';
    } else {
        document.getElementById('lodash-status').textContent = 'Lodash Status: Blocked by CSP';
        document.getElementById('lodash-status').className = 'error';
    }
}; 