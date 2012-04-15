goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9653 = cljs.core.js_obj.call(null);

var G__9654__9655 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9654__9655))
{var G__9657__9659 = cljs.core.first.call(null,G__9654__9655);
var vec__9658__9660 = G__9657__9659;
var k__9661 = cljs.core.nth.call(null,vec__9658__9660,0,null);
var v__9662 = cljs.core.nth.call(null,vec__9658__9660,1,null);
var G__9654__9663 = G__9654__9655;

var G__9657__9664 = G__9657__9659;
var G__9654__9665 = G__9654__9663;

while(true){
var vec__9666__9667 = G__9657__9664;
var k__9668 = cljs.core.nth.call(null,vec__9666__9667,0,null);
var v__9669 = cljs.core.nth.call(null,vec__9666__9667,1,null);
var G__9654__9670 = G__9654__9665;

(out__9653[cljs.core.name.call(null,k__9668)] = v__9669);
var temp__3698__auto____9671 = cljs.core.next.call(null,G__9654__9670);

if(cljs.core.truth_(temp__3698__auto____9671))
{var G__9654__9672 = temp__3698__auto____9671;

{
var G__9673 = cljs.core.first.call(null,G__9654__9672);
var G__9674 = G__9654__9672;
G__9657__9664 = G__9673;
G__9654__9665 = G__9674;
continue;
}
} else
{}
break;
}
} else
{}
return out__9653;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9675 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9675);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9676){
var v = cljs.core.first(arglist__9676);
var text = cljs.core.rest(arglist__9676);
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
{return cljs.core.reduce.call(null,(function (m,p__9677){
var vec__9678__9679 = p__9677;
var k__9680 = cljs.core.nth.call(null,vec__9678__9679,0,null);
var v__9681 = cljs.core.nth.call(null,vec__9678__9679,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9680),clj__GT_js.call(null,v__9681));
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
