'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NUMBERS = 4;
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function wizardsPlayersCreate() {
  var wizards = [];
  var wizard = {};
  for (var i = 0; i < WIZARD_NUMBERS; i++) {
    wizard = {
      name: wizardsNames[getRandomInt(wizardsNames.length)] + ' ' + wizardSurnames[getRandomInt(wizardSurnames.length)],
      coatColor: coatColors[getRandomInt(coatColors.length)],
      eyesColor: eyesColors[getRandomInt(eyesColors.length)]
    };
    wizards.push(wizard);
  }
  return wizards;
}

var wizards = wizardsPlayersCreate();

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');

// Открытие закрытие окна настройки персонажа:

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');
setupIcon.tabIndex = 0;
setupClose.tabIndex = 0;

setupIcon.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter' && evt.target === document.activeElement) {
    openPopup();
  }
});

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


// Валидация ввода имени персонажа

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

// Изминение цвета

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardInputCoat = document.querySelector('input[name="coat-color"]');
var wizardInputEyes = document.querySelector('input[name="eyes-color"]');
var wizardInputFireball = document.querySelector('input[name="fireball-color"]');


var getColor = function (colorArray) {
  var color = colorArray[getRandomInt(colorArray.length)];
  return color;
};

wizardCoat.addEventListener('click', function (evt) {
  var color = getColor(coatColors);
  evt.target.style.fill = color;
  wizardInputCoat.value = color;
});

wizardEyes.addEventListener('click', function (evt) {
  var color = getColor(eyesColors);
  evt.target.style.fill = color;
  wizardInputEyes.value = color;
});

wizardFireball.addEventListener('click', function (evt) {
  var color = getColor(fireballColors);
  evt.target.style.backgroundColor = color;
  wizardInputFireball.value = color;
});

// Отправка формы
var wizardForm = document.querySelector('.setup-wizard-form');
wizardForm.action = 'https://javascript.pages.academy/code-and-magick';
