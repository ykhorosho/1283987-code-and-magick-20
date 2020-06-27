'use strict';

(function () {
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
});
