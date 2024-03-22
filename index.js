window.addEventListener("load", changeImages);
window.addEventListener("resize", changeImages);
function toggleNav() {
  const nav = document.querySelector(".mobile-nav");
  const triangle = document.querySelector(".triangle");
  nav.classList.toggle("toggle-nav");
  triangle.classList.toggle("toggle-nav");
}
function changeImages() {
  imagesPaths = document.querySelectorAll("#images img");
  puzzlesPaths = document.querySelectorAll("#puzzles img");

  if (window.innerWidth > 768) {
    imagesPaths[0].src = "./images/desktop/image-gallery-milkbottles.jpg";
    imagesPaths[1].src = "./images/desktop/image-gallery-orange.jpg";
    imagesPaths[2].src = "./images/desktop/image-gallery-cone.jpg";
    imagesPaths[3].src = "./images/desktop/image-gallery-sugarcubes.jpg";
    puzzlesPaths[0].src = "./images/desktop/image-transform.jpg";
    puzzlesPaths[1].src = "./images/desktop/image-stand-out.jpg";
  } else {
    imagesPaths[0].src = "./images/mobile/image-gallery-milkbottles.jpg";
    imagesPaths[1].src = "./images/mobile/image-gallery-orange.jpg";
    imagesPaths[2].src = "./images/mobile/image-gallery-cone.jpg";
    imagesPaths[3].src = "./images/mobile/image-gallery-sugar-cubes.jpg";
    puzzlesPaths[0].src = "./images/mobile/image-transform.jpg";
    puzzlesPaths[1].src = "./images/mobile/image-stand-out.jpg";
  }
}
