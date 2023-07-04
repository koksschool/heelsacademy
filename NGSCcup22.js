var images = ["NGSCcup22/1.jpg", "NGSCcup22/2.jpg", "NGSCcup22/3.jpg", "NGSCcup22/4.jpg", "NGSCcup22/5.jpg", "NGSCcup22/6.jpg", "NGSCcup22/7.jpg", "NGSCcup22/8.jpg", "NGSCcup22/9.jpg", "NGSCcup22/10.jpg", "NGSCcup22/11.jpg", "NGSCcup22/12.jpg", "NGSCcup22/13.jpg", "NGSCcup22 14.jpg", "NGSCcup22/15.jpg", "NGSCcup22/16.jpg",];
var currentIndex = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("image").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex];
}