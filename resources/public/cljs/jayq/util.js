goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__186115 = cljs.core.js_obj.call(null);

var G__186116__186117 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__186116__186117))
{var G__186119__186121 = cljs.core.first.call(null,G__186116__186117);
var vec__186120__186122 = G__186119__186121;
var k__186123 = cljs.core.nth.call(null,vec__186120__186122,0,null);
var v__186124 = cljs.core.nth.call(null,vec__186120__186122,1,null);
var G__186116__186125 = G__186116__186117;

var G__186119__186126 = G__186119__186121;
var G__186116__186127 = G__186116__186125;

while(true){
var vec__186128__186129 = G__186119__186126;
var k__186130 = cljs.core.nth.call(null,vec__186128__186129,0,null);
var v__186131 = cljs.core.nth.call(null,vec__186128__186129,1,null);
var G__186116__186132 = G__186116__186127;

(out__186115[cljs.core.name.call(null,k__186130)] = v__186131);
var temp__3698__auto____186133 = cljs.core.next.call(null,G__186116__186132);

if(cljs.core.truth_(temp__3698__auto____186133))
{var G__186116__186134 = temp__3698__auto____186133;

{
var G__186135 = cljs.core.first.call(null,G__186116__186134);
var G__186136 = G__186116__186134;
G__186119__186126 = G__186135;
G__186116__186127 = G__186136;
continue;
}
} else
{}
break;
}
} else
{}
return out__186115;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__186137 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__186137);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__186138){
var v = cljs.core.first(arglist__186138);
var text = cljs.core.rest(arglist__186138);
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
{return cljs.core.reduce.call(null,(function (m,p__186139){
var vec__186140__186141 = p__186139;
var k__186142 = cljs.core.nth.call(null,vec__186140__186141,0,null);
var v__186143 = cljs.core.nth.call(null,vec__186140__186141,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__186142),clj__GT_js.call(null,v__186143));
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
