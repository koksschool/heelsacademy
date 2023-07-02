var images = ["5/1.jpg", "5/2.jpg", "5/3.jpg", "5/4.jpg", "5/5.jpg", "5/6.jpg", "5/7.jpg", "5/8.jpg", "5/9.jpg", "5/10.jpg", "5/11.jpg", "5/12.jpg", "5/13.jpg", "5/14.jpg",
"5/15.jpg", "5/16.jpg",];
var currentIndex = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("image").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex];
}