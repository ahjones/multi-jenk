goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__164751 = cljs.core.js_obj.call(null);

var G__164752__164753 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__164752__164753))
{var G__164755__164757 = cljs.core.first.call(null,G__164752__164753);
var vec__164756__164758 = G__164755__164757;
var k__164759 = cljs.core.nth.call(null,vec__164756__164758,0,null);
var v__164760 = cljs.core.nth.call(null,vec__164756__164758,1,null);
var G__164752__164761 = G__164752__164753;

var G__164755__164762 = G__164755__164757;
var G__164752__164763 = G__164752__164761;

while(true){
var vec__164764__164765 = G__164755__164762;
var k__164766 = cljs.core.nth.call(null,vec__164764__164765,0,null);
var v__164767 = cljs.core.nth.call(null,vec__164764__164765,1,null);
var G__164752__164768 = G__164752__164763;

(out__164751[cljs.core.name.call(null,k__164766)] = v__164767);
var temp__3698__auto____164769 = cljs.core.next.call(null,G__164752__164768);

if(cljs.core.truth_(temp__3698__auto____164769))
{var G__164752__164770 = temp__3698__auto____164769;

{
var G__164771 = cljs.core.first.call(null,G__164752__164770);
var G__164772 = G__164752__164770;
G__164755__164762 = G__164771;
G__164752__164763 = G__164772;
continue;
}
} else
{}
break;
}
} else
{}
return out__164751;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__164773 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__164773);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__164774){
var v = cljs.core.first(arglist__164774);
var text = cljs.core.rest(arglist__164774);
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
{return cljs.core.reduce.call(null,(function (m,p__164775){
var vec__164776__164777 = p__164775;
var k__164778 = cljs.core.nth.call(null,vec__164776__164777,0,null);
var v__164779 = cljs.core.nth.call(null,vec__164776__164777,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__164778),clj__GT_js.call(null,v__164779));
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
