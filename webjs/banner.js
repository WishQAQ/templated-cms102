(function ($) {
    jQuery.fn.bannerScroll = function (options) {
        var o = $.extend({}, $.fn.bannerScrollInit, options);
        this.each(function () {
            var $sorllList = $(".index_banner_scroll");
            var index = o.index;
            var $sorllDiv = $sorllList.find("div");
            var numsize = $sorllDiv.length;
			var $scrollB = $(".banner_btn");
            var $sorllBtnList = $(".banner_list");
			var $sorllBtn = $(".banner_span");
 
            var $sorllBtnSpan1 = $sorllBtnList.find("span");
		    var $sorllBtnSpan = $sorllBtn.find("a");
			$sorllBtnSpan1.eq(0).addClass("current");
            $sorllBtnSpan.eq(0).addClass("current");
            $sorllDiv.eq(0).show().siblings().hide();
			
			$scrollB.hover(function(){
				$sorllBtnList.hide();
				$sorllBtn.show();
			},function(){
				$sorllBtnList.show();
				$sorllBtn.hide();		
			})

            function autoplay() {
                index++;
                if (index >= numsize) {
                    index = 0;
                };

                $sorllBtnSpan.eq(index).addClass("current").siblings().removeClass("current");
				$sorllBtnSpan1.eq(index).addClass("current").siblings().removeClass("current");
                $sorllDiv.eq(index).fadeIn("700").siblings().fadeOut("700");
            };
			
            if (o.auto) {
                var MyMal = setInterval(autoplay, o.speed);
                $sorllBtnSpan.bind("click",function() {
                    MyMal = setInterval(autoplay, o.speed);
                });
            }
			
			$(".banner_btn").hover(function(){
				clearInterval(MyMal);
			},function(){
			    index--;
                autoplay();
			})

            $sorllBtnSpan.bind("click",function () {
                index = $(this).index() - 1;
                clearInterval(MyMal);
                autoplay();
            });

        })
    }

    $.fn.bannerScrollInit = {
        speed: 5500,
        auto: true,
        index: 0
    }
})(jQuery)
   