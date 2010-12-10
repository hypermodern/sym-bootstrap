/**
 * @package assets
 */

(function($) {

	/**
	 * This plugin shows and hides elements based on the value of a select box. 
	 * If there is only one option, the select box will be hidden and 
	 * the single element will be shown.
	 *
	 * @param {Object} custom_settings
	 *  An object specifying the elements that are pickable
	 */
	$.fn.symphonyPickable = function(custom_settings) {
		var objects = $(this);
		var settings = {
			pickables: '.pickable'
		};
		
		$.extend(settings, custom_settings);
		
	/*-----------------------------------------------------------------------*/
		
		// Pickables
		var pickables = $(settings.pickables).addClass('.pickable');
		
		// Process pickers
		return objects.each(function() {
			var picker = $(this);
			var select = picker.find('select');
			var options = select.find('option');
	
			// Multiple items
			if(options.size() > 1) {
				options.each(function() {
					pickables.filter('#' + $(this).val()).hide();
				});
				select.click(function() {
					pickables.hide().filter('#' + $(this).val()).show();
				}).click();
			}
			
			// Single item
			else {
				picker.hide();
				pickables.filter('#' + select.val()).removeClass('.pickable');
			}
		});
	}

})(jQuery.noConflict());
