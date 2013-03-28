(function($){
	$.fn.isFilled = function() {
		var input = $(this);
		var type = (input.prop('tagName').toLowerCase() == 'select')?'select':input.attr('type');

		if ( jQuery.inArray(type,['button', 'submit']) >= 0 ) return undefined;

		switch(type){
			case 'checkbox':
			case 'radio':
				if ( input.is(':checked') ) return true;
				break;

			default:
				if ( input.val() != '' ) return true;
				break;
		}

		return false;
	};
})(jQuery);