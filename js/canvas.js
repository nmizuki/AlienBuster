//宇宙人の画像をcanvasに設定
function init() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  draw(ctx);
}

window.addEventListener("load", function () {

  // 必要な変数を宣言しておく
  var canvas = document.getElementById("game");
  var c = canvas.getContext("2d");
  var w = 450;
  var h = 400;
  var drawing = false;
  var oldPos;

  // 絵の描画
  draw(c);

  // CanvasとContextを初期化する
  canvas.width = w;
  canvas.height = h;
  c.strokeStyle = "#000000";
  c.lineWidth = 7;
  c.lineJoin = "round";
  c.lineCap = "round";

  // タップ開始時に、絵を描く準備をする
  canvas.addEventListener("touchstart", function (event) {
    drawing = true;
    oldPos = getPosT(event);
  }, false);

  // タップ終了時に、絵を描く後処理を行う
  canvas.addEventListener("touchend", function () {
    drawing = false;
  }, false);

  // gestureイベント（２本指以上で触ると発生するやつ）の
  // 終了時にも絵を描く後処理を行う
  canvas.addEventListener("gestureend", function () {
    console.log("mouseout");
    drawing = false;
  }, false);

  // 実際に絵を描く処理
  // 前回に保存した位置から現在の位置迄線を引く
  canvas.addEventListener("touchmove", function (event) {
    var pos = getPosT(event);
    if (drawing) {
      c.beginPath();
      c.moveTo(oldPos.x, oldPos.y);
      c.lineTo(pos.x, pos.y);
      c.stroke();
      c.closePath();
      oldPos = pos;
    }
  }, false);

  // タップ位置を取得する為の関数群
  function scrollX(){return document.documentElement.scrollLeft || document.body.scrollLeft;}
  function scrollY(){return document.documentElement.scrollTop || document.body.scrollTop;}
  function getPosT (event) {
    var mouseX = event.touches[0].clientX - $(canvas).position().left + scrollX();
    var mouseY = event.touches[0].clientY - $(canvas).position().top + scrollY();
    return {x:mouseX, y:mouseY};
  }

  function stopDefault(event) {
    event.preventDefault();
  }

  // タッチイベントの初期化
  document.addEventListener("touchstart", stopDefault, false);
  document.addEventListener("touchmove", stopDefault, false);
  document.addEventListener("touchend", stopDefault, false);
  // ジェスチャーイベントの初期化
  document.addEventListener("gesturestart", stopDefault, false);
  document.addEventListener("gesturechange", stopDefault, false);
  document.addEventListener("gestureend", stopDefault, false);

}, false);




// $(function(){
//   if(!canvas || !canvas.getContext) return false;
//   var ctx = canvas.getContext('2d');
//   var startX,
//       startY,
//       x,
//       y,
//       borderWidth = 5,
//       isDrawing = false,
//       oldPos;
//
//     var canvas_info = canvas.getBoundingClientRect();
//       canvas.width = canvas_info.width;
//       canvas.height = canvas_info.height;
//       var canvas_x = canvas_info.left;
//       var canvas_y = canvas_info.top;
//       var canvas_width = canvas_info.width;
//       var canvas_height = canvas_info.height;
//
//   $('#game').touchstart(function(event){
//     isDrawing = true;
//     startX = event.pageX;
//     startY = event.pageY- canvas_y;
//   });
//
//   $('#game').touchmove(function(event){
//     if(!isDrawing) return;
//     var pos = getPosT(event);
//     canvas.beginPath();
//     canvas.moveTo(oldPos.x, oldPos.y);
//     canvas.lineTo(pos.x, pos.y);
//     canvas.stroke();
//     canvas.closePath();
//     oldPos = pos;
//   });
//
//   $('#game').touchend(function(){
//     isDrawing = false;
//   });
//
//   $('#game').touchleave(function(){
//     isDrawing = false;
//   });
//
//   $('#hc').change(function(){
//     ctx.strokeStyle = "red";
//   });
//   $('#penWidth').change(function(){
//     ctx.lineWidth = $(this).val();
//   });
//
//    // タップ位置を取得する為の関数群
//   function scrollX(){return document.documentElement.scrollLeft || document.body.scrollLeft;}
//   function scrollY(){return document.documentElement.scrollTop || document.body.scrollTop;}
//   function getPosT (event) {
//     var canvas_x = event.touches[0].clientX - $(canvas).position().left + scrollX();
//     var canvas_y = event.touches[0].clientY - $(canvas).position().top + scrollY();
//     return {x:canvas_x, y:canvas_y};
//   }
//
//   function stopDefault(event) {
//     event.preventDefault();
//   }
//
//   // タッチイベントの初期化
//   document.addEventListener("touchstart", stopDefault, false);
//   document.addEventListener("touchmove", stopDefault, false);
//   document.addEventListener("touchend", stopDefault, false);
//   // ジェスチャーイベントの初期化
//   document.addEventListener("gesturestart", stopDefault, false);
//   document.addEventListener("gesturechange", stopDefault, false);
//   document.addEventListener("gestureend", stopDefault, false);
//
//
// });




/* canvas用関数 */
function draw(ctx) {

  // 1/
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(94.0, 142.4);
  ctx.bezierCurveTo(91.4, 138.1, 85.3, 134.3, 78.2, 133.1);
  ctx.bezierCurveTo(69.9, 131.6, 48.9, 129.0, 47.9, 139.0);
  ctx.bezierCurveTo(47.6, 142.4, 57.5, 143.8, 49.1, 143.2);
  ctx.bezierCurveTo(45.3, 142.9, 41.5, 147.1, 47.0, 150.6);
  ctx.bezierCurveTo(47.3, 150.8, 41.2, 154.1, 51.8, 157.6);
  ctx.bezierCurveTo(59.9, 160.3, 73.7, 161.9, 82.0, 159.0);
  ctx.bezierCurveTo(89.4, 156.4, 98.6, 149.9, 94.0, 142.4);
  ctx.closePath();
  ctx.fillStyle = "rgb(167, 186, 56)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(60.3, 162.1);
  ctx.lineTo(33.4, 162.1);
  ctx.lineTo(33.4, 95.0);
  ctx.lineTo(60.3, 95.0);
  ctx.lineTo(60.3, 162.1);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();
  ctx.lineWidth = 0.2;
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(60.4, 162.2);
  ctx.lineTo(33.3, 162.2);
  ctx.lineTo(33.3, 147.2);
  ctx.lineTo(60.4, 147.2);
  ctx.lineTo(60.4, 162.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(196, 69, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(60.3, 147.2);
  ctx.bezierCurveTo(60.3, 148.6, 54.3, 149.7, 46.8, 149.7);
  ctx.bezierCurveTo(39.4, 149.7, 33.4, 148.6, 33.4, 147.2);
  ctx.bezierCurveTo(33.4, 145.9, 39.4, 144.8, 46.8, 144.8);
  ctx.bezierCurveTo(54.3, 144.8, 60.3, 145.9, 60.3, 147.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(208.9, 134.6);
  ctx.bezierCurveTo(208.9, 167.4, 191.1, 194.0, 169.2, 194.0);
  ctx.bezierCurveTo(147.2, 194.0, 129.4, 167.4, 129.4, 134.6);
  ctx.bezierCurveTo(129.4, 101.8, 147.2, 75.2, 169.2, 75.2);
  ctx.bezierCurveTo(191.1, 75.2, 208.9, 101.8, 208.9, 134.6);
  ctx.closePath();
  ctx.fillStyle = "rgb(50, 79, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(195.9, 140.4);
  ctx.bezierCurveTo(195.9, 185.6, 168.6, 222.2, 135.0, 222.2);
  ctx.bezierCurveTo(101.4, 222.2, 74.1, 185.6, 74.1, 140.4);
  ctx.bezierCurveTo(74.1, 95.2, 101.4, 58.6, 135.0, 58.6);
  ctx.bezierCurveTo(168.6, 58.6, 195.9, 95.2, 195.9, 140.4);
  ctx.closePath();
  ctx.fillStyle = "rgb(188, 209, 64)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(133.9, 40.0);
  ctx.bezierCurveTo(165.3, 40.0, 190.7, 65.5, 190.7, 96.8);
  ctx.bezierCurveTo(190.7, 128.2, 165.3, 153.6, 133.9, 153.6);
  ctx.bezierCurveTo(102.6, 153.6, 77.2, 128.2, 77.2, 96.8);
  ctx.bezierCurveTo(77.2, 65.5, 102.6, 40.0, 133.9, 40.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(148, 166, 48)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(134.6, 30.9);
  ctx.bezierCurveTo(166.7, 30.9, 192.7, 56.9, 192.7, 89.0);
  ctx.bezierCurveTo(192.7, 121.1, 166.7, 147.1, 134.6, 147.1);
  ctx.bezierCurveTo(102.6, 147.1, 76.6, 121.1, 76.6, 89.0);
  ctx.bezierCurveTo(76.6, 56.9, 102.6, 30.9, 134.6, 30.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(188, 209, 64)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(124.3, 47.6);
  ctx.bezierCurveTo(131.9, 47.1, 126.4, 38.0, 137.4, 38.9);
  ctx.lineWidth = 1.0;
  ctx.strokeStyle = "rgb(223, 5, 21)";
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(123.1, 44.1);
  ctx.bezierCurveTo(122.1, 45.0, 120.0, 45.7, 118.8, 46.0);
  ctx.bezierCurveTo(118.4, 44.5, 116.9, 44.1, 116.3, 43.3);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(140.6, 259.7);
  ctx.bezierCurveTo(203.2, 259.7, 254.3, 254.5, 254.3, 248.3);
  ctx.bezierCurveTo(254.3, 242.0, 203.2, 236.8, 140.6, 236.8);
  ctx.bezierCurveTo(77.9, 236.8, 26.8, 242.0, 26.8, 248.3);
  ctx.bezierCurveTo(26.8, 254.5, 77.9, 259.7, 140.6, 259.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(50, 79, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(125.1, 30.9);
  ctx.bezierCurveTo(146.8, 27.9, 166.6, 41.3, 169.3, 60.9);
  ctx.bezierCurveTo(172.0, 80.5, 156.6, 98.7, 134.9, 101.7);
  ctx.bezierCurveTo(113.2, 104.7, 93.4, 91.3, 90.7, 71.7);
  ctx.bezierCurveTo(88.0, 52.1, 103.5, 33.8, 125.1, 30.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(121, 137, 36)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(128.1, 35.7);
  ctx.bezierCurveTo(147.1, 33.1, 164.4, 44.9, 166.7, 62.0);
  ctx.bezierCurveTo(169.1, 79.2, 155.6, 95.2, 136.6, 97.8);
  ctx.bezierCurveTo(117.6, 100.4, 100.3, 88.6, 97.9, 71.5);
  ctx.bezierCurveTo(95.5, 54.3, 109.0, 38.3, 128.1, 35.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(131.7, 54.8);
  ctx.bezierCurveTo(142.3, 55.0, 150.8, 63.9, 150.6, 74.5);
  ctx.bezierCurveTo(150.4, 85.2, 141.5, 93.6, 130.9, 93.4);
  ctx.bezierCurveTo(120.2, 93.2, 111.7, 84.4, 112.0, 73.7);
  ctx.bezierCurveTo(112.2, 63.1, 121.0, 54.6, 131.7, 54.8);
  ctx.closePath();
  ctx.fillStyle = "rgb(4, 0, 0)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(124.2, 64.8);
  ctx.bezierCurveTo(124.6, 62.4, 126.8, 60.7, 129.2, 61.1);
  ctx.bezierCurveTo(131.7, 61.4, 133.3, 63.7, 133.0, 66.1);
  ctx.bezierCurveTo(132.6, 68.5, 130.4, 70.2, 127.9, 69.8);
  ctx.bezierCurveTo(125.5, 69.5, 123.8, 67.2, 124.2, 64.8);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(103.0, 198.7);
  ctx.bezierCurveTo(98.6, 202.1, 95.4, 209.2, 95.4, 216.7);
  ctx.bezierCurveTo(95.4, 225.6, 96.6, 247.9, 108.4, 247.1);
  ctx.bezierCurveTo(112.3, 246.8, 111.9, 236.3, 112.9, 245.1);
  ctx.bezierCurveTo(113.3, 249.0, 119.0, 252.3, 122.0, 245.9);
  ctx.bezierCurveTo(122.1, 245.5, 127.1, 251.3, 129.1, 239.7);
  ctx.bezierCurveTo(130.6, 230.8, 129.6, 216.2, 124.6, 208.2);
  ctx.bezierCurveTo(120.1, 201.0, 110.8, 192.6, 103.0, 198.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(188, 209, 64)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(156.8, 198.7);
  ctx.bezierCurveTo(152.4, 202.1, 149.2, 209.2, 149.2, 216.7);
  ctx.bezierCurveTo(149.2, 225.6, 150.4, 247.9, 162.2, 247.1);
  ctx.bezierCurveTo(166.1, 246.8, 165.8, 236.3, 166.7, 245.1);
  ctx.bezierCurveTo(167.1, 249.0, 172.8, 252.3, 175.8, 245.9);
  ctx.bezierCurveTo(176.0, 245.5, 180.9, 251.3, 182.9, 239.7);
  ctx.bezierCurveTo(184.4, 230.8, 183.4, 216.2, 178.4, 208.2);
  ctx.bezierCurveTo(173.9, 201.0, 164.6, 192.6, 156.8, 198.7);
  ctx.closePath();
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(178.2, 151.6);
  ctx.bezierCurveTo(181.2, 155.9, 187.8, 159.4, 195.1, 160.1);
  ctx.bezierCurveTo(203.9, 160.8, 225.7, 161.7, 225.9, 150.8);
  ctx.bezierCurveTo(226.0, 147.2, 215.6, 146.6, 224.3, 146.5);
  ctx.bezierCurveTo(228.2, 146.4, 231.9, 141.5, 225.9, 138.2);
  ctx.bezierCurveTo(225.5, 138.0, 231.6, 134.0, 220.4, 131.2);
  ctx.bezierCurveTo(211.8, 129.0, 197.5, 128.6, 189.2, 132.5);
  ctx.bezierCurveTo(181.8, 136.0, 172.8, 143.9, 178.2, 151.6);
  ctx.closePath();
  ctx.fillStyle = "rgb(167, 186, 56)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(125.5, 37.8);
  ctx.bezierCurveTo(120.0, 44.6, 125.7, 48.9, 129.1, 55.6);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(102.8, 53.6);
  ctx.bezierCurveTo(106.3, 57.5, 109.7, 59.7, 113.2, 63.1);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(100.5, 69.5);
  ctx.bezierCurveTo(102.5, 61.2, 107.5, 73.3, 113.2, 69.5);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(113.2, 44.5);
  ctx.bezierCurveTo(112.5, 46.5, 112.3, 49.3, 112.0, 51.5);
  ctx.bezierCurveTo(117.7, 51.3, 119.0, 54.2, 119.9, 58.8);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(140.9, 56.4);
  ctx.bezierCurveTo(147.4, 54.3, 145.9, 53.4, 148.0, 50.5);
  ctx.bezierCurveTo(149.3, 48.6, 146.3, 44.4, 152.2, 44.8);
  ctx.bezierCurveTo(159.1, 45.3, 153.5, 52.9, 160.0, 53.6);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(150.5, 79.4);
  ctx.bezierCurveTo(152.4, 77.3, 154.9, 76.1, 156.4, 77.8);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(149.7, 69.1);
  ctx.bezierCurveTo(152.0, 69.4, 156.3, 71.0, 158.6, 69.9);
  ctx.bezierCurveTo(162.5, 67.9, 157.1, 61.5, 166.0, 63.1);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(146.5, 52.4);
  ctx.bezierCurveTo(144.0, 51.3, 142.2, 49.2, 141.3, 47.3);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(148.9, 48.0);
  ctx.bezierCurveTo(150.4, 50.9, 151.9, 53.6, 154.8, 54.4);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(147.7, 63.5);
  ctx.bezierCurveTo(148.7, 61.7, 150.6, 61.1, 152.9, 61.5);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(111.6, 76.2);
  ctx.bezierCurveTo(107.8, 75.3, 105.9, 76.0, 102.4, 73.8);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(106.0, 75.4);
  ctx.bezierCurveTo(106.8, 78.1, 105.8, 79.9, 103.2, 80.6);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(60.3, 162.9);
  ctx.bezierCurveTo(60.3, 164.2, 54.3, 165.3, 46.8, 165.3);
  ctx.bezierCurveTo(39.4, 165.3, 33.4, 164.2, 33.4, 162.9);
  ctx.bezierCurveTo(33.4, 161.5, 39.4, 160.4, 46.8, 160.4);
  ctx.bezierCurveTo(54.3, 160.4, 60.3, 161.5, 60.3, 162.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(205, 207, 205)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(60.3, 161.2);
  ctx.bezierCurveTo(60.3, 162.5, 54.3, 163.6, 46.8, 163.6);
  ctx.bezierCurveTo(39.4, 163.6, 33.4, 162.5, 33.4, 161.2);
  ctx.bezierCurveTo(33.4, 159.8, 39.4, 158.7, 46.8, 158.7);
  ctx.bezierCurveTo(54.3, 158.7, 60.3, 159.8, 60.3, 161.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(196, 69, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(60.3, 95.0);
  ctx.bezierCurveTo(60.3, 95.7, 54.3, 96.2, 46.8, 96.2);
  ctx.bezierCurveTo(39.4, 96.2, 33.4, 95.7, 33.4, 95.0);
  ctx.bezierCurveTo(33.4, 94.3, 39.4, 93.8, 46.8, 93.8);
  ctx.bezierCurveTo(54.3, 93.8, 60.3, 94.3, 60.3, 95.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(205, 207, 205)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(125.1, 47.6);
  ctx.bezierCurveTo(125.3, 46.8, 125.6, 46.0, 125.5, 44.9);
  ctx.bezierCurveTo(128.2, 44.7, 128.8, 43.3, 130.6, 41.7);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(36.1, 90.3);
  ctx.bezierCurveTo(38.5, 77.2, 30.5, 73.2, 21.0, 67.6);
  ctx.bezierCurveTo(24.2, 66.5, 29.3, 66.5, 32.9, 66.1);
  ctx.bezierCurveTo(30.5, 56.5, 21.8, 50.2, 18.2, 41.4);
  ctx.bezierCurveTo(22.6, 41.8, 26.6, 42.6, 30.5, 44.2);
  ctx.bezierCurveTo(32.1, 33.9, 30.1, 22.0, 24.6, 13.3);
  ctx.bezierCurveTo(27.8, 17.2, 32.1, 21.2, 36.5, 24.0);
  ctx.bezierCurveTo(40.5, 18.0, 43.6, 10.5, 43.6, 3.3);
  ctx.bezierCurveTo(49.2, 21.2, 52.0, 18.4, 64.3, 11.3);
  ctx.bezierCurveTo(62.7, 18.8, 56.3, 24.0, 56.7, 31.9);
  ctx.bezierCurveTo(61.9, 29.1, 67.8, 28.3, 71.4, 33.5);
  ctx.bezierCurveTo(60.3, 35.5, 52.0, 41.8, 48.4, 53.0);
  ctx.bezierCurveTo(52.8, 50.2, 58.7, 49.0, 63.5, 51.0);
  ctx.bezierCurveTo(56.7, 54.9, 49.6, 60.5, 47.2, 68.0);
  ctx.bezierCurveTo(52.4, 68.4, 58.3, 67.6, 62.7, 69.6);
  ctx.bezierCurveTo(50.4, 74.4, 49.6, 89.1, 36.5, 91.9);
  ctx.fillStyle = "rgb(244, 226, 76)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(4.3, 24.0);
  ctx.bezierCurveTo(4.3, 29.1, 6.7, 33.1, 11.5, 33.9);
  ctx.bezierCurveTo(13.1, 28.7, 10.3, 24.0, 4.7, 22.8);
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(17.6, 3.1);
  ctx.bezierCurveTo(20.1, 6.4, 20.9, 9.6, 25.8, 10.9);
  ctx.bezierCurveTo(31.5, 3.1, 27.4, 3.1, 20.1, 0.6);
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(72.2, 0.5);
  ctx.bezierCurveTo(68.4, 4.0, 67.1, 8.4, 69.7, 12.5);
  ctx.bezierCurveTo(74.6, 10.2, 76.2, 4.9, 73.4, 0.0);
  ctx.fill();

  // 1/

  // 1/KLabEnergyKLabEnergy
  ctx.font = "R 4.6px '���˃S�V�b�N Pr6N'";
  ctx.fillStyle = "rgb(196, 69, 58)";
  ctx.fillText("KLab", 33.9, 105.0);
  ctx.fillText("Ener", 34.4, 113.0);
  ctx.fillText("gy", 36.4, 121.0);
  ctx.fillText("KLab", 33.9, 129.0);
  ctx.fillText("Ener", 34.4, 137.0);
  ctx.fillText("gy", 36.4, 145.0);

  // 1/KLab
  ctx.font = "R 1.7px '���˃S�V�b�N Pr6N'";
  ctx.save();
  ctx.transform(0.941, 0.000, 0.000, 1.000, 34.4, 159.6);
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fillText("KLab", 0, 0);
  ctx.restore();
  ctx.restore();
}
