$(() => {
  $.getJSON("./assets/data/product.json", function (data) {
    $.each(data, function (key, value) {
      $("#products").append(
        `<a
          href='./product-details.html'
            class="w-full h-fit border flex flex-col items-start rounded-lg hover:opacity-70"
          >
            <div
              class="w-full h-52 lg:h-64 bg-white dark:bg-slate-700 rounded-t-lg"
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
              <p class="w-full line-clamp-2">${value.title}</p>
              <div class="hidden lg:flex items-center space-x-2">
                <p>Lois Pharmacy</p>
                <div class="flex space-x-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15px"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#7D5260"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15px"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#7D5260"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15px"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#7D5260"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15px"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#7D5260"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                  <span
                    class="material-symbols-outlined text-lg text-[#7D5260]"
                  >
                    star_half
                  </span>
                </div>
              </div>

              <div class="w-full flex flex-row justify-between">
                <button
                  class="w-full lg:w-fit flex px-4 py-2 border border-primary rounded-full text-primary"
                >
                  Add to Cart
                </button>
                <button
                    onclick="window.location='./product-details.html'"
                    class="hidden lg:flex px-4 py-2 btn-primary border border-primary rounded-full text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          </a>`
      );
    });
  });
});
