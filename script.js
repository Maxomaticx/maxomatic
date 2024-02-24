// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL and previous page information
    var currentPage = window.location.href;
    var previousPageInfo = getPreviousPage(currentPage);

    // Create a link for the previous page
    var previousLink = document.createElement('a');
    previousLink.href = previousPageInfo.url;
    previousLink.textContent = previousPageInfo.name; // Set text content to page name
    previousLink.classList.add('previous-link'); // Add the 'previous-link' class

    // Insert the link above the title
    var header = document.querySelector('header');
    if (header) {
        header.insertBefore(previousLink, header.firstChild);
    }
});

// Function to get the URL and name of the previous page
function getPreviousPage(currentPage) {
    var pathSegments = currentPage.split('/').filter(Boolean); // Split URL and remove empty segments
    var currentPageName = pathSegments[pathSegments.length - 1].split('.')[0]; // Extract page name from the last segment

    if (pathSegments.length >= 2) {
        // Get the name of the previous page from the second-to-last segment
        var previousPageName = pathSegments[pathSegments.length - 2];
        var parentDirectory = pathSegments.slice(0, -1).join('/') + '/'; // Join all but the last segment to get the parent directory
        return {
            url: parentDirectory + previousPageName + '/home.html', // Adjust the path as needed
            name: previousPageName.charAt(0).toUpperCase() + previousPageName.slice(1) // Capitalize the first letter
        };
    } else {
        // Default to home if there's no previous page
        return {
            url: 'home.html',
            name: 'Home'
        };
    }
}
