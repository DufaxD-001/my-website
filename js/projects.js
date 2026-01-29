let slideIndex = 1;
let slideTimer;

// Initialize the slider
showSlides(slideIndex);
startTimer();

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideTimer); // Reset timer when user clicks
  showSlides(slideIndex += n);
  startTimer(); // Restart timer
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex = n);
  startTimer();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if(captionText) {
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
}

// Function to handle automatic movement
function startTimer() {
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 5000); // 5000ms = 5 seconds
}