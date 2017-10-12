$(document).ready(function() {

  // Function that displays the results of the search
  function displayWiki() {

    //Make sure the output div is empty before search or empty before new search
    $("#result").fadeOut("slow").empty();

    //Get the search value
    var inputVal = $("#input").val();

    // Build URL with wikipedia API
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputVal + "&format=json&callback=?";

    // GetJSON call
    $.getJSON(url, function(data) {

      var title = data[1];
      var desc = data[2];
      var link = data[3];

      // For loop to iterate through JSON
      for (var i = 0; i < data[1].length; i++) {

        //Add content to the empty div
        $("#result").prepend("<a href =" + link[i] + " target = '_blank'><li>" + title[i] + "<p>" + desc[i] + "</p></li></a>").hide().fadeIn();

      }; //End for loop
    }); //End getJSON
  }; //End

  // When press key Enter: trigger function displayWiki()
  $("#input").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      displayWiki();
    }
  });

  // When click search btn: trigger function displayWiki()
  $("#search").click(displayWiki);

  //When clicking btn : see a random wikipedia page
  $("#random").click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank")
  });

});
