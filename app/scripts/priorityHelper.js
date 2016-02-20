'use strict';

(function($) {

	// code using $ as alias to jQuery
  $(function() {
    // more code using $ as alias to jQuery
    console.log('Good');
    $('.card').draggable();
    $('.holder').droppable({
    drop: function(ev, ui) {
        $(ui.draggable).detach().css({top: 0,left: -35}).appendTo(this);
    }
});
  });
  $('#clkBtn').on('click',function(){

  });

})(jQuery);
