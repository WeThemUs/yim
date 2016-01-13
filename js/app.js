var artistNames = ["Aurora","BMTH","Bryson Tiller","Danny Seth","Gallant","Halsey","Jack Garratt","Kygo","Lido","Melanie Martinez","Nothing But Thieves","Pretty Vicious","Purity Ring","Raury","Years and Years"];

$(window).load(function(){
	$('body').css('display','block');
});

// this code controls the opening and closing of the about section and the turning of the nav icon
$('.nav').click(function(){
	$('.nav').toggleClass('nav-turn');
	$('.about-container').toggleClass('full-about');
	$('.about-top').toggleClass('animated fadeInDown');
	$('.about-text').toggleClass('animated fadeInDown');
	$('.about-choose').toggleClass('animated fadeInUp');
});

// this code changes the artist number and background text when hovering over each artist name
$('.artists li').mouseover(function(){
	$('.big-title').text($(this).text());
	$('.big-title').css('top', '395px');
	$('.artist-number').css('display','block');
});

// this code removes the artist number and artist name when not hovering on any artist name
$('.artists li').mouseout(function(){
	$('.big-title').html('Breakthrough<br>Artists of<br>2015');
	$('.big-title').css('top', '156px');
	$('.artist-number').css('display','none');
});

// this code makes the artist page go away when clickin on the 'list' button
$('.list').click(function(){
	$('.artist-info').css('z-index','4');
	$('.red-bg').css('z-index','4');
	$('.artist-image').css('z-index','3');
	$('.artist-image').removeClass('fadeInRight');
	$('.artist-info').removeClass('slideInLeft');			
	$('.red-bg').removeClass('slideInLeft');			
	$('.artist-image').addClass('fadeOutRight');
	$('.artist-info').addClass('slideOutLeft');
	$('.red-bg').addClass('slideOutLeft');
	$(this).removeClass('fadeInDown');
	$(this).addClass('fadeOutUp');
	$('.next').removeClass('fadeInDown');
	$('.next').addClass('fadeOutUp');
	$('.divider').removeClass('fadeInDown');
	$('.divider').addClass('fadeOutUp');
});

// this controls the functionality and animation of the artist profiles when clicking on each artist name
$('.artists').on('click','li',function(){
	$('.artists-container').css('display','block');
	$('.artist-info').css('z-index','4');
	$('.red-bg').css('z-index','4');
	$('.artist-image').css('z-index','3');
	$('.artist-image').removeClass('fadeOutRight');
	$('.artist-info').removeClass('slideOutLeft');
	$('.red-bg').removeClass('slideOutLeft');
	$('.artist-image').addClass('fadeInRight');
	$('.artist-info').addClass('slideInLeft');
	$('.red-bg').addClass('slideInLeft');
	$('.list').removeClass('fadeOutUp');
	$('.list').addClass('fadeInDown');
	$('.next').removeClass('fadeOutUp');
	$('.next').addClass('fadeInDown');	
	$('.divider').removeClass('fadeOutUp');
	$('.divider').addClass('fadeInDown');
	$('.artist-info').removeClass('fadeOut').addClass('slideInLeft');

});

// this code creates the artist number that shows up when hovering on an artist's name
$('.artists li').each(function(index){
	$(this).mouseover(function(){
		if (index < 9) {
			$('.bigger-number').text('0' + (index + 1).toString());
		} else {
			$('.bigger-number').text(index + 1);
		}
    });
});

// this code determines what profile to show when clicking on the 'next' button
$('.next').click(function(){
	if ($('.aurora').css('display') == 'block') {
		$('.bmth').css('display', 'block');
		$('.aurora .red-bg, .aurora .artist-info').css('z-index', '3');
		$('.aurora .artist-image').css('z-index', '2');
		$('.aurora .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.years .red-bg, .years .artist-info').css('z-index', '4');
		$('.years .artist-image').css('z-index', '3');
		$('.bmth .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.aurora').css('display', 'none');
		},1000);
	} else if ($('.bmth').css('display') == 'block') {
		$('.bryson').css('display', 'block');
		$('.bmth .red-bg, .bmth .artist-info').css('z-index', '3');
		$('.bmth .artist-image').css('z-index', '2');
		$('.bmth .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.aurora .red-bg, .aurora .artist-info').css('z-index', '4');
		$('.aurora .artist-image').css('z-index', '3');
		$('.bryson .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.bmth').css('display', 'none');
		},1000);
	} else if ($('.bryson').css('display') == 'block') {
		$('.danny').css('display', 'block');
		$('.bryson .red-bg, .bryson .artist-info').css('z-index', '3');
		$('.bryson .artist-image').css('z-index', '2');
		$('.bryson .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.bmth .red-bg, .bmth .artist-info').css('z-index', '4');
		$('.bmth .artist-image').css('z-index', '3');
		$('.danny .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.bryson').css('display', 'none');
		},1000);
	} else if ($('.danny').css('display') == 'block') {
		$('.gallant').css('display', 'block');
		$('.danny .red-bg, .danny .artist-info').css('z-index', '3');
		$('.danny .artist-image').css('z-index', '2');
		$('.danny .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.bryson .red-bg, .bryson .artist-info').css('z-index', '4');
		$('.bryson .artist-image').css('z-index', '3');
		$('.gallant .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.danny').css('display', 'none');
		},1000);	} 
	else if ($('.gallant').css('display') == 'block') {
		$('.halsey').css('display', 'block');
		$('.gallant .red-bg, .gallant .artist-info').css('z-index', '3');
		$('.gallant .artist-image').css('z-index', '2');
		$('.gallant .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.danny .red-bg, .danny .artist-info').css('z-index', '4');
		$('.danny .artist-image').css('z-index', '3');
		$('.halsey .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.gallant').css('display', 'none');
		},1000);	} 
	else if ($('.halsey').css('display') == 'block') {
		$('.jack').css('display', 'block');
		$('.halsey .red-bg, .halsey .artist-info').css('z-index', '3');
		$('.halsey .artist-image').css('z-index', '2');
		$('.halsey .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.gallant .red-bg, .gallant .artist-info').css('z-index', '4');
		$('.gallant .artist-image').css('z-index', '3');
		$('.jack .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.halsey').css('display', 'none');
		},1000);
	} else if ($('.jack').css('display') == 'block') {
		$('.kygo').css('display', 'block');
		$('.jack .red-bg, .jack .artist-info').css('z-index', '3');
		$('.jack .artist-image').css('z-index', '2');
		$('.jack .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.halsey .red-bg, .halsey .artist-info').css('z-index', '4');
		$('.halsey .artist-image').css('z-index', '3');
		$('.kygo .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.jack').css('display', 'none');
		},1000);
	} else if ($('.kygo').css('display') == 'block') {
		$('.lido').css('display', 'block');
		$('.kygo .red-bg, .kygo .artist-info').css('z-index', '3');
		$('.kygo .artist-image').css('z-index', '2');
		$('.kygo .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.jack .red-bg, .jack .artist-info').css('z-index', '4');
		$('.jack .artist-image').css('z-index', '3');
		$('.lido .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.kygo').css('display', 'none');
		},1000);
	} else if ($('.lido').css('display') == 'block') {
		$('.melanie').css('display', 'block');
		$('.lido .red-bg, .lido .artist-info').css('z-index', '3');
		$('.lido .artist-image').css('z-index', '2');
		$('.lido .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.kygo .red-bg, .kygo .artist-info').css('z-index', '4');
		$('.kygo .artist-image').css('z-index', '3');
		$('.melanie .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.lido').css('display', 'none');
		},1000);
	} else if ($('.melanie').css('display') == 'block') {
		$('.nothing').css('display', 'block');
		$('.melanie .red-bg, .melanie .artist-info').css('z-index', '3');
		$('.melanie .artist-image').css('z-index', '2');
		$('.melanie .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.lido .red-bg, .lido .artist-info').css('z-index', '4');
		$('.lido .artist-image').css('z-index', '3');
		$('.nothing .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.melanie').css('display', 'none');
		},1000);
	} else if ($('.nothing').css('display') == 'block') {
		$('.pretty').css('display', 'block');
		$('.nothing .red-bg, .nothing .artist-info').css('z-index', '3');
		$('.nothing .artist-image').css('z-index', '2');
		$('.nothing .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.melanie .red-bg, .melanie .artist-info').css('z-index', '4');
		$('.melanie .artist-image').css('z-index', '3');
		$('.pretty .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.nothing').css('display', 'none');
		},1000);
	} else if ($('.pretty').css('display') == 'block') {
		$('.purity').css('display', 'block');
		$('.pretty .red-bg, .pretty .artist-info').css('z-index', '3');
		$('.pretty .artist-image').css('z-index', '2');
		$('.pretty .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.nothing .red-bg, .nothing .artist-info').css('z-index', '4');
		$('.nothing .artist-image').css('z-index', '3');
		$('.purity .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.pretty').css('display', 'none');
		},1000);
	} else if ($('.purity').css('display') == 'block') {
		$('.raury').css('display', 'block');
		$('.purity .red-bg, .purity .artist-info').css('z-index', '3');
		$('.purity .artist-image').css('z-index', '2');
		$('.purity .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.pretty .red-bg, .pretty .artist-info').css('z-index', '4');
		$('.pretty .artist-image').css('z-index', '3');
		$('.raury .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.purity').css('display', 'none');
		},1000);
	} else if ($('.raury').css('display') == 'block') {
		$('.years').css('display', 'block');
		$('.raury .red-bg, .raury .artist-info').css('z-index', '3');
		$('.raury .artist-image').css('z-index', '2');
		$('.raury .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.purity .red-bg, .purity .artist-info').css('z-index', '4');
		$('.purity .artist-image').css('z-index', '3');
		$('.years .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.raury').css('display', 'none');
		},1000);
	} else if ($('.years').css('display') == 'block') {
		$('.aurora').css('display', 'block');
		$('.years .red-bg, .years .artist-info').css('z-index', '2');
		$('.years .artist-image').css('z-index', '2');
		$('.years .artist-info').removeClass('slideInLeft').addClass('fadeOut');
		$('.raury .red-bg, .raury .artist-info').css('z-index', '4');
		$('.raury .artist-image').css('z-index', '3');
		$('.aurora .artist-info').removeClass('fadeOut').addClass('slideInLeft');
		setTimeout(function(){
			$('.years').css('display', 'none');
		},1000);
	}
});


// this code closes other artist pages when opening a new one so they don't overlap
$('.artists').on('click','li.aurora-label',function(){
	$('.aurora').css('display','block');
	$('.artist-page').not('.aurora').css('display','none');
});
$('.artists').on('click','li.bmth-label',function(){
	$('.bmth').css('display','block');
	$('.artist-page').not('.bmth').css('display','none');
});
$('.artists').on('click','li.bryson-label',function(){
	$('.bryson').css('display','block');
	$('.artist-page').not('.bryson').css('display','none');
});
$('.artists').on('click','li.danny-label',function(){
	$('.danny').css('display','block');
	$('.artist-page').not('.danny').css('display','none');
});
$('.artists').on('click','li.gallant-label',function(){
	$('.gallant').css('display','block');
	$('.artist-page').not('.gallant').css('display','none');
});
$('.artists').on('click','li.halsey-label',function(){
	$('.halsey').css('display','block');
	$('.artist-page').not('.halsey').css('display','none');
});
$('.artists').on('click','li.jack-label',function(){
	$('.jack').css('display','block');
	$('.artist-page').not('.jack').css('display','none');
});
$('.artists').on('click','li.kygo-label',function(){
	$('.kygo').css('display','block');
	$('.artist-page').not('.kygo').css('display','none');
});
$('.artists').on('click','li.lido-label',function(){
	$('.lido').css('display','block');
	$('.artist-page').not('.lido').css('display','none');
});
$('.artists').on('click','li.melanie-label',function(){
	$('.melanie').css('display','block');
	$('.artist-page').not('.melanie').css('display','none');
});
$('.artists').on('click','li.nothing-label',function(){
	$('.nothing').css('display','block');
	$('.artist-page').not('.nothing').css('display','none');
});
$('.artists').on('click','li.pretty-label',function(){
	$('.pretty').css('display','block');
	$('.artist-page').not('.pretty').css('display','none');
});
$('.artists').on('click','li.purity-label',function(){
	$('.purity').css('display','block');
	$('.artist-page').not('.purity').css('display','none');
});
$('.artists').on('click','li.raury-label',function(){
	$('.raury').css('display','block');
	$('.artist-page').not('.raury').css('display','none');
});
$('.artists').on('click','li.years-label',function(){
	$('.years').css('display','block');
	$('.artist-page').not('.years').css('display','none');
});

// this instantiates the slider on desktop
if ( window.innerWidth > 480 ) {
	(function($){
	    $(window).load(function(){
	        $("#my-thumbs-list").mThumbnailScroller({
	          axis:"x",
	          type: "hover-50",
	          speed: 10
	        });
	    });
	})(jQuery);
}

// this is all the mobile specific code
if (window.innerWidth < 480 ) {

	// this instantiates fastclick so there is no delay when tapping on mobile devices
	$(function() {
	    FastClick.attach(document.body);
	});

	// this prevents image caching on mobile
	$(document).ready(function(){  
		jQuery('img').each(function(){  
			jQuery(this).attr('src',jQuery(this).attr('src')+ '?' + (new Date()).getTime());  
		});  
	}); 
	$('#my-thumbs-list').css('display','block');

	// this changes the direction in which the artist list fades in on mobile
	$('#my-thumbs-list').removeClass('fadeInRight').addClass('fadeInLeft');

	$('.artists').on('click','li',function(){
		$('.bar').css('display','none');
		$('.big-title').css('display','none');
	});

	$('.list').on('click', function(){
		$('.bar').css('display','block');
		$('.big-title').css('display','block');
	});

	// this removes uneccessary elements from the mobile view
	$('.list').click(function(){
		$('.big-title').css('display','none');
		setTimeout(function(){
			$('.artists-container').css('display','none');
		},1000);
	});

	// this code is triggered when scrolling through the artist list on mobile
	$('#my-thumbs-list').scroll(function (event) {

		// this code allows for an infinite scroll through the artist names
	    var factor = this.scrollTop / (this.scrollHeight - $(this).height());
	    if(factor < 0.2) {
	        var move = $('.artists li').last();
	        move.remove();
	        $('.artists').prepend(move);
	        this.scrollTop += move.height();
	    } else if(factor > 0.8) {
	        var move = $('.artists li').first();
	        move.remove();
	        $('.artists').append(move);
	        this.scrollTop -= move.height();
	    }

	    // this code changes the background name when scrolling over a certain artist
		$('.artists li').each(function(index){
			if ($(this).offset().top > 280 && $(this).offset().top < 310) {
				$('.big-title').css('display','block');
				$('.big-title').text($(this).text());
			}

			// this code creates the background images when scrolling through the artists
			if ($('.big-title').text() == artistNames[0]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.aurora .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[1]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.bmth .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[2]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.bryson .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[3]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.danny .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[4]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.gallant .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[5]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.halsey .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[6]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.jack .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[7]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.kygo .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[8]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.lido .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[9]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.melanie .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[10]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.nothing .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[11]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.pretty .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[12]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.purity .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[13]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.raury .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else if ($('.big-title').text() == artistNames[14]) {
				$('.trans-bg').css('display','block');
				$('.trans-bg').css('background',$('.years .artist-image').css('background'));
				$('.trans-bg').css('background-size','cover');
				$('.trans-bg').css('background-position-x','50%');
			 } else {
			 	$('.trans-bg').css('display','none');
			 }

		});



	});

}