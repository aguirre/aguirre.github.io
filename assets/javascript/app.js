// Display About Section
$("#aboutLink").on("click", function() {
  if ($("#portfolioRow").css("display") !== "none") {
    $("#portfolioRow").fadeOut(1000, function() {
      $("#aboutRow").fadeIn(1000);
    });
  } else if ($("#contactRow").css("display") !== "none") {
    $("#contactRow").fadeOut(1000, function() {
      $("#aboutRow").fadeIn(1000);
    });
  }
});

// Display Portfolio Section
$("#portfolioLink").on("click", function() {
  if ($("#aboutRow").css("display") !== "none") {
    $("#aboutRow").fadeOut(1000, function() {
      $("#portfolioRow").fadeIn(1000);
    });
  } else if ($("#contactRow").css("display") !== "none") {
    $("#contactRow").fadeOut(1000, function() {
      $("#portfolioRow").fadeIn(1000);
    });
  }
});

// Display Contact Section
$("#contactLink").on("click", function() {
  if ($("#portfolioRow").css("display") !== "none") {
    $("#portfolioRow").fadeOut(1000, function() {
      $("#contactRow").fadeIn(1000);
    });
  } else if ($("#aboutRow").css("display") !== "none") {
    $("#aboutRow").fadeOut(1000, function() {
      $("#contactRow").fadeIn(1000);
    });
  }
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(".scale-tilt").tilt({
  scale: 1.1
});

$(".keep-tilt").tilt({
  reset: false
});
