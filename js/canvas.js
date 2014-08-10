$(function(){
  var canvas = document.getElementById('game');
  if(!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');

  var startX,
    startY,
    x,
    y,
    borderWidth = 5,
    isDrawing = false;

    var canvas_info = canvas.getBoundingClientRect();
      canvas.width = canvas_info.width;
      canvas.height = canvas_info.height;
       var canvas_x = canvas_info.left;
      var canvas_y = canvas_info.top;
       var canvas_width = canvas_info.width;
      var canvas_height = canvas_info.height;

  $('#game').mousedown(function(e){
    isDrawing = true;
    startX = e.pageX;
    startY = e.pageY- canvas_y;
  })
  .mousemove(function(e){
    if(!isDrawing) return;
    x = e.pageX - $(this).offset().left - borderWidth;
    y = e.pageY - $(this).offset().top - borderWidth;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(x,y);
    ctx.stroke();
    startX = x;
    startY = y;
  })
  .mouseup(function(){
    isDrawing = false;
  })
  .touchleave(function(){
    isDrawing = false;
  });

  $('#hc').change(function(){
    ctx.strokeStyle = "red";
  });
  $('#penWidth').change(function(){
    ctx.lineWidth = $(this).val();
  });

  $('#erase').click(function(){
    if(!confirm('本当に消去しますか？'))return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  });

  $('#save').click(function(){
    var img = $('<img>').attr({
      width: 100,
      height: 50,
      src: canvas.toDataURL()
    });
    var link = $('<a>').attr({
      href:canvas.toDataURL().replace('image/png',
      'application/octet-stream'),
      download: new Date().getTime() + '.png'
    });
    $('#gallery').append(link.append(img.addClass('thumbnail')));
    ctx.clearRect(0,0,canvas.width,canvas.height);
  });

});
