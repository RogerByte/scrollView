(function($){

	$(window).on("load", function() {
		/*Loading*/
		$('.loading').addClass('off-bck');
		
		setTimeout(function() {
			document.body.classList.remove('loading');

			var rev1 = new RevealFx(document.querySelector('#rev-1'), {
				revealSettings : {
					bgcolor: '#fdbe10',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			});
			rev1.reveal();

			var rev2 = new RevealFx(document.querySelector('#rev-2'), {
				revealSettings : {
					bgcolor: '#1c5eb6',
					delay: 250,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			});
			rev2.reveal();

		}, 1000);
		/*Loadding*/

		var menu = document.getElementById('scrol-menu');
		var menuItems = document.getElementsByClassName('scroll-menu-item');

		var banner = document.getElementById('banner');
		watcherBanner = scrollMonitor.create(banner);

		watcherBanner.enterViewport(function() {
			menu.classList.remove('fixed');
		});

		watcherBanner.exitViewport(function() {
			menu.classList.add('fixed');
		});


		/*MENU*/
		for (var i = 0; i < menuItems.length; i++){
			menuItems[i].addEventListener("click", function(event){
				var selected = {
					id: this.attributes['data-name'].nodeValue,
					section: document.getElementById(this.attributes['data-name'].nodeValue),
					body: this
				}
				goTo(this.attributes['data-name'].nodeValue);
				activeMenu(selected.id);
			})
		}
		/*MENU*/

		function goTo(el) {
			$('html, body').animate({
				scrollTop: $("#"+el).offset().top - 82
			}, 1000);
		}

		function activeMenu(id) {
			var currentMenuScroll = $(".active-scroll-menu");
			var newMenuScroll = $("[data-name='"+id+"']");
			currentMenuScroll.removeClass('active-scroll-menu');
			newMenuScroll.addClass("active-scroll-menu");
		}

		/*WATCHERS FOR ITEMS*/

		var i1 = document.getElementById('item1');
		var i2 = document.getElementById('item2');
		var i3 = document.getElementById('item3');
		var i4 = document.getElementById('item4');
		var i5 = document.getElementById('item5');
		var i6 = document.getElementById('item6');
		var i7 = document.getElementById('item7');
		var i8 = document.getElementById('item8');
		var i9 = document.getElementById('item9');
		var i10 = document.getElementById('item10');
		var i11 = document.getElementById('item11');
		var i12 = document.getElementById('item12');
		watcherItem1 = scrollMonitor.create(i1);
		watcherItem2 = scrollMonitor.create(i2);
		watcherItem3 = scrollMonitor.create(i3);
		watcherItem4 = scrollMonitor.create(i4);
		watcherItem5 = scrollMonitor.create(i5);
		watcherItem6 = scrollMonitor.create(i6);
		watcherItem7 = scrollMonitor.create(i7);
		watcherItem8 = scrollMonitor.create(i8);
		watcherItem9 = scrollMonitor.create(i9);
		watcherItem10 = scrollMonitor.create(i10);
		watcherItem11 = scrollMonitor.create(i11);
		watcherItem12 = scrollMonitor.create(i12);


		watcherItem1.fullyEnterViewport(function() {
			activeMenu("item1");
		});
		watcherItem2.fullyEnterViewport(function() {
			activeMenu("item2");
		});
		watcherItem3.fullyEnterViewport(function() {
			activeMenu("item3");
		});
		watcherItem4.fullyEnterViewport(function() {
			activeMenu("item4");
		});
		watcherItem5.fullyEnterViewport(function() {
			activeMenu("item5");
		});
		watcherItem6.fullyEnterViewport(function() {
			activeMenu("item6");
		});
		watcherItem7.fullyEnterViewport(function() {
			activeMenu("item7");
		});
		watcherItem8.fullyEnterViewport(function() {
			activeMenu("item8");
		});
		watcherItem9.fullyEnterViewport(function() {
			activeMenu("item9");
		});
		watcherItem10.fullyEnterViewport(function() {
			activeMenu("item10");
		});
		watcherItem11.fullyEnterViewport(function() {
			activeMenu("item11");
		});
		watcherItem12.fullyEnterViewport(function() {
			activeMenu("item12");
		});

		/*WATCHERS FOR ITEMS*/

		/*Effects*/
			var section_1 = $('#item1');
			var section_2 = $('#item2');
			var section_3 = $('#item3');
			var section_4 = $('#item4');
			var section_5 = $('#item5');
			var section_6 = $('#item6');
			var section_7 = $('#item7');
			var section_8 = $('#item8');
			var section_9 = $('#item9');
			var section_10 = $('#item10');
			var section_11 = $('#item11');
			var section_12 = $('#item12');

			function EffectFx(el, options) {
				this.el = el;
				this.rombo = this.el.children( ".scroll-rombo");
				this.pic = this.rombo.children( ".scroll-rombo-figure");
				this.container = this.el.children( ".scroll-description");
				this.text = this.container.children( ".scroll-description-text");
				this.options = options;
			}
			
			EffectFx.prototype.showing = function() {
				var type;
				if(this.options.type == 'lf') {
					type = 'anime-rotate-right';
				} else if (this.options.type == 'rg') {
					type = 'anime-rotate-left';
				}
				this.rombo.addClass(type).delay(600).addClass('enable-true');
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
					efc1.showing();
					watcher_1.destroy();
				});
			/*Effect 1*/

			/*Effect 2*/
				efc2 = new EffectFx(section_2, {
					type: 'rg',
				});
				watcher_2 = scrollMonitor.create(section_2, -330);
				watcher_2.enterViewport(function() {
					efc2.showing();
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

			/*Effect 4*/
				efc4 = new EffectFx(section_4, {
					type: 'rg',
				});
				watcher_4 = scrollMonitor.create(section_4, -330);
				watcher_4.enterViewport(function() {
					efc4.showing();
					watcher_4.destroy();
				});
			/*Effect 4*/

			/*Effect 5*/
				efc5 = new EffectFx(section_5, {
					type: 'lf',
				});
				watcher_5 = scrollMonitor.create(section_5, -330);
				watcher_5.enterViewport(function() {
					efc5.showing();
					watcher_5.destroy();
				});
			/*Effect 5*/

			/*Effect 6*/
				efc6 = new EffectFx(section_6, {
					type: 'rg',
				});
				watcher_6 = scrollMonitor.create(section_6, -330);
				watcher_6.enterViewport(function() {
					efc6.showing();
					watcher_6.destroy();
				});
			/*Effect 6*/

			/*Effect 7*/
				efc7 = new EffectFx(section_7, {
					type: 'lf',
				});
				watcher_7 = scrollMonitor.create(section_7, -330);
				watcher_7.enterViewport(function() {
					efc7.showing();
					watcher_7.destroy();
				});
			/*Effect 7*/

			/*Effect 8*/
				efc8 = new EffectFx(section_8, {
					type: 'rg',
				});
				watcher_8 = scrollMonitor.create(section_8, -330);
				watcher_8.enterViewport(function() {
					efc8.showing();
					watcher_8.destroy();
				});
			/*Effect 8*/

			/*Effect 9*/
				efc9 = new EffectFx(section_9, {
					type: 'lf',
				});
				watcher_9 = scrollMonitor.create(section_9, -330);
				watcher_9.enterViewport(function() {
					efc9.showing();
					watcher_9.destroy();
				});
			/*Effect 9*/

			/*Effect 10*/
				efc10 = new EffectFx(section_10, {
					type: 'rg',
				});
				watcher_10 = scrollMonitor.create(section_10, -330);
				watcher_10.enterViewport(function() {
					efc10.showing();
					watcher_10.destroy();
				});
			/*Effect 10*/

			/*Effect 11*/
				efc11 = new EffectFx(section_11, {
					type: 'lf',
				});
				watcher_11 = scrollMonitor.create(section_11, -330);
				watcher_11.enterViewport(function() {
					efc11.showing();
					watcher_11.destroy();
				});
			/*Effect 11*/

			/*Effect 12*/
				efc12 = new EffectFx(section_12, {
					type: 'rg',
				});
				watcher_12 = scrollMonitor.create(section_12, -330);
				watcher_12.enterViewport(function() {
					efc12.showing();
					watcher_12.destroy();
				});
			/*Effect 12*/
		/*Effects*/
	});

})(jQuery);
