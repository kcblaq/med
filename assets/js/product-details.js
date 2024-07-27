$(() => {
  $(".small-images button").on("click", function () {
    // Get the image URL from the data attribute

    const newImageSrc = $(this).find("img").attr("src");

    // Update the main image source
    $("#main-image").attr("src", newImageSrc);
  });

  $(".image-carousel").slick({
    accessibility: true,
    adaptiveHeight: false,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
  });
});
