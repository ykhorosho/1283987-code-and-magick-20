// Валидация ввода имени персонажа
// Файл validname.js
'use strict';
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  var valueLength = evt.target.value.length;
  if (evt.target.validity.valueMissing) {
    evt.target.setCustomValidity('Обязательное поле');
  } else if (valueLength < MIN_NAME_LENGTH) {
    evt.target.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    evt.target.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    evt.target.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  evt.target.reportValidity();
});
