var images = ["SCvsGSC/1.jpg", "SCvsGSC/2.jpg", "SCvsGSC/3.jpg", "SCvsGSC/4.jpg", "SCvsGSC/5.jpg", "SCvsGSC/6.jpg", "SCvsGSC/7.jpg", "SCvsGSC/8.jpg", "SCvsGSC/9.jpg", "SCvsGSC/10.jpg", "SCvsGSC/11.jpg", "SCvsGSC/12.jpg", "SCvsGSC/13.jpg", "SCvsGSC/14.jpg",
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