goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__16124 = cljs.core.js_obj.call(null);

var G__16125__16126 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__16125__16126))
{var G__16128__16130 = cljs.core.first.call(null,G__16125__16126);
var vec__16129__16131 = G__16128__16130;
var k__16132 = cljs.core.nth.call(null,vec__16129__16131,0,null);
var v__16133 = cljs.core.nth.call(null,vec__16129__16131,1,null);
var G__16125__16134 = G__16125__16126;

var G__16128__16135 = G__16128__16130;
var G__16125__16136 = G__16125__16134;

while(true){
var vec__16137__16138 = G__16128__16135;
var k__16139 = cljs.core.nth.call(null,vec__16137__16138,0,null);
var v__16140 = cljs.core.nth.call(null,vec__16137__16138,1,null);
var G__16125__16141 = G__16125__16136;

(out__16124[cljs.core.name.call(null,k__16139)] = v__16140);
var temp__3698__auto____16142 = cljs.core.next.call(null,G__16125__16141);

if(cljs.core.truth_(temp__3698__auto____16142))
{var G__16125__16143 = temp__3698__auto____16142;

{
var G__16144 = cljs.core.first.call(null,G__16125__16143);
var G__16145 = G__16125__16143;
G__16128__16135 = G__16144;
G__16125__16136 = G__16145;
continue;
}
} else
{}
break;
}
} else
{}
return out__16124;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__16146 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__16146);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__16147){
var v = cljs.core.first(arglist__16147);
var text = cljs.core.rest(arglist__16147);
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
{return cljs.core.reduce.call(null,(function (m,p__16148){
var vec__16149__16150 = p__16148;
var k__16151 = cljs.core.nth.call(null,vec__16149__16150,0,null);
var v__16152 = cljs.core.nth.call(null,vec__16149__16150,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__16151),clj__GT_js.call(null,v__16152));
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
