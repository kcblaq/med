$(() => {
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
    $("#search-result").show();
  }
});
