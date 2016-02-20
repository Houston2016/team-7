'use strict';

(function($) {

	// code using $ as alias to jQuery
  $(function() {
    // more code using $ as alias to jQuery
    console.log('Good');
    $('.card').draggable();
    $('.holder').droppable({
    drop: function(ev, ui) {
      // $(ui.draggable).parent().droppable( 'option', 'disabled', false );
        $(ui.draggable).detach().css({top: 20,left: -10}).appendTo(this);
        $(parent).droppable({disabled:true});
        var cardSelection = ui.draggable.attr('id');
        var holderID = $(this).attr('id');
        console.log(cardSelection+' : '+holderID);

    }
});
  });
  $('#clkBtn').on('click',function(){

  });
  $('#resetBtn').on('click',function(){
    location.reload();
  });

})(jQuery);
