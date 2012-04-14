goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__175416 = cljs.core.js_obj.call(null);

var G__175417__175418 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__175417__175418))
{var G__175420__175422 = cljs.core.first.call(null,G__175417__175418);
var vec__175421__175423 = G__175420__175422;
var k__175424 = cljs.core.nth.call(null,vec__175421__175423,0,null);
var v__175425 = cljs.core.nth.call(null,vec__175421__175423,1,null);
var G__175417__175426 = G__175417__175418;

var G__175420__175427 = G__175420__175422;
var G__175417__175428 = G__175417__175426;

while(true){
var vec__175429__175430 = G__175420__175427;
var k__175431 = cljs.core.nth.call(null,vec__175429__175430,0,null);
var v__175432 = cljs.core.nth.call(null,vec__175429__175430,1,null);
var G__175417__175433 = G__175417__175428;

(out__175416[cljs.core.name.call(null,k__175431)] = v__175432);
var temp__3698__auto____175434 = cljs.core.next.call(null,G__175417__175433);

if(cljs.core.truth_(temp__3698__auto____175434))
{var G__175417__175435 = temp__3698__auto____175434;

{
var G__175436 = cljs.core.first.call(null,G__175417__175435);
var G__175437 = G__175417__175435;
G__175420__175427 = G__175436;
G__175417__175428 = G__175437;
continue;
}
} else
{}
break;
}
} else
{}
return out__175416;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__175438 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__175438);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__175439){
var v = cljs.core.first(arglist__175439);
var text = cljs.core.rest(arglist__175439);
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
{return cljs.core.reduce.call(null,(function (m,p__175440){
var vec__175441__175442 = p__175440;
var k__175443 = cljs.core.nth.call(null,vec__175441__175442,0,null);
var v__175444 = cljs.core.nth.call(null,vec__175441__175442,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__175443),clj__GT_js.call(null,v__175444));
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
