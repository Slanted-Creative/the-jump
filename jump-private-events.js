// custom sliders and such

function updatePaginationElementWithCustomSVG(element, svgContent) {
  element.innerHTML = svgContent;
}

function updatePaginationWithCustomSVG(splide, svgContent) {
  const paginationList = splide.root.querySelector(".splide__pagination");

  if (paginationList) {
    paginationList
      .querySelectorAll(".splide__pagination__page")
      .forEach((page, index) => {
        updatePaginationElementWithCustomSVG(page, svgContent);
      });
  }
}

function slider1() {
  let splides = $(".slider1");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    const splideInstance = new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      autoplay: true,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "1em", // space between slides
      arrows: false, // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 400, // transition speed in miliseconds
      dragAngleThreshold: 60, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 1,
          gap: "1em",
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          gap: "1em",
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          gap: "1em",
        },
      },
    });

    splideInstance.on("mounted", () => {
      // Replace this with your custom SVG content
      const customSvgContent = `<svg viewBox="0 0 26 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m17.993 12.129-3.1836 1.8192-1.7335 3.3088-1.9181-3.1967-3.2692-1.6215 3.1836-1.8258 1.7335-3.3022 1.9114 3.1902 3.2759 1.628z" fill="currentColor"/>
  <path d="m17.057 7.9766-4.4425-7.4152-4.0207 7.6656-7.725 4.4162 7.9557 3.9482 4.4359 7.4086 4.0273-7.6657 7.725-4.4161-7.9557-3.9416zm-2.3399 2.5244 3.2759 1.6281-3.1836 1.8192-1.7335 3.3088-1.9181-3.1968-3.2692-1.6214 3.1835-1.8258 1.7336-3.3022 1.9114 3.1901z" fill="#383838"/>
  </svg>`;
      updatePaginationWithCustomSVG(splideInstance, customSvgContent);
    });

    splideInstance.mount();
  }
}
slider1();

function slider4() {
  let splides = $(".slider4");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    const splideInstance = new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      autoplay: true,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "1em", // space between slides
      arrows: false, // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 400, // transition speed in miliseconds
      dragAngleThreshold: 60, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 1,
          gap: "1em",
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          gap: "1em",
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          gap: "1em",
        },
      },
    });

    splideInstance.on("mounted", () => {
      // Replace this with your custom SVG content
      const customSvgContent = `<svg viewBox="0 0 26 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m17.993 12.129-3.1836 1.8192-1.7335 3.3088-1.9181-3.1967-3.2692-1.6215 3.1836-1.8258 1.7335-3.3022 1.9114 3.1902 3.2759 1.628z" fill="currentColor"/>
  <path d="m17.057 7.9766-4.4425-7.4152-4.0207 7.6656-7.725 4.4162 7.9557 3.9482 4.4359 7.4086 4.0273-7.6657 7.725-4.4161-7.9557-3.9416zm-2.3399 2.5244 3.2759 1.6281-3.1836 1.8192-1.7335 3.3088-1.9181-3.1968-3.2692-1.6214 3.1835-1.8258 1.7336-3.3022 1.9114 3.1901z" fill="#383838"/>
  </svg>`;
      updatePaginationWithCustomSVG(splideInstance, customSvgContent);
    });

    splideInstance.mount();
  }
}
$(document).ready(function () {
  slider4();
});
