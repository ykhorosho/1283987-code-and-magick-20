// Файл setup.js
'use strict';

(function () {
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
}) ();
