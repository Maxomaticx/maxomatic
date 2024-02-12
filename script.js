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
    // Implement your logic to determine the previous page URL and name
    // For simplicity, this example returns an object with dummy data
    var previousPages = ['home.html', 'COMIC/TEST/test.html', 'COMIC/MISC/misc.html'];

    var currentIndex = previousPages.indexOf(currentPage);
    if (currentIndex > 0) {
        var previousPage = previousPages[currentIndex - 1];
        return {
            url: previousPage,
            name: previousPage.split('/').pop().split('.')[0] // Extract page name from the URL
        };
    } else {
        return {
            url: 'home.html',
            name: 'Home'
        };
    }
}
