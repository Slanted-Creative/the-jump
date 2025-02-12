//Event sort & recursion copy

document.addEventListener("DOMContentLoaded", function () {
  var events = document.querySelectorAll(".event-link"); // Replace '.event' with the appropriate class selector for your event items.
  var today = moment().startOf("day");

  var updatedEvents = [];
  events.forEach(function (event) {
    var isRecurring = event.querySelector(".recurring-switch"); // Replace '.recurring-switch' with the appropriate class selector for the recurring switch element.
    var startDateElement = event.querySelector(".start-date"); // Replace '.start-date' with the appropriate class selector for the start date element.
    var endDateElement = event.querySelector(".end-date"); // Replace '.end-date' with the appropriate class selector for the end date element.
    var startDate = moment(startDateElement.textContent);
    var endDate = endDateElement.textContent
      ? moment(endDateElement.textContent)
      : null;
    var excludeDateElement = event.querySelector(".exclude-date"); // add this line
    var excludeDate = excludeDateElement
      ? moment(excludeDateElement.textContent)
      : null; // and this one

    // Set the price filter text based on the presence of the text in the "price-block" element

    // Update the price filter text
    updatedEvents.forEach(function (event) {
      var priceBlock = event.querySelector(".price-block");
      var priceFilter = event.querySelector(".price-filter");

      if (priceBlock && priceFilter) {
        if (priceBlock.textContent.trim() === "") {
          priceFilter.textContent = "Free";
        } else {
          priceFilter.textContent = "Paid";
          priceFilter.style.display = "none";
          if (!priceBlock.textContent.startsWith("$")) {
            priceBlock.textContent = "$" + priceBlock.textContent;
          }
        }
      }
    });

    var priceBlock = event.querySelector("#price-block");
    var priceFilter = event.querySelector("#price-filter");
    if (priceBlock && priceFilter) {
      if (priceBlock.textContent.trim() !== "") {
        priceFilter.textContent = "Paid";
      } else {
        priceFilter.textContent = "Free";
      }
    }

    if (isRecurring && isRecurring.textContent === "true") {
      var recurringWeekdayElement = event.querySelector(".recurring-weekday"); // Replace '.recurring-weekday' with the appropriate class selector for the recurring weekday element.

      // Check if there's no end date or the end date is within 24 hours from the start date
      var isEndDateWithin24Hours =
        !endDate || startDate.clone().add(24, "hours").isSameOrAfter(endDate);

      // If there's no end date or the end date is within 24 hours, set the cutoffDate to 6 weeks from now, otherwise use the end date
      var cutoffDate = isEndDateWithin24Hours
        ? moment(today).add(6, "weeks")
        : endDate;

      var recurringWeekday = parseInt(recurringWeekdayElement.textContent);

      while (startDate.isBefore(cutoffDate)) {
        if (
          startDate.isSameOrAfter(today) &&
          (!excludeDate || !startDate.isSame(excludeDate))
        ) {
          // modify this line

          var clonedSlide = event.closest(".event-item").cloneNode(true);
          clonedSlide.querySelector(".start-date").textContent =
            startDate.format("MMMM D, YYYY");
          updatedEvents.push(clonedSlide);
        }
        startDate.add(1, "weeks");
      }
    } else {
      // This event is not recurring, we should still clone it and push it to the updatedEvents array if it's a future event
      if (startDate.isSameOrAfter(today)) {
        var clonedSlide = event.closest(".event-item").cloneNode(true);
        updatedEvents.push(clonedSlide);
      }
    }
  });

  // Filter the updatedEvents array to remove past events
  updatedEvents = updatedEvents.filter((event) => {
    var eventDate = moment(
      event.querySelector(".start-date").textContent,
      "MMMM D, YYYY"
    );
    return eventDate.isSameOrAfter(today);
  });

  // Sort the updated events based on the start dates
  updatedEvents.sort((a, b) => {
    var aStartDate = moment(
      a.querySelector(".start-date").textContent,
      "MMMM D, YYYY"
    );
    var bStartDate = moment(
      b.querySelector(".start-date").textContent,
      "MMMM D, YYYY"
    );
    return aStartDate.isAfter(bStartDate) ? 1 : -1;
  });

  // Replace the original list with the updated list
  var eventList = events[0].closest(".events-list");
  eventList.innerHTML = "";
  updatedEvents.forEach(function (slide) {
    eventList.appendChild(slide);
  });
});

// Set endtimes to midnight on homepage event slider
document.addEventListener("DOMContentLoaded", function () {
  var slider3Elements = document.querySelectorAll(".content_fliter *"); // Replace '.slider3' with the appropriate class selector for your slider container.

  slider3Elements.forEach(function (element) {
    if (
      element.textContent.includes("11:59 PM") ||
      element.textContent.includes("12:00 AM")
    ) {
      element.textContent = element.textContent.replace("11:59 PM", "Midnight");
      element.textContent = element.textContent.replace("12:00 AM", "Midnight");
    }
  });
});
