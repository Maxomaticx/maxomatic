// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the previous page URL
    var previousPageUrl = document.referrer;

    // Create a link for the previous page
    var previousLink = document.createElement('a');
    previousLink.href = previousPageUrl;
    previousLink.textContent = 'previous'; // You can customize the text if needed
    previousLink.classList.add('previous-link');

    // Insert the link above the title
    var header = document.querySelector('header');
    if (header) {
        header.insertBefore(previousLink, header.firstChild);
    }
});
