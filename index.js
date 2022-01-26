$(document).ready(function () {
    $("#characterSearch").on("submit", function (e) {
      e.preventDefault(e);
    });
    getCharacters();
  });
  
  function getCharacters() {
    var request;
  
    $("img").attr("src", "");
    $("#name").text("");
    $("#prev").text("");
    $("#next").text("");
  
    //send the request
  
    request = $.ajax({
      url: "https://rickandmortyapi.com/api/character?",
      type: "GET",
  
      data: {
        q: $("#characterSearch").val(),
      },
    });
  
    //call back handler for success
  
    request.done(function (response) {
      console.log(response);
  
      var imgurl =
        "https://rickandmortyapi.com/api/character/avatar/1.jpeg" + response.info.count;
        imgurl = response.image + imgurl;
  
      var characterName = response.name;
      characterName = characterName + ", " + response.name;
      var pre = response.prev;
      pre = pre + ", " + response;
      var ne = response.info;
      ne = ne + response.info;
  
      $("img").attr("src", imgurl);
      $("#name").text(characterName);
      $("#prev").text(pre);
      $("#next").text(ne);
    });
  
    // call back handler for failure
  
    request.fail(function () {
      $("#name").text("please search legit character");
    });
  }
  