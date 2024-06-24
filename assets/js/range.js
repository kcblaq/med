$(() => {
  $("#steps-range")
    .on("input", function () {
      var value =
        (($(this).val() - $(this).attr("min")) /
          ($(this).attr("max") - $(this).attr("min"))) *
        100;
      $(this).css(
        "background",
        "linear-gradient(to right, green " + value + "%, gray " + value + "%)"
      );
    })
    .trigger("input"); // Trigger input event to set initial state
});
