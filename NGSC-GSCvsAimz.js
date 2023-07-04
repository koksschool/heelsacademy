var images = ["NGSC-GSCvsAimz/1.jpg", "NGSC-GSCvsAimz/2.jpg", "NGSC-GSCvsAimz/3.jpg", "NGSC-GSCvsAimz/4.jpg", "NGSC-GSCvsAimz/5.jpg", "NGSC-GSCvsAimz/6.jpg", "NGSC-GSCvsAimz/7.jpg", "NGSC-GSCvsAimz/8.jpg", "NGSC-GSCvsAimz/9.jpg", "NGSC-GSCvsAimz/10.jpg", "NGSC-GSCvsAimz/11.jpg", "NGSC-GSCvsAimz/12.jpg", "NGSC-GSCvsAimz/13.jpg", "NGSC-GSCvsAimz/14.jpg", "NGSC-GSCvsAimz/15.jpg",
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