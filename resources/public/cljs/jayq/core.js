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
{var temp__3695__auto____81435 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____81435))
{var cm__81436 = temp__3695__auto____81435;

return cljs.core.str.call(null,"[crateGroup=",cm__81436,"]");
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
var $__delegate = function (sel,p__81437){
var vec__81438__81439 = p__81437;
var context__81440 = cljs.core.nth.call(null,vec__81438__81439,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__81440)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__81440);
}
};
var $ = function (sel,var_args){
var p__81437 = null;
if (goog.isDef(var_args)) {
  p__81437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__81437);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__81441){
var sel = cljs.core.first(arglist__81441);
var p__81437 = cljs.core.rest(arglist__81441);
return $__delegate.call(this, sel, p__81437);
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
var G__81443 = null;
var G__81443__81444 = (function (this$,k){
var or__3548__auto____81442 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____81442))
{return or__3548__auto____81442;
} else
{return null;
}
});
var G__81443__81445 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__81443 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__81443__81444.call(this,this$,k);
case  3 :
return G__81443__81445.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__81443;
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
var G__81447 = null;
var G__81447__81448 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__81447__81449 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__81447 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__81447__81448.call(this,_,k);
case  3 :
return G__81447__81449.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__81447;
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
var attr__delegate = function ($elem,a,p__81451){
var vec__81452__81453 = p__81451;
var v__81454 = cljs.core.nth.call(null,vec__81452__81453,0,null);

var a__81455 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__81454)))
{return $elem.attr(a__81455);
} else
{return $elem.attr(a__81455,v__81454);
}
};
var attr = function ($elem,a,var_args){
var p__81451 = null;
if (goog.isDef(var_args)) {
  p__81451 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__81451);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__81456){
var $elem = cljs.core.first(arglist__81456);
var a = cljs.core.first(cljs.core.next(arglist__81456));
var p__81451 = cljs.core.rest(cljs.core.next(arglist__81456));
return attr__delegate.call(this, $elem, a, p__81451);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__81457){
var vec__81458__81459 = p__81457;
var v__81460 = cljs.core.nth.call(null,vec__81458__81459,0,null);

var k__81461 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__81460)))
{return $elem.data(k__81461);
} else
{return $elem.data(k__81461,v__81460);
}
};
var data = function ($elem,k,var_args){
var p__81457 = null;
if (goog.isDef(var_args)) {
  p__81457 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__81457);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__81462){
var $elem = cljs.core.first(arglist__81462);
var k = cljs.core.first(cljs.core.next(arglist__81462));
var p__81457 = cljs.core.rest(cljs.core.next(arglist__81462));
return data__delegate.call(this, $elem, k, p__81457);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__81463 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__81463);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__81464 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__81464);
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
var hide__delegate = function ($elem,p__81465){
var vec__81466__81467 = p__81465;
var speed__81468 = cljs.core.nth.call(null,vec__81466__81467,0,null);
var on_finish__81469 = cljs.core.nth.call(null,vec__81466__81467,1,null);

return $elem.hide(speed__81468,on_finish__81469);
};
var hide = function ($elem,var_args){
var p__81465 = null;
if (goog.isDef(var_args)) {
  p__81465 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__81465);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__81470){
var $elem = cljs.core.first(arglist__81470);
var p__81465 = cljs.core.rest(arglist__81470);
return hide__delegate.call(this, $elem, p__81465);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__81471){
var vec__81472__81473 = p__81471;
var speed__81474 = cljs.core.nth.call(null,vec__81472__81473,0,null);
var on_finish__81475 = cljs.core.nth.call(null,vec__81472__81473,1,null);

return $elem.show(speed__81474,on_finish__81475);
};
var show = function ($elem,var_args){
var p__81471 = null;
if (goog.isDef(var_args)) {
  p__81471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__81471);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__81476){
var $elem = cljs.core.first(arglist__81476);
var p__81471 = cljs.core.rest(arglist__81476);
return show__delegate.call(this, $elem, p__81471);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__81477){
var vec__81478__81479 = p__81477;
var speed__81480 = cljs.core.nth.call(null,vec__81478__81479,0,null);
var on_finish__81481 = cljs.core.nth.call(null,vec__81478__81479,1,null);

return $elem.toggle(speed__81480,on_finish__81481);
};
var toggle = function ($elem,var_args){
var p__81477 = null;
if (goog.isDef(var_args)) {
  p__81477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__81477);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__81482){
var $elem = cljs.core.first(arglist__81482);
var p__81477 = cljs.core.rest(arglist__81482);
return toggle__delegate.call(this, $elem, p__81477);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__81483){
var vec__81484__81485 = p__81483;
var speed__81486 = cljs.core.nth.call(null,vec__81484__81485,0,null);
var on_finish__81487 = cljs.core.nth.call(null,vec__81484__81485,1,null);

return $elem.fadeOut(speed__81486,on_finish__81487);
};
var fade_out = function ($elem,var_args){
var p__81483 = null;
if (goog.isDef(var_args)) {
  p__81483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__81483);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__81488){
var $elem = cljs.core.first(arglist__81488);
var p__81483 = cljs.core.rest(arglist__81488);
return fade_out__delegate.call(this, $elem, p__81483);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__81489){
var vec__81490__81491 = p__81489;
var speed__81492 = cljs.core.nth.call(null,vec__81490__81491,0,null);
var on_finish__81493 = cljs.core.nth.call(null,vec__81490__81491,1,null);

return $elem.fadeIn(speed__81492,on_finish__81493);
};
var fade_in = function ($elem,var_args){
var p__81489 = null;
if (goog.isDef(var_args)) {
  p__81489 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__81489);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__81494){
var $elem = cljs.core.first(arglist__81494);
var p__81489 = cljs.core.rest(arglist__81494);
return fade_in__delegate.call(this, $elem, p__81489);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__81495){
var vec__81496__81497 = p__81495;
var speed__81498 = cljs.core.nth.call(null,vec__81496__81497,0,null);
var on_finish__81499 = cljs.core.nth.call(null,vec__81496__81497,1,null);

return $elem.slideUp(speed__81498,on_finish__81499);
};
var slide_up = function ($elem,var_args){
var p__81495 = null;
if (goog.isDef(var_args)) {
  p__81495 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__81495);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__81500){
var $elem = cljs.core.first(arglist__81500);
var p__81495 = cljs.core.rest(arglist__81500);
return slide_up__delegate.call(this, $elem, p__81495);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__81501){
var vec__81502__81503 = p__81501;
var speed__81504 = cljs.core.nth.call(null,vec__81502__81503,0,null);
var on_finish__81505 = cljs.core.nth.call(null,vec__81502__81503,1,null);

return $elem.slideDown(speed__81504,on_finish__81505);
};
var slide_down = function ($elem,var_args){
var p__81501 = null;
if (goog.isDef(var_args)) {
  p__81501 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__81501);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__81506){
var $elem = cljs.core.first(arglist__81506);
var p__81501 = cljs.core.rest(arglist__81506);
return slide_down__delegate.call(this, $elem, p__81501);
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
var val__delegate = function ($elem,p__81507){
var vec__81508__81509 = p__81507;
var v__81510 = cljs.core.nth.call(null,vec__81508__81509,0,null);

if(cljs.core.truth_(v__81510))
{return $elem.val(v__81510);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__81507 = null;
if (goog.isDef(var_args)) {
  p__81507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__81507);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__81511){
var $elem = cljs.core.first(arglist__81511);
var p__81507 = cljs.core.rest(arglist__81511);
return val__delegate.call(this, $elem, p__81507);
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
jayq.core.xhr = (function xhr(p__81512,content,callback){
var vec__81513__81514 = p__81512;
var method__81515 = cljs.core.nth.call(null,vec__81513__81514,0,null);
var uri__81516 = cljs.core.nth.call(null,vec__81513__81514,1,null);

var params__81517 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__81515)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__81516,params__81517);
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
var on__delegate = function ($elem,events,p__81518){
var vec__81519__81520 = p__81518;
var sel__81521 = cljs.core.nth.call(null,vec__81519__81520,0,null);
var data__81522 = cljs.core.nth.call(null,vec__81519__81520,1,null);
var handler__81523 = cljs.core.nth.call(null,vec__81519__81520,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__81521),data__81522,handler__81523);
};
var on = function ($elem,events,var_args){
var p__81518 = null;
if (goog.isDef(var_args)) {
  p__81518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__81518);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__81524){
var $elem = cljs.core.first(arglist__81524);
var events = cljs.core.first(cljs.core.next(arglist__81524));
var p__81518 = cljs.core.rest(cljs.core.next(arglist__81524));
return on__delegate.call(this, $elem, events, p__81518);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__81525){
var vec__81526__81527 = p__81525;
var sel__81528 = cljs.core.nth.call(null,vec__81526__81527,0,null);
var data__81529 = cljs.core.nth.call(null,vec__81526__81527,1,null);
var handler__81530 = cljs.core.nth.call(null,vec__81526__81527,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__81528),data__81529,handler__81530);
};
var one = function ($elem,events,var_args){
var p__81525 = null;
if (goog.isDef(var_args)) {
  p__81525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__81525);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__81531){
var $elem = cljs.core.first(arglist__81531);
var events = cljs.core.first(cljs.core.next(arglist__81531));
var p__81525 = cljs.core.rest(cljs.core.next(arglist__81531));
return one__delegate.call(this, $elem, events, p__81525);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__81532){
var vec__81533__81534 = p__81532;
var sel__81535 = cljs.core.nth.call(null,vec__81533__81534,0,null);
var handler__81536 = cljs.core.nth.call(null,vec__81533__81534,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__81535),handler__81536);
};
var off = function ($elem,events,var_args){
var p__81532 = null;
if (goog.isDef(var_args)) {
  p__81532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__81532);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__81537){
var $elem = cljs.core.first(arglist__81537);
var events = cljs.core.first(cljs.core.next(arglist__81537));
var p__81532 = cljs.core.rest(cljs.core.next(arglist__81537));
return off__delegate.call(this, $elem, events, p__81532);
});
return off;
})()
;
