(function($) {


	$.fn.lava = function(options) {
	
		var that = this;
		
		var settings = {
		
			container: '#navigation',
			cursor: '#lava-cursor',
			current: '.current',
			speed: 800
		
		
		};
		
		options = $.extend(settings, options);
		
		return that.each(function() {
		
		  if($(options.current, $(options.container)).length) {
		
			$(options.cursor).css('left', $(options.container).find(options.current).position().left).fadeIn(options.speed);
			
	      } else {
	      
	      	$(options.cursor).fadeIn(options.speed);
	      
	      }
			
			$('li', $(options.container)).each(function() {
			
				var $li = $(this);
				
				$li.mouseover(function() {
				
					$(options.cursor).stop(true, true).animate({
						left: $li.position().left
					}, options.speed);
				
				
				});
				
				$li.mouseout(function() {
				
					if($(options.current, $(options.container)).length) {
				
						$(options.cursor).stop(true, true).animate({
							left: $(options.current, $(options.container)).position().left
						}, options.speed);
					
					
					}
				
				
				});
			
			
			});
		
		
		});
	
	
	};


})(jQuery);