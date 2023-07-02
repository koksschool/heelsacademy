var images = ["Pics/1.JPG", "Pics/2.JPG", "Pics/3.JPG", "Pics/4.JPG", "Pics/5.JPG", "Pics/6.JPG", "Pics/7.JPG", "Pics/8.JPG", "Pics/9.JPG", "Pics/10.JPG", "Pics/11.JPG", "Pics/12.JPG", "Pics/13.JPG", "Pics/14.JPG",
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
