// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentPage = window.location.href;

    // Create a link for the previous page
    var previousLink = document.createElement('a');
    previousLink.href = getPreviousPage(currentPage);
    previousLink.textContent = 'previous';
    previousLink.classList.add('previous-link');

    // Insert the link above the title
    var header = document.querySelector('header');
    if (header) {
        header.insertBefore(previousLink, header.firstChild);
    }
});

// Function to get the URL of the previous page
function getPreviousPage(currentPage) {
    // Implement your logic to determine the previous page URL
    // For simplicity, this example just appends 'previous.html' to the current URL
    return currentPage.replace(/[^/]*$/, 'previous.html');
}
