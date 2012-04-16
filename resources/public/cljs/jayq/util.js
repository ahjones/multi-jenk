goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__5339 = cljs.core.js_obj.call(null);

var G__5340__5341 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__5340__5341))
{var G__5343__5345 = cljs.core.first.call(null,G__5340__5341);
var vec__5344__5346 = G__5343__5345;
var k__5347 = cljs.core.nth.call(null,vec__5344__5346,0,null);
var v__5348 = cljs.core.nth.call(null,vec__5344__5346,1,null);
var G__5340__5349 = G__5340__5341;

var G__5343__5350 = G__5343__5345;
var G__5340__5351 = G__5340__5349;

while(true){
var vec__5352__5353 = G__5343__5350;
var k__5354 = cljs.core.nth.call(null,vec__5352__5353,0,null);
var v__5355 = cljs.core.nth.call(null,vec__5352__5353,1,null);
var G__5340__5356 = G__5340__5351;

(out__5339[cljs.core.name.call(null,k__5354)] = v__5355);
var temp__3698__auto____5357 = cljs.core.next.call(null,G__5340__5356);

if(cljs.core.truth_(temp__3698__auto____5357))
{var G__5340__5358 = temp__3698__auto____5357;

{
var G__5359 = cljs.core.first.call(null,G__5340__5358);
var G__5360 = G__5340__5358;
G__5343__5350 = G__5359;
G__5340__5351 = G__5360;
continue;
}
} else
{}
break;
}
} else
{}
return out__5339;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__5361 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__5361);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__5362){
var v = cljs.core.first(arglist__5362);
var text = cljs.core.rest(arglist__5362);
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
{return cljs.core.reduce.call(null,(function (m,p__5363){
var vec__5364__5365 = p__5363;
var k__5366 = cljs.core.nth.call(null,vec__5364__5365,0,null);
var v__5367 = cljs.core.nth.call(null,vec__5364__5365,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__5366),clj__GT_js.call(null,v__5367));
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
