var images = ["3/1.jpg", "3/2.jpg", "3/3.jpg", "3/4.jpg", "3/5.jpg", "3/6.jpg", "3/7.jpg", "3/8.jpg", "3/9.jpg", "3/10.jpg", "3/11.jpg", "3/12.jpg", "3/13.jpg", "3/14.jpg", "3/15.jpg",
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