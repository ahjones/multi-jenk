goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__106954 = cljs.core.js_obj.call(null);

var G__106955__106956 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__106955__106956))
{var G__106958__106960 = cljs.core.first.call(null,G__106955__106956);
var vec__106959__106961 = G__106958__106960;
var k__106962 = cljs.core.nth.call(null,vec__106959__106961,0,null);
var v__106963 = cljs.core.nth.call(null,vec__106959__106961,1,null);
var G__106955__106964 = G__106955__106956;

var G__106958__106965 = G__106958__106960;
var G__106955__106966 = G__106955__106964;

while(true){
var vec__106967__106968 = G__106958__106965;
var k__106969 = cljs.core.nth.call(null,vec__106967__106968,0,null);
var v__106970 = cljs.core.nth.call(null,vec__106967__106968,1,null);
var G__106955__106971 = G__106955__106966;

(out__106954[cljs.core.name.call(null,k__106969)] = v__106970);
var temp__3698__auto____106972 = cljs.core.next.call(null,G__106955__106971);

if(cljs.core.truth_(temp__3698__auto____106972))
{var G__106955__106973 = temp__3698__auto____106972;

{
var G__106974 = cljs.core.first.call(null,G__106955__106973);
var G__106975 = G__106955__106973;
G__106958__106965 = G__106974;
G__106955__106966 = G__106975;
continue;
}
} else
{}
break;
}
} else
{}
return out__106954;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__106976 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__106976);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__106977){
var v = cljs.core.first(arglist__106977);
var text = cljs.core.rest(arglist__106977);
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
{return cljs.core.reduce.call(null,(function (m,p__106978){
var vec__106979__106980 = p__106978;
var k__106981 = cljs.core.nth.call(null,vec__106979__106980,0,null);
var v__106982 = cljs.core.nth.call(null,vec__106979__106980,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__106981),clj__GT_js.call(null,v__106982));
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
