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

document.getElementById('roomsSelect').addEventListener('change', function() {
    var customInput = document.getElementById('customRoomInput');
    if (this.value === 'Cits') {
        customInput.style.display = 'block';  // Show input field
    } else {
        customInput.style.display = 'none';   // Hide input field
        customInput.value = '';  // Clear the custom input if not selected
    }
});