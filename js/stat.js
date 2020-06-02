'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var RESULT_X = 120;
var RESULT_Y = 30;
var RESULT_GAP = 20;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var MAX_COLUMN_HEIGHT = 150;
var DATA_GAP = 30;
var TEXT_Y = 260;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.renderStatistics = function (ctx, players, results) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', RESULT_X, RESULT_Y);
  ctx.fillText('Список результатов:', RESULT_X, RESULT_Y + RESULT_GAP);

  var maxResult = getMaxElement(results);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + DATA_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, TEXT_Y);
    ctx.fillText(Math.floor(results[i]), CLOUD_X + DATA_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, TEXT_Y - (GAP * 3) - ((MAX_COLUMN_HEIGHT * results[i]) / maxResult));
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(237, 100%, ' + getRandomInt(100) + '%)';
    }
    ctx.fillRect(CLOUD_X + DATA_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, TEXT_Y - GAP, COLUMN_WIDTH, (MAX_COLUMN_HEIGHT * results[i]) / maxResult * -1);
  }
};
