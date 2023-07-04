var images = ["KS1/1.jpg", "KS1/2.jpg", "KS1/3.jpg", "KS1/4.jpg", "KS1/5.jpg", "KS1/6.jpg", "KS1/7.jpg", "KS1/8.jpg", "KS1/9.jpg", "KS1/10.jpg", "KS1/11.jpg", "KS1/12.jpg", "KS1/13.jpg", "KS1/14.jpg", "KS1/15.jpg", "KS1/16.jpg", "KS1/17.jpg", "KS1/18.jpg", "KS1/19.jpg", "KS1/20.jpg", "KS1/22.jpg",
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