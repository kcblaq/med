// import { Carousel } from "flowbite";

const carouselElement = document.getElementById("carousel-example");

const items = [
  {
    position: 0,
    el: document.getElementById("carousel-item-1"),
  },
  {
    position: 1,
    el: document.getElementById("carousel-item-2"),
  },
  {
    position: 2,
    el: document.getElementById("carousel-item-3"),
  },
  {
    position: 3,
    el: document.getElementById("carousel-item-4"),
  },
];

// options with default values
const options = {
  defaultPosition: 1,
  interval: 3000,

  indicators: {
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses:
      "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    items: [
      {
        position: 0,
        el: document.getElementById("carousel-indicator-1"),
      },
      {
        position: 1,
        el: document.getElementById("carousel-indicator-2"),
      },
      {
        position: 2,
        el: document.getElementById("carousel-indicator-3"),
      },
      {
        position: 3,
        el: document.getElementById("carousel-indicator-4"),
      },
    ],
  },

  // callback functions
  onNext: () => {
    console.log("next slider item is shown");
  },
  onPrev: () => {
    console.log("previous slider item is shown");
  },
  onChange: () => {
    console.log("new slider item has been shown");
  },
};

// instance options object
const instanceOptions = {
  id: "carousel-example",
  override: true,
};

// const carousel = new Carousel(carouselElement, items, options, instanceOptions);

// $(document).ready(function () {
//   const items = $(".carousel-item");
//   let currentIndex = 0;
//   const itemsToShow = $(window).width() >= 640 ? 3 : 1;

//   function showItems(index) {
//     items.removeClass("active");
//     for (let i = 0; i < itemsToShow; i++) {
//       $(items[(index + i) % items.length]).addClass("active");
//     }
//   }

//   function updateCarousel(direction) {
//     if (direction === "next") {
//       currentIndex = (currentIndex + itemsToShow) % items.length;
//     } else if (direction === "prev") {
//       currentIndex = (currentIndex - itemsToShow + items.length) % items.length;
//     }
//     showItems(currentIndex);
//   }

//   $(".carousel-next").click(function () {
//     updateCarousel("next");
//     $(".carousel-container").animate({
//       scrollLeft: "+=" + $(".carousel-item").outerWidth() * itemsToShow,
//     });
//   });

//   $(".carousel-prev").click(function () {
//     updateCarousel("prev");
//     $(".carousel-container").animate({
//       scrollLeft: "-=" + $(".carousel-item").outerWidth() * itemsToShow,
//     });
//   });

//   showItems(currentIndex);

//   // Swipe functionality for mobile
//   let touchstartX = 0;
//   let touchendX = 0;

//   function handleGesture() {
//     if (touchendX < touchstartX) {
//       updateCarousel("next");
//       $(".carousel-container").animate({
//         scrollLeft: "+=" + $(".carousel-item").outerWidth() * itemsToShow,
//       });
//     }
//     if (touchendX > touchstartX) {
//       updateCarousel("prev");
//       $(".carousel-container").animate({
//         scrollLeft: "-=" + $(".carousel-item").outerWidth() * itemsToShow,
//       });
//     }
//   }

//   items.on("touchstart", function (event) {
//     touchstartX = event.changedTouches[0].screenX;
//   });

//   items.on("touchend", function (event) {
//     touchendX = event.changedTouches[0].screenX;
//     handleGesture();
//   });

//   // Adjust carousel on window resize
//   $(window).resize(function () {
//     const newItemsToShow = $(window).width() >= 640 ? 3 : 1;
//     if (newItemsToShow !== itemsToShow) {
//       currentIndex = 0;
//       showItems(currentIndex);
//     }
//   });
// });
