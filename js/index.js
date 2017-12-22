$(function () {
	
	
	
	$(".anlilist li:nth-child(3n)").addClass("cur");
    $(".zhiming dl dd:nth-child(3n)").addClass("cur");
	$(".pingjia li:nth-child(3n)").addClass("Deleteright");
	//20150306
	if($(window).width()<1030){
		$(".footbg").css({"padding-bottom":"21px"});
	}
	
	////20150302
	 $(".downmenu.widbai").css({"width":$(window).width()});
    /////////////////20150212
    $(".newslist.anlilist1 dd").css({ "margin-right": "33px" });
    $(".Strength ul li a").click(function () {
        $(".Strength ul li a").removeClass("cur");
        $(this).addClass("cur");
    });
    $("#div1").css({ "height": $(window).height() - 80 });
    $(".return_top").click(function () {
        $("body,html").animate({scrollTop:"0px"});
    });
    var crWinWidth = $(window).width();
    

    $(".weixingongneng dl dd:last a").css({ "padding": "20px 23px" });
    onResize();
    $(window).resize(function () {
        onResize();
    });

    function onResize() {
		//20150314 begin
		var wWidth=$(window).width();   
		if(wWidth<1030)
		{
			$("body").addClass("body1024");
		}
		else
		{
			$("body").removeClass("body1024");
		}
		//20150314 end
		
		
		
		 var offLeft=$(".nav ul li:eq(1)").offset().left;
		 $(".downmenu.widbai").css({"width":$(window).width(),"left":-offLeft});

		  if($(window).width()<640  )
		 {
			 $(".logo").css({"padding-left":"10px"});
			$(".index_xuanfu").addClass("hengxuan");
			$(".index_xuanfu").css({"width":$(window).width(),"height":"50px","top":"auto","bottom":"0px","right":"auto","left":"0px","padding":"0px 0px"});
			$(".index_xuanfu a:last").prev().find("span").css({"border-right":"none"});
			$(".index_xuanfu a.index_lefttijiao").prev().find("span").css({"border-right":"none"});
		 }
		 if($(window).width()<1280 && $(window).width()>640 )
		 {
			$(".logo").css({"padding-left":"10px"});
			$(".index_xuanfu").addClass("hengxuan");
			$(".index_xuanfu").css({"width":$(window).width(),"height":"50px","top":"auto","bottom":"0px","right":"auto","left":"0px","padding":"0px"});
			$(".index_xuanfu a:last").prev().find("span").css({"border-right":"none"});
			$(".index_xuanfu a.index_lefttijiao").prev().find("span").css({"border-right":"none"});
			$(".index_xuanfu.hengxuan").css({"height":"50px"});
		 }
		 
		 else if($(window).width()>1280)
		 {
			$(".logo").css({"padding-left":($(window).width()-1180)/2});
			$(".index_xuanfu").removeClass("hengxuan");
		 	$(".index_xuanfu").css({"height":$("body").height(),"width":"35px","left":"auto","bottom":"auto","top":"0px","right":"0px","padding":"0px 10px"});
			$(".index_xuanfu a:last").prev().find("span").css({"border-right":"none"});
			$(".index_xuanfu a.index_lefttijiao").prev().find("span").css({"border-right":"none"});
		 }
		//20150302 end

        $(".zhongbiaolist ul li>div").css({ width: $(".zhongbiaolist").width() / 4.3 });
        var Zbwidht = $(".zhongbiaolist ul li>div").width() * 4;
        $(".zhongbiaolist ul li div").css({ "margin-right": ($(".zhongbiaolist").width() - Zbwidht) / 3.1 });
        $(".zhongbiaolist ul li").css({ width: $(".zhongbiaolist").width() + ($(".zhongbiaolist").width() - Zbwidht) / 3.1 });


        $(".Caselist ul li>div").css({ width: $(".Caselist").width() / 3.3 });
        var Casewidht = $(".Caselist ul li>div").width() * 3;
        $(".Caselist ul li div").css({ "margin-right": ($(".Caselist").width() - Casewidht) / 2.05 });
        $(".Caselist ul li").css({ width: $(".Caselist").width() + ($(".Caselist").width() - Casewidht) / 2.05 });
    }

    $(".nav li:last").addClass("lastbg");

    $(".Core").hover(function () {
        $(this).find("div").stop(true).animate({ top: 0 }, 300);
        $(this).find("h4 a").text($(this).find("h3").text());
        $(this).find("h3").hide();
    }, function () {
        $(this).find("div").stop(true).animate({ top: -250 }, 300)
        $(this).find("h3").show();
    });

    $(".fanganpingjialist ul li dl").hover(function () {
        $(this).addClass("cur");
    }, function () {
        $(this).removeClass("cur");
    });

    setTimeout(function () {
        $(".webPopup").css("height", $("body").outerHeight(true))
    }, 400);

    $(".pingjia ul li").hover(function () {
        $(this).addClass("cur");
    }, function () {
        $(this).removeClass("cur");
    });

    $(".zhongbiaoli dl dt img").hover(function () {
        $(this).stop(true).animate({ width: 410, height: 304, left: "50%", "margin-left": -205, top: "50%", "margin-top": -152 }, 800);
    }, function () {
        $(this).stop(true).animate({ width: 348, height: 258, left: "50%", "margin-left": -174, top: "50%", "margin-top": -129 }, 800)
    });

   // $(".anlipic img").hover(function () {
//        $(this).stop(true,true).animate({ width: 400, height: 302, left: "50%", top: "50%", "margin-left": -200, "margin-top": -151 }, 1000);
//    }, function () {
//        $(this).stop(true,true).animate({ width: 366, height: 276, left: "50%", top: "50%", "margin-left": -183, "margin-top": -138 }, 1000)
//    });

	if($(window).width()>1024){
		$(".jiejuefangan li:nth-child(4n)").addClass("cur");
		 $(".anlipic img").hover(function(){
				$(this).stop(true).animate({width:400,height:302,left:"50%",top:"50%","margin-left":-200,"margin-top":-151},1200);
			  },function(){
				$(this).stop(true).animate({width:366,height:276,left:"50%",top:"50%","margin-left":-183,"margin-top":-138},1200)
		  });
	 }
	 else
	 {
		 $(".weixinlist ul li dl dd").css({"width":"550px"});
		 $(".anlipic img").hover(function(){
		 	$(this).stop(true).animate({width:400,height:302,left:"50%",top:"50%","margin-left":-200,"margin-top":-151},1200);
		  },function(){
			$(this).stop(true).animate({width:310,height:258,left:"50%",top:"50%","margin-left":-155,"margin-top":-129},1200)
	    });	
	 }
	 
    $(".Caselistli").hover(function () {
        $(this).find("p").stop(true,true).slideDown(500);
    }, function () {
        $(this).find("p").stop(true,true).slideUp(500);
    });
    $(".zhiming dl dd").hover(function () {
        $(this).find("div").show();
    }, function () {
        $(this).find("div").hide();
    });
    $(".nav li").hover(function () {
        $(this).find("div").stop(true, true).slideDown(300);
        $(this).addClass("cur");
    }, function () {
        $(this).find("div").stop(true, true).slideUp(300);
        $(this).removeClass("cur");
    });

    $(".webContact").click(function () {
        $(".webPopup").fadeIn(300);
        $(".webPopupForm").fadeIn(300);
        $(".webPopupForm").css({ "top": $(document).scrollTop() });
    });

    $(".close").click(function () {
        $(".webPopup").hide();
        $(".webPopupForm").hide();
    });

    $(".dingzhiclass a").hover(function () {
        var t = $(this).index();
        $(".dingzhiclass a").removeClass("cur").eq(t).addClass("cur");
        $(".Customizedbox").hide().eq(t).show();
    });

    $(".Casebox").eq(0).show();
    $(".Casemore").eq(0).show();
    $(".caseclass span a").hover(function () {
        var t = $(".caseclass span a").index($(this));
        $(".caseclass span a").removeClass("cur").eq(t).addClass("cur");
        $(".Casebox").hide().eq(t).show();
        $(".Casemore").hide().eq(t).show();
    });


    $(".fanganbox").eq(0).show();
    $(".fanganpingjiamore").eq(0).show();
    $(".fanganclass span a").hover(function () {
        var t = $(".fanganclass span a").index($(this));
        $(".fanganclass span a").removeClass("cur").eq(t).addClass("cur");
        $(".fanganbox").hide().eq(t).show();
        $(".fanganpingjiamore").hide().eq(t).show();
    });

    $(".E-commercelist").eq(0).show();
    $(".E-commercetitle a").hover(function () {
        var t = $(".E-commercetitle a").index($(this));
        $(".E-commercetitle a").removeClass("cur").eq(t).addClass("cur");
        $(".E-commercelist").hide().eq(t).show();
    });

    $(".E-commercelist li").css({ width: ($(".E-commerce").width() / 4) });



    $(".newsbox").eq(0).show();
    $(".newsmore").eq(0).show();
    $(".newsclass span a").hover(function () {
        var t = $(".newsclass span a").index($(this));
        $(".newsclass span a").removeClass("cur").eq(t).addClass("cur");
        $(".newsbox").hide().eq(t).show();
        $(".newsmore").hide().eq(t).show();
    });


    $(".Ourcustomers dd").hover(function () {
        $(this).find("div").stop(true).slideDown(300);
    }, function () {
        $(this).find("div").stop(true).slideUp(300);
    });

    $(".index_btn li").hover(function () {
        $(this).find("div").stop(true).animate({ top: -280 }, 300)
    }, function () {
        $(this).find("div").stop(true).animate({ top: -0 }, 300)
    })


    $(".zhongbiaolist ul li div:nth-child(4n)").css({ "margin-right": 0 });

    $(".weixinRelated ul li:nth-child(3n)").css({ "margin-right": 0 });

    $(".TSearch").click(function () {
        if ($(".Searchbox").is(":hidden")) {
            $(this).addClass("TSearchcur");
            $(".Searchbox").show();
        } else {
            $(this).removeClass("TSearchcur");
            $(".Searchbox").hide();
        }

    });

    /*---banner图---*/


    var Bannerbox = $(window).width();
    $(".bannerdot a").eq(0).addClass("cur");
    $(".banner li:eq(0)").css({ "z-index": 2 });
    $(".banner li").css({ width: Bannerbox });

    var Prev = $(".bannerprev");
    var Next = $(".bannernext");
    var i = 0;
    var leng = $(".banner li").length;

    Prev.click(function () {
        i--;
        if (i < 0) { i = leng - 1 }
        setPage(i);
        $(".banner li").stop(true).animate({ opacity: 0,"z-index":1}, 500).eq(i).stop(true).animate({ opacity: 1,"z-index":3}, 500);
    })

    Next.click(function () {
        i++;
        if (i > leng - 1) { i = 0 }
        setPage(i);


        $(".banner li").stop(true).animate({ opacity: 0,"z-index":1}, 500).eq(i).stop(true).animate({ opacity: 1,"z-index":3}, 500);
    })

    $(".bannerdot a").click(function () {
        var i = $(this).index();
        setPage(i);
        $(".banner li").stop(true).animate({ opacity: 0,"z-index":1}, 500).eq(i).stop(true).animate({ opacity: 1,"z-index":3}, 500);
    });

    function setPage(i) {
        if (i < 0) return;

        var myrel = $(".banner li").eq(i).find("img").attr("rel");
        $(".banner li").eq(i).find("img").attr("src", myrel);
        $(".banner li").show();
        $(".bannerdot a").eq(i).addClass("cur").siblings().removeClass("cur");
    }


    var auto = setInterval(function () {
        i++;
        if (i > leng - 1) { i = 0 }
        setPage(i);
        $(".banner li").stop(true).animate({ opacity: 0 }, 500).eq(i).stop(true).animate({ opacity: 1 }, 500);
    }, 6000)

    $(".banner").hover(function () {
        clearInterval(auto)
    }, function () {
        auto = setInterval(function () {
            i++;
            if (i > leng - 1) { i = 0 }
            setPage(i);
            $(".banner li").stop(true).animate({ opacity: 0 }, 500).eq(i).stop(true).animate({ opacity: 1 }, 500);
        }, 6000)
    })



    /*---banner图---*/


    var Casebox = $(".Case_Detailed_Small");
    var Caseleft = $(".Case_bigpicleft")
    var Caseright = $(".Case_bigpicright")
    var Casegeshu = $(".Case_Detailed_Small li");
    var Caseleng = $(".Case_Detailed_Small li").length;
    var i = 0


    Caseleft.click(function () {
        i--;
        if (i < 0) { i = Caseleng - 1 }
        Casegeshu.eq(i).addClass("cur").siblings().removeClass("cur");
        $(".Case_Detailed_Small li img").eq(i).trigger("click");
    });
    Caseright.click(function () {
        i++;
        if (i > Caseleng - 1) { i = 0 }
        Casegeshu.eq(i).addClass("cur").siblings().removeClass("cur");
        $(".Case_Detailed_Small li img").eq(i).trigger("click");
    });

    $(".Case_Detailed_Small li").click(function () {
        i = $(this).index();
        Casecur(i);
        $(".Case_Detailed_bigpic img").attr("src", $(this).find("img").attr("src"));
    });

    function Casecur(i) {
        if (i < 0) return;
        $(".Case_Detailed_Small li").eq(i).addClass("cur").siblings().removeClass("cur");
    };

    $(".Case_Detailed_Small li img").eq(0).trigger("click");
    $(".Case_Detailed_Small li").eq(0).addClass("cur");


    var Phoneleft = $(".Case_phoneleft")
    var Phoneright = $(".Case_phoneright")
    var Phonewidth = $(".Case_phonelist li").outerWidth();
    var Phoneli = $(".Case_phonelist li");
    var Phoneul = $(".Case_phonelist ul");

    Phoneleft.click(function () {
        if (Phoneul.is(":animated")) { return }
        var Phoneli = $(".Case_phonelist li");
        Phoneli.removeClass("cur")
        Phoneul.animate({ "left": -Phonewidth }, 500, function () {
            Phoneli.eq(0).appendTo(Phoneul);
            Phoneul.css({ left: 0 })
            Phoneli.eq(2).addClass("cur")
        })
    });

    Phoneright.click(function () {
        if (Phoneul.is(":animated")) { return }
        var Phoneli = $(".Case_phonelist li");
        Phoneli.removeClass("cur")
        Phoneli.last().prependTo(Phoneul);
        Phoneul.css({ left: -Phonewidth })
        Phoneul.animate({ "left": 0 }, 500, function () {
            Phoneli.eq(0).addClass("cur");
        })

    });
    $(".anlititle img").removeAttr("width");
		

    $("#search").submit(function () {
        if ($("[name='keyword']").val() == '' || $("[name='keyword']").val() == undefined) {
            $("[name='keyword']").focus();
            return false;
        } else {
            location.href = "/Serach.html?keyword=" + escape($("[name='keyword']").val());
        }
        return false;
    });
});


$(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
    $('body').bind("selectstart", function () { return false; })
});


















