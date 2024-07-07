$(document).ready(function () {
  // Nav Toggle
  $("#toggleNav-icon").click(function () {
    $(this).toggleClass("open");
    $(".menu").slideToggle();
  });
});
