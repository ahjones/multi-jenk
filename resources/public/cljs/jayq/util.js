goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__7209 = cljs.core.js_obj.call(null);

var G__7210__7211 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__7210__7211))
{var G__7213__7215 = cljs.core.first.call(null,G__7210__7211);
var vec__7214__7216 = G__7213__7215;
var k__7217 = cljs.core.nth.call(null,vec__7214__7216,0,null);
var v__7218 = cljs.core.nth.call(null,vec__7214__7216,1,null);
var G__7210__7219 = G__7210__7211;

var G__7213__7220 = G__7213__7215;
var G__7210__7221 = G__7210__7219;

while(true){
var vec__7222__7223 = G__7213__7220;
var k__7224 = cljs.core.nth.call(null,vec__7222__7223,0,null);
var v__7225 = cljs.core.nth.call(null,vec__7222__7223,1,null);
var G__7210__7226 = G__7210__7221;

(out__7209[cljs.core.name.call(null,k__7224)] = v__7225);
var temp__3698__auto____7227 = cljs.core.next.call(null,G__7210__7226);

if(cljs.core.truth_(temp__3698__auto____7227))
{var G__7210__7228 = temp__3698__auto____7227;

{
var G__7229 = cljs.core.first.call(null,G__7210__7228);
var G__7230 = G__7210__7228;
G__7213__7220 = G__7229;
G__7210__7221 = G__7230;
continue;
}
} else
{}
break;
}
} else
{}
return out__7209;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__7231 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__7231);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__7232){
var v = cljs.core.first(arglist__7232);
var text = cljs.core.rest(arglist__7232);
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
{return cljs.core.reduce.call(null,(function (m,p__7233){
var vec__7234__7235 = p__7233;
var k__7236 = cljs.core.nth.call(null,vec__7234__7235,0,null);
var v__7237 = cljs.core.nth.call(null,vec__7234__7235,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__7236),clj__GT_js.call(null,v__7237));
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
