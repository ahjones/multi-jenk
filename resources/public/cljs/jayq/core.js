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
{var temp__3695__auto____321738 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____321738))
{var cm__321739 = temp__3695__auto____321738;

return cljs.core.str.call(null,"[crateGroup=",cm__321739,"]");
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
var $__delegate = function (sel,p__321740){
var vec__321741__321742 = p__321740;
var context__321743 = cljs.core.nth.call(null,vec__321741__321742,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__321743)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__321743);
}
};
var $ = function (sel,var_args){
var p__321740 = null;
if (goog.isDef(var_args)) {
  p__321740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__321740);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__321744){
var sel = cljs.core.first(arglist__321744);
var p__321740 = cljs.core.rest(arglist__321744);
return $__delegate.call(this, sel, p__321740);
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
var G__321746 = null;
var G__321746__321747 = (function (this$,k){
var or__3548__auto____321745 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____321745))
{return or__3548__auto____321745;
} else
{return null;
}
});
var G__321746__321748 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__321746 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__321746__321747.call(this,this$,k);
case  3 :
return G__321746__321748.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321746;
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
var G__321750 = null;
var G__321750__321751 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__321750__321752 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__321750 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__321750__321751.call(this,_,k);
case  3 :
return G__321750__321752.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321750;
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
var attr__delegate = function ($elem,a,p__321754){
var vec__321755__321756 = p__321754;
var v__321757 = cljs.core.nth.call(null,vec__321755__321756,0,null);

var a__321758 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__321757)))
{return $elem.attr(a__321758);
} else
{return $elem.attr(a__321758,v__321757);
}
};
var attr = function ($elem,a,var_args){
var p__321754 = null;
if (goog.isDef(var_args)) {
  p__321754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__321754);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__321759){
var $elem = cljs.core.first(arglist__321759);
var a = cljs.core.first(cljs.core.next(arglist__321759));
var p__321754 = cljs.core.rest(cljs.core.next(arglist__321759));
return attr__delegate.call(this, $elem, a, p__321754);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__321760){
var vec__321761__321762 = p__321760;
var v__321763 = cljs.core.nth.call(null,vec__321761__321762,0,null);

var k__321764 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__321763)))
{return $elem.data(k__321764);
} else
{return $elem.data(k__321764,v__321763);
}
};
var data = function ($elem,k,var_args){
var p__321760 = null;
if (goog.isDef(var_args)) {
  p__321760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__321760);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__321765){
var $elem = cljs.core.first(arglist__321765);
var k = cljs.core.first(cljs.core.next(arglist__321765));
var p__321760 = cljs.core.rest(cljs.core.next(arglist__321765));
return data__delegate.call(this, $elem, k, p__321760);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__321766 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__321766);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__321767 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__321767);
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
var hide__delegate = function ($elem,p__321768){
var vec__321769__321770 = p__321768;
var speed__321771 = cljs.core.nth.call(null,vec__321769__321770,0,null);
var on_finish__321772 = cljs.core.nth.call(null,vec__321769__321770,1,null);

return $elem.hide(speed__321771,on_finish__321772);
};
var hide = function ($elem,var_args){
var p__321768 = null;
if (goog.isDef(var_args)) {
  p__321768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__321768);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__321773){
var $elem = cljs.core.first(arglist__321773);
var p__321768 = cljs.core.rest(arglist__321773);
return hide__delegate.call(this, $elem, p__321768);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__321774){
var vec__321775__321776 = p__321774;
var speed__321777 = cljs.core.nth.call(null,vec__321775__321776,0,null);
var on_finish__321778 = cljs.core.nth.call(null,vec__321775__321776,1,null);

return $elem.show(speed__321777,on_finish__321778);
};
var show = function ($elem,var_args){
var p__321774 = null;
if (goog.isDef(var_args)) {
  p__321774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__321774);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__321779){
var $elem = cljs.core.first(arglist__321779);
var p__321774 = cljs.core.rest(arglist__321779);
return show__delegate.call(this, $elem, p__321774);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__321780){
var vec__321781__321782 = p__321780;
var speed__321783 = cljs.core.nth.call(null,vec__321781__321782,0,null);
var on_finish__321784 = cljs.core.nth.call(null,vec__321781__321782,1,null);

return $elem.toggle(speed__321783,on_finish__321784);
};
var toggle = function ($elem,var_args){
var p__321780 = null;
if (goog.isDef(var_args)) {
  p__321780 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__321780);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__321785){
var $elem = cljs.core.first(arglist__321785);
var p__321780 = cljs.core.rest(arglist__321785);
return toggle__delegate.call(this, $elem, p__321780);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__321786){
var vec__321787__321788 = p__321786;
var speed__321789 = cljs.core.nth.call(null,vec__321787__321788,0,null);
var on_finish__321790 = cljs.core.nth.call(null,vec__321787__321788,1,null);

return $elem.fadeOut(speed__321789,on_finish__321790);
};
var fade_out = function ($elem,var_args){
var p__321786 = null;
if (goog.isDef(var_args)) {
  p__321786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__321786);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__321791){
var $elem = cljs.core.first(arglist__321791);
var p__321786 = cljs.core.rest(arglist__321791);
return fade_out__delegate.call(this, $elem, p__321786);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__321792){
var vec__321793__321794 = p__321792;
var speed__321795 = cljs.core.nth.call(null,vec__321793__321794,0,null);
var on_finish__321796 = cljs.core.nth.call(null,vec__321793__321794,1,null);

return $elem.fadeIn(speed__321795,on_finish__321796);
};
var fade_in = function ($elem,var_args){
var p__321792 = null;
if (goog.isDef(var_args)) {
  p__321792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__321792);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__321797){
var $elem = cljs.core.first(arglist__321797);
var p__321792 = cljs.core.rest(arglist__321797);
return fade_in__delegate.call(this, $elem, p__321792);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__321798){
var vec__321799__321800 = p__321798;
var speed__321801 = cljs.core.nth.call(null,vec__321799__321800,0,null);
var on_finish__321802 = cljs.core.nth.call(null,vec__321799__321800,1,null);

return $elem.slideUp(speed__321801,on_finish__321802);
};
var slide_up = function ($elem,var_args){
var p__321798 = null;
if (goog.isDef(var_args)) {
  p__321798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__321798);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__321803){
var $elem = cljs.core.first(arglist__321803);
var p__321798 = cljs.core.rest(arglist__321803);
return slide_up__delegate.call(this, $elem, p__321798);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__321804){
var vec__321805__321806 = p__321804;
var speed__321807 = cljs.core.nth.call(null,vec__321805__321806,0,null);
var on_finish__321808 = cljs.core.nth.call(null,vec__321805__321806,1,null);

return $elem.slideDown(speed__321807,on_finish__321808);
};
var slide_down = function ($elem,var_args){
var p__321804 = null;
if (goog.isDef(var_args)) {
  p__321804 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__321804);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__321809){
var $elem = cljs.core.first(arglist__321809);
var p__321804 = cljs.core.rest(arglist__321809);
return slide_down__delegate.call(this, $elem, p__321804);
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
var val__delegate = function ($elem,p__321810){
var vec__321811__321812 = p__321810;
var v__321813 = cljs.core.nth.call(null,vec__321811__321812,0,null);

if(cljs.core.truth_(v__321813))
{return $elem.val(v__321813);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__321810 = null;
if (goog.isDef(var_args)) {
  p__321810 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__321810);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__321814){
var $elem = cljs.core.first(arglist__321814);
var p__321810 = cljs.core.rest(arglist__321814);
return val__delegate.call(this, $elem, p__321810);
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
jayq.core.xhr = (function xhr(p__321815,content,callback){
var vec__321816__321817 = p__321815;
var method__321818 = cljs.core.nth.call(null,vec__321816__321817,0,null);
var uri__321819 = cljs.core.nth.call(null,vec__321816__321817,1,null);

var params__321820 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__321818)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__321819,params__321820);
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
var on__delegate = function ($elem,events,p__321821){
var vec__321822__321823 = p__321821;
var sel__321824 = cljs.core.nth.call(null,vec__321822__321823,0,null);
var data__321825 = cljs.core.nth.call(null,vec__321822__321823,1,null);
var handler__321826 = cljs.core.nth.call(null,vec__321822__321823,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__321824),data__321825,handler__321826);
};
var on = function ($elem,events,var_args){
var p__321821 = null;
if (goog.isDef(var_args)) {
  p__321821 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__321821);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__321827){
var $elem = cljs.core.first(arglist__321827);
var events = cljs.core.first(cljs.core.next(arglist__321827));
var p__321821 = cljs.core.rest(cljs.core.next(arglist__321827));
return on__delegate.call(this, $elem, events, p__321821);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__321828){
var vec__321829__321830 = p__321828;
var sel__321831 = cljs.core.nth.call(null,vec__321829__321830,0,null);
var data__321832 = cljs.core.nth.call(null,vec__321829__321830,1,null);
var handler__321833 = cljs.core.nth.call(null,vec__321829__321830,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__321831),data__321832,handler__321833);
};
var one = function ($elem,events,var_args){
var p__321828 = null;
if (goog.isDef(var_args)) {
  p__321828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__321828);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__321834){
var $elem = cljs.core.first(arglist__321834);
var events = cljs.core.first(cljs.core.next(arglist__321834));
var p__321828 = cljs.core.rest(cljs.core.next(arglist__321834));
return one__delegate.call(this, $elem, events, p__321828);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__321835){
var vec__321836__321837 = p__321835;
var sel__321838 = cljs.core.nth.call(null,vec__321836__321837,0,null);
var handler__321839 = cljs.core.nth.call(null,vec__321836__321837,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__321838),handler__321839);
};
var off = function ($elem,events,var_args){
var p__321835 = null;
if (goog.isDef(var_args)) {
  p__321835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__321835);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__321840){
var $elem = cljs.core.first(arglist__321840);
var events = cljs.core.first(cljs.core.next(arglist__321840));
var p__321835 = cljs.core.rest(cljs.core.next(arglist__321840));
return off__delegate.call(this, $elem, events, p__321835);
});
return off;
})()
;
