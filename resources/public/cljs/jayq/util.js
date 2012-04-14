goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__328312 = cljs.core.js_obj.call(null);

var G__328313__328314 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__328313__328314))
{var G__328316__328318 = cljs.core.first.call(null,G__328313__328314);
var vec__328317__328319 = G__328316__328318;
var k__328320 = cljs.core.nth.call(null,vec__328317__328319,0,null);
var v__328321 = cljs.core.nth.call(null,vec__328317__328319,1,null);
var G__328313__328322 = G__328313__328314;

var G__328316__328323 = G__328316__328318;
var G__328313__328324 = G__328313__328322;

while(true){
var vec__328325__328326 = G__328316__328323;
var k__328327 = cljs.core.nth.call(null,vec__328325__328326,0,null);
var v__328328 = cljs.core.nth.call(null,vec__328325__328326,1,null);
var G__328313__328329 = G__328313__328324;

(out__328312[cljs.core.name.call(null,k__328327)] = v__328328);
var temp__3698__auto____328330 = cljs.core.next.call(null,G__328313__328329);

if(cljs.core.truth_(temp__3698__auto____328330))
{var G__328313__328331 = temp__3698__auto____328330;

{
var G__328332 = cljs.core.first.call(null,G__328313__328331);
var G__328333 = G__328313__328331;
G__328316__328323 = G__328332;
G__328313__328324 = G__328333;
continue;
}
} else
{}
break;
}
} else
{}
return out__328312;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__328334 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__328334);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__328335){
var v = cljs.core.first(arglist__328335);
var text = cljs.core.rest(arglist__328335);
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
{return cljs.core.reduce.call(null,(function (m,p__328336){
var vec__328337__328338 = p__328336;
var k__328339 = cljs.core.nth.call(null,vec__328337__328338,0,null);
var v__328340 = cljs.core.nth.call(null,vec__328337__328338,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__328339),clj__GT_js.call(null,v__328340));
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
