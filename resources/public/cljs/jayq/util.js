goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__321841 = cljs.core.js_obj.call(null);

var G__321842__321843 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__321842__321843))
{var G__321845__321847 = cljs.core.first.call(null,G__321842__321843);
var vec__321846__321848 = G__321845__321847;
var k__321849 = cljs.core.nth.call(null,vec__321846__321848,0,null);
var v__321850 = cljs.core.nth.call(null,vec__321846__321848,1,null);
var G__321842__321851 = G__321842__321843;

var G__321845__321852 = G__321845__321847;
var G__321842__321853 = G__321842__321851;

while(true){
var vec__321854__321855 = G__321845__321852;
var k__321856 = cljs.core.nth.call(null,vec__321854__321855,0,null);
var v__321857 = cljs.core.nth.call(null,vec__321854__321855,1,null);
var G__321842__321858 = G__321842__321853;

(out__321841[cljs.core.name.call(null,k__321856)] = v__321857);
var temp__3698__auto____321859 = cljs.core.next.call(null,G__321842__321858);

if(cljs.core.truth_(temp__3698__auto____321859))
{var G__321842__321860 = temp__3698__auto____321859;

{
var G__321861 = cljs.core.first.call(null,G__321842__321860);
var G__321862 = G__321842__321860;
G__321845__321852 = G__321861;
G__321842__321853 = G__321862;
continue;
}
} else
{}
break;
}
} else
{}
return out__321841;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__321863 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__321863);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__321864){
var v = cljs.core.first(arglist__321864);
var text = cljs.core.rest(arglist__321864);
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
{return cljs.core.reduce.call(null,(function (m,p__321865){
var vec__321866__321867 = p__321865;
var k__321868 = cljs.core.nth.call(null,vec__321866__321867,0,null);
var v__321869 = cljs.core.nth.call(null,vec__321866__321867,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__321868),clj__GT_js.call(null,v__321869));
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
