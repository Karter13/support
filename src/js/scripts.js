$(".menu-btn").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("menu-btn_activ");
  $(".navbar-menu").toggleClass("navbar-menu_active");
});