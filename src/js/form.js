$(document).ready(function () {
  // Маска для телефона
  jQuery(function ($) {
    $(".phone").mask("+7 (999) 999-99-99");
  });

  // Валидация формы и запуск ajax отрпавки при успешной обработке

  $("#modal-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      name: {
        required: "Заполните Имя",
        minlength: "Введите больше 2 символов",
        maxlength: "Введите меньше 15 символов",
      },
      phone: {
        required: "Заполните номер телефона",
      },
      email: {
        required: "Заполните email",
      }

    },
    errorClass: "invalid",
    errorElement: "div",

    submitHandler: function (form) {
      event.preventDefault();

      $.ajax({
        url: './mail.php',
        type: 'post',
        data: $(form).serialize(),
        success: function (data) {
          // yaCounter54884206.reachGoal('FormSubmit');
          // Очистка полей формы
          $('#modal-clean1').val('');
          $('#modal-clean2').val('');
          $('modal-clean3').val('');


          // Вывод ответа в модальном окне
          // $('#sucess-user').html(data);
          // $('#sucess-user').addClass('bold');
          $('#modal-succes').addClass('modal_active');
          // Автозакрытие
          var timerId;
          timerId = setTimeout(function () {
            $('#modal-succes').removeClass('modal_active');
          }, 5000);
          // Закрытие на кнопку-крестик
          $('#closesuccessmodal').on('click', function () {
            clearTimeout(timerId);
            $('#modal-succes').removeClass('modal_active');
          });

        },
        error: function (jqXHR, textStatus) {
          console.log(jqXHR + ': ' + textStatus);
        },
      });
    }
  });

});