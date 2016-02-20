'use strict';

(function($) {

	// code using $ as alias to jQuery
  $(function() {
    // more code using $ as alias to jQuery
    console.log('Good');
    $('#sortable').sortable({
      placeholder: 'ui-state-highlight'
    }).disableSelection();

  });
  $('#clkBtn').on('click',function(){
    console.log($('#sortable').sortable('toArray'));
  });

})(jQuery);
