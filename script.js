// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the previous page URL
    var previousPageUrl = document.referrer;

    // Extract the name from the URL (you may need to adjust this logic)
    var previousPageName = extractPageName(previousPageUrl);

    // Create a link for the previous page
    var previousLink = document.createElement('a');
    previousLink.href = previousPageUrl;
    previousLink.textContent = previousPageName || 'Previous'; // Set text content to page name or use a default
    previousLink.classList.add('previous-link');

    // Insert the link above the title
    var header = document.querySelector('header');
    if (header) {
        header.insertBefore(previousLink, header.firstChild);
    }
});

// Function to extract the name from the page URL (adjust this logic as needed)
function extractPageName(pageUrl) {
    // Implement your logic to extract the name from the URL
    // For simplicity, this example just takes the last part of the URL
    var parts = pageUrl.split('/');
    return parts[parts.length - 1].replace('.html', ''); // Remove '.html' if present
}
