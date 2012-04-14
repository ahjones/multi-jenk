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
{var temp__3695__auto____117523 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____117523))
{var cm__117524 = temp__3695__auto____117523;

return cljs.core.str.call(null,"[crateGroup=",cm__117524,"]");
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
var $__delegate = function (sel,p__117525){
var vec__117526__117527 = p__117525;
var context__117528 = cljs.core.nth.call(null,vec__117526__117527,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__117528)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__117528);
}
};
var $ = function (sel,var_args){
var p__117525 = null;
if (goog.isDef(var_args)) {
  p__117525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__117525);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__117529){
var sel = cljs.core.first(arglist__117529);
var p__117525 = cljs.core.rest(arglist__117529);
return $__delegate.call(this, sel, p__117525);
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
var G__117531 = null;
var G__117531__117532 = (function (this$,k){
var or__3548__auto____117530 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____117530))
{return or__3548__auto____117530;
} else
{return null;
}
});
var G__117531__117533 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__117531 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__117531__117532.call(this,this$,k);
case  3 :
return G__117531__117533.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__117531;
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
var G__117535 = null;
var G__117535__117536 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__117535__117537 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__117535 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__117535__117536.call(this,_,k);
case  3 :
return G__117535__117537.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__117535;
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
var attr__delegate = function ($elem,a,p__117539){
var vec__117540__117541 = p__117539;
var v__117542 = cljs.core.nth.call(null,vec__117540__117541,0,null);

var a__117543 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__117542)))
{return $elem.attr(a__117543);
} else
{return $elem.attr(a__117543,v__117542);
}
};
var attr = function ($elem,a,var_args){
var p__117539 = null;
if (goog.isDef(var_args)) {
  p__117539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__117539);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__117544){
var $elem = cljs.core.first(arglist__117544);
var a = cljs.core.first(cljs.core.next(arglist__117544));
var p__117539 = cljs.core.rest(cljs.core.next(arglist__117544));
return attr__delegate.call(this, $elem, a, p__117539);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__117545){
var vec__117546__117547 = p__117545;
var v__117548 = cljs.core.nth.call(null,vec__117546__117547,0,null);

var k__117549 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__117548)))
{return $elem.data(k__117549);
} else
{return $elem.data(k__117549,v__117548);
}
};
var data = function ($elem,k,var_args){
var p__117545 = null;
if (goog.isDef(var_args)) {
  p__117545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__117545);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__117550){
var $elem = cljs.core.first(arglist__117550);
var k = cljs.core.first(cljs.core.next(arglist__117550));
var p__117545 = cljs.core.rest(cljs.core.next(arglist__117550));
return data__delegate.call(this, $elem, k, p__117545);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__117551 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__117551);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__117552 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__117552);
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
var hide__delegate = function ($elem,p__117553){
var vec__117554__117555 = p__117553;
var speed__117556 = cljs.core.nth.call(null,vec__117554__117555,0,null);
var on_finish__117557 = cljs.core.nth.call(null,vec__117554__117555,1,null);

return $elem.hide(speed__117556,on_finish__117557);
};
var hide = function ($elem,var_args){
var p__117553 = null;
if (goog.isDef(var_args)) {
  p__117553 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__117553);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__117558){
var $elem = cljs.core.first(arglist__117558);
var p__117553 = cljs.core.rest(arglist__117558);
return hide__delegate.call(this, $elem, p__117553);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__117559){
var vec__117560__117561 = p__117559;
var speed__117562 = cljs.core.nth.call(null,vec__117560__117561,0,null);
var on_finish__117563 = cljs.core.nth.call(null,vec__117560__117561,1,null);

return $elem.show(speed__117562,on_finish__117563);
};
var show = function ($elem,var_args){
var p__117559 = null;
if (goog.isDef(var_args)) {
  p__117559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__117559);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__117564){
var $elem = cljs.core.first(arglist__117564);
var p__117559 = cljs.core.rest(arglist__117564);
return show__delegate.call(this, $elem, p__117559);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__117565){
var vec__117566__117567 = p__117565;
var speed__117568 = cljs.core.nth.call(null,vec__117566__117567,0,null);
var on_finish__117569 = cljs.core.nth.call(null,vec__117566__117567,1,null);

return $elem.toggle(speed__117568,on_finish__117569);
};
var toggle = function ($elem,var_args){
var p__117565 = null;
if (goog.isDef(var_args)) {
  p__117565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__117565);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__117570){
var $elem = cljs.core.first(arglist__117570);
var p__117565 = cljs.core.rest(arglist__117570);
return toggle__delegate.call(this, $elem, p__117565);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__117571){
var vec__117572__117573 = p__117571;
var speed__117574 = cljs.core.nth.call(null,vec__117572__117573,0,null);
var on_finish__117575 = cljs.core.nth.call(null,vec__117572__117573,1,null);

return $elem.fadeOut(speed__117574,on_finish__117575);
};
var fade_out = function ($elem,var_args){
var p__117571 = null;
if (goog.isDef(var_args)) {
  p__117571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__117571);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__117576){
var $elem = cljs.core.first(arglist__117576);
var p__117571 = cljs.core.rest(arglist__117576);
return fade_out__delegate.call(this, $elem, p__117571);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__117577){
var vec__117578__117579 = p__117577;
var speed__117580 = cljs.core.nth.call(null,vec__117578__117579,0,null);
var on_finish__117581 = cljs.core.nth.call(null,vec__117578__117579,1,null);

return $elem.fadeIn(speed__117580,on_finish__117581);
};
var fade_in = function ($elem,var_args){
var p__117577 = null;
if (goog.isDef(var_args)) {
  p__117577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__117577);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__117582){
var $elem = cljs.core.first(arglist__117582);
var p__117577 = cljs.core.rest(arglist__117582);
return fade_in__delegate.call(this, $elem, p__117577);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__117583){
var vec__117584__117585 = p__117583;
var speed__117586 = cljs.core.nth.call(null,vec__117584__117585,0,null);
var on_finish__117587 = cljs.core.nth.call(null,vec__117584__117585,1,null);

return $elem.slideUp(speed__117586,on_finish__117587);
};
var slide_up = function ($elem,var_args){
var p__117583 = null;
if (goog.isDef(var_args)) {
  p__117583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__117583);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__117588){
var $elem = cljs.core.first(arglist__117588);
var p__117583 = cljs.core.rest(arglist__117588);
return slide_up__delegate.call(this, $elem, p__117583);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__117589){
var vec__117590__117591 = p__117589;
var speed__117592 = cljs.core.nth.call(null,vec__117590__117591,0,null);
var on_finish__117593 = cljs.core.nth.call(null,vec__117590__117591,1,null);

return $elem.slideDown(speed__117592,on_finish__117593);
};
var slide_down = function ($elem,var_args){
var p__117589 = null;
if (goog.isDef(var_args)) {
  p__117589 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__117589);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__117594){
var $elem = cljs.core.first(arglist__117594);
var p__117589 = cljs.core.rest(arglist__117594);
return slide_down__delegate.call(this, $elem, p__117589);
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
var val__delegate = function ($elem,p__117595){
var vec__117596__117597 = p__117595;
var v__117598 = cljs.core.nth.call(null,vec__117596__117597,0,null);

if(cljs.core.truth_(v__117598))
{return $elem.val(v__117598);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__117595 = null;
if (goog.isDef(var_args)) {
  p__117595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__117595);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__117599){
var $elem = cljs.core.first(arglist__117599);
var p__117595 = cljs.core.rest(arglist__117599);
return val__delegate.call(this, $elem, p__117595);
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
jayq.core.xhr = (function xhr(p__117600,content,callback){
var vec__117601__117602 = p__117600;
var method__117603 = cljs.core.nth.call(null,vec__117601__117602,0,null);
var uri__117604 = cljs.core.nth.call(null,vec__117601__117602,1,null);

var params__117605 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__117603)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__117604,params__117605);
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
var on__delegate = function ($elem,events,p__117606){
var vec__117607__117608 = p__117606;
var sel__117609 = cljs.core.nth.call(null,vec__117607__117608,0,null);
var data__117610 = cljs.core.nth.call(null,vec__117607__117608,1,null);
var handler__117611 = cljs.core.nth.call(null,vec__117607__117608,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__117609),data__117610,handler__117611);
};
var on = function ($elem,events,var_args){
var p__117606 = null;
if (goog.isDef(var_args)) {
  p__117606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__117606);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__117612){
var $elem = cljs.core.first(arglist__117612);
var events = cljs.core.first(cljs.core.next(arglist__117612));
var p__117606 = cljs.core.rest(cljs.core.next(arglist__117612));
return on__delegate.call(this, $elem, events, p__117606);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__117613){
var vec__117614__117615 = p__117613;
var sel__117616 = cljs.core.nth.call(null,vec__117614__117615,0,null);
var data__117617 = cljs.core.nth.call(null,vec__117614__117615,1,null);
var handler__117618 = cljs.core.nth.call(null,vec__117614__117615,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__117616),data__117617,handler__117618);
};
var one = function ($elem,events,var_args){
var p__117613 = null;
if (goog.isDef(var_args)) {
  p__117613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__117613);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__117619){
var $elem = cljs.core.first(arglist__117619);
var events = cljs.core.first(cljs.core.next(arglist__117619));
var p__117613 = cljs.core.rest(cljs.core.next(arglist__117619));
return one__delegate.call(this, $elem, events, p__117613);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__117620){
var vec__117621__117622 = p__117620;
var sel__117623 = cljs.core.nth.call(null,vec__117621__117622,0,null);
var handler__117624 = cljs.core.nth.call(null,vec__117621__117622,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__117623),handler__117624);
};
var off = function ($elem,events,var_args){
var p__117620 = null;
if (goog.isDef(var_args)) {
  p__117620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__117620);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__117625){
var $elem = cljs.core.first(arglist__117625);
var events = cljs.core.first(cljs.core.next(arglist__117625));
var p__117620 = cljs.core.rest(cljs.core.next(arglist__117625));
return off__delegate.call(this, $elem, events, p__117620);
});
return off;
})()
;
