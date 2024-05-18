const currentImg = document.querySelector(".pop-up__img");
const imagesArray = [
  "../applewatch.png",
  "../applewatch.png",
  "..applewatch.png",
];
const number = 0;

function nextSlider() {
  number++;
  if (number >= imagesArray.length) {
    number = 0;
    currentImg.src = imagesArray[number];
  } else {
    currentImg.src = imagesArray[number];
  }
}

function backSlider() {
  number--;
  if (number < 0) {
    number = imagesArray.length - 1;
    currentImg.src = imagesArray[number];
  }
}
