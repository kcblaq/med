$(() => {
  const subCategories = [
    "Paracetamol",
    "Ibuprofen",
    "Hydrocodone",
    "Naproxen",
    "Aspirin",
    "Celecoxib",
    "Oxycodone",
    "Codeine",
    "Diclofenac",
    "Tramadol",
    "Fentanyl",
    "Methadone",
    "Hydromorphone",
    "Meperidine",
    "Ketorolac",
    "Paracetamol",
    "Morphine",
    "Buprenorphine",
    "Lidocaine",
    "Gabapentin",
    "Duloxetine",
    "Amitriptyline",
    "Clonidine",
    "Pregabalin",
    "Carbamazepine",
  ];
  const container = $("#sub-categories-container");
  subCategories.forEach(function (medication) {
    container.append(
      '<a href="#" class="medication-button px-2 py-1 bg-white rounded-xl drop-shadow-xl">' +
        medication +
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
  var queryValue = getParameterByName("query");

  if (queryValue) {
    $("#popular-drugs").hide();
    $("#popular-drugs-card").hide();
    $("#related-drug-right-panel").show();
    $("#adverse-effects-result").show();
  }
});
