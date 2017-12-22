$(function(){
	//-----------20150226
	var s_top=$(".Strength").offset().top;
	var str_width=$(".Strength").width();
	var str_left=($(window).width()-str_width)/2;
	var c_top=$(".commonnewCasebg").offset().top;
	var cr_yisan=$("#cr_yisan").offset().top;
	var cr_yier=$("#cr_yier").offset().top;
	var cr_yiyi=$("#cr_yiyi").offset().top;
	var cr_yiling=$("#cr_yiling").offset().top;
	var cr_lingjiu=$("#cr_lingjiu").offset().top;
	var cr_lingba=$("#cr_lingba").offset().top;
	var cr_lingqi=$("#cr_lingqi").offset().top;
	$(window).scroll(function(){
		var ww_top=$(window).scrollTop();
		if(s_top<=ww_top && ww_top<c_top)
		{
			$(".Strength ul").css({"position":"fixed","top":"0px","right":str_left});
			if(ww_top<cr_yier)
			{
				$(".Strength ul li a").removeClass("cur");
				$(".Strength ul li:eq(0) a").addClass("cur");
			}
			else if(ww_top>cr_yier && ww_top<cr_yiyi)
			{
				$(".Strength ul li a").removeClass("cur");
				$(".Strength ul li:eq(1) a").addClass("cur");
			}
			else if(ww_top>cr_yiyi && ww_top<cr_yiling)
			{
				$(".Strength ul li a").removeClass("cur");
				$(".Strength ul li:eq(2) a").addClass("cur");
			}
			else if(ww_top>cr_yiling && ww_top<cr_lingjiu)
			{
				$(".Strength ul li a").removeClass("cur");
				$(".Strength ul li:eq(3) a").addClass("cur");
			}
			else if(ww_top>cr_lingjiu && ww_top<cr_lingba)
			{
				$(".Strength ul li a").removeClass("cur");
				$(".Strength ul li:eq(4) a").addClass("cur");
			}
			else if(ww_top>cr_lingba && ww_top<cr_lingqi)
			{
				$(".Strength ul li a").removeClass("cur");
				$(".Strength ul li:eq(5) a").addClass("cur");
			}
			else if(ww_top>cr_lingqi && ww_top<c_top)
			{
				$(".Strength ul li a").removeClass("cur");
				$(".Strength ul li:eq(6) a").addClass("cur");
			}
		}
		else
		{
			$(".Strength ul").css({"position":"absolute","top":"90px","right":"0px"})
		}
	});
});