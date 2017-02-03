(function($){
	var clients = window.location.pathname;
	if(clients == '/services/') {
		$('.loading').addClass('bck-services');
      	$(window).on("load", function() {
			/*Loading*/
			$('.loading').addClass('off-bck');

			setTimeout(function() {
				document.body.classList.remove('loading');
			}, 1000);
			/*Loadding*/

		});
	}
})(jQuery);