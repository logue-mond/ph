if(location.href == "https://logue-mond.tumblr.com"){
    document.location = "https://logue.mond.jp/ph/";
}else if(location.href == "https://logue-mond.github.io/ph/"){
    document.location = "https://logue.mond.jp/ph/";
}

//Viewoirt切り替え
$(function() {
    var ua = navigator.userAgent;
    if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
        // スマホのとき
        $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">');
    } else {
        // PC・タブレットのとき
        $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">');
    }
});


//スムーズスクロール
$(function(){
   $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


//スクロールでフェードイン
$(function(){
    $(window).scroll(function (){
        $('.subttl').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});
//MVフェードイン
$(function(){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
    setTimeout(function(){
                        $('.fadein_h').each(function(){
                            var elemPos = $(this).offset().top;
                            var scroll = $(window).scrollTop();
                            var windowWidth = $(window).width();
                            if (scroll > elemPos - windowWidth + 200){
                                $(this).addClass('scrollin');
                            }
                        });
    },1000);
            }
        });
});

//gotoTOP
$(function() {
    var showFlag = false;
    var topBtn = $('.page-top');
    topBtn.css('bottom', '-150px');
    var showFlag = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '50px'}, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-150px'}, 200);
            }
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
$(function() {

	/**
	 * 現在スクロール位置によるグローバルナビのアクティブ表示
	 */
	var scrollMenu = function() {
		var array = {
			'#wrapper': 0,
			'#sec01': 0,
			'#sec02': 0,
			'#sec03': 0,
			'#sec04': 0
		};

		var $globalNavi = new Array();

		for (var key in array) {
			if ($(key).offset()) {
				array[key] = $(key).offset().top - 10;
				$globalNavi[key] = $('#header ul li a[href="' + key + '"]');
			}
		}

		$(window).scroll(function () {
			for (var key in array) {
				if ($(window).scrollTop() > array[key] - 50) {
					$('#header ul li a').each(function() {
						$(this).removeClass('active');
					});
					$globalNavi[key].addClass('active');
				}
			}
		});
	}

	scrollMenu();
});

