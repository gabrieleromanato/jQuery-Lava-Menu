/** jQuery Lava Menu
  * A plugin for handling Lavalamp-like menus
  * @author Gabriele Romanato <http://blog.gabrieleromanato.com>
  * @requires jQuery 1.4+
  *
  * Usage: $(element).lava(options);
  *		   container: Menu container element
  *		   cursor: The HTML cursor element
  *		   current: Current item class
  *		   speed: Animation speed
  *
  * Sample HTML:
  *
  *   <div id="navigation">
  *		<div id="lava">
  *				<div id="lava-cursor"></div>
  *		</div>
  *		<ul>
  *			<li><a href="">Home</a></li>
  *			<li class="current"><a href="">Archives</a></li>
  *			<li><a href="">Contact</a></li>
  *		</ul>
  *	  </div>
  *
  */

(function($) {


	$.fn.lava = function(options) {
	
		var that = this;
		
		var settings = {
		
			container: 'ul',
			cursor: '#lava-cursor',
			current: '.current',
			speed: 800
		
		
		};
		
		options = $.extend(settings, options);
		
		return that.each(function() {
		
			$(options.cursor).css('left', $(options.container).find(options.current).position().left).fadeIn(options.speed);
			
			$('li', $(options.container)).each(function() {
			
				var $li = $(this);
				
				$li.mouseover(function() {
				
					$(options.cursor).animate({
						left: $li.position().left
					}, options.speed);
				
				
				});
			
			
			});
		
		
		});
	
	
	};


})(jQuery);