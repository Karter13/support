
$(document).ready(function () {

  let modal = $("#modal");
  let closesuccessmodal = $("#closesuccessmodal");
  let modale = $(".modale");
  let close = $("#close");
  let contacts = $("#contacts");
  let phoner = $("#phoner");
  let details = $(".experience-card__link");
  let footercont = $(".footer-company__link_active");
  let banbutton = $(".baner__button");
  let ban1button = $(".baner1__button")
  let linkferst = $(".connection__link_ferst");
  let linklast = $(".connection__link_last");


  /*Для кнопки Перезвони мне*/
  contacts.on("click", function () {
    modal.addClass("modal_activ");
  });

  phoner.on("click", function () {
    modal.addClass("modal_activ");
  });

  details.on("click", function () {
    modal.addClass("modal_activ");
  });

  linkferst.on("click", function () {
    modal.addClass("modal_activ");
  });

  linklast.on("click", function () {
    modal.addClass("modal_activ");
  });

  footercont.on("click", function () {
    modal.addClass("modal_activ");
  });

  banbutton.on("click", function () {
    modal.addClass("modal_activ");
  });

  ban1button.on("click", function () {
    modal.addClass("modal_activ");
  });








  // /*Для блок price*/
  // cardLink.on("click", function (event) {
  //   event.preventDefault();
  //   modal.addClass("modal_activ");
  //   let target = $(this).attr("data-target");
  //   $(".modal-content").load(target + ".html");
  // });


  close.on("click", function () {
    modal.removeClass("modal_activ");
  });

  closesuccessmodal.on("click", function () {
    modale.removeClass("modale_active");
  });

});



// close.on("click", function () {
//   modal.removeClass("modal_activ");
//   left.removeClass("modal_left");
//   modalof.css({ "max-width": "50%" });
// });



