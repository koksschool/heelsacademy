var images = ["Pics/1.jpg", "Pics/2.jpg", "Pics/3.jpg", "Pics/4.jpg", "Pics/5.jpg", "Pics/6.jpg", "Pics/7.jpg", "Pics/8.jpg", "Pics/9.jpg", "Pics/10.jpg", "Pics/11.jpg", "Pics/12.jpg", "Pics/13.jpg", "Pics/14.jpg",
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