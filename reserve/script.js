document.getElementById("pietiekties").addEventListener("click", function() {
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

// Add click event listener to each image
images.forEach((img, index) => {
    img.addEventListener('click', function() {
        if (!isSmallScreen()) {
            // Only open the modal if the screen is larger than 480px
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            currentIndex = index; // Set the current index for navigation
        }
    });
});

// Close the modal when the close button is clicked
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Navigation: move to previous image
var prev = document.querySelector('.prev');
prev.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage();
}

// Navigation: move to next image
var next = document.querySelector('.next');
next.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage();
}

// Update the modal with the new image and caption
function updateModalImage() {
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Disable slideshow and modal functionality for small screens
window.addEventListener('resize', function() {
    if (isSmallScreen()) {
        modal.style.display = "none"; // Ensure modal closes if screen is resized to small
    }
});


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

