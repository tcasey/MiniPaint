$(document).ready(function() {

  var color = 'white';
  var colors = 'white green red blue yellow';
  var box = $('.box');

  var drag = false;
  box.mouseenter(function() {
    drag = true;
  })
  box.mousedown(function() {
    drag = false;
  })




  $('#red').on('click', function() {
    color = 'red';
  });
  $('#blue').on('click', function() {
    color = 'blue';
  });
  $('#green').on('click', function() {
    color = 'green';
  });
  $('#yellow').on('click', function() {
    color = 'yellow';
  });
  $('#white').on('click', function() {
    color = 'white';
  });
  box.on('click', function() {
    $(this).addClass(color);
  });

  box.on('dblclick', function() {
    $(this).removeClass(color);
  });
  box.on('mouseenter', function() {
    if (drag) {
      $(this).addClass(color);
    }
  })

  $('#reset').on('click', function() {
    box.removeClass(colors);
  });
})
