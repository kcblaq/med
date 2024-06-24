$(() => {
  $.getJSON("./assets/data/blogs.json", function (data) {
    $.each(data, function (key, value) {
      $("#blogs").append(
        `
         <a
            href="./blog-details.html?id=${value.id}"
            class="w-full h-fit border flex flex-col items-start rounded-md hover:opacity-70"
          >
            <div class="w-full h-64 bg-white dark:bg-slate-700 rounded-t-md">
              <img
                alt="${value.title}"
                src="${value.image}"
                class="w-full h-full rounded-t-md object-cover"
              />
            </div>
            <div
              class="w-full flex flex-col space-y-4 items-start p-3 bg-secondary/20"
            >
              <div class="flex flex-col space-y-2">
                <p>${value.title}</p>
                <p class="text-gray-600">${value.date}</p>
              </div>

              <p class="line-clamp-4 text-sm text-gray-500">
              ${value.description}
              </p>
            </div>
          </a>
        `
      );
    });
  });
});
