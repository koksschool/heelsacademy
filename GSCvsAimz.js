var images = ["GSCvsAimz/1.jpg", "GSCvsAimz/2.jpg", "GSCvsAimz/3.jpg", "GSCvsAimz/4.jpg", "GSCvsAimz/5.jpg", "GSCvsAimz/6.jpg", "GSCvsAimz/7.jpg", "GSCvsAimz/8.jpg", "GSCvsAimz/9.jpg", "GSCvsAimz/10.jpg", "GSCvsAimz/11.jpg", "GSCvsAimz/12.jpg", "GSCvsAimz/13.jpg", "GSCvsAimz/14.jpg", "GSCvsAimz/15.jpg", ];
var currentIndex = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("image").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex];
}