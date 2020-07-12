'use strict';
(function () {
  var getRandomInt = window.utils.getRandomInt;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.data.CLOUD_WIDTH, window.data.CLOUD_HEIGHT);
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

  window.renderStatistics = function (ctx, players, results) {

    renderCloud(ctx, window.data.CLOUD_X + window.data.GAP, window.data.CLOUD_Y + window.data.GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, window.data.CLOUD_X, window.data.CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', window.data.RESULT_X, window.data.RESULT_Y);
    ctx.fillText('Список результатов:', window.data.RESULT_X, window.data.RESULT_Y + window.data.RESULT_GAP);

    var maxResult = getMaxElement(results);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], window.data.CLOUD_X + window.data.DATA_GAP + (window.data.COLUMN_GAP + window.data.COLUMN_WIDTH) * i, window.data.TEXT_Y);
      ctx.fillText(Math.floor(results[i]), window.data.CLOUD_X + window.data.DATA_GAP + (window.data.COLUMN_GAP + window.data.COLUMN_WIDTH) * i, window.data.TEXT_Y - (window.data.GAP * 3) - ((window.data.MAX_COLUMN_HEIGHT * results[i]) / maxResult));
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(237, 100%, ' + getRandomInt(100) + '%)';
      }
      ctx.fillRect(window.data.CLOUD_X + window.data.DATA_GAP + (window.data.COLUMN_GAP + window.data.COLUMN_WIDTH) * i, window.data.TEXT_Y - window.data.GAP, window.data.COLUMN_WIDTH, (window.data.MAX_COLUMN_HEIGHT * results[i]) / maxResult * -1);
    }
  };
})();
