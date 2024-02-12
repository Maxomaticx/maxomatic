// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the previous page name from the URL
    var previousPageName = extractPageName(document.referrer);

    // Create a link for the previous page
    var previousLink = document.createElement('a');
    previousLink.href = document.referrer;
    previousLink.textContent = previousPageName || 'Previous'; // Set text content to page name or use a default
    previousLink.classList.add('previous-link');

    // Insert the link above the title
    var header = document.querySelector('header');
    if (header) {
        header.insertBefore(previousLink, header.firstChild);
    }
});

// Function to extract the page name from the page URL
function extractPageName(pageUrl) {
    // Implement your logic to extract the name from the URL
    // For simplicity, this example just takes the last part of the URL
    var parts = pageUrl.split('/');
    return parts[parts.length - 1].replace('.html', ''); // Remove '.html' if present
}
