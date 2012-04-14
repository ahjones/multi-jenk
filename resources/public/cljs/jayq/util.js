goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__188261 = cljs.core.js_obj.call(null);

var G__188262__188263 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__188262__188263))
{var G__188265__188267 = cljs.core.first.call(null,G__188262__188263);
var vec__188266__188268 = G__188265__188267;
var k__188269 = cljs.core.nth.call(null,vec__188266__188268,0,null);
var v__188270 = cljs.core.nth.call(null,vec__188266__188268,1,null);
var G__188262__188271 = G__188262__188263;

var G__188265__188272 = G__188265__188267;
var G__188262__188273 = G__188262__188271;

while(true){
var vec__188274__188275 = G__188265__188272;
var k__188276 = cljs.core.nth.call(null,vec__188274__188275,0,null);
var v__188277 = cljs.core.nth.call(null,vec__188274__188275,1,null);
var G__188262__188278 = G__188262__188273;

(out__188261[cljs.core.name.call(null,k__188276)] = v__188277);
var temp__3698__auto____188279 = cljs.core.next.call(null,G__188262__188278);

if(cljs.core.truth_(temp__3698__auto____188279))
{var G__188262__188280 = temp__3698__auto____188279;

{
var G__188281 = cljs.core.first.call(null,G__188262__188280);
var G__188282 = G__188262__188280;
G__188265__188272 = G__188281;
G__188262__188273 = G__188282;
continue;
}
} else
{}
break;
}
} else
{}
return out__188261;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__188283 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__188283);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__188284){
var v = cljs.core.first(arglist__188284);
var text = cljs.core.rest(arglist__188284);
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
{return cljs.core.reduce.call(null,(function (m,p__188285){
var vec__188286__188287 = p__188285;
var k__188288 = cljs.core.nth.call(null,vec__188286__188287,0,null);
var v__188289 = cljs.core.nth.call(null,vec__188286__188287,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__188288),clj__GT_js.call(null,v__188289));
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
