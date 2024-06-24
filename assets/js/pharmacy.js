$(() => {
  let viewMoreStatus = false;
  // toggle view more
  $("#view-more-button").on("click", () => {
    if (viewMoreStatus) {
      viewMoreStatus = false;
      $("#view-more").hide();
      $(".view-more-button-icon").removeClass("rotate-180");
    } else {
      viewMoreStatus = true;
      $("#view-more").show();
      $(".view-more-button-icon").addClass("rotate-180");
    }
  });

  // render products
  $.getJSON("./assets/data/product.json", function (data) {
    $.each(data, function (key, value) {
      $("#products").append(
        `<a
          href='./product-details.html'
            class="w-full h-fit border flex flex-col items-start rounded-lg hover:opacity-70"
          >
            <div
              class="w-full h-44 lg:h-64 bg-white dark:bg-slate-700 rounded-t-lg"
            >
              <img
                alt="Emzor Paracetamol 500mg"
                src="${value.image}"
                class="w-full h-full rounded-t-lg object-cover"
              />
            </div>
            <div
              class="w-full flex flex-col space-y-1 items-start p-2 py-3 bg-[#f7f2fa]"
            >
              <div class="w-full flex flex-row space-x-2 items-end">
                <p class="text-lg font-semibold">$${value.amount}</p>

                ${
                  value.perTablet
                    ? ' <span class="text-xs text-gray-400"> 1 / Tablets </span>'
                    : `<span class="flex items-end space-x-2">
                        <p>-</p>
                        <p class="text-lg font-semibold">$${value.maxAmount}</p>
                    </span>
`
                }
               
              </div>
              <p class="w-full line-clamp-2 font-semibold">${value.title}</p>
            </div>
          </a>`
      );
    });
  });

  // load google maps
  // Initialize and add the map
  function initMap() {
    // The location of the center point
    const centerPoint = { lat: -34.397, lng: 150.644 };
    // The map, centered at the center point
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: centerPoint,
    });
    // The marker, positioned at the center point
    const marker = new google.maps.Marker({
      position: centerPoint,
      map: map,
    });
  }

  // Call initMap to load the map
  initMap();
});
