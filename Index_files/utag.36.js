//tealium universal tag - x_axis.36 ut4.0.201803130341, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};x_axis.o[loader].sender[id]=u;if(x_axis===undefined){x_axis={};}if(x_axis.ut===undefined){x_axis.ut={};}if(x_axis.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){x_axis.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){x_axis.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=x_axis.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){x_axis.ut.loader({type:"img",src:"//stats.ipinyou.com/adv.gif?a=AF.HG.fXFNNRl2hV98OyDpUSMHPP&e="});x_axis.ut.loader({type:"img",src:"//t.mookie1.cn/t/v2/activity?tagid=C2_338338&src.rand="+(new Date()).getTime()+""});}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in x_axis.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};x_axis.o[loader].loader.LOAD(id);})("36","xaxis.-oceanpark");}catch(error){x_axis.DB(error);}