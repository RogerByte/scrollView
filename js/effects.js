(function($){

	/*Effects*/
		var section_1 = $('#item1');
		var section_2 = $('#item2');
		var section_3 = $('#item3');

		function EffectFx(el, options) {
			this.el = el;
			this.rombo = this.el.children( ".scroll-rombo");
			this.pic = this.rombo.children( ".scroll-rombo-figure");
			this.container = this.el.children( ".scroll-description");
			this.text = this.container.children( ".scroll-description-text");
		}
		
		EffectFx.prototype.showing = function() {
			this.rombo.addClass('anime-rotate-right').delay(600).addClass('enable-true');
			this.pic.delay(600).queue(function(next) {
			  $(this).addClass('anime-opacity').delay(300).addClass('enable-true');
			});
			this.container.delay(800).queue(function(next) {
			  $(this).addClass('anime-width').delay(300).addClass('enable-true');
			});
			this.text.delay(1300).queue(function(next) {
			  $(this).addClass('anime-opacity').delay(300).addClass('enable-true');
			});
		}

		/*Effect 1*/
			efc1 = new EffectFx(section_1, {
				type: 'lf',
			});
			watcher_1 = scrollMonitor.create(section_1, -330);
			watcher_1.enterViewport(function() {
				efc1.showing({
					type: 'lf',
				});
				watcher_1.destroy();
			});
		/*Effect 1*/

		/*Effect 2*/
			efc2 = new EffectFx(section_2, {
				type: 'lf',
			});
			watcher_2 = scrollMonitor.create(section_2, -330);
			watcher_2.enterViewport(function() {
				efc2.showing();
				watcher_2.destroy();
				watcher_2.destroy();
			});
		/*Effect 2*/

		/*Effect 3*/
			efc3 = new EffectFx(section_3, {
				type: 'lf',
			});
			watcher_3 = scrollMonitor.create(section_3, -330);
			watcher_3.enterViewport(function() {
				efc3.showing();
				watcher_3.destroy();
			});
		/*Effect 3*/
	/*Effects*/

})(jQuery);