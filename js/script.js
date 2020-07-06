
$(function () {
  $(".acMenu dt").on("click", function () {
    $(this).next().slideToggle();
  });

  $("#top_btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000, "swing");
  });

  $('.hl-toggler').click(function () {
    $(this).hide();
    $('.hl-item, .hl-closer').fadeIn();
  });
  $('.hl-closer, .hl-item').click(function(){
    $('.hl-closer').fadeOut(3);
    $('.hl-item').fadeOut(1);
    $('.hl-toggler').fadeIn();
  });
});
