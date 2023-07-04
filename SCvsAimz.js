SCvsAimzvar images = ["SCvsAimz/1.jpg", "SCvsAimz/2.jpg", "SCvsAimz/3.jpg", "SCvsAimz/4.jpg", "SCvsAimz/5.jpg", "SCvsAimz/6.jpg", "SCvsAimz/7.jpg", "SCvsAimz/8.jpg", "SCvsAimz/9.jpg", "SCvsAimz/10.jpg", "SCvsAimz/11.jpg", "SCvsAimz/12.jpg", "SCvsAimz/13.jpg", "SCvsAimz/14.jpg", "SCvsAimz/15.jpg",
];
var currentIndex = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("image").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex];
}