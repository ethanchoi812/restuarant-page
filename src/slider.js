const slider = () => {
  let element = document.createElement("div");
  element.className = "slider-div";

  let buttons =
    '<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span>';

  let img1 =
    '<img id="slide-1" src="https://via.placeholder.com/1280x384/0000FF">';
  let img2 =
    '<img id="slide-2" src="https://via.placeholder.com/1280x384/FF0000">';
  let img3 =
    '<img id="slide-3" src="https://via.placeholder.com/1280x384/FFFF00">';
  let img4 =
    '<img id="slide-4" src="https://via.placeholder.com/1280x384/00FF00">';

  let marker =
    '<div class="slide-marker">' +
    '<span id="slide-marker-0"></span>' +
    '<span id="slide-marker-1"></span>' +
    '<span id="slide-marker-2"></span>' +
    '<span id="slide-marker-3"></span>' +
    "</div>";

  element.innerHTML =
    buttons +
    '<div id="image-container">' +
    img1 +
    img2 +
    img3 +
    img4 +
    "</div>" +
    marker;

  return element;
};

export default slider;
