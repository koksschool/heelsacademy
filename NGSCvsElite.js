var images = ["NGSCvsElite/1.jpg", "NGSCvsElite/2.jpg", "NGSCvsElite/3.jpg", "NGSCvsElite/4.jpg", "NGSCvsElite/5.jpg", "NGSCvsElite/6.jpg", "NGSCvsElite/7.jpg", "NGSCvsElite/8.jpg", "NGSCvsElite/9.jpg", "NGSCvsElite/10.jpg", "NGSCvsElite/11.jpg", "NGSCvsElite/12.jpg", "NGSCvsElite/13.jpg", "NGSCvsElite/14.jpg", "NGSCvsElite/15.jpg",
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