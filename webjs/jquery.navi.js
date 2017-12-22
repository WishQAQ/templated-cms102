$(function () {
    $("#Nav>ul>li").hover(function () {
        $(this).find(".subNavBj").show();
        $(this).find("p").addClass("cur2");
    }, function () {
        $(this).find(".subNavBj").hide();
        $(this).find("p").removeClass("cur2");
    });
 
    if ($(".pages span").size() != 0) {
        var mywidth = $(".pages span").get(0).clientWidth + 68;
      //  $(".pages").width(mywidth);
    }
});

$.fn.extend({
    pager:function(currentIndex,recordCount,opts){return this.each(function(){CreatePager($(this),currentIndex,recordCount,opts)})}
});

$.fn.extend({
    pagerDynamic:function(currentIndex,recordCount,opts){return this.each(function(){CreatePagerDynamic($(this),currentIndex,recordCount,opts)})}
});

function CreatePager(instanse,currentIndex,recordCount,opts){
    opts=$.extend({
		PageSize:20,
        DIVCSS:"pagell",
        CurrentCSS:"cur",
        PrevText:"",
        NextText:""
	},opts||{});
    if(!opts.CallBack&&!opts.UrlFormat){
        var url=location.href.replace(/http:\/\/[^/]+/i,"");
        var ret=url.replace(/(\?|&)page=.*?(&|$)/i,"$1page={0}$2");
        opts.UrlFormat=ret+((ret==url)?(url.match(/\?/)?"&":"?")+"page={0}":"");
 
    }
    if(opts.DIVCSS)instanse.addClass(opts.DIVCSS);
    var pageCount=Math.max(Math.ceil(recordCount/opts.PageSize),1);
    console.log("Math.ceil(recordCount/opts.PageSize):"+Math.ceil(recordCount/opts.PageSize))
    if(recordCount>opts.PageSize){

    showPage(currentIndex);

    }

    function showPage(currentIndex){
        currentIndex=Math.min(Math.max(currentIndex,0),pageCount);
        var first=currentIndex>4?Math.max(Math.min(currentIndex-4,pageCount-8),1):1;
        var last=currentIndex>4?Math.min(currentIndex+3,pageCount):Math.min(9,pageCount);
        var pagebtn="";
        if(currentIndex==0){
           pagebtn+="<a class='Prev'><span>上一页</span></a>";
        }
        else{
           
                pagebtn+="<a  class='Prev' rel='"+(currentIndex-1)+"'><span>上一页</span></a>";
            
        }

        pagebtn+="<span>";

        if(first>1)pagebtn+="<a rel='0'>1</a>";
        if(first>2)pagebtn+="<a rel='"+(first-1)+"'>...</a>";
       
        for(var i=first;i<=last;i++){
                  
           

                if(i==currentIndex+1)
                    pagebtn+="<a class='"+opts.CurrentCSS+"'>"+i+"</a>";
                else
                    pagebtn+="<a rel='"+(i-1)+"'>"+i+"</a>"; 
                  
 
        }
        if(last<pageCount-1)
        pagebtn+="<a rel='"+(last)+"'>...</a>";
        if(last<pageCount)pagebtn+="<a rel='"+(pageCount-1)+"'>"+pageCount+"</a>";

        pagebtn+="</span>";
        if(currentIndex==pageCount-1)
        {
           pagebtn+="<a  class='next'><span>下一页</span></a>";
        }
        else{
            pagebtn+="<a  class='next' rel='"+(currentIndex+1)+"'><span>下一页</span></a>";
        }
       
        instanse.empty().append(pagebtn).find('a').each(function(i,n){
         
       

            var o=$(n);
            var p=o.attr("rel");
            if(!p)return;
             
            if(opts.CallBack)
              o.attr("href","javascript:void(0)").click(function(){ 
                    showPage(p);
                  
                    return (opts.CallBack(p))?false:false;
                });
            else
                o.attr("href",opts.UrlFormat.replace("{0}",p));


            if(p==0)
            {
            
             o.attr("href",opts.UrlFormat.replace("{0}",p).toString().replace("_page_0",""));
            
            }
               

        }).removeAttr("rel");
    }
}

function CreatePagerDynamic(instanse,currentIndex,recordCount,opts){
    opts=$.extend({
		PageSize:20,
        DIVCSS:"page",
        CurrentCSS:"cur",
        PrevText:"",
        NextText:""
	},opts||{});
    if(!opts.CallBack&&!opts.UrlFormat){
        var url=location.href.replace(/http:\/\/[^/]+/i,"");
        var ret=url.replace(/(\?|&)page=.*?(&|$)/i,"$1page={0}$2");
        opts.UrlFormat=ret+((ret==url)?(url.match(/\?/)?"&":"?")+"page={0}":"");
    }
    if(opts.DIVCSS)instanse.addClass(opts.DIVCSS);
    var pageCount=Math.max(Math.ceil(recordCount/opts.PageSize),1);
    showPage(currentIndex);
    function showPage(currentIndex){
        currentIndex=Math.min(Math.max(currentIndex,0),pageCount);
        var first=currentIndex>4?Math.max(Math.min(currentIndex-4,pageCount-8),1):1;
        var last=currentIndex>4?Math.min(currentIndex+3,pageCount):Math.min(9,pageCount);
        var pagebtn="";
        if(currentIndex==1){
            pagebtn+="<a><img src=\"/images/zmkh_21.gif\" /></a>";
        }
        else{
           
                pagebtn+="<a rel='"+(currentIndex-2)+"'><img src=\"/images/zmkh_21.gif\" /></a>";
            
        }

        pagebtn+="<span>";

        //if(first>1)pagebtn+="<a rel='0'>0</a>";
        if(first>2)pagebtn+="<a rel='"+(first-1)+"'>...</a>";
       
        for(var i=first;i<=last;i++){
     
                if(i==currentIndex)
                    pagebtn+="<a class='"+opts.CurrentCSS+"'>"+i+"</a>";
                else
                    pagebtn+="<a rel='"+i+"'>"+i+"</a>"; 
            
        }
        if(last<pageCount-1)
       // pagebtn+="<a rel='"+last+"'>...</a>";
       // if(last<pageCount)pagebtn+="<a rel='"+pageCount+"'>"+pageCount+"</a>";

        pagebtn+="</span>";
        if(currentIndex==pageCount)
        {
            pagebtn+="<a ><img src=\"/images/zmkh_23.gif\" /></a>";
        }
        else{
            pagebtn+="<a rel='"+(currentIndex+1)+"'><img src=\"/images/zmkh_23.gif\" /></a>";
        }
       
        instanse.empty().append(pagebtn).find('a').each(function(i,n){
            var o=$(n);
            var p=o.attr("rel");
            
            if(!p)return;
            if(opts.CallBack)
                o.attr("href","javascript:void(0)").click(function(){
                    showPage(p);
                    return (opts.CallBack(p))?false:false;
                });
            else
                o.attr("href",opts.UrlFormat.replace("{0}",p));
        }).removeAttr("rel");
    }
}