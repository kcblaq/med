$(() => {
  $.getJSON("./assets/data/blogs.json", function (data) {
    $.each(data, function (key, value) {
      $("#blogs").append(
        `
           <a
              href="./blog-details.html?id=${value.id}"
              class="w-full h-fit border flex rounded-md hover:opacity-70"
            >
              <div
                class="w-[60%] lg:w-[75%] flex flex-col space-y-4 items-start p-4 bg-secondary/20"
              >
                <div class="flex flex-col space-y-2">
                  <p class="font-bold line-clamp-1">${value.title}</p>
                  <p class="text-gray-600">${value.date}</p>
                </div>
  
                <p class="line-clamp-3 text-sm text-gray-500">
                ${value.description}
                </p>
              </div>
               <div class="w-[40%] lg:w-[25%] h-44 bg-white dark:bg-slate-700 rounded-r-md">
                <img
                  alt="${value.title}"
                  src="${value.image}"
                  class="w-full h-full rounded-r-md object-cover"
                />
              </div>
            </a>
          `
      );
    });
  });
});
