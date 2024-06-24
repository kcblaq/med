$(() => {
  $(".star").on("click", function () {
    var index = $(this).index();
    $(".star").each(function (i) {
      if (i <= index) {
        $(this).addClass("star-filled");
      } else {
        $(this).removeClass("star-filled");
      }
    });
    $("#rating-text").text("Great!");
  });
});
