var images = ["SCvsElite/1.jpg", "SCvsElite/2.jpg", "SCvsElite/3.jpg", "SCvsElite/4.jpg", "SCvsElite/5.jpg", "SCvsElite/6.jpg", "SCvsElite/7.jpg", "SCvsElite/8.jpg", "SCvsElite/9.jpg", "SCvsElite/10.jpg", "SCvsElite/11.jpg", "SCvsElite/12.jpg", "SCvsElite/13.jpg", "SCvsElite4SCvsElite/14.jpg", "SCvsElite/15.jpg",
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