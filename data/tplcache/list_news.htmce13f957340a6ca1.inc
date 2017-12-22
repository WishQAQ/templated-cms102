<?php
$z[0]=Array("field","",64,83);
$z[0][4]['name']="title";
$z[1]=Array("global","",84,110);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",151,180);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",220,279);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1010,1045);
$z[4][4]['filename']="head.htm";
$z[5]=Array("channel"," <a href=\"[field:typeurl/]\">[field:typename/]</a> ",1345,1516);
$z[5][4]['row']="10";
$z[5][4]['type']="son";
$z[5][4]['col']="1";
$z[5][4]['currentstyle']="<a href='~typelink~' class='cur'>~typename~</a>";
$z[6]=Array("list","\r\n	<dl>\r\n      <dd>\r\n        <h3><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a></h3>\r\n        <p><a href=\"[field:arcurl/]\" title=\"\">[field:infos/]…</a></p>\r\n        <span> <em>[field:pubdate function=\"MyDate('d',@me)\"/]</em> [field:pubdate function=\"MyDate('Y.m',@me)\"/]</span> </dd>\r\n    </dl>\r\n	",1558,1928);
$z[6][4]['pagesize']="6";
$z[6][4]['infolen']="300";
$z[7]=Array("pagelist","",1960,2026);
$z[7][4]['listitem']="index,pre,next,pageno,end";
$z[7][4]['listsize']="5";
$z[8]=Array("arclist","\r\n          <li><a href=\"[field:arcurl /]\"><img src=\"[field:picname/]\" width=\"292px\" height=\"220px\" alt=\"[field:title /]\">\r\n            <p>[field:title /]</p>\r\n            </a></li>\r\n          ",2422,2695);
$z[8][4]['row']="4";
$z[8][4]['typeid']="1";
$z[8][4]['titlelen']="20";
$z[8][4]['orderby']="pubdate";
$z[9]=Array("include","",2793,2833);
$z[9][4]['filename']="tanchuang.htm";

?>