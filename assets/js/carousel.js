$(() => {
  $(".carousel").slick({
    accessibility: true,
    adaptiveHeight: false,
    autoplay: true,
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 3,
    prevArrow: "#previous-carousel-button",
    nextArrow: "#next-carousel-button",
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".top-selling-carousel").slick({
    accessibility: true,
    adaptiveHeight: false,
    autoplay: true,
    dots: false,
    slidesToShow: 4,
    prevArrow: "#previous-carousel-button",
    nextArrow: "#next-carousel-button",
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
