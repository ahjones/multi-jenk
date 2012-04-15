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
{var temp__3695__auto____9550 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9550))
{var cm__9551 = temp__3695__auto____9550;

return cljs.core.str.call(null,"[crateGroup=",cm__9551,"]");
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
var $__delegate = function (sel,p__9552){
var vec__9553__9554 = p__9552;
var context__9555 = cljs.core.nth.call(null,vec__9553__9554,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9555)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9555);
}
};
var $ = function (sel,var_args){
var p__9552 = null;
if (goog.isDef(var_args)) {
  p__9552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9552);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9556){
var sel = cljs.core.first(arglist__9556);
var p__9552 = cljs.core.rest(arglist__9556);
return $__delegate.call(this, sel, p__9552);
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
var G__9558 = null;
var G__9558__9559 = (function (this$,k){
var or__3548__auto____9557 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9557))
{return or__3548__auto____9557;
} else
{return null;
}
});
var G__9558__9560 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9558 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9558__9559.call(this,this$,k);
case  3 :
return G__9558__9560.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9558;
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
var G__9562 = null;
var G__9562__9563 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9562__9564 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9562 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9562__9563.call(this,_,k);
case  3 :
return G__9562__9564.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9562;
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
var attr__delegate = function ($elem,a,p__9566){
var vec__9567__9568 = p__9566;
var v__9569 = cljs.core.nth.call(null,vec__9567__9568,0,null);

var a__9570 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9569)))
{return $elem.attr(a__9570);
} else
{return $elem.attr(a__9570,v__9569);
}
};
var attr = function ($elem,a,var_args){
var p__9566 = null;
if (goog.isDef(var_args)) {
  p__9566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9566);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9571){
var $elem = cljs.core.first(arglist__9571);
var a = cljs.core.first(cljs.core.next(arglist__9571));
var p__9566 = cljs.core.rest(cljs.core.next(arglist__9571));
return attr__delegate.call(this, $elem, a, p__9566);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9572){
var vec__9573__9574 = p__9572;
var v__9575 = cljs.core.nth.call(null,vec__9573__9574,0,null);

var k__9576 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9575)))
{return $elem.data(k__9576);
} else
{return $elem.data(k__9576,v__9575);
}
};
var data = function ($elem,k,var_args){
var p__9572 = null;
if (goog.isDef(var_args)) {
  p__9572 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9572);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9577){
var $elem = cljs.core.first(arglist__9577);
var k = cljs.core.first(cljs.core.next(arglist__9577));
var p__9572 = cljs.core.rest(cljs.core.next(arglist__9577));
return data__delegate.call(this, $elem, k, p__9572);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__9578 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9578);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9579 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9579);
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
var hide__delegate = function ($elem,p__9580){
var vec__9581__9582 = p__9580;
var speed__9583 = cljs.core.nth.call(null,vec__9581__9582,0,null);
var on_finish__9584 = cljs.core.nth.call(null,vec__9581__9582,1,null);

return $elem.hide(speed__9583,on_finish__9584);
};
var hide = function ($elem,var_args){
var p__9580 = null;
if (goog.isDef(var_args)) {
  p__9580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9580);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9585){
var $elem = cljs.core.first(arglist__9585);
var p__9580 = cljs.core.rest(arglist__9585);
return hide__delegate.call(this, $elem, p__9580);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9586){
var vec__9587__9588 = p__9586;
var speed__9589 = cljs.core.nth.call(null,vec__9587__9588,0,null);
var on_finish__9590 = cljs.core.nth.call(null,vec__9587__9588,1,null);

return $elem.show(speed__9589,on_finish__9590);
};
var show = function ($elem,var_args){
var p__9586 = null;
if (goog.isDef(var_args)) {
  p__9586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9586);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9591){
var $elem = cljs.core.first(arglist__9591);
var p__9586 = cljs.core.rest(arglist__9591);
return show__delegate.call(this, $elem, p__9586);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9592){
var vec__9593__9594 = p__9592;
var speed__9595 = cljs.core.nth.call(null,vec__9593__9594,0,null);
var on_finish__9596 = cljs.core.nth.call(null,vec__9593__9594,1,null);

return $elem.toggle(speed__9595,on_finish__9596);
};
var toggle = function ($elem,var_args){
var p__9592 = null;
if (goog.isDef(var_args)) {
  p__9592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9592);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9597){
var $elem = cljs.core.first(arglist__9597);
var p__9592 = cljs.core.rest(arglist__9597);
return toggle__delegate.call(this, $elem, p__9592);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9598){
var vec__9599__9600 = p__9598;
var speed__9601 = cljs.core.nth.call(null,vec__9599__9600,0,null);
var on_finish__9602 = cljs.core.nth.call(null,vec__9599__9600,1,null);

return $elem.fadeOut(speed__9601,on_finish__9602);
};
var fade_out = function ($elem,var_args){
var p__9598 = null;
if (goog.isDef(var_args)) {
  p__9598 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9598);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9603){
var $elem = cljs.core.first(arglist__9603);
var p__9598 = cljs.core.rest(arglist__9603);
return fade_out__delegate.call(this, $elem, p__9598);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9604){
var vec__9605__9606 = p__9604;
var speed__9607 = cljs.core.nth.call(null,vec__9605__9606,0,null);
var on_finish__9608 = cljs.core.nth.call(null,vec__9605__9606,1,null);

return $elem.fadeIn(speed__9607,on_finish__9608);
};
var fade_in = function ($elem,var_args){
var p__9604 = null;
if (goog.isDef(var_args)) {
  p__9604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9604);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9609){
var $elem = cljs.core.first(arglist__9609);
var p__9604 = cljs.core.rest(arglist__9609);
return fade_in__delegate.call(this, $elem, p__9604);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9610){
var vec__9611__9612 = p__9610;
var speed__9613 = cljs.core.nth.call(null,vec__9611__9612,0,null);
var on_finish__9614 = cljs.core.nth.call(null,vec__9611__9612,1,null);

return $elem.slideUp(speed__9613,on_finish__9614);
};
var slide_up = function ($elem,var_args){
var p__9610 = null;
if (goog.isDef(var_args)) {
  p__9610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9610);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9615){
var $elem = cljs.core.first(arglist__9615);
var p__9610 = cljs.core.rest(arglist__9615);
return slide_up__delegate.call(this, $elem, p__9610);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9616){
var vec__9617__9618 = p__9616;
var speed__9619 = cljs.core.nth.call(null,vec__9617__9618,0,null);
var on_finish__9620 = cljs.core.nth.call(null,vec__9617__9618,1,null);

return $elem.slideDown(speed__9619,on_finish__9620);
};
var slide_down = function ($elem,var_args){
var p__9616 = null;
if (goog.isDef(var_args)) {
  p__9616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9616);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9621){
var $elem = cljs.core.first(arglist__9621);
var p__9616 = cljs.core.rest(arglist__9621);
return slide_down__delegate.call(this, $elem, p__9616);
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
var val__delegate = function ($elem,p__9622){
var vec__9623__9624 = p__9622;
var v__9625 = cljs.core.nth.call(null,vec__9623__9624,0,null);

if(cljs.core.truth_(v__9625))
{return $elem.val(v__9625);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9622 = null;
if (goog.isDef(var_args)) {
  p__9622 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9622);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9626){
var $elem = cljs.core.first(arglist__9626);
var p__9622 = cljs.core.rest(arglist__9626);
return val__delegate.call(this, $elem, p__9622);
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
jayq.core.xhr = (function xhr(p__9627,content,callback){
var vec__9628__9629 = p__9627;
var method__9630 = cljs.core.nth.call(null,vec__9628__9629,0,null);
var uri__9631 = cljs.core.nth.call(null,vec__9628__9629,1,null);

var params__9632 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9630)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9631,params__9632);
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
var on__delegate = function ($elem,events,p__9633){
var vec__9634__9635 = p__9633;
var sel__9636 = cljs.core.nth.call(null,vec__9634__9635,0,null);
var data__9637 = cljs.core.nth.call(null,vec__9634__9635,1,null);
var handler__9638 = cljs.core.nth.call(null,vec__9634__9635,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9636),data__9637,handler__9638);
};
var on = function ($elem,events,var_args){
var p__9633 = null;
if (goog.isDef(var_args)) {
  p__9633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9633);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9639){
var $elem = cljs.core.first(arglist__9639);
var events = cljs.core.first(cljs.core.next(arglist__9639));
var p__9633 = cljs.core.rest(cljs.core.next(arglist__9639));
return on__delegate.call(this, $elem, events, p__9633);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9640){
var vec__9641__9642 = p__9640;
var sel__9643 = cljs.core.nth.call(null,vec__9641__9642,0,null);
var data__9644 = cljs.core.nth.call(null,vec__9641__9642,1,null);
var handler__9645 = cljs.core.nth.call(null,vec__9641__9642,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9643),data__9644,handler__9645);
};
var one = function ($elem,events,var_args){
var p__9640 = null;
if (goog.isDef(var_args)) {
  p__9640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9640);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9646){
var $elem = cljs.core.first(arglist__9646);
var events = cljs.core.first(cljs.core.next(arglist__9646));
var p__9640 = cljs.core.rest(cljs.core.next(arglist__9646));
return one__delegate.call(this, $elem, events, p__9640);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9647){
var vec__9648__9649 = p__9647;
var sel__9650 = cljs.core.nth.call(null,vec__9648__9649,0,null);
var handler__9651 = cljs.core.nth.call(null,vec__9648__9649,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9650),handler__9651);
};
var off = function ($elem,events,var_args){
var p__9647 = null;
if (goog.isDef(var_args)) {
  p__9647 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9647);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9652){
var $elem = cljs.core.first(arglist__9652);
var events = cljs.core.first(cljs.core.next(arglist__9652));
var p__9647 = cljs.core.rest(cljs.core.next(arglist__9652));
return off__delegate.call(this, $elem, events, p__9647);
});
return off;
})()
;
