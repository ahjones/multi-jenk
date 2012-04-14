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
{var temp__3695__auto____166781 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____166781))
{var cm__166782 = temp__3695__auto____166781;

return cljs.core.str.call(null,"[crateGroup=",cm__166782,"]");
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
var $__delegate = function (sel,p__166783){
var vec__166784__166785 = p__166783;
var context__166786 = cljs.core.nth.call(null,vec__166784__166785,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__166786)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__166786);
}
};
var $ = function (sel,var_args){
var p__166783 = null;
if (goog.isDef(var_args)) {
  p__166783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__166783);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__166787){
var sel = cljs.core.first(arglist__166787);
var p__166783 = cljs.core.rest(arglist__166787);
return $__delegate.call(this, sel, p__166783);
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
var G__166789 = null;
var G__166789__166790 = (function (this$,k){
var or__3548__auto____166788 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____166788))
{return or__3548__auto____166788;
} else
{return null;
}
});
var G__166789__166791 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__166789 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__166789__166790.call(this,this$,k);
case  3 :
return G__166789__166791.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166789;
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
var G__166793 = null;
var G__166793__166794 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__166793__166795 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__166793 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__166793__166794.call(this,_,k);
case  3 :
return G__166793__166795.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166793;
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
var attr__delegate = function ($elem,a,p__166797){
var vec__166798__166799 = p__166797;
var v__166800 = cljs.core.nth.call(null,vec__166798__166799,0,null);

var a__166801 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__166800)))
{return $elem.attr(a__166801);
} else
{return $elem.attr(a__166801,v__166800);
}
};
var attr = function ($elem,a,var_args){
var p__166797 = null;
if (goog.isDef(var_args)) {
  p__166797 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__166797);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__166802){
var $elem = cljs.core.first(arglist__166802);
var a = cljs.core.first(cljs.core.next(arglist__166802));
var p__166797 = cljs.core.rest(cljs.core.next(arglist__166802));
return attr__delegate.call(this, $elem, a, p__166797);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__166803){
var vec__166804__166805 = p__166803;
var v__166806 = cljs.core.nth.call(null,vec__166804__166805,0,null);

var k__166807 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__166806)))
{return $elem.data(k__166807);
} else
{return $elem.data(k__166807,v__166806);
}
};
var data = function ($elem,k,var_args){
var p__166803 = null;
if (goog.isDef(var_args)) {
  p__166803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__166803);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__166808){
var $elem = cljs.core.first(arglist__166808);
var k = cljs.core.first(cljs.core.next(arglist__166808));
var p__166803 = cljs.core.rest(cljs.core.next(arglist__166808));
return data__delegate.call(this, $elem, k, p__166803);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__166809 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__166809);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__166810 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__166810);
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
var hide__delegate = function ($elem,p__166811){
var vec__166812__166813 = p__166811;
var speed__166814 = cljs.core.nth.call(null,vec__166812__166813,0,null);
var on_finish__166815 = cljs.core.nth.call(null,vec__166812__166813,1,null);

return $elem.hide(speed__166814,on_finish__166815);
};
var hide = function ($elem,var_args){
var p__166811 = null;
if (goog.isDef(var_args)) {
  p__166811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__166811);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__166816){
var $elem = cljs.core.first(arglist__166816);
var p__166811 = cljs.core.rest(arglist__166816);
return hide__delegate.call(this, $elem, p__166811);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__166817){
var vec__166818__166819 = p__166817;
var speed__166820 = cljs.core.nth.call(null,vec__166818__166819,0,null);
var on_finish__166821 = cljs.core.nth.call(null,vec__166818__166819,1,null);

return $elem.show(speed__166820,on_finish__166821);
};
var show = function ($elem,var_args){
var p__166817 = null;
if (goog.isDef(var_args)) {
  p__166817 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__166817);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__166822){
var $elem = cljs.core.first(arglist__166822);
var p__166817 = cljs.core.rest(arglist__166822);
return show__delegate.call(this, $elem, p__166817);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__166823){
var vec__166824__166825 = p__166823;
var speed__166826 = cljs.core.nth.call(null,vec__166824__166825,0,null);
var on_finish__166827 = cljs.core.nth.call(null,vec__166824__166825,1,null);

return $elem.toggle(speed__166826,on_finish__166827);
};
var toggle = function ($elem,var_args){
var p__166823 = null;
if (goog.isDef(var_args)) {
  p__166823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__166823);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__166828){
var $elem = cljs.core.first(arglist__166828);
var p__166823 = cljs.core.rest(arglist__166828);
return toggle__delegate.call(this, $elem, p__166823);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__166829){
var vec__166830__166831 = p__166829;
var speed__166832 = cljs.core.nth.call(null,vec__166830__166831,0,null);
var on_finish__166833 = cljs.core.nth.call(null,vec__166830__166831,1,null);

return $elem.fadeOut(speed__166832,on_finish__166833);
};
var fade_out = function ($elem,var_args){
var p__166829 = null;
if (goog.isDef(var_args)) {
  p__166829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__166829);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__166834){
var $elem = cljs.core.first(arglist__166834);
var p__166829 = cljs.core.rest(arglist__166834);
return fade_out__delegate.call(this, $elem, p__166829);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__166835){
var vec__166836__166837 = p__166835;
var speed__166838 = cljs.core.nth.call(null,vec__166836__166837,0,null);
var on_finish__166839 = cljs.core.nth.call(null,vec__166836__166837,1,null);

return $elem.fadeIn(speed__166838,on_finish__166839);
};
var fade_in = function ($elem,var_args){
var p__166835 = null;
if (goog.isDef(var_args)) {
  p__166835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__166835);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__166840){
var $elem = cljs.core.first(arglist__166840);
var p__166835 = cljs.core.rest(arglist__166840);
return fade_in__delegate.call(this, $elem, p__166835);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__166841){
var vec__166842__166843 = p__166841;
var speed__166844 = cljs.core.nth.call(null,vec__166842__166843,0,null);
var on_finish__166845 = cljs.core.nth.call(null,vec__166842__166843,1,null);

return $elem.slideUp(speed__166844,on_finish__166845);
};
var slide_up = function ($elem,var_args){
var p__166841 = null;
if (goog.isDef(var_args)) {
  p__166841 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__166841);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__166846){
var $elem = cljs.core.first(arglist__166846);
var p__166841 = cljs.core.rest(arglist__166846);
return slide_up__delegate.call(this, $elem, p__166841);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__166847){
var vec__166848__166849 = p__166847;
var speed__166850 = cljs.core.nth.call(null,vec__166848__166849,0,null);
var on_finish__166851 = cljs.core.nth.call(null,vec__166848__166849,1,null);

return $elem.slideDown(speed__166850,on_finish__166851);
};
var slide_down = function ($elem,var_args){
var p__166847 = null;
if (goog.isDef(var_args)) {
  p__166847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__166847);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__166852){
var $elem = cljs.core.first(arglist__166852);
var p__166847 = cljs.core.rest(arglist__166852);
return slide_down__delegate.call(this, $elem, p__166847);
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
var val__delegate = function ($elem,p__166853){
var vec__166854__166855 = p__166853;
var v__166856 = cljs.core.nth.call(null,vec__166854__166855,0,null);

if(cljs.core.truth_(v__166856))
{return $elem.val(v__166856);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__166853 = null;
if (goog.isDef(var_args)) {
  p__166853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__166853);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__166857){
var $elem = cljs.core.first(arglist__166857);
var p__166853 = cljs.core.rest(arglist__166857);
return val__delegate.call(this, $elem, p__166853);
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
jayq.core.xhr = (function xhr(p__166858,content,callback){
var vec__166859__166860 = p__166858;
var method__166861 = cljs.core.nth.call(null,vec__166859__166860,0,null);
var uri__166862 = cljs.core.nth.call(null,vec__166859__166860,1,null);

var params__166863 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__166861)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__166862,params__166863);
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
var on__delegate = function ($elem,events,p__166864){
var vec__166865__166866 = p__166864;
var sel__166867 = cljs.core.nth.call(null,vec__166865__166866,0,null);
var data__166868 = cljs.core.nth.call(null,vec__166865__166866,1,null);
var handler__166869 = cljs.core.nth.call(null,vec__166865__166866,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__166867),data__166868,handler__166869);
};
var on = function ($elem,events,var_args){
var p__166864 = null;
if (goog.isDef(var_args)) {
  p__166864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__166864);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__166870){
var $elem = cljs.core.first(arglist__166870);
var events = cljs.core.first(cljs.core.next(arglist__166870));
var p__166864 = cljs.core.rest(cljs.core.next(arglist__166870));
return on__delegate.call(this, $elem, events, p__166864);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__166871){
var vec__166872__166873 = p__166871;
var sel__166874 = cljs.core.nth.call(null,vec__166872__166873,0,null);
var data__166875 = cljs.core.nth.call(null,vec__166872__166873,1,null);
var handler__166876 = cljs.core.nth.call(null,vec__166872__166873,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__166874),data__166875,handler__166876);
};
var one = function ($elem,events,var_args){
var p__166871 = null;
if (goog.isDef(var_args)) {
  p__166871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__166871);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__166877){
var $elem = cljs.core.first(arglist__166877);
var events = cljs.core.first(cljs.core.next(arglist__166877));
var p__166871 = cljs.core.rest(cljs.core.next(arglist__166877));
return one__delegate.call(this, $elem, events, p__166871);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__166878){
var vec__166879__166880 = p__166878;
var sel__166881 = cljs.core.nth.call(null,vec__166879__166880,0,null);
var handler__166882 = cljs.core.nth.call(null,vec__166879__166880,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__166881),handler__166882);
};
var off = function ($elem,events,var_args){
var p__166878 = null;
if (goog.isDef(var_args)) {
  p__166878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__166878);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__166883){
var $elem = cljs.core.first(arglist__166883);
var events = cljs.core.first(cljs.core.next(arglist__166883));
var p__166878 = cljs.core.rest(cljs.core.next(arglist__166883));
return off__delegate.call(this, $elem, events, p__166878);
});
return off;
})()
;
