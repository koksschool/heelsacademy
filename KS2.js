var images = ["KS2/1.jpg", "KS2/2.jpg", "KS2/3.jpg", "KS2/4.jpg", "KS2/5.jpg", "KS2/6.jpg", "KS2/7.jpg", "KS2/8.jpg", "KS2/9.jpg",  "KS2/10.jpg", "KS2/11.jpg", "KS2/12.jpg",];
var currentIndex = 0
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("image").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex];
}0