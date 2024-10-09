document.getElementById("pietiekties").addEventListener("click", function() {
    // Select the target element you want to scroll to
    const targetElement = document.getElementById("submit");

    // Scroll smoothly to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("uzzinat").addEventListener("click", function() {
    // Select the target element you want to scroll to
    const targetElement = document.getElementById("submit");

    // Scroll smoothly to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
});



// Get the modal
var modal = document.getElementById("modal");

// Get the modal image and caption
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Get all the images in the gallery
var images = document.querySelectorAll('.gallery-img');

// Track the index of the current image
var currentIndex;

// Function to check if the screen width is less than 480px
function isSmallScreen() {
    return window.innerWidth <= 480;
}

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slideshow-container picture');
    if (n >= slides.length) {
        slideIndex = 0; // Loop back to the first image
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Loop to the last image
    }
    
    // Hide all images
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the active image
    slides[slideIndex].classList.add('active');
}



function updateOptions() {
    // Get the selected number of rooms from the dropdown
    var roomsSelect = document.getElementById("roomsSelect").value;

    // Get the dropdown element for area options
    var optionsSelect = document.getElementById("optionsSelect");

    // Clear the current options in the area dropdown
    optionsSelect.innerHTML = "";

    // Define area options based on the selected number of rooms
    var options = [];

    if (roomsSelect === "2") {
        options = ["61 m2","66 m2"];
    } else if (roomsSelect === "3") {
        options = ["61 m2","66 m2"];
    } else {
        options = ["Nav pieejamas opcijas"];
    }

    // Populate the area dropdown with the new options
    options.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option;
        opt.innerHTML = option;
        optionsSelect.appendChild(opt);
    });
}

