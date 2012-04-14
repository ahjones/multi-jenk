goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__300272 = cljs.core.js_obj.call(null);

var G__300273__300274 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__300273__300274))
{var G__300276__300278 = cljs.core.first.call(null,G__300273__300274);
var vec__300277__300279 = G__300276__300278;
var k__300280 = cljs.core.nth.call(null,vec__300277__300279,0,null);
var v__300281 = cljs.core.nth.call(null,vec__300277__300279,1,null);
var G__300273__300282 = G__300273__300274;

var G__300276__300283 = G__300276__300278;
var G__300273__300284 = G__300273__300282;

while(true){
var vec__300285__300286 = G__300276__300283;
var k__300287 = cljs.core.nth.call(null,vec__300285__300286,0,null);
var v__300288 = cljs.core.nth.call(null,vec__300285__300286,1,null);
var G__300273__300289 = G__300273__300284;

(out__300272[cljs.core.name.call(null,k__300287)] = v__300288);
var temp__3698__auto____300290 = cljs.core.next.call(null,G__300273__300289);

if(cljs.core.truth_(temp__3698__auto____300290))
{var G__300273__300291 = temp__3698__auto____300290;

{
var G__300292 = cljs.core.first.call(null,G__300273__300291);
var G__300293 = G__300273__300291;
G__300276__300283 = G__300292;
G__300273__300284 = G__300293;
continue;
}
} else
{}
break;
}
} else
{}
return out__300272;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__300294 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__300294);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__300295){
var v = cljs.core.first(arglist__300295);
var text = cljs.core.rest(arglist__300295);
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
{return cljs.core.reduce.call(null,(function (m,p__300296){
var vec__300297__300298 = p__300296;
var k__300299 = cljs.core.nth.call(null,vec__300297__300298,0,null);
var v__300300 = cljs.core.nth.call(null,vec__300297__300298,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__300299),clj__GT_js.call(null,v__300300));
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
