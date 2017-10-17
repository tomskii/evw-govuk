(function($){
			$(function(){
				$('#country-selector').val('');
				$("form").submit(function( event ) {
					var selectValue = $('#country-selector').val();
				});
				$('select').selectToAutocomplete();
			});
		})(jQuery);
