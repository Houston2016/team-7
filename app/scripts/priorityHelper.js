'use strict';

(function($) {

	// code using $ as alias to jQuery
  $(function() {
    // more code using $ as alias to jQuery
    console.log('Good');
    $('.card').draggable();
    $('#holder').droppable({
      over: function(event, ui) {
        $('.card').draggable({
            grid: [50, 50]
        });
        console.log(event+':'+ui);
    },
    out: function(event, ui) {
        $('.card').draggable('option', 'grid', false);
        console.log('New:'+event+':'+ui);
    }
    });
  });
  $('#clkBtn').on('click',function(){

  });

})(jQuery);
