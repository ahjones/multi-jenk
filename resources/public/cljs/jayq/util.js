goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__117626 = cljs.core.js_obj.call(null);

var G__117627__117628 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__117627__117628))
{var G__117630__117632 = cljs.core.first.call(null,G__117627__117628);
var vec__117631__117633 = G__117630__117632;
var k__117634 = cljs.core.nth.call(null,vec__117631__117633,0,null);
var v__117635 = cljs.core.nth.call(null,vec__117631__117633,1,null);
var G__117627__117636 = G__117627__117628;

var G__117630__117637 = G__117630__117632;
var G__117627__117638 = G__117627__117636;

while(true){
var vec__117639__117640 = G__117630__117637;
var k__117641 = cljs.core.nth.call(null,vec__117639__117640,0,null);
var v__117642 = cljs.core.nth.call(null,vec__117639__117640,1,null);
var G__117627__117643 = G__117627__117638;

(out__117626[cljs.core.name.call(null,k__117641)] = v__117642);
var temp__3698__auto____117644 = cljs.core.next.call(null,G__117627__117643);

if(cljs.core.truth_(temp__3698__auto____117644))
{var G__117627__117645 = temp__3698__auto____117644;

{
var G__117646 = cljs.core.first.call(null,G__117627__117645);
var G__117647 = G__117627__117645;
G__117630__117637 = G__117646;
G__117627__117638 = G__117647;
continue;
}
} else
{}
break;
}
} else
{}
return out__117626;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__117648 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__117648);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__117649){
var v = cljs.core.first(arglist__117649);
var text = cljs.core.rest(arglist__117649);
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
{return cljs.core.reduce.call(null,(function (m,p__117650){
var vec__117651__117652 = p__117650;
var k__117653 = cljs.core.nth.call(null,vec__117651__117652,0,null);
var v__117654 = cljs.core.nth.call(null,vec__117651__117652,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__117653),clj__GT_js.call(null,v__117654));
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
