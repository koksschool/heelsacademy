var images = ["0/1.jpg", "0/2.jpg", "0/3.jpg", "0/4.jpg", "0/5.jpg", "0/6.jpg", "0/7.jpg", "0/8.jpg", "0/9.jpg", "0/10.jpg", "0/11.jpg", "0/12.jpg", "0/13.jpg", "0/14.jpg", "0/15.jpg", "0/16.jpg", "0/17.jpg", "0/18.jpg", "0/19.jpg", "0/20.jpg", "0/21.jpg",];
var currentIndex = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("image").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex];
}0