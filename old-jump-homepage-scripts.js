// Replace CMS Event Links in NAV with destination Tabs
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navigation-link-block");

  navLinks.forEach((link) => {
    const navTitleElement = link.querySelector(".nav-title");
    const navTitleText = navTitleElement.textContent.trim();
    const formattedEventTitle = navTitleText.replace(/\s+/g, "+");
    link.href = `/events?event-types=${formattedEventTitle}`;
  });
});

// Replace CMS Event Links on home
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".fs-event-link");

  navLinks.forEach((link) => {
    const navTitleElement = link.querySelector(".nav-title");
    const navTitleText = navTitleElement.textContent.trim();
    const formattedEventTitle = navTitleText.replace(/\s+/g, "+");
    link.href = `/events?event-types=${formattedEventTitle}`;
  });
});

// Menu links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-menu .nav-menu-link-block");

  navLinks.forEach((link) => {
    console.log("LINK FOUND");
    const menuNavLinkNameElement = link.querySelector(".nav-menu-link-name");
    const menuNavLinkNameText = menuNavLinkNameElement.textContent.trim();
    const formattedNavName = menuNavLinkNameText.toLowerCase();
    link.href = `/menu-tabs/${formattedNavName}`;

    // Hide the menu-link-name element
    menuNavLinkNameElement.style.display = "none";
  });
});

// Replace CMS Event Links in Home Nav with destination Tabs
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".menu-cat-list .menu-link-block");

  navLinks.forEach((link) => {
    const menuSliderLinkNameElement = link.querySelector(".menu-link-name");
    const menuSliderLinkNameText = menuSliderLinkNameElement.textContent.trim();
    const formattedSliderName = menuSliderLinkNameText.toLowerCase();
    link.href = `/menu-tabs/${formattedSliderName}`;

    // Hide the menu-link-name element
    menuSliderLinkNameElement.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".footer-menu-link");

  navLinks.forEach((link) => {
    const menuFooterLinkNameElement = link.querySelector(".footer-link-name");
    const menuFooterLinkNameText = menuFooterLinkNameElement.textContent.trim();
    const formattedName = menuFooterLinkNameText.toLowerCase();
    //added this for testing
    console.log(formattedName + "jump-general");
    link.href = `/menu-tabs/${formattedName}`;

    // Hide the menu-link-name element
    menuFooterLinkNameElement.style.display = "none";
  });
});
