'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
/*
* var CLOUD_X = 100; -  начало координат x
* var CLOUD_Y = 10; - начало координат y
* var GAP = 10; - отсуп тени
* var font_gap = 20;
* var distance_gap = 50; - отступ между колонками
var speaker_HEIGHT= 150; - высота max колонки
* var speaker_WIDTH = 40;  - ширина колонки
var bar_HEIGH = CLOUD_HEIGTH - ; - вычислить выосту колонки ??
var speaker = CLOUD_X + distance_gap

*/


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 150, 260);  /* speaker, CLOUD_HEIGHT - CLOUD_Y */
  ctx.fillText('2725', 150, 100);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(150, 240, 40, -100); /* speaker, CLOUD_HEIGHT - font_gap , speaker_WIDTH,  speaker_HEIGHT * -1 */

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', 240, 260); /* speaker + 90, CLOUD_HEIGHT - CLOUD_Y */
  ctx.fillText('4025', 240, 80); /*  speaker + 90, CLOUD_HEIGHT - font_gap - speaker_HEIGHT - GAP*/
  ctx.fillStyle = 'hsl(240, 85%, 45%)';
  ctx.fillRect(240, 240, 40, -150); /* speaker + 90, CLOUD_HEIGHT - font_gap , speaker_WIDTH,  speaker_HEIGHT * -1 */

  ctx.fillStyle = '#000';
  ctx.fillText('Катя', 330, 260); /* speaker + 180, CLOUD_HEIGHT - CLOUD_Y */
  ctx.fillText('1244', 330, 130);
  ctx.fillStyle = 'hsl(240, 5%, 57%)';
  ctx.fillRect(330, 240, 40, -50); /* speaker + 180, CLOUD_HEIGHT - font_gap , speaker_WIDTH,  speaker_HEIGHT * -1 */

  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', 420, 260); /*  speaker + 270 , CLOUD_HEIGHT - CLOUD_Y */
  ctx.fillText('1339', 420, 130);
  ctx.fillStyle = 'hsl(240, 15%, 57%)';
  ctx.fillRect(420, 240, 40, -70); /* speaker + 270, CLOUD_HEIGHT - font_gap , speaker_WIDTH,  speaker_HEIGHT * -1 */

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30); /*  speaker + 270 , CLOUD_HEIGHT - CLOUD_Y */
  ctx.fillText('Список результатов:', 120, 50);
};



/*

 1 этап)  ctx.fillStyle = '#000';
  ctx.fillText('Вы', FIRST_PLAYER_NAME_X, FIRST_PLAYER_NAME_Y);
  ctx.fillRect(FIRST_PLAYER_BAR_X, FIRST_PLAYER_BAR_Y, FIRST_PLAYER_BAR_WIDTH, FIRST_PLAYER_BAR_HEIGHT);

var FIRST_PLAYER_NAME_X = 160;
var FIRST_PLAYER_NAME_Y = 40;
var FIRST_PLAYER_BAR_X = 160;
var FIRST_PLAYER_BAR_Y = 60;
var FIRST_PLAYER_BAR_WIDTH = 40;
var FIRST_PLAYER_BAR_HEIGHT = 100;

2 этап)
* var CLOUD_X = 100; -  облако сдвиг бок
* var CLOUD_Y = 10; - облако свдиг вниз
* var GAP = 10; - отсуп тени
* var FONT_GAP = 50; - отступ между колонками
var TEXT_HEIGHT= 150; - отступ столбика с верху
* var BAR_WIDTH = 40;  - ширина столбика
var bar_HEIGH = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP; - вычислить выосту колонки

window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 150, 40);
  ctx.fillText('Вы', CLOUD_X + FONT_GAP, BAR_WIDTH);
  ctx.fillRect(150, 60, 40, 100);
    ctx.fillText('Вы', CLOUD_X + FONT_GAP, BAR_WIDTH);


    ctx.fillStyle = '#000';
  ctx.fillText('Вы', FIRST_PLAYER_NAME_X, FIRST_PLAYER_NAME_Y);
  ctx.fillRect(FIRST_PLAYER_BAR_X, FIRST_PLAYER_BAR_Y, FIRST_PLAYER_BAR_WIDTH, FIRST_PLAYER_BAR_HEIGHT);

   ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 0, barWidth, BAR_HEIGHT);



  ctx.fillText('Вы', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0);


  */


