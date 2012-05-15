goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__81538 = cljs.core.js_obj.call(null);

var G__81539__81540 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__81539__81540))
{var G__81542__81544 = cljs.core.first.call(null,G__81539__81540);
var vec__81543__81545 = G__81542__81544;
var k__81546 = cljs.core.nth.call(null,vec__81543__81545,0,null);
var v__81547 = cljs.core.nth.call(null,vec__81543__81545,1,null);
var G__81539__81548 = G__81539__81540;

var G__81542__81549 = G__81542__81544;
var G__81539__81550 = G__81539__81548;

while(true){
var vec__81551__81552 = G__81542__81549;
var k__81553 = cljs.core.nth.call(null,vec__81551__81552,0,null);
var v__81554 = cljs.core.nth.call(null,vec__81551__81552,1,null);
var G__81539__81555 = G__81539__81550;

(out__81538[cljs.core.name.call(null,k__81553)] = v__81554);
var temp__3698__auto____81556 = cljs.core.next.call(null,G__81539__81555);

if(cljs.core.truth_(temp__3698__auto____81556))
{var G__81539__81557 = temp__3698__auto____81556;

{
var G__81558 = cljs.core.first.call(null,G__81539__81557);
var G__81559 = G__81539__81557;
G__81542__81549 = G__81558;
G__81539__81550 = G__81559;
continue;
}
} else
{}
break;
}
} else
{}
return out__81538;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__81560 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__81560);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__81561){
var v = cljs.core.first(arglist__81561);
var text = cljs.core.rest(arglist__81561);
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
{return cljs.core.reduce.call(null,(function (m,p__81562){
var vec__81563__81564 = p__81562;
var k__81565 = cljs.core.nth.call(null,vec__81563__81564,0,null);
var v__81566 = cljs.core.nth.call(null,vec__81563__81564,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__81565),clj__GT_js.call(null,v__81566));
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
