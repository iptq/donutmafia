var mn = $(".main-nav");
mns = "main-nav-scrolled";
hdr = $('header').height();

$(window).scroll(function() {
	if ($(this).scrollTop() > hdr) {
		mn.addClass(mns);
	} else {
		mn.removeClass(mns);
	}
});

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top + 350
				}, 1000);
				return false;
			}
		}
	});
});

$(function() {
	twitterFetcher.fetch({
		"id": '563075436511776768',
		"domId": 'twitter',
		"maxTweets": 5,
		"enableLinks": true, 
		"showUser": true,
		"showTime": true,
		"lang": 'en'
	});
});