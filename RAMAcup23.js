var images = ["RAMAcup23/1.jpg", "RAMAcup23RAMAcup23/2.jpg", "RAMAcup23/3.jpg", "RAMAcup23/4.jpg", "RAMAcup23/5.jpg", "RAMAcup23/6.jpg", "RAMAcup23/7.jpg", "RAMAcup23/8.jpg", "RAMAcup23/9.jpg", "RAMAcup23/10.jpg", "RAMAcup23/11.jpg", "RAMAcup23/12.jpg", "RAMAcup23/13.jpg", "RAMAcup23/14.jpg", "RAMAcup23/15.jpg",
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