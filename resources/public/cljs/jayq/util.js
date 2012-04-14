goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__166884 = cljs.core.js_obj.call(null);

var G__166885__166886 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__166885__166886))
{var G__166888__166890 = cljs.core.first.call(null,G__166885__166886);
var vec__166889__166891 = G__166888__166890;
var k__166892 = cljs.core.nth.call(null,vec__166889__166891,0,null);
var v__166893 = cljs.core.nth.call(null,vec__166889__166891,1,null);
var G__166885__166894 = G__166885__166886;

var G__166888__166895 = G__166888__166890;
var G__166885__166896 = G__166885__166894;

while(true){
var vec__166897__166898 = G__166888__166895;
var k__166899 = cljs.core.nth.call(null,vec__166897__166898,0,null);
var v__166900 = cljs.core.nth.call(null,vec__166897__166898,1,null);
var G__166885__166901 = G__166885__166896;

(out__166884[cljs.core.name.call(null,k__166899)] = v__166900);
var temp__3698__auto____166902 = cljs.core.next.call(null,G__166885__166901);

if(cljs.core.truth_(temp__3698__auto____166902))
{var G__166885__166903 = temp__3698__auto____166902;

{
var G__166904 = cljs.core.first.call(null,G__166885__166903);
var G__166905 = G__166885__166903;
G__166888__166895 = G__166904;
G__166885__166896 = G__166905;
continue;
}
} else
{}
break;
}
} else
{}
return out__166884;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__166906 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__166906);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__166907){
var v = cljs.core.first(arglist__166907);
var text = cljs.core.rest(arglist__166907);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__166908){
var vec__166909__166910 = p__166908;
var k__166911 = cljs.core.nth.call(null,vec__166909__166910,0,null);
var v__166912 = cljs.core.nth.call(null,vec__166909__166910,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__166911),clj__GT_js.call(null,v__166912));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
