// Открытие закрытие окна настройки персонажа:
// Файл dialog.js
'use strict';
(function () {
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
    setup.style.top = window.move.y + 'px';
    setup.style.left = window.move.x + 'px';
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


})();
