goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__183969 = cljs.core.js_obj.call(null);

var G__183970__183971 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__183970__183971))
{var G__183973__183975 = cljs.core.first.call(null,G__183970__183971);
var vec__183974__183976 = G__183973__183975;
var k__183977 = cljs.core.nth.call(null,vec__183974__183976,0,null);
var v__183978 = cljs.core.nth.call(null,vec__183974__183976,1,null);
var G__183970__183979 = G__183970__183971;

var G__183973__183980 = G__183973__183975;
var G__183970__183981 = G__183970__183979;

while(true){
var vec__183982__183983 = G__183973__183980;
var k__183984 = cljs.core.nth.call(null,vec__183982__183983,0,null);
var v__183985 = cljs.core.nth.call(null,vec__183982__183983,1,null);
var G__183970__183986 = G__183970__183981;

(out__183969[cljs.core.name.call(null,k__183984)] = v__183985);
var temp__3698__auto____183987 = cljs.core.next.call(null,G__183970__183986);

if(cljs.core.truth_(temp__3698__auto____183987))
{var G__183970__183988 = temp__3698__auto____183987;

{
var G__183989 = cljs.core.first.call(null,G__183970__183988);
var G__183990 = G__183970__183988;
G__183973__183980 = G__183989;
G__183970__183981 = G__183990;
continue;
}
} else
{}
break;
}
} else
{}
return out__183969;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__183991 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__183991);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__183992){
var v = cljs.core.first(arglist__183992);
var text = cljs.core.rest(arglist__183992);
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
{return cljs.core.reduce.call(null,(function (m,p__183993){
var vec__183994__183995 = p__183993;
var k__183996 = cljs.core.nth.call(null,vec__183994__183995,0,null);
var v__183997 = cljs.core.nth.call(null,vec__183994__183995,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__183996),clj__GT_js.call(null,v__183997));
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
