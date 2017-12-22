<?php
$z[0]=Array("global","",74,100);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",141,170);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",210,268);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("include","",999,1034);
$z[3][4]['filename']="head.htm";
$z[4]=Array("global","",1282,1337);
$z[4][4]['name']="keyword";
$z[4][4]['function']="RemoveXSS(@me)";
$z[5]=Array("list","\r\n	<dl>\r\n      <dd>\r\n        <h3><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a></h3>\r\n        <p><a href=\"[field:arcurl/]\" title=\"\">[field:infos/]…</a></p>\r\n        <span> <em>[field:pubdate function=\"MyDate('d',@me)\"/]</em> [field:pubdate function=\"MyDate('Y.m',@me)\"/]</span> </dd>\r\n    </dl>\r\n	",1402,1771);
$z[5][4]['perpage']="8";
$z[5][4]['infolen']="300";
$z[6]=Array("pagelist","",1818,1873);
$z[6][4]['istitem']="index,pre,next,";
$z[6][4]['listsize']="5";
$z[7]=Array("include","",1889,1926);
$z[7][4]['filename']="footer.htm";

?>