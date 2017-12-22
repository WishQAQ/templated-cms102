$(function(){
	$(".Malltab a").eq(0).addClass("cur");
	$(".Mallcont").eq(0).show();
	$(".Malltab a").click(function(){
		var tab = $(this).index();
		$(".Malltab a").removeClass("cur").eq(tab).addClass("cur");
		$(".Mallcont").hide().eq(tab).show();
	})	
})