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
{var temp__3695__auto____186012 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____186012))
{var cm__186013 = temp__3695__auto____186012;

return cljs.core.str.call(null,"[crateGroup=",cm__186013,"]");
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
var $__delegate = function (sel,p__186014){
var vec__186015__186016 = p__186014;
var context__186017 = cljs.core.nth.call(null,vec__186015__186016,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__186017)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__186017);
}
};
var $ = function (sel,var_args){
var p__186014 = null;
if (goog.isDef(var_args)) {
  p__186014 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__186014);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__186018){
var sel = cljs.core.first(arglist__186018);
var p__186014 = cljs.core.rest(arglist__186018);
return $__delegate.call(this, sel, p__186014);
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
var G__186020 = null;
var G__186020__186021 = (function (this$,k){
var or__3548__auto____186019 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____186019))
{return or__3548__auto____186019;
} else
{return null;
}
});
var G__186020__186022 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__186020 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__186020__186021.call(this,this$,k);
case  3 :
return G__186020__186022.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186020;
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
var G__186024 = null;
var G__186024__186025 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__186024__186026 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__186024 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__186024__186025.call(this,_,k);
case  3 :
return G__186024__186026.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186024;
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
var attr__delegate = function ($elem,a,p__186028){
var vec__186029__186030 = p__186028;
var v__186031 = cljs.core.nth.call(null,vec__186029__186030,0,null);

var a__186032 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__186031)))
{return $elem.attr(a__186032);
} else
{return $elem.attr(a__186032,v__186031);
}
};
var attr = function ($elem,a,var_args){
var p__186028 = null;
if (goog.isDef(var_args)) {
  p__186028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__186028);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__186033){
var $elem = cljs.core.first(arglist__186033);
var a = cljs.core.first(cljs.core.next(arglist__186033));
var p__186028 = cljs.core.rest(cljs.core.next(arglist__186033));
return attr__delegate.call(this, $elem, a, p__186028);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__186034){
var vec__186035__186036 = p__186034;
var v__186037 = cljs.core.nth.call(null,vec__186035__186036,0,null);

var k__186038 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__186037)))
{return $elem.data(k__186038);
} else
{return $elem.data(k__186038,v__186037);
}
};
var data = function ($elem,k,var_args){
var p__186034 = null;
if (goog.isDef(var_args)) {
  p__186034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__186034);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__186039){
var $elem = cljs.core.first(arglist__186039);
var k = cljs.core.first(cljs.core.next(arglist__186039));
var p__186034 = cljs.core.rest(cljs.core.next(arglist__186039));
return data__delegate.call(this, $elem, k, p__186034);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__186040 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__186040);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__186041 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__186041);
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
var hide__delegate = function ($elem,p__186042){
var vec__186043__186044 = p__186042;
var speed__186045 = cljs.core.nth.call(null,vec__186043__186044,0,null);
var on_finish__186046 = cljs.core.nth.call(null,vec__186043__186044,1,null);

return $elem.hide(speed__186045,on_finish__186046);
};
var hide = function ($elem,var_args){
var p__186042 = null;
if (goog.isDef(var_args)) {
  p__186042 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__186042);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__186047){
var $elem = cljs.core.first(arglist__186047);
var p__186042 = cljs.core.rest(arglist__186047);
return hide__delegate.call(this, $elem, p__186042);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__186048){
var vec__186049__186050 = p__186048;
var speed__186051 = cljs.core.nth.call(null,vec__186049__186050,0,null);
var on_finish__186052 = cljs.core.nth.call(null,vec__186049__186050,1,null);

return $elem.show(speed__186051,on_finish__186052);
};
var show = function ($elem,var_args){
var p__186048 = null;
if (goog.isDef(var_args)) {
  p__186048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__186048);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__186053){
var $elem = cljs.core.first(arglist__186053);
var p__186048 = cljs.core.rest(arglist__186053);
return show__delegate.call(this, $elem, p__186048);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__186054){
var vec__186055__186056 = p__186054;
var speed__186057 = cljs.core.nth.call(null,vec__186055__186056,0,null);
var on_finish__186058 = cljs.core.nth.call(null,vec__186055__186056,1,null);

return $elem.toggle(speed__186057,on_finish__186058);
};
var toggle = function ($elem,var_args){
var p__186054 = null;
if (goog.isDef(var_args)) {
  p__186054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__186054);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__186059){
var $elem = cljs.core.first(arglist__186059);
var p__186054 = cljs.core.rest(arglist__186059);
return toggle__delegate.call(this, $elem, p__186054);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__186060){
var vec__186061__186062 = p__186060;
var speed__186063 = cljs.core.nth.call(null,vec__186061__186062,0,null);
var on_finish__186064 = cljs.core.nth.call(null,vec__186061__186062,1,null);

return $elem.fadeOut(speed__186063,on_finish__186064);
};
var fade_out = function ($elem,var_args){
var p__186060 = null;
if (goog.isDef(var_args)) {
  p__186060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__186060);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__186065){
var $elem = cljs.core.first(arglist__186065);
var p__186060 = cljs.core.rest(arglist__186065);
return fade_out__delegate.call(this, $elem, p__186060);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__186066){
var vec__186067__186068 = p__186066;
var speed__186069 = cljs.core.nth.call(null,vec__186067__186068,0,null);
var on_finish__186070 = cljs.core.nth.call(null,vec__186067__186068,1,null);

return $elem.fadeIn(speed__186069,on_finish__186070);
};
var fade_in = function ($elem,var_args){
var p__186066 = null;
if (goog.isDef(var_args)) {
  p__186066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__186066);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__186071){
var $elem = cljs.core.first(arglist__186071);
var p__186066 = cljs.core.rest(arglist__186071);
return fade_in__delegate.call(this, $elem, p__186066);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__186072){
var vec__186073__186074 = p__186072;
var speed__186075 = cljs.core.nth.call(null,vec__186073__186074,0,null);
var on_finish__186076 = cljs.core.nth.call(null,vec__186073__186074,1,null);

return $elem.slideUp(speed__186075,on_finish__186076);
};
var slide_up = function ($elem,var_args){
var p__186072 = null;
if (goog.isDef(var_args)) {
  p__186072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__186072);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__186077){
var $elem = cljs.core.first(arglist__186077);
var p__186072 = cljs.core.rest(arglist__186077);
return slide_up__delegate.call(this, $elem, p__186072);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__186078){
var vec__186079__186080 = p__186078;
var speed__186081 = cljs.core.nth.call(null,vec__186079__186080,0,null);
var on_finish__186082 = cljs.core.nth.call(null,vec__186079__186080,1,null);

return $elem.slideDown(speed__186081,on_finish__186082);
};
var slide_down = function ($elem,var_args){
var p__186078 = null;
if (goog.isDef(var_args)) {
  p__186078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__186078);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__186083){
var $elem = cljs.core.first(arglist__186083);
var p__186078 = cljs.core.rest(arglist__186083);
return slide_down__delegate.call(this, $elem, p__186078);
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
var val__delegate = function ($elem,p__186084){
var vec__186085__186086 = p__186084;
var v__186087 = cljs.core.nth.call(null,vec__186085__186086,0,null);

if(cljs.core.truth_(v__186087))
{return $elem.val(v__186087);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__186084 = null;
if (goog.isDef(var_args)) {
  p__186084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__186084);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__186088){
var $elem = cljs.core.first(arglist__186088);
var p__186084 = cljs.core.rest(arglist__186088);
return val__delegate.call(this, $elem, p__186084);
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
jayq.core.xhr = (function xhr(p__186089,content,callback){
var vec__186090__186091 = p__186089;
var method__186092 = cljs.core.nth.call(null,vec__186090__186091,0,null);
var uri__186093 = cljs.core.nth.call(null,vec__186090__186091,1,null);

var params__186094 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__186092)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__186093,params__186094);
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
var on__delegate = function ($elem,events,p__186095){
var vec__186096__186097 = p__186095;
var sel__186098 = cljs.core.nth.call(null,vec__186096__186097,0,null);
var data__186099 = cljs.core.nth.call(null,vec__186096__186097,1,null);
var handler__186100 = cljs.core.nth.call(null,vec__186096__186097,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__186098),data__186099,handler__186100);
};
var on = function ($elem,events,var_args){
var p__186095 = null;
if (goog.isDef(var_args)) {
  p__186095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__186095);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__186101){
var $elem = cljs.core.first(arglist__186101);
var events = cljs.core.first(cljs.core.next(arglist__186101));
var p__186095 = cljs.core.rest(cljs.core.next(arglist__186101));
return on__delegate.call(this, $elem, events, p__186095);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__186102){
var vec__186103__186104 = p__186102;
var sel__186105 = cljs.core.nth.call(null,vec__186103__186104,0,null);
var data__186106 = cljs.core.nth.call(null,vec__186103__186104,1,null);
var handler__186107 = cljs.core.nth.call(null,vec__186103__186104,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__186105),data__186106,handler__186107);
};
var one = function ($elem,events,var_args){
var p__186102 = null;
if (goog.isDef(var_args)) {
  p__186102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__186102);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__186108){
var $elem = cljs.core.first(arglist__186108);
var events = cljs.core.first(cljs.core.next(arglist__186108));
var p__186102 = cljs.core.rest(cljs.core.next(arglist__186108));
return one__delegate.call(this, $elem, events, p__186102);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__186109){
var vec__186110__186111 = p__186109;
var sel__186112 = cljs.core.nth.call(null,vec__186110__186111,0,null);
var handler__186113 = cljs.core.nth.call(null,vec__186110__186111,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__186112),handler__186113);
};
var off = function ($elem,events,var_args){
var p__186109 = null;
if (goog.isDef(var_args)) {
  p__186109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__186109);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__186114){
var $elem = cljs.core.first(arglist__186114);
var events = cljs.core.first(cljs.core.next(arglist__186114));
var p__186109 = cljs.core.rest(cljs.core.next(arglist__186114));
return off__delegate.call(this, $elem, events, p__186109);
});
return off;
})()
;
