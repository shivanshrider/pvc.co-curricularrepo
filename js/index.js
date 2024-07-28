function toggleFAQPopup() {
    var popup = document.getElementById("faqPopup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

window.onclick = function(event) {
    var popup = document.getElementById("faqPopup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

const fadeImages = document.querySelectorAll('.fade-image');
let currentImageIndex = 0;

function fadeInNextImage() {
  fadeImages[currentImageIndex].classList.remove('visible');
  currentImageIndex = (currentImageIndex + 1) % fadeImages.length;
  fadeImages[currentImageIndex].classList.add('visible');
}

fadeImages[currentImageIndex].classList.add('visible');
setInterval(fadeInNextImage, 5000);



function showContent(id) {
    // Hide all content
    document.querySelectorAll('.content').forEach(content => {
      content.classList.remove('active');
    });
  
    // Show the selected content
    document.getElementById(id).classList.add('active');
  }
  