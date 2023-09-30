$(".sidebar ul li a").on("click", function () {
  $(this).siblings("ul").slideToggle();
  $(this)
    .children(".fa-chevron-right").toggleClass('rotateArrow');
});

$(".sidebar ul li a").each((i, element) => {
  if ($(element).siblings("ul").length) {
    $(element).append(
      `<i class="inline-block fa-solid fa-chevron-right duration-300"></i>`
    );
  }
});
