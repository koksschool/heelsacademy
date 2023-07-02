var images = ["4/1.jpg", "4/2.jpg", "4/3.jpg", "4/4.jpg", "4/5.jpg", "4/6.jpg", "4/7.jpg", "4/8.jpg", "4/9.jpg", "4/10.jpg", "4/11.jpg", "4/12.jpg", "4/13.jpg", "4/14.jpg", "4/15.jpg",
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