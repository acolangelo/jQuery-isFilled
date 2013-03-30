(function($){
	$.fn.isFilled = function(value) {
		var input = $(this);
		var type = (input.prop('tagName').toLowerCase() == 'select')?'select':input.attr('type');

		if ( jQuery.inArray(type,['button', 'submit']) >= 0 ) return undefined;

		switch(type){
			case 'checkbox':
			case 'radio':
				if ( input.is(':checked') && value === undefined ) return true;
				if ( value !== undefined && input.is(':checked') && input.val() === value ) return true;
				break;

			default:
				if ( input.val() != '' && value === undefined ) return true;
				if ( value !== undefined && input.val() != '' && input.val() === value ) return true;
				break;
		}

		return false;
	};

	$.fn.isNotFilled = function(value) {
		var input = $(this);
		var type = (input.prop('tagName').toLowerCase() == 'select')?'select':input.attr('type');

		if ( jQuery.inArray(type,['button', 'submit']) >= 0 ) return undefined;

		switch(type){
			case 'checkbox':
			case 'radio':
				if ( !input.is(':checked') && value === undefined ) return true;
				if ( value !== undefined && input.is(':checked') && input.val() !== value ) return true;
				break;

			default:
				if ( !input.val() != '' && value === undefined ) return true;
				if ( value !== undefined && input.val() !== value ) return true;
				break;
		}

		return false;
	};
})(jQuery);