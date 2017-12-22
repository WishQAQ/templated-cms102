$(function(){
	setTimeout(function () {
		var cr_one=$(".CoreBusiness").offset().top;
		var cr_two=$(".E-commerce").offset().top;
		var cr_three=$(".zhongbiao").offset().top;
		var cr_four=$(".Case").offset().top;	
		var cr_aa=$(".specialefficacy").offset().top;
		var cr_bb=$(".fanganpingjia").offset().top;
		var cr_five=$(".Client").offset().top;
		var cr_five=cr_five;
		var cr_six=$(".news").offset().top;
		var cr_six=cr_six;
		var aa=$(".Case").outerHeight(true);
		var w_scroll=$(document).scrollTop();
		$(".index_click").click(function(){
			var w_scroll=$(document).scrollTop();	
			if(w_scroll<cr_one)
			{
				$("body,html").animate({scrollTop:cr_one});
			}
			else if(w_scroll>=cr_one && w_scroll<cr_two)
			{
				$("body,html").animate({scrollTop:cr_two});
			}
			else if(w_scroll>=cr_two && w_scroll<cr_three)
			{
				$("body,html").animate({scrollTop:cr_three});
			}
			else if(w_scroll>=cr_three && w_scroll<cr_four)
			{
				$("body,html").animate({scrollTop:cr_four});
			}
			else if(w_scroll>=cr_four && w_scroll<cr_five)
			{
				$("body,html").animate({scrollTop:cr_five});
			}
			else if(w_scroll>=cr_five && w_scroll<cr_six)
			{
				$("body,html").animate({scrollTop:cr_six});
			}
	});  
    }, 400);
});