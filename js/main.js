var menu = document.getElementById('scrol-menu');
var menuItems = document.getElementsByClassName('scroll-menu-item');
var banner = document.getElementById('banner');
watcherBanner = scrollMonitor.create(banner);

function menuFixed() {
	watcherBanner.enterViewport(function() {
		menu.classList.remove('fixed');
		$(".scroll-content-fixed").removeClass('display');
	});

	watcherBanner.exitViewport(function() {
		menu.classList.add('fixed');
		$(".scroll-content-fixed").addClass('display');
	});

}


/*MENU*/

for (var i = 0; i < menuItems.length; i++){
	menuItems[i].addEventListener("click", function(event){
		var selected = {
			id: this.attributes['data-name'].nodeValue,
			section: document.getElementById(this.attributes['data-name'].nodeValue),
			body: this
		}
		goTo(this.attributes['data-name'].nodeValue);
		menuFixed();
	})
}

/*MENU*/

function goTo(el) {
	$('html, body').animate({
		scrollTop: $("#"+el).offset().top
	}, 1000);
}

/*function goTo(el,to,duration) {
  if (duration < 0) return;


  var difference = to - el.scrollTop;
  
  if(difference < 0) {
  	difference = difference * -1;
  }
setTimeout(function() {
    el.scrollTop = el.scrollTop + perTick;
    scrollTo(el, to, duration - 2);
  }, 1000);
  console.log(difference);
}


function move(elem) {

  var left = 0

  function frame() {
    
    left++  // update parameters 
    
    elem.style.left = left + 'px' // show frame 

    if (left == 100)  // check finish condition
      clearInterval(id)
  }

  var id = setInterval(frame, 10) // draw every 10ms
}*/