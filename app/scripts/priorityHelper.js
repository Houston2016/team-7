'use strict';

(function($) {
var priorityList=[];
	// code using $ as alias to jQuery
  $(function() {
    // more code using $ as alias to jQuery
    console.log('Good');
    $('.card').draggable();
    $('.holder').droppable({
    drop: function(ev, ui) {
        $(ui.draggable).detach().css({top: 20,left: -10}).appendTo(this);
        $(parent).droppable({disabled:true});
        var cardSelection = ui.draggable.attr('id');
        var holderID = $(this).attr('id');
        console.log(cardSelection+' : '+holderID);
        priorityList.push(cardSelection+' : '+holderID);
        // $(ui.draggable).parent().droppable( {disabled: true});
    }
});
  });
  $('#clkBtn').on('click',function(){
    console.log(priorityList);
  });
  $('#resetBtn').on('click',function(){
    //clear stored saved cards
    location.reload();
  });

})(jQuery);
