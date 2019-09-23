import slideMarker from "./slideMarker";

const navigation = () => {
  let sliderDiv = document.querySelector(".slider-div");
  let imgContainer = document.getElementById("image-container");
  let navLeft = document.getElementById("nav-btn-left");
  let navRight = document.getElementById("nav-btn-right");

  let pos = 0;

  slideMarker(pos);

  navLeft.addEventListener("click", () => {
    let offset = sliderDiv.offsetWidth;

    if (pos < 4 && pos > 0) {
      pos -= 1;
      imgContainer.style.transform = `translate(-${pos * offset}px)`;
      slideMarker(pos);
    }
    return pos;
  });

  navRight.addEventListener("click", () => {
    let offset = sliderDiv.offsetWidth;

    if (pos < 3) {
      pos += 1;
      imgContainer.style.transform = `translate(-${pos * offset}px)`;
      slideMarker(pos);
    }
    return pos;
  });
};

export default navigation;
