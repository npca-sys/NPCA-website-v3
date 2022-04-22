// TODO:  コーディング規約

(function($){
	$(function(){
		init();
		$(window).resize(init);
	});

	// Smart Phone
	var isSP = false;

	function init(){
		var sp = $(window).width() <= 480;
		if(sp != isSP){
			isSP = sp;
			if(isSP)
				initSP();
			else
				initPC();
		}
	}

	function initSP(){
		$('.magazine').each(function(){
			$(this).addClass('no-mokuji');
			$(this).children('ul').children('li').each(function(){
				$(this).addClass('no-mokuji');
			});

			var mag = $(this);
			mag.children('h4').click(function () {
				if(mag.hasClass('no-mokuji')){
					mag.removeClass('no-mokuji');
					mag.children('ul').children('li').each(function(i){
						$(this).delay(100 * i).queue(function(){
							$(this).removeClass('no-mokuji').dequeue();
						});
					});
				}else{
					mag.children('ul').children('li').each(function(i){
						$(this).delay(100 * i).queue(function(){
							$(this).addClass('no-mokuji').dequeue();
						});
					});
					mag.delay(100 * mag.children('ul').children('li').length /* + 500*/).queue(function(){
						$(this).addClass('no-mokuji').dequeue();
					});
				}
			});
			$(this).children('.magtitle').click(function(){
				if(mag.hasClass('collapse')){
					mag.removeClass('collapse');
				}else{
					mag.addClass('collapse');
				}
			});
		});
	}
	function initPC(){
		$('.magazine').each(function(){
			$(this).removeClass('collapse');
			$(this).children('.magtitle').unbind('click');
			$(this).children('h4').unbind('click');
		});
	}
})(jQuery);
