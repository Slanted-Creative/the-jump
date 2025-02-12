// Page Transition Code

// On page load
let nextPageLink;
$(".content-wrapper").addClass("first");

// On link click
$(".menu_link:not(.w--current)").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");
  $.ajax({
    url: nextPageLink,
    success: function (response) {
      let element = $(response).find(".content-wrapper").addClass("second");
      $(".main-wrapper").append(element);
    },
    complete: function () {
      pageTransition();
    },
  });
});

function pageTransition() {
  $("html").addClass("animating");
  let tl = gsap.timeline({
    paused: false,
    onComplete: updatePage,
  });
  tl.from(".content-wrapper.second", {
    y: "110vh",
    delay: 0.2,
    duration: 0.8,
    ease: "power2.out",
  });
  tl.to(
    ".overlay",
    {
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
    },
    0
  );
  tl.to(
    ".content-wrapper.first",
    {
      scale: 0.95,
      duration: 0.3,
      ease: "power1.out",
    },
    0
  );
}

function updatePage() {
  window.location = nextPageLink;
}
