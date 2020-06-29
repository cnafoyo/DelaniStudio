$(document).ready(function () {
  $("#design-text").hide();
  $("#design").click(function () {
    $("#design-text").slideToggle("slow");
    $("#design-img").slideToggle("slow");
  });
  $("#development-text").hide();
  $("#development").click(function () {
    $("#development-text").slideToggle("slow");
    $("#development-img").slideToggle("slow");
  });
  $("#product-text").hide();
  $("#product").click(function () {
    $("#product-text").slideToggle("slow");
    $("#product-img").slideToggle("slow");
  });
  $(".portfolio").each(function () {
    $(this).find("p").hide()
    $(this).animate({ opacity: 1 });
    $(this).hover(function () {
      $(this).stop().animate({ opacity: .4 }, 200);
      $(this).find("p").fadeIn();
    }, function () {
      $(this).stop().animate({ opacity: 1 }, 400)
      $(this).find("p").fadeOut();
    });
  });
}); 