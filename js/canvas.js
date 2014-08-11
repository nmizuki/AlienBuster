
//宇宙人の画像をcanvasに設定
function init() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  draw(ctx);
}

$(function(){

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
  c.strokeStyle = "#3c3c3c";

  var color = $("#hc").val();
  if (color != undefined) {
    c.strokeStyle = color;
  }

  c.lineWidth = 7;
  c.lineJoin = "round";
  c.lineCap = "round";

  $("#item").click(function(){

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

});

});


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
  ctx.moveTo(131.8, 199.6);
  ctx.bezierCurveTo(128.2, 193.7, 119.5, 188.3, 109.7, 186.6);
  ctx.bezierCurveTo(98.0, 184.6, 68.5, 180.9, 67.1, 194.9);
  ctx.bezierCurveTo(66.7, 199.6, 80.6, 201.6, 68.8, 200.7);
  ctx.bezierCurveTo(63.5, 200.3, 58.1, 206.2, 65.9, 211.2);
  ctx.bezierCurveTo(66.3, 211.5, 57.7, 216.0, 72.6, 221.0);
  ctx.bezierCurveTo(84.0, 224.8, 103.3, 227.0, 114.9, 222.9);
  ctx.bezierCurveTo(125.3, 219.3, 138.2, 210.2, 131.8, 199.6);
  ctx.closePath();
  ctx.fillStyle = "rgb(167, 186, 56)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(84.5, 227.3);
  ctx.lineTo(46.8, 227.3);
  ctx.lineTo(46.8, 133.2);
  ctx.lineTo(84.5, 133.2);
  ctx.lineTo(84.5, 227.3);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();
  ctx.lineWidth = 0.2;
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(84.6, 227.3);
  ctx.lineTo(46.7, 227.3);
  ctx.lineTo(46.7, 206.4);
  ctx.lineTo(84.6, 206.4);
  ctx.lineTo(84.6, 227.3);
  ctx.closePath();
  ctx.fillStyle = "rgb(196, 69, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(84.5, 206.4);
  ctx.bezierCurveTo(84.5, 208.3, 76.1, 209.9, 65.7, 209.9);
  ctx.bezierCurveTo(55.2, 209.9, 46.8, 208.3, 46.8, 206.4);
  ctx.bezierCurveTo(46.8, 204.5, 55.2, 203.0, 65.7, 203.0);
  ctx.bezierCurveTo(76.1, 203.0, 84.5, 204.5, 84.5, 206.4);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(292.9, 188.7);
  ctx.bezierCurveTo(292.9, 234.7, 268.0, 272.0, 237.2, 272.0);
  ctx.bezierCurveTo(206.4, 272.0, 181.4, 234.7, 181.4, 188.7);
  ctx.bezierCurveTo(181.4, 142.7, 206.4, 105.4, 237.2, 105.4);
  ctx.bezierCurveTo(268.0, 105.4, 292.9, 142.7, 292.9, 188.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(50, 79, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(274.6, 196.9);
  ctx.bezierCurveTo(274.6, 260.2, 236.4, 311.6, 189.3, 311.6);
  ctx.bezierCurveTo(142.1, 311.6, 103.9, 260.2, 103.9, 196.9);
  ctx.bezierCurveTo(103.9, 133.5, 142.1, 82.2, 189.3, 82.2);
  ctx.bezierCurveTo(236.4, 82.2, 274.6, 133.5, 274.6, 196.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(188, 209, 64)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(187.8, 56.2);
  ctx.bezierCurveTo(231.8, 56.2, 267.4, 91.8, 267.4, 135.8);
  ctx.bezierCurveTo(267.4, 179.7, 231.8, 215.4, 187.8, 215.4);
  ctx.bezierCurveTo(143.8, 215.4, 108.2, 179.7, 108.2, 135.8);
  ctx.bezierCurveTo(108.2, 91.8, 143.8, 56.2, 187.8, 56.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(148, 166, 48)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(188.7, 43.4);
  ctx.bezierCurveTo(233.7, 43.4, 270.1, 79.8, 270.1, 124.8);
  ctx.bezierCurveTo(270.1, 169.7, 233.7, 206.2, 188.7, 206.2);
  ctx.bezierCurveTo(143.8, 206.2, 107.3, 169.7, 107.3, 124.8);
  ctx.bezierCurveTo(107.3, 79.8, 143.8, 43.4, 188.7, 43.4);
  ctx.closePath();
  ctx.fillStyle = "rgb(188, 209, 64)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(174.2, 66.8);
  ctx.bezierCurveTo(184.9, 66.0, 177.2, 53.3, 192.6, 54.6);
  ctx.lineWidth = 1.0;
  ctx.strokeStyle = "rgb(223, 5, 21)";
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(172.6, 61.8);
  ctx.bezierCurveTo(171.2, 63.1, 168.3, 64.0, 166.5, 64.5);
  ctx.bezierCurveTo(165.9, 62.4, 163.9, 61.9, 163.1, 60.7);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(197.1, 364.1);
  ctx.bezierCurveTo(284.9, 364.1, 356.6, 356.9, 356.6, 348.1);
  ctx.bezierCurveTo(356.6, 339.2, 284.9, 332.1, 197.1, 332.1);
  ctx.bezierCurveTo(109.2, 332.1, 37.6, 339.2, 37.6, 348.1);
  ctx.bezierCurveTo(37.6, 356.9, 109.2, 364.1, 197.1, 364.1);
  ctx.closePath();
  ctx.fillStyle = "rgb(50, 79, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(175.4, 43.3);
  ctx.bezierCurveTo(205.9, 39.1, 233.6, 57.9, 237.3, 85.4);
  ctx.bezierCurveTo(241.1, 112.8, 219.5, 138.4, 189.1, 142.6);
  ctx.bezierCurveTo(158.7, 146.8, 131.0, 127.9, 127.2, 100.5);
  ctx.bezierCurveTo(123.4, 73.1, 145.0, 47.4, 175.4, 43.3);
  ctx.closePath();
  ctx.fillStyle = "rgb(121, 137, 36)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(179.5, 50.0);
  ctx.bezierCurveTo(206.2, 46.4, 230.5, 62.9, 233.8, 86.9);
  ctx.bezierCurveTo(237.1, 111.0, 218.1, 133.4, 191.5, 137.1);
  ctx.bezierCurveTo(164.9, 140.8, 140.6, 124.3, 137.3, 100.2);
  ctx.bezierCurveTo(134.0, 76.2, 152.9, 53.7, 179.5, 50.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(184.6, 76.9);
  ctx.bezierCurveTo(199.6, 77.2, 211.4, 89.5, 211.1, 104.5);
  ctx.bezierCurveTo(210.8, 119.4, 198.4, 131.3, 183.5, 131.0);
  ctx.bezierCurveTo(168.5, 130.7, 156.7, 118.3, 157.0, 103.4);
  ctx.bezierCurveTo(157.3, 88.4, 169.7, 76.5, 184.6, 76.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(4, 0, 0)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(174.1, 90.8);
  ctx.bezierCurveTo(174.6, 87.4, 177.8, 85.1, 181.2, 85.6);
  ctx.bezierCurveTo(184.6, 86.1, 186.9, 89.3, 186.4, 92.7);
  ctx.bezierCurveTo(185.9, 96.1, 182.8, 98.4, 179.4, 97.9);
  ctx.bezierCurveTo(176.0, 97.4, 173.6, 94.2, 174.1, 90.8);
  ctx.closePath();
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(144.4, 278.6);
  ctx.bezierCurveTo(138.2, 283.4, 133.8, 293.3, 133.8, 303.8);
  ctx.bezierCurveTo(133.8, 316.4, 135.4, 347.5, 151.9, 346.4);
  ctx.bezierCurveTo(157.4, 346.0, 157.0, 331.2, 158.3, 343.6);
  ctx.bezierCurveTo(158.9, 349.2, 166.8, 353.7, 171.0, 344.7);
  ctx.bezierCurveTo(171.2, 344.2, 178.2, 352.3, 180.9, 336.1);
  ctx.bezierCurveTo(183.1, 323.5, 181.7, 303.2, 174.7, 291.9);
  ctx.bezierCurveTo(168.4, 281.8, 155.3, 270.1, 144.4, 278.6);
  ctx.closePath();
  ctx.fillStyle = "rgb(188, 209, 64)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(219.8, 278.6);
  ctx.bezierCurveTo(213.7, 283.4, 209.2, 293.3, 209.2, 303.8);
  ctx.bezierCurveTo(209.2, 316.4, 210.9, 347.5, 227.4, 346.4);
  ctx.bezierCurveTo(232.9, 346.0, 232.4, 331.2, 233.7, 343.6);
  ctx.bezierCurveTo(234.3, 349.2, 242.3, 353.7, 246.5, 344.7);
  ctx.bezierCurveTo(246.7, 344.2, 253.6, 352.3, 256.4, 336.1);
  ctx.bezierCurveTo(258.5, 323.5, 257.2, 303.2, 250.1, 291.9);
  ctx.bezierCurveTo(243.8, 281.8, 230.7, 270.1, 219.8, 278.6);
  ctx.closePath();
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(249.8, 212.5);
  ctx.bezierCurveTo(254.0, 218.6, 263.3, 223.5, 273.6, 224.4);
  ctx.bezierCurveTo(285.8, 225.5, 316.5, 226.7, 316.7, 211.4);
  ctx.bezierCurveTo(316.8, 206.3, 302.3, 205.5, 314.5, 205.3);
  ctx.bezierCurveTo(320.0, 205.3, 325.1, 198.4, 316.6, 193.8);
  ctx.bezierCurveTo(316.2, 193.5, 324.7, 187.8, 309.0, 183.9);
  ctx.bezierCurveTo(296.9, 180.9, 276.8, 180.3, 265.3, 185.8);
  ctx.bezierCurveTo(254.9, 190.7, 242.3, 201.7, 249.8, 212.5);
  ctx.closePath();
  ctx.fillStyle = "rgb(167, 186, 56)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(176.0, 53.0);
  ctx.bezierCurveTo(168.2, 62.6, 176.2, 68.6, 181.0, 78.0);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(144.2, 75.2);
  ctx.bezierCurveTo(149.0, 80.6, 153.9, 83.7, 158.6, 88.5);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(140.8, 97.4);
  ctx.bezierCurveTo(143.7, 85.9, 150.7, 102.8, 158.6, 97.4);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(158.6, 62.4);
  ctx.bezierCurveTo(157.7, 65.2, 157.4, 69.2, 157.1, 72.3);
  ctx.bezierCurveTo(165.0, 71.9, 166.8, 76.0, 168.1, 82.4);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(197.6, 79.0);
  ctx.bezierCurveTo(206.6, 76.2, 204.6, 74.9, 207.5, 70.8);
  ctx.bezierCurveTo(209.3, 68.2, 205.1, 62.3, 213.4, 62.9);
  ctx.bezierCurveTo(223.1, 63.5, 215.3, 74.2, 224.3, 75.2);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(211.0, 111.3);
  ctx.bezierCurveTo(213.6, 108.3, 217.1, 106.7, 219.3, 109.1);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(209.8, 96.9);
  ctx.bezierCurveTo(213.2, 97.3, 219.2, 99.6, 222.3, 98.0);
  ctx.bezierCurveTo(227.8, 95.3, 220.3, 86.3, 232.7, 88.5);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(205.4, 73.5);
  ctx.bezierCurveTo(201.9, 71.9, 199.4, 69.0, 198.2, 66.2);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(208.7, 67.4);
  ctx.bezierCurveTo(210.8, 71.3, 212.9, 75.1, 217.1, 76.3);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(207.1, 89.1);
  ctx.bezierCurveTo(208.5, 86.5, 211.2, 85.7, 214.3, 86.3);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(156.4, 106.9);
  ctx.bezierCurveTo(151.1, 105.5, 148.5, 106.6, 143.6, 103.5);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(148.6, 105.8);
  ctx.bezierCurveTo(149.7, 109.5, 148.4, 112.0, 144.7, 113.0);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(84.5, 228.4);
  ctx.bezierCurveTo(84.5, 230.3, 76.1, 231.8, 65.7, 231.8);
  ctx.bezierCurveTo(55.2, 231.8, 46.8, 230.3, 46.8, 228.4);
  ctx.bezierCurveTo(46.8, 226.5, 55.2, 224.9, 65.7, 224.9);
  ctx.bezierCurveTo(76.1, 224.9, 84.5, 226.5, 84.5, 228.4);
  ctx.closePath();
  ctx.fillStyle = "rgb(205, 207, 205)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(84.5, 226.0);
  ctx.bezierCurveTo(84.5, 227.9, 76.1, 229.4, 65.7, 229.4);
  ctx.bezierCurveTo(55.2, 229.4, 46.8, 227.9, 46.8, 226.0);
  ctx.bezierCurveTo(46.8, 224.1, 55.2, 222.5, 65.7, 222.5);
  ctx.bezierCurveTo(76.1, 222.5, 84.5, 224.1, 84.5, 226.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(196, 69, 58)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(84.5, 133.2);
  ctx.bezierCurveTo(84.5, 134.1, 76.1, 134.9, 65.7, 134.9);
  ctx.bezierCurveTo(55.2, 134.9, 46.8, 134.1, 46.8, 133.2);
  ctx.bezierCurveTo(46.8, 132.2, 55.2, 131.5, 65.7, 131.5);
  ctx.bezierCurveTo(76.1, 131.5, 84.5, 132.2, 84.5, 133.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(205, 207, 205)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(175.3, 66.8);
  ctx.bezierCurveTo(175.7, 65.6, 176.1, 64.4, 176.0, 63.0);
  ctx.bezierCurveTo(179.7, 62.7, 180.6, 60.7, 183.1, 58.5);
  ctx.stroke();

  // 1/
  ctx.beginPath();
  ctx.moveTo(50.6, 126.6);
  ctx.bezierCurveTo(53.9, 108.2, 42.8, 102.6, 29.4, 94.8);
  ctx.bezierCurveTo(33.9, 93.2, 41.1, 93.2, 46.1, 92.6);
  ctx.bezierCurveTo(42.8, 79.3, 30.6, 70.3, 25.6, 58.1);
  ctx.bezierCurveTo(31.7, 58.7, 37.2, 59.8, 42.8, 62.0);
  ctx.bezierCurveTo(45.0, 47.5, 42.2, 30.8, 34.5, 18.6);
  ctx.bezierCurveTo(38.9, 24.2, 45.0, 29.7, 51.2, 33.6);
  ctx.bezierCurveTo(56.7, 25.3, 61.2, 14.7, 61.2, 4.7);
  ctx.bezierCurveTo(69.0, 29.7, 72.9, 25.8, 90.1, 15.8);
  ctx.bezierCurveTo(87.9, 26.4, 79.0, 33.6, 79.5, 44.8);
  ctx.bezierCurveTo(86.8, 40.9, 95.1, 39.7, 100.1, 47.0);
  ctx.bezierCurveTo(84.5, 49.8, 72.9, 58.7, 67.8, 74.2);
  ctx.bezierCurveTo(74.0, 70.3, 82.3, 68.7, 89.0, 71.5);
  ctx.bezierCurveTo(79.5, 77.0, 69.5, 84.8, 66.2, 95.4);
  ctx.bezierCurveTo(73.4, 95.9, 81.8, 94.8, 87.9, 97.6);
  ctx.bezierCurveTo(70.6, 104.3, 69.5, 124.9, 51.2, 128.8);
  ctx.fillStyle = "rgb(244, 226, 76)";
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(6.1, 33.6);
  ctx.bezierCurveTo(6.1, 40.9, 9.4, 46.4, 16.1, 47.5);
  ctx.bezierCurveTo(18.3, 40.3, 14.4, 33.6, 6.6, 32.0);
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(24.7, 4.4);
  ctx.bezierCurveTo(28.1, 8.9, 29.3, 13.4, 36.1, 15.3);
  ctx.bezierCurveTo(44.1, 4.4, 38.4, 4.4, 28.1, 0.8);
  ctx.fill();

  // 1/
  ctx.beginPath();
  ctx.moveTo(101.2, 0.7);
  ctx.bezierCurveTo(95.9, 5.6, 94.1, 11.8, 97.8, 17.5);
  ctx.bezierCurveTo(104.6, 14.3, 106.9, 6.9, 102.8, 0.0);
  ctx.fill();

  // 1/

  // 1/KLabEnergyKLabEnergy
  ctx.font = "R 6.4px '���˃S�V�b�N Pr6N'";
  ctx.fillStyle = "rgb(196, 69, 58)";
  ctx.fillText("KLab", 52.5, 147.2);
  ctx.fillText("Ener", 53.2, 158.5);
  ctx.fillText("gy", 56.1, 169.7);
  ctx.fillText("KLab", 52.5, 180.9);
  ctx.fillText("Ener", 53.2, 192.1);
  ctx.fillText("gy", 56.1, 203.3);

  // 1/KLab
  ctx.font = "R 2.4px '���˃S�V�b�N Pr6N'";
  ctx.save();
  ctx.transform(0.941, 0.000, 0.000, 1.000, 53.3, 223.8);
  ctx.fillStyle = "rgb(254, 254, 254)";
  ctx.fillText("KLab", 0, 0);
  ctx.restore();
  ctx.restore();
}
