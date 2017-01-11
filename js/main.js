
var menu = document.getElementById('scrol-menu');
var menuItems = document.getElementsByClassName('scroll-menu-item');

var banner = document.getElementById('banner');
watcherBanner = scrollMonitor.create(banner);

watcherBanner.enterViewport(function() {
	menu.classList.remove('fixed');
	$(".scroll-content-fixed").removeClass('display');
});

watcherBanner.exitViewport(function() {
	menu.classList.add('fixed');
	$(".scroll-content-fixed").addClass('display');
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
		scrollTop: $("#"+el).offset().top
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
watcherItem1 = scrollMonitor.create(i1,-200);
watcherItem2 = scrollMonitor.create(i2,-200);
watcherItem3 = scrollMonitor.create(i3,-200);
watcherItem4 = scrollMonitor.create(i4,-200);
watcherItem5 = scrollMonitor.create(i5,-200);
watcherItem6 = scrollMonitor.create(i6,-200);


watcherItem1.enterViewport(function() {
	activeMenu("item1");
});

watcherItem2.enterViewport(function() {
	console.log('i2 entre');
	activeMenu("item2");
});

watcherItem3.enterViewport(function() {
	console.log('i3 entre');
	activeMenu("item3");
});

watcherItem4.enterViewport(function() {
	console.log('i4 entre');
	activeMenu("item4");
});

watcherItem5.enterViewport(function() {
	console.log('i5 entre');
	activeMenu("item5");
});

watcherItem6.enterViewport(function() {
	console.log('i6 entre');
	activeMenu("item6");
});

/*WATCHERS FOR ITEMS*/