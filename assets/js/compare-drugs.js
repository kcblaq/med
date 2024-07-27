$(() => {
  const data = [
    ["Panadol", "Paracetamol"],
    ["Aspirin", "Ibuprofen"],
    ["Tramadol", "Oxycodone"],
    ["Amoxicillin", "Penicillin"],
    ["Augmentin", "Amoxicillin"],
    ["Zoloft", "Celexa"],
  ];
  const container = $("#popular-comparison-container");
  data.forEach(function (item) {
    container.append(
      '<a href="#" class="medication-button px-2 py-1 bg-[#f7f2fa] rounded-xl drop-shadow-xl">' +
        item[0] +
        " vs " +
        item[1] +
        "</a>"
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
  var queryValue = getParameterByName("first_drug");

  if (queryValue) {
    var screenWidth = $(window).width();
    screenWidth <= 768 ? $("#explore-more").hide() : $("#popular-drugs").hide();

    $("#popular-comparison-card").hide();
    $("#compare-medication").hide();
    $("#compared-drugs").show();
    $("#simalar-drug-right-panel").show();
    $("#adverse-effects-result").show();
  }
});
