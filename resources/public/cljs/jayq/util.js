goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__27307 = cljs.core.js_obj.call(null);

var G__27308__27309 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__27308__27309))
{var G__27311__27313 = cljs.core.first.call(null,G__27308__27309);
var vec__27312__27314 = G__27311__27313;
var k__27315 = cljs.core.nth.call(null,vec__27312__27314,0,null);
var v__27316 = cljs.core.nth.call(null,vec__27312__27314,1,null);
var G__27308__27317 = G__27308__27309;

var G__27311__27318 = G__27311__27313;
var G__27308__27319 = G__27308__27317;

while(true){
var vec__27320__27321 = G__27311__27318;
var k__27322 = cljs.core.nth.call(null,vec__27320__27321,0,null);
var v__27323 = cljs.core.nth.call(null,vec__27320__27321,1,null);
var G__27308__27324 = G__27308__27319;

(out__27307[cljs.core.name.call(null,k__27322)] = v__27323);
var temp__3698__auto____27325 = cljs.core.next.call(null,G__27308__27324);

if(cljs.core.truth_(temp__3698__auto____27325))
{var G__27308__27326 = temp__3698__auto____27325;

{
var G__27327 = cljs.core.first.call(null,G__27308__27326);
var G__27328 = G__27308__27326;
G__27311__27318 = G__27327;
G__27308__27319 = G__27328;
continue;
}
} else
{}
break;
}
} else
{}
return out__27307;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__27329 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__27329);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__27330){
var v = cljs.core.first(arglist__27330);
var text = cljs.core.rest(arglist__27330);
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
{return cljs.core.reduce.call(null,(function (m,p__27331){
var vec__27332__27333 = p__27331;
var k__27334 = cljs.core.nth.call(null,vec__27332__27333,0,null);
var v__27335 = cljs.core.nth.call(null,vec__27332__27333,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__27334),clj__GT_js.call(null,v__27335));
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
