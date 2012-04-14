goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{var temp__3695__auto____175313 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____175313))
{var cm__175314 = temp__3695__auto____175313;

return cljs.core.str.call(null,"[crateGroup=",cm__175314,"]");
} else
{return sel;
}
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__175315){
var vec__175316__175317 = p__175315;
var context__175318 = cljs.core.nth.call(null,vec__175316__175317,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__175318)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__175318);
}
};
var $ = function (sel,var_args){
var p__175315 = null;
if (goog.isDef(var_args)) {
  p__175315 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__175315);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__175319){
var sel = cljs.core.first(arglist__175319);
var p__175315 = cljs.core.rest(arglist__175319);
return $__delegate.call(this, sel, p__175315);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__175321 = null;
var G__175321__175322 = (function (this$,k){
var or__3548__auto____175320 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____175320))
{return or__3548__auto____175320;
} else
{return null;
}
});
var G__175321__175323 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__175321 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__175321__175322.call(this,this$,k);
case  3 :
return G__175321__175323.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__175321;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__175325 = null;
var G__175325__175326 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__175325__175327 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__175325 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__175325__175326.call(this,_,k);
case  3 :
return G__175325__175327.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__175325;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__175329){
var vec__175330__175331 = p__175329;
var v__175332 = cljs.core.nth.call(null,vec__175330__175331,0,null);

var a__175333 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__175332)))
{return $elem.attr(a__175333);
} else
{return $elem.attr(a__175333,v__175332);
}
};
var attr = function ($elem,a,var_args){
var p__175329 = null;
if (goog.isDef(var_args)) {
  p__175329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__175329);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__175334){
var $elem = cljs.core.first(arglist__175334);
var a = cljs.core.first(cljs.core.next(arglist__175334));
var p__175329 = cljs.core.rest(cljs.core.next(arglist__175334));
return attr__delegate.call(this, $elem, a, p__175329);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__175335){
var vec__175336__175337 = p__175335;
var v__175338 = cljs.core.nth.call(null,vec__175336__175337,0,null);

var k__175339 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__175338)))
{return $elem.data(k__175339);
} else
{return $elem.data(k__175339,v__175338);
}
};
var data = function ($elem,k,var_args){
var p__175335 = null;
if (goog.isDef(var_args)) {
  p__175335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__175335);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__175340){
var $elem = cljs.core.first(arglist__175340);
var k = cljs.core.first(cljs.core.next(arglist__175340));
var p__175335 = cljs.core.rest(cljs.core.next(arglist__175340));
return data__delegate.call(this, $elem, k, p__175335);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__175341 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__175341);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__175342 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__175342);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__175343){
var vec__175344__175345 = p__175343;
var speed__175346 = cljs.core.nth.call(null,vec__175344__175345,0,null);
var on_finish__175347 = cljs.core.nth.call(null,vec__175344__175345,1,null);

return $elem.hide(speed__175346,on_finish__175347);
};
var hide = function ($elem,var_args){
var p__175343 = null;
if (goog.isDef(var_args)) {
  p__175343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__175343);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__175348){
var $elem = cljs.core.first(arglist__175348);
var p__175343 = cljs.core.rest(arglist__175348);
return hide__delegate.call(this, $elem, p__175343);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__175349){
var vec__175350__175351 = p__175349;
var speed__175352 = cljs.core.nth.call(null,vec__175350__175351,0,null);
var on_finish__175353 = cljs.core.nth.call(null,vec__175350__175351,1,null);

return $elem.show(speed__175352,on_finish__175353);
};
var show = function ($elem,var_args){
var p__175349 = null;
if (goog.isDef(var_args)) {
  p__175349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__175349);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__175354){
var $elem = cljs.core.first(arglist__175354);
var p__175349 = cljs.core.rest(arglist__175354);
return show__delegate.call(this, $elem, p__175349);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__175355){
var vec__175356__175357 = p__175355;
var speed__175358 = cljs.core.nth.call(null,vec__175356__175357,0,null);
var on_finish__175359 = cljs.core.nth.call(null,vec__175356__175357,1,null);

return $elem.toggle(speed__175358,on_finish__175359);
};
var toggle = function ($elem,var_args){
var p__175355 = null;
if (goog.isDef(var_args)) {
  p__175355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__175355);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__175360){
var $elem = cljs.core.first(arglist__175360);
var p__175355 = cljs.core.rest(arglist__175360);
return toggle__delegate.call(this, $elem, p__175355);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__175361){
var vec__175362__175363 = p__175361;
var speed__175364 = cljs.core.nth.call(null,vec__175362__175363,0,null);
var on_finish__175365 = cljs.core.nth.call(null,vec__175362__175363,1,null);

return $elem.fadeOut(speed__175364,on_finish__175365);
};
var fade_out = function ($elem,var_args){
var p__175361 = null;
if (goog.isDef(var_args)) {
  p__175361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__175361);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__175366){
var $elem = cljs.core.first(arglist__175366);
var p__175361 = cljs.core.rest(arglist__175366);
return fade_out__delegate.call(this, $elem, p__175361);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__175367){
var vec__175368__175369 = p__175367;
var speed__175370 = cljs.core.nth.call(null,vec__175368__175369,0,null);
var on_finish__175371 = cljs.core.nth.call(null,vec__175368__175369,1,null);

return $elem.fadeIn(speed__175370,on_finish__175371);
};
var fade_in = function ($elem,var_args){
var p__175367 = null;
if (goog.isDef(var_args)) {
  p__175367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__175367);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__175372){
var $elem = cljs.core.first(arglist__175372);
var p__175367 = cljs.core.rest(arglist__175372);
return fade_in__delegate.call(this, $elem, p__175367);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__175373){
var vec__175374__175375 = p__175373;
var speed__175376 = cljs.core.nth.call(null,vec__175374__175375,0,null);
var on_finish__175377 = cljs.core.nth.call(null,vec__175374__175375,1,null);

return $elem.slideUp(speed__175376,on_finish__175377);
};
var slide_up = function ($elem,var_args){
var p__175373 = null;
if (goog.isDef(var_args)) {
  p__175373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__175373);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__175378){
var $elem = cljs.core.first(arglist__175378);
var p__175373 = cljs.core.rest(arglist__175378);
return slide_up__delegate.call(this, $elem, p__175373);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__175379){
var vec__175380__175381 = p__175379;
var speed__175382 = cljs.core.nth.call(null,vec__175380__175381,0,null);
var on_finish__175383 = cljs.core.nth.call(null,vec__175380__175381,1,null);

return $elem.slideDown(speed__175382,on_finish__175383);
};
var slide_down = function ($elem,var_args){
var p__175379 = null;
if (goog.isDef(var_args)) {
  p__175379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__175379);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__175384){
var $elem = cljs.core.first(arglist__175384);
var p__175379 = cljs.core.rest(arglist__175384);
return slide_down__delegate.call(this, $elem, p__175379);
});
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__175385){
var vec__175386__175387 = p__175385;
var v__175388 = cljs.core.nth.call(null,vec__175386__175387,0,null);

if(cljs.core.truth_(v__175388))
{return $elem.val(v__175388);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__175385 = null;
if (goog.isDef(var_args)) {
  p__175385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__175385);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__175389){
var $elem = cljs.core.first(arglist__175389);
var p__175385 = cljs.core.rest(arglist__175389);
return val__delegate.call(this, $elem, p__175385);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__175390,content,callback){
var vec__175391__175392 = p__175390;
var method__175393 = cljs.core.nth.call(null,vec__175391__175392,0,null);
var uri__175394 = cljs.core.nth.call(null,vec__175391__175392,1,null);

var params__175395 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__175393)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__175394,params__175395);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e)))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,e)))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Unknown event type: ",e)));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__175396){
var vec__175397__175398 = p__175396;
var sel__175399 = cljs.core.nth.call(null,vec__175397__175398,0,null);
var data__175400 = cljs.core.nth.call(null,vec__175397__175398,1,null);
var handler__175401 = cljs.core.nth.call(null,vec__175397__175398,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__175399),data__175400,handler__175401);
};
var on = function ($elem,events,var_args){
var p__175396 = null;
if (goog.isDef(var_args)) {
  p__175396 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__175396);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__175402){
var $elem = cljs.core.first(arglist__175402);
var events = cljs.core.first(cljs.core.next(arglist__175402));
var p__175396 = cljs.core.rest(cljs.core.next(arglist__175402));
return on__delegate.call(this, $elem, events, p__175396);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__175403){
var vec__175404__175405 = p__175403;
var sel__175406 = cljs.core.nth.call(null,vec__175404__175405,0,null);
var data__175407 = cljs.core.nth.call(null,vec__175404__175405,1,null);
var handler__175408 = cljs.core.nth.call(null,vec__175404__175405,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__175406),data__175407,handler__175408);
};
var one = function ($elem,events,var_args){
var p__175403 = null;
if (goog.isDef(var_args)) {
  p__175403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__175403);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__175409){
var $elem = cljs.core.first(arglist__175409);
var events = cljs.core.first(cljs.core.next(arglist__175409));
var p__175403 = cljs.core.rest(cljs.core.next(arglist__175409));
return one__delegate.call(this, $elem, events, p__175403);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__175410){
var vec__175411__175412 = p__175410;
var sel__175413 = cljs.core.nth.call(null,vec__175411__175412,0,null);
var handler__175414 = cljs.core.nth.call(null,vec__175411__175412,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__175413),handler__175414);
};
var off = function ($elem,events,var_args){
var p__175410 = null;
if (goog.isDef(var_args)) {
  p__175410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__175410);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__175415){
var $elem = cljs.core.first(arglist__175415);
var events = cljs.core.first(cljs.core.next(arglist__175415));
var p__175410 = cljs.core.rest(cljs.core.next(arglist__175415));
return off__delegate.call(this, $elem, events, p__175410);
});
return off;
})()
;
