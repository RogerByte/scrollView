
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