let imagesTemplateProject = [
  "assets/imgs/igor_batista.jpg",
  "assets/imgs/kalline_freitas.jpeg",
  "assets/imgs/leonardo_bruno.jpg",
];

let imgObject = [];

var path = window.location.pathname;
var current_page = path.split("/").pop();
if (current_page === 'template-project.html') {
    imgObject = imagesTemplateProject;
}

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {
  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";

  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
}

function scrollRight() {
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= imgObject.length - 1) {
    nextImg = 0;
  } else {
    nextImg++;
  }
  loadGallery();
}

function scrollLeft() {
  nextImg = mainImg;
  mainImg = prevImg;

  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  }
  loadGallery();
}

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener("keyup", function (e) {
  if (e.keyCode === 37) {
    scrollLeft();
  } else if (e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();


// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map-video");
const slides = document.querySelector(".inner-video");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
        slides.style.transform = "translateX(-25%)";
    //   slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-50%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fourth')){
      slides.style.transform = 'translatex(-75%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fifth')){
      slides.style.transform = 'translatex(-100%)';
      e.target.classList.add('active');
    }
  }
});
