$(() => {
  const data = [
    {
      color: "#b3261e",
      title: "Serious",
    },
    {
      color: "#267ce0",
      title: "Moderate",
    },
    {
      color: "#c6bf0e",
      title: "Minor",
    },
    {
      color: "#938f96",
      title: "Unknown",
    },
  ];
  const container = $("#popular-comparison-container");
  data.forEach(function (item) {
    container.append(
      `
       <div class="flex flex-row space-x-2 items-center">
            <span
            style="background-color: ${item.color}"
            class="w-5 h-5 rounded-full"
            ></span>
            <span>${item.title}</span>
        </div>
      `
    );
  });

  function getParameterByName(name) {
    var url = window.location.href;
    var name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "=([^&#]*)");
    var results = regex.exec(url);
    if (results != null) {
      return decodeURIComponent(results[1]);
    } else {
      return null;
    }
  }

  // Example usage:
  var queryValue = getParameterByName("drug");

  if (queryValue) {
    $("#popular-drugs").hide();
    $("#popular-comparison-card").hide();
    $("#compare-medication").hide();
    $("#interaction-section").show();
    $("#interaction-right-panel").show();
    $("#adverse-effects-result").show();

    const interactionCard = $("#interaction-card");
    data.forEach(function (item) {
      interactionCard.append(
        `
       <div class="flex flex-row space-x-2 items-center">
            <span
            style="background-color: ${item.color}"
            class="w-5 h-5 rounded-full"
            ></span>
            <span>${item.title}</span>
        </div>
      `
      );
    });
  }
});
