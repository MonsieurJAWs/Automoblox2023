// Use jQuery to populate the header and footer files. check to see if the page is ready for jQuery (only works on a live server)
$(document).ready(function () {
    $(function () {
        $('#header').load('header.html');
    });

    $(function () {
        $('#footer').load("footer.html");
    });
});

// Create a photo gallery for the automoblox product pages
// Get the thumbnail image of the photo gallery
let thumbnail = document.getElementsByClassName("thumbnail");

// Get the active image of the photo gallery
let activeImage = document.getElementsByClassName("active");

// Loop through the classes that have thumbnail
for (var i = 0; i < thumbnail.length; i++) {
    // Add eventListener when the user clicks on the image
    thumbnail[i].addEventListener("click", function () {
        // Check the active class. if below 0, remove the class name of active on the image
        if (activeImage.length > 0) {
            activeImage[0].classList.remove("active")
        }
        // On click, change the image to the one being clicked on
        this.classList.add("active");
        document.getElementById("feature").src = this.src;
    })
}