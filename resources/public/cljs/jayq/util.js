goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__246248 = cljs.core.js_obj.call(null);

var G__246249__246250 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__246249__246250))
{var G__246252__246254 = cljs.core.first.call(null,G__246249__246250);
var vec__246253__246255 = G__246252__246254;
var k__246256 = cljs.core.nth.call(null,vec__246253__246255,0,null);
var v__246257 = cljs.core.nth.call(null,vec__246253__246255,1,null);
var G__246249__246258 = G__246249__246250;

var G__246252__246259 = G__246252__246254;
var G__246249__246260 = G__246249__246258;

while(true){
var vec__246261__246262 = G__246252__246259;
var k__246263 = cljs.core.nth.call(null,vec__246261__246262,0,null);
var v__246264 = cljs.core.nth.call(null,vec__246261__246262,1,null);
var G__246249__246265 = G__246249__246260;

(out__246248[cljs.core.name.call(null,k__246263)] = v__246264);
var temp__3698__auto____246266 = cljs.core.next.call(null,G__246249__246265);

if(cljs.core.truth_(temp__3698__auto____246266))
{var G__246249__246267 = temp__3698__auto____246266;

{
var G__246268 = cljs.core.first.call(null,G__246249__246267);
var G__246269 = G__246249__246267;
G__246252__246259 = G__246268;
G__246249__246260 = G__246269;
continue;
}
} else
{}
break;
}
} else
{}
return out__246248;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__246270 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__246270);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__246271){
var v = cljs.core.first(arglist__246271);
var text = cljs.core.rest(arglist__246271);
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
{return cljs.core.reduce.call(null,(function (m,p__246272){
var vec__246273__246274 = p__246272;
var k__246275 = cljs.core.nth.call(null,vec__246273__246274,0,null);
var v__246276 = cljs.core.nth.call(null,vec__246273__246274,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__246275),clj__GT_js.call(null,v__246276));
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
