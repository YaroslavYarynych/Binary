/*Internet explorer */
$(window).resize(function (event) {
  mainblock();
});
function mainblock() {
  let h = $(window).outerHeight();
  $(".mainblock").css("min-height", h);
}
mainblock();
/*----------------------------------------- */
// BaguetteBox (For images in portfolio)
if ($(".gallery").length > 0) {
  baguetteBox.run(".gallery", {
    // Custom options
  });
}
window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});
/*----------------------------------------- */
// Фільтрація у портфоліо
$(".filter__item").click(function (event) {
  let i = $(this).data("filter");
  if (i == 1) {
    $(".portfolio__column").show();
  } else {
    $(".portfolio__column").hide();
    $(".portfolio__column.f-" + i).show();
  }
  $(".filter__item").removeClass("filter__item-a");
  $(this).addClass("filter__item-a");

  return false;
});
/*----------------------------------------- */
