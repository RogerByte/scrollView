(function($){

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
})(jQuery);
