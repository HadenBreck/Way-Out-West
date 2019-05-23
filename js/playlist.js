$(document).ready(function() {
  play();
  index = 0;

  function play() {
    $(".playlist li a").click(function(e) {
      e.preventDefault();
      var val = $(this).prop("href");
      $(".player").attr("src", val);
    });
  }
  var ih = document.getElementsByClassName("playlist");
  console.log(ih);
  var get = localStorage.getItem("mallard");

  $(function() {
    if ("mallard" in localStorage) {
      $(" li a:eq(0)").attr("href", "sound/duckcal.mp3");
      $("li a:eq(0)").text("Duck Call");
    }
    if ("duck" in localStorage) {
      $(" li a:eq(1)").attr("href", "sound/mallard.mp3");
      $("li a:eq(1)").text("Duck ");
    }
    if ("buck" in localStorage) {
      $(" li a:eq(2)").attr("href", "sound/grunt.mp3");
      $("li a:eq(2)").text("Buck Grunt");
    }
    if ("deer" in localStorage) {
      $(" li a:eq(3)").attr("href", "sound/hurt.mp3");
      $("li a:eq(3)").text("Female Distress");
    }
    if ("mate" in localStorage) {
      $(" li a:eq(4)").attr("href", "sound/mating.mp3");
      $("li a:eq(4)").text("Mating");
    }
    if ("Elk Grunt" in localStorage) {
      $(" li a:eq(5)").attr("href", "sound/elkgrunt.mp3");
      $("li a:eq(5)").text("Elk Grunt");
    }
    if ("Elk" in localStorage) {
      $(" li a:eq(6)").attr("href", "sound/elk.mp3");
      $("li a:eq(6)").text("Elk");
    }
    if ("Cow Elk" in localStorage) {
      $(" li a:eq(7)").attr("href", "sound/cow.mp3");
      $("li a:eq(7)").text("Cow Elk");
    }
    if ("moose" in localStorage) {
      $(" li a:eq(7)").attr("href", "sound/cow.mp3");
      $("li a:eq(7)").text("Bull Moose");
    }
    if ("wol" in localStorage) {
      $(" li a:eq(8)").attr("href", "sound/wolf.mp3");
      $("li a:eq(8)").text("Wolf");
    }
    if ("black" in localStorage) {
      $(" li a:eq(9)").attr("href", "sound/blackbear.mp3");
      $("li a:eq(9)").text("Black Bear");
    }
    if ("cub" in localStorage) {
      $(" li a:eq(10)").attr("href", "sound/cubs.mp3");
      $("li a:eq(10)").text("Cub Distress");
    }
    if ("blood" in localStorage) {
      $(" li a:eq(11)").attr("href", "sound/bloodhound.mp3");
      $("li a:eq(11)").text("Blood Hound");
    }
    if ("bunny" in localStorage) {
      $(" li a:eq(12)").attr("href", "sound/bunny.mp3");
      $("li a:eq(12)").text("Rabbit and Coyote");
    }
    if ("oyote" in localStorage) {
      $(" li a:eq(13)").attr("href", "sound/yips.mp3");
      $("li a:eq(13)").text("Coyote Yip");
    }
    if ("lon" in localStorage) {
      $(" li a:eq(14)").attr("href", "sound/Coyote-lone.mp3");
      $("li a:eq(14)").text("Coyote");
    }
    if ("fox" in localStorage) {
      $(" li a:eq(15)").attr("href", "sound/foxcalling.mp3");
      $("li a:eq(15)").text("Fox");
    }
    if ("fight" in localStorage) {
      $(" li a:eq(16)").attr("href", "sound/Porcupinefight.mp3");
      $("li a:eq(16)").text("Fighting Porcupines");
    }
    if ("hurt" in localStorage) {
      $(" li a:eq(17)").attr("href", "sound/foxhurt.mp3");
      $("li a:eq(17)").text("Fox Hurt");
    }
  });
  $(".clean").on("click", function() {
    $(".playlist a").toggle();
    localStorage.clear();
  });

  $("#btn1").on("click", function() {
    localStorage.setItem("mallard", "sound/duckcal.mp3");
    alert("Saved to Playlist");
  });

  $("#btn2").on("click", function() {
    localStorage.setItem("duck", "sound/bunny.mp3");
    alert("Saved to Playlist");
  });
  $("#btn3").on("click", function() {
    localStorage.setItem("buck", "sound/grunt.mp3");
    alert("Saved to Playlist");
  });
  $("#btn4").on("click", function() {
    localStorage.setItem("deer", "sound/hurt.mp3");
    alert("Saved to Playlist");
  });
  $("#btn5").on("click", function() {
    localStorage.setItem("mate", "sound/mating.mp3");
    alert("Saved to Playlist");
  });
  $("#btn6").on("click", function() {
    localStorage.setItem("Elk Grunt", "sound/elkgrunt.mp3");
    alert("Saved to Playlist");
  });
  $("#btn7").on("click", function() {
    localStorage.setItem("Elk", "sound/elk.mp3");
    alert("Saved to Playlist");
  });
  $("#btn8").on("click", function() {
    localStorage.setItem("Cow Elk", "sound/cow.mp3");
    alert("Saved to Playlist");
  });
  $("#btn9").on("click", function() {
    localStorage.setItem("moose", "sound/moosebull.mp3");
    alert("Saved to Playlist");
  });
  $("#btn10").on("click", function() {
    localStorage.setItem("wol", "sound/wolf.mp3");
    alert("Saved to Playlist");
  });
  $("#btn11").on("click", function() {
    localStorage.setItem("black", "sound/blackbear.mp3");
    alert("Saved to Playlist");
  });
  $("#btn12").on("click", function() {
    localStorage.setItem("cub", "sound/cubs.mp3");
    alert("Saved to Playlist");
  });
  $("#btn13").on("click", function() {
    localStorage.setItem("blood", "sound/bloodhound.mp3");
    alert("Saved to Playlist");
  });
  $("#btn14").on("click", function() {
    localStorage.setItem("bunny", "sound/bunny.mp3");
    alert("Saved to Playlist");
  });
  $("#btn15").on("click", function() {
    localStorage.setItem("oyote", "sound/yips.mp3");
    alert("Saved to Playlist");
  });
  $("#btn16").on("click", function() {
    localStorage.setItem("lon", "sound/coyote-lone.mp3");
    alert("Saved to Playlist");
  });
  $("#btn17").on("click", function() {
    localStorage.setItem("fox", "sound/foxcalling.mp3");
    alert("Saved to Playlist");
  });
  $("#btn18").on("click", function() {
    localStorage.setItem("fight", "sound/Porcupinefight.mp3");
    alert("Saved to Playlist");
  });
  $("#btn19").on("click", function() {
    localStorage.setItem("hurt", "sound/foxhurt.mp3");
    alert("Saved to Playlist");
  });
});
