const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowBtn = document.querySelectorAll(".arrow");

arrowBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const sliderImg = document.querySelector(".banner-img");
    const allDots = document.querySelectorAll(".dot");
    const dotsTable = [...allDots];
    const slideDot = document.querySelector(".dot_selected");

    let indexSituer = calcNextSlide + dotsTable.indexOf(slideDot);

    if (indexSituer < 0) indexSituer = dotsTable.length - 1;
    if (indexSituer >= dotsTable.length) indexSituer = 0;
    allDots[indexSituer].classList.add("dot_selected");
    slideDot.classList.remove("dot_selected");

    sliderImg.setAttribute(
      "src",
      "assets/images/slideshow/" + slides[indexSituer].image
    );
    document.querySelector("#banner p").innerHTML = slides[indexSituer].tagLine;
  });
});
