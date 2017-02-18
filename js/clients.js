(function($){
	var clients, debug = true;
	clients = debug ? '/clients/' : window.location.pathname;
	if(clients == '/clients/') {
		var querie_mobil = window.matchMedia('(max-width: 767px)');
		var $flat = 0;

		$('.e-popup-close').click(function(){
			$('.e-popup').css({'opacity': '0'})
			$(document.body).toggleClass( "e-overflow-hidden" );
			setTimeout(function() {
				$('.e-popup').toggleClass( "visible" );
			},300);
		})
		function showPopup() {
			if (!$flat) {
				$flat = 1;
				setTimeout(function() {
					$('.e-popup').toggleClass( "visible" );
					$(document.body).toggleClass( "e-overflow-hidden");
				},5000);
			}
		}
		function goTo(el) {
			$('html, body').animate({
				scrollTop: $("#"+el).offset().top - 119.5
			}, 1000);
		}

		function activeMenu(id) {
			var currentMenuScroll = $(".active-scroll-menu");
			var newMenuScroll = $("[data-name='"+id+"']");
			currentMenuScroll.removeClass('active-scroll-menu');
			newMenuScroll.addClass("active-scroll-menu");
		}

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
			this.rombo.addClass(type).delay(1000).addClass('enable-true');
			this.pic.delay(1000).queue(function(next) {
			  $(this).addClass('anime-opacity').delay(600).addClass('enable-true');
			});
			this.container.delay(1000).queue(function(next) {
			  $(this).addClass('anime-width').delay(600).addClass('enable-true');
			});
			this.text.delay(1550).queue(function(next) {
			  $(this).addClass('anime-opacity').delay(600).addClass('enable-true');
			});
		}

		function mobilOn() {
			var sections = $('.scroll-contenido').children();
			for (var j = 0; j < sections.length; j++) {
				sections[j].classList.add('mobil-on');
				for(var k = 0; k < sections[j].childNodes.length; k++){
					if (sections[j].childNodes[k].classList === undefined) {

					} else {
						sections[j].childNodes[k].classList.add('enable-true');
					}
				}
			}
		}
		function mobilOff() {
			var sections = $('.scroll-contenido').children();
			for (var j = 0; j < sections.length; j++) {
				sections[j].classList.add('mobil-on');
				for(var k = 0; k < sections[j].childNodes.length; k++){
					if (sections[j].childNodes[k].classList === undefined) {

					} else {
						sections[j].childNodes[k].classList.remove('enable-true');
					}
				}
			}
		}
		function createWatcher() {
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

			efc1 = new EffectFx(section_1, {
				type: 'lf',
			});
			efc2 = new EffectFx(section_2, {
				type: 'rg',
			});
			efc3 = new EffectFx(section_3, {
				type: 'lf',
			});
			efc4 = new EffectFx(section_4, {
				type: 'rg',
			});
			efc5 = new EffectFx(section_5, {
				type: 'lf',
			});
			efc6 = new EffectFx(section_6, {
				type: 'rg',
			});
			efc7 = new EffectFx(section_7, {
				type: 'lf',
			});
			efc8 = new EffectFx(section_8, {
				type: 'rg',
			});
			efc9 = new EffectFx(section_9, {
				type: 'lf',
			});
			efc10 = new EffectFx(section_10, {
				type: 'rg',
			});
			efc11 = new EffectFx(section_11, {
				type: 'lf',
			});
			efc12 = new EffectFx(section_12, {
				type: 'rg',
			});
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
			watcher_1 = scrollMonitor.create(section_1, -330);
			watcher_2 = scrollMonitor.create(section_2, -330);
			watcher_3 = scrollMonitor.create(section_3, -330);
			watcher_4 = scrollMonitor.create(section_4, -330);
			watcher_5 = scrollMonitor.create(section_5, -330);
			watcher_6 = scrollMonitor.create(section_6, -330);
			watcher_7 = scrollMonitor.create(section_7, -330);
			watcher_8 = scrollMonitor.create(section_8, -330);
			watcher_9 = scrollMonitor.create(section_9, -330);
			watcher_10 = scrollMonitor.create(section_10, -330);
			watcher_11 = scrollMonitor.create(section_11, -330);
			watcher_12 = scrollMonitor.create(section_12, -330);

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
			watcher_1.enterViewport(function() {
				efc1.showing();
				watcher_1.destroy();
			});
			watcher_2.enterViewport(function() {
				efc2.showing();
				watcher_2.destroy();
			});
			watcher_3.enterViewport(function() {
				efc3.showing();
				watcher_3.destroy();
			});
			watcher_4.enterViewport(function() {
				efc4.showing();
				watcher_4.destroy();
			});
			watcher_5.enterViewport(function() {
				efc5.showing();
				watcher_5.destroy();
			});
			watcher_6.enterViewport(function() {
				efc6.showing();
				watcher_6.destroy();
			});
			watcher_7.enterViewport(function() {
				showPopup();
				efc7.showing();
				watcher_7.destroy();
			});
			watcher_8.enterViewport(function() {
				showPopup();
				efc8.showing();
				watcher_8.destroy();
			});
			watcher_9.enterViewport(function() {
				showPopup();
				efc9.showing();
				watcher_9.destroy();
			});		
			watcher_10.enterViewport(function() {
				showPopup();
				efc10.showing();
				watcher_10.destroy();
			});		
			watcher_11.enterViewport(function() {
				showPopup();
				efc11.showing();
				watcher_11.destroy();
			});		
			watcher_12.enterViewport(function() {
				showPopup();
				efc12.showing();
				watcher_12.destroy();
			});
		}

		function createWatcherMobil(){

			var section_7 = $('#item7');
			var section_8 = $('#item8');
			var section_9 = $('#item9');
			var section_10 = $('#item10');
			var section_11 = $('#item11');
			var section_12 = $('#item12');
			watcher_7 = scrollMonitor.create(section_7, -330);
			watcher_8 = scrollMonitor.create(section_8, -330);
			watcher_9 = scrollMonitor.create(section_9, -330);
			watcher_10 = scrollMonitor.create(section_10, -330);
			watcher_11 = scrollMonitor.create(section_11, -330);
			watcher_12 = scrollMonitor.create(section_12, -330);
			watcher_7.enterViewport(function() {
				showPopup();
				watcher_7.destroy();
			});
			watcher_8.enterViewport(function() {
				showPopup();
				watcher_8.destroy();
			});
			watcher_9.enterViewport(function() {
				showPopup();
				watcher_9.destroy();
			});		
			watcher_10.enterViewport(function() {
				showPopup();
				watcher_10.destroy();
			});		
			watcher_11.enterViewport(function() {
				showPopup();
				watcher_11.destroy();
			});		
			watcher_12.enterViewport(function() {
				showPopup();
				watcher_12.destroy();
			});
		}
		querie_mobil.addListener(mediaQuery);

		function mediaQuery () {
			if (querie_mobil.matches) {
				mobilOn();
				createWatcherMobil();
			} else {
				mobilOff();
				createWatcher();
			}
		}
		
		/*CARGA PRINCIPAL DEL ARCHIVO*/
      	$(window).on("load", function() {
			/*Loading*/
			$('.loading').addClass('off-bck');
			var s_orange = $('.square-orange'),
			bs_orange = $('.big-square-orange'),
			c_white = $('.curve-white'),
			c_yellow = $('.curve-yellow'),
			c_blue = $('.curve-blue'),
			r_green = $('.rec-green'),
			i_bottom = $('.img-bottom'),
			arrow_bottom = $('.client-arrow'),
			menu = document.getElementById('scrol-menu'),
			menuItems = document.getElementsByClassName('scroll-menu-item'),
			c_arrow = document.getElementById('c_arrow');

			i_bottom .delay(1500).queue(function(next) {
				$(this).addClass('anime-translate').delay(800).addClass('enable-true');
			});
			s_orange.delay(1500).queue(function(next) {
				$(this).addClass('anime-opacity').delay(800).addClass('enable-true');
			})
			bs_orange.delay(1700).queue(function(next) {
				$(this).addClass('anime-opacity').delay(800).addClass('enable-true');
			});

			c_white.delay(2000).queue(function(next) {
				$(this).addClass('anime-rotate').delay(600).addClass('enable-true');
			});
			c_yellow.delay(1900).queue(function(next) {
				$(this).addClass('anime-rotate').delay(600).addClass('enable-true');
			});
			c_blue.delay(2300).queue(function(next) {
				$(this).addClass('anime-rotate').delay(600).addClass('enable-true');
			});
			r_green.delay(2300).queue(function(next) {
				$(this).addClass('anime-translate').delay(600).addClass('enable-true');
			});
			arrow_bottom.delay(2500).queue(function(next) {
				$(this).addClass('anime-opacity').delay(600).addClass('enable-true').addClass('client-arrow-anime');
			});
			setTimeout(function() {
				document.body.classList.remove('loading');

				var rev1 = new RevealFx(document.querySelector('#rev-1'), {
					revealSettings : {
						bgcolor: '#e97a18',
						delay: 1300,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev1.reveal();

				var rev2 = new RevealFx(document.querySelector('#rev-2'), {
					revealSettings : {
						bgcolor: '#8eac33',
						delay: 1550,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev2.reveal();

			}, 1000);
			/*Loadding*/

			
			c_arrow.addEventListener("click", function(event){
				goTo('item1');
				activeMenu('item1');
			});

			var banner = document.getElementById('banner');
			watcherBanner = debug ? scrollMonitor.create(banner, -33) : scrollMonitor.create(banner, -120);

			watcherBanner.enterViewport(function() {
				menu.classList.remove( debug ? 'fixedDebug' : 'fixed' );
			});

			watcherBanner.exitViewport(function() {
				menu.classList.add( debug ? 'fixedDebug' : 'fixed' );
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

			mediaQuery ();
		});
	}
})(jQuery);