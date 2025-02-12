document.addEventListener("DOMContentLoaded", function () {
  var events = document.querySelectorAll(".event-item");
  var today = moment().startOf("day");

  var potentialEvents = [];

  events.forEach(function (event) {
    var isRecurring = event.querySelector(".recurring-switch");
    var startDateElement = event.querySelector(".start-date");
    var endDateElement = event.querySelector(".end-date");
    var startDate = moment(startDateElement.textContent);
    var endDate = endDateElement.textContent
      ? moment(endDateElement.textContent)
      : null;

    var excludeDatesElements = event.querySelectorAll(".exclude-date"); // get all exclude-date elements
    var excludeDates = Array.from(excludeDatesElements).map((el) =>
      moment(el.textContent)
    ); // convert them to moment objects

    console.log("excludeDates:" + excludeDates); // Step 2: Check excludeDates

    if (isRecurring && isRecurring.textContent === "true") {
      var recurringWeekdayElement = event.querySelector(".recurring-weekday");
      var isEndDateWithin24Hours =
        !endDate || startDate.clone().add(24, "hours").isSameOrAfter(endDate);
      var cutoffDate = isEndDateWithin24Hours
        ? moment(today).add(1, "weeks")
        : endDate;
      var recurringWeekday = parseInt(recurringWeekdayElement.textContent);

      while (startDate.isBefore(cutoffDate)) {
        if (
          startDate.isSameOrAfter(today) &&
          !excludeDates.some((excludeDate) =>
            startDate.isSame(excludeDate, "day")
          )
        ) {
          var clonedEvent = event.cloneNode(true);
          clonedEvent.querySelector(".start-date").textContent =
            startDate.format("MMMM D, YYYY");
          potentialEvents.push(clonedEvent);
        }
        startDate.add(1, "weeks");
      }
    } else if (startDate.isSameOrAfter(today)) {
      potentialEvents.push(event);
    }
  });

  potentialEvents.sort((a, b) => {
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

  var updatedEvents = potentialEvents.slice(0, 3);

  var eventList = document.querySelector(".events-list");
  eventList.innerHTML = "";
  updatedEvents.forEach(function (event) {
    eventList.appendChild(event);
  });
});
