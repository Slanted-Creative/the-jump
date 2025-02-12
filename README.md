# The Jump Embedded Scripts

This repository contains a set of JavaScript files that power various dynamic features on thejumpmt.com website. The scripts handle event processing, page transitions, slider customizations, and link handling. **Note:** All of these scripts are embedded directly on the Webflow site. If you update the Webflow project’s structure or element classes, you may need to update these scripts accordingly.

## Table of Contents

- [Overview](#overview)
- [File Breakdown](#file-breakdown)
  - [jump-events.js](#jump-eventsjs)
  - [jump-one-event.js](#jump-one-eventjs)
  - [jump-page-transition.js](#jump-page-transitionjs)
  - [jump-private-events.js](#jump-private-eventsjs)
  - [link-handling.js](#link-handlingjs)
- [Dependencies](#dependencies)
- [Making Changes](#making-changes)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project includes several scripts that add interactivity and dynamic content to your website:

- **Event Scripts:**

  - **jump-events.js:** Processes and displays event items (including recurring events) by cloning DOM elements, updating dates, and filtering/sorting based on today's date.
  - **jump-one-event.js:** Similar to the above but designed to display a limited number of upcoming events (slicing the list to show the first three).

- **Page Transition Script:**

  - **jump-page-transition.js:** Uses jQuery and [GSAP](https://greensock.com/gsap/) to create smooth animated transitions when navigating between pages.

- **Slider Customizations:**

  - **jump-private-events.js:** Initializes custom sliders (using [Splide.js](https://splidejs.com/)) with autoplay, looping, and custom SVG pagination controls.

- **Link Handling Script:**
  - **link-handling.js:** Modifies link URLs in navigation and event listings. It automatically formats link text (e.g., converting spaces to “+” or hyphens) so that links point to the correct destination pages (such as event filters or menu tabs).

## File Breakdown

### jump-events.js

- **Purpose:**  
  Processes a list of events (both recurring and one-time). It clones and updates event items (e.g., date formats, price labels) and sorts them in chronological order.
- **Key Points:**
  - Uses [Moment.js](https://momentjs.com/) for date manipulation.
  - Checks for recurring events using a `.recurring-switch` element.
  - Clones event items and adjusts the start date for recurring events.
  - Updates pricing text based on the presence or absence of a price value.
  - Filters out events that occur before the current day and removes any event where the start date matches an exclude date.
- **Customization Tips:**
  - **Element Selectors:** If your Webflow project changes the class names (e.g., from `.event-link` to something else), update the query selectors accordingly.
  - **Recurring Logic:** Adjust the cutoff logic (6 weeks from today or based on end date) if needed.

### jump-one-event.js

- **Purpose:**  
  Similar to `jump-events.js` but targets a subset of events. It processes event items and selects a maximum of three upcoming events.
- **Key Points:**
  - Also handles recurring events and excludes dates using Moment.js.
  - Sorts events and then slices the list to only display the first three.
- **Customization Tips:**
  - To change the number of displayed events, modify the slice parameter (currently `slice(0, 3)`).
  - Update any selector or recurring event logic if your HTML structure changes.

### jump-page-transition.js

- **Purpose:**  
  Implements page transitions using jQuery and [GSAP](https://greensock.com/gsap/).
- **Key Points:**
  - Listens for clicks on navigation links (excluding the current page).
  - Loads the new page’s content via AJAX, appends it to the DOM, and animates it in.
  - Uses a timeline to animate the transition, then updates the page location.
- **Customization Tips:**
  - Modify the GSAP timeline settings (e.g., duration, easing) to change the animation style.
  - Ensure that class names like `.content-wrapper`, `.main-wrapper`, and `.overlay` match your Webflow project’s structure.

### jump-private-events.js

- **Purpose:**  
  Initializes custom sliders using [Splide.js](https://splidejs.com/) and customizes their pagination with SVG graphics.
- **Key Points:**
  - Contains two functions (`slider1()` and `slider4()`) that initialize sliders for different selectors (`.slider1` and `.slider4`).
  - The slider options include autoplay, loop type, and responsive breakpoints.
  - Upon mounting, the sliders’ pagination elements are replaced with a custom inline SVG.
- **Customization Tips:**
  - To change the slider behavior (number of slides per page, gap, autoplay, etc.), adjust the Splide configuration options.
  - Replace or update the inline SVG by modifying the `customSvgContent` variable.
  - Confirm that the slider class selectors match those used in your Webflow project.

### link-handling.js

- **Purpose:**  
  Dynamically rewrites link URLs based on the text content of certain elements.
- **Key Points:**
  - Processes navigation links in several parts of the site: header navigation, home page event links, menu links, and footer links.
  - Formats link text by replacing spaces with “+” (for event links) or converting text to lower-case and hyphenated strings (for menu links).
  - Updates the `href` attribute to point to the proper destination (e.g., `/events?event-types=...` or `/menu-tabs/...`).
  - Hides text labels after setting the new link.
- **Customization Tips:**
  - If you change the naming conventions or URL structure on your site, update the logic in this script.
  - Make sure the selectors (like `.navigation-link-block`, `.nav-title`, etc.) reflect the current structure in your Webflow project.

## Dependencies

Make sure your project includes (or is compatible with) the following libraries, as these scripts depend on them:

- **Moment.js** – For date manipulation. [Documentation](https://momentjs.com/)
- **jQuery** – For DOM manipulation and AJAX requests (used in several scripts). [Documentation](https://jquery.com/)
- **GSAP (GreenSock Animation Platform)** – For page transition animations. [Documentation](https://greensock.com/gsap/)
- **Splide.js** – For slider/carousel functionality. [Documentation](https://splidejs.com/)

Ensure these libraries are loaded in your Webflow project before these custom scripts execute.

## Making Changes

### General Guidelines

- **Class Selectors:**  
  Each script relies on specific class names (e.g., `.event-link`, `.content-wrapper`, `.slider1`). When updating your site's design or element structure in Webflow, verify and update the selectors in these scripts as needed.

- **Date and Recurrence Logic:**  
  The event scripts use Moment.js to calculate dates and handle recurring events. If you need to modify how events are filtered or how recurring dates are generated, review the relevant sections (e.g., the while loop in `jump-events.js` or `jump-one-event.js`).

- **Animations and Transitions:**  
  For changes to page transitions, adjust the GSAP timeline properties in `jump-page-transition.js`. Consider modifying the animation durations, easing functions, or even the overall transition strategy.

- **Slider Customization:**  
  If you want to change slider behavior (e.g., number of slides per view, autoplay speed) or update the custom SVG icons for pagination, edit the configuration objects in `jump-private-events.js`.

- **Link URL Formatting:**  
  The link-handling script automatically formats URLs based on element text. To modify this behavior (for example, a new URL structure), adjust the string manipulation logic in `link-handling.js`.

### Testing Changes

1. **Local Testing:**  
   Since these scripts are embedded in Webflow, you may test changes using Webflow’s custom code embeds or by exporting your site and running it locally.
2. **Browser Console:**  
   Use your browser’s developer tools to monitor console messages (there are a few `console.log` statements) and to test DOM changes in real time.
3. **Version Control:**  
   Commit your changes frequently. Use branches if you’re testing major changes before merging them into your main codebase.

## Contributing

If you plan to extend or modify these scripts, please follow these guidelines:

- **Documentation:**  
  Update comments in the code and this README when making significant changes.
- **Code Style:**  
  Follow the existing code style. Use clear variable names and maintain consistency with the current formatting.
- **Testing:**  
  Test all changes in the context of the live Webflow site to ensure compatibility.
- **Pull Requests:**  
  Use pull requests for major changes, and include clear commit messages and change logs.

## License

_Include your preferred license information here (e.g., MIT License)._
