const carouselSlide = document.querySelector(".gallery");
const carouselImages = document.querySelectorAll(".gallery img");

let changePhoto = document.getElementById("obrazek");

changePhoto.style.backgroundImage = "url('./assets/photo3.jpg')";

let first = "url('./assets/photo1.jpg')";
let second = "url('./assets/photo2.jpg')";
let third = "url('./assets/photo3.jpg')";
let fourth = "url('./assets/photo4.jpg')";
let fifth = "url('./assets/photo5.jpg')";
let counter = 1;
function updatePhoto() {
  if (counter === 1) {
    changePhoto.style.backgroundImage = first;
    counter += 1;
  } else if (counter === 2) {
    changePhoto.style.backgroundImage = second;
    counter += 1;
  } else if (counter === 3) {
    changePhoto.style.backgroundImage = third;
    counter += 1;
  } else if (counter === 4) {
    changePhoto.style.backgroundImage = fourth;
    counter += 1;
  } else if (counter === 5) {
    changePhoto.style.backgroundImage = fifth;
    counter = 1;
  }

  setTimeout(() => {
    updatePhoto();
  }, 5000);
}

updatePhoto();
