// Файл setup.js
'use strict';

(function () {
  var getRandomInt = window.utils.getRandomInt;
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function wizardsPlayersCreate() {
    var wizards = [];
    var wizard = {};
    for (var i = 0; i < window.data.WIZARD_NUMBERS; i++) {
      wizard = {
        name: window.data.wizardsNames[getRandomInt(window.data.wizardsNames.length)] + ' ' + window.data.wizardSurnames[getRandomInt(window.data.wizardSurnames.length)],
        coatColor: window.data.coatColors[getRandomInt(window.data.coatColors.length)],
        eyesColor: window.data.eyesColors[getRandomInt(window.data.eyesColors.length)]
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
})();
