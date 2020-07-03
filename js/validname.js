// Валидация ввода имени персонажа
// Файл validname.js
'use strict';
(function () {

  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function (evt) {
    var valueLength = evt.target.value.length;
    if (evt.target.validity.valueMissing) {
      evt.target.setCustomValidity('Обязательное поле');
    } else if (valueLength < window.data.MIN_NAME_LENGTH) {
      evt.target.setCustomValidity('Ещё ' + (window.data.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.data.MAX_NAME_LENGTH) {
      evt.target.setCustomValidity('Удалите лишние ' + (valueLength - window.data.MAX_NAME_LENGTH) + ' симв.');
    } else {
      evt.target.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    evt.target.reportValidity();
  });
})();
