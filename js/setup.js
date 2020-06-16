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

// Валидация ввода имени персонажа.

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// Изминение цвета
// currentColor Input в котором хранится текущее значение цвета
// arrColors Массив цветов из которого нужно взять следующий цвет
var getColor = function () {
  var changes = [];
  var change = {};
  for (var i = 0; i < ; i++) {
    change = {
      wizardCoat: wizardCoat[getRandomInt(wizardsNames.length)]

    }
  }
}

wizardCoat.addEventListener('click', function () {
  getColor(wizardCoat, coatColor, wizardCoatColor, 'fill', 'coat');
});

wizardEyes.addEventListener('click', function () {
  getColor(wizardEyes, eyesColor, wizardEyesColor, 'fill', 'eyes');
});

wizardFireball.addEventListener('click', function () {
  getColor(wizardFireball, fireballColor, wizardFireballColor, 'background-color', 'fireball');
});


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
