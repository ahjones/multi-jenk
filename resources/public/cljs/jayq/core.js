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
{var temp__3695__auto____188158 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____188158))
{var cm__188159 = temp__3695__auto____188158;

return cljs.core.str.call(null,"[crateGroup=",cm__188159,"]");
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
var $__delegate = function (sel,p__188160){
var vec__188161__188162 = p__188160;
var context__188163 = cljs.core.nth.call(null,vec__188161__188162,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__188163)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__188163);
}
};
var $ = function (sel,var_args){
var p__188160 = null;
if (goog.isDef(var_args)) {
  p__188160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__188160);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__188164){
var sel = cljs.core.first(arglist__188164);
var p__188160 = cljs.core.rest(arglist__188164);
return $__delegate.call(this, sel, p__188160);
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
var G__188166 = null;
var G__188166__188167 = (function (this$,k){
var or__3548__auto____188165 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____188165))
{return or__3548__auto____188165;
} else
{return null;
}
});
var G__188166__188168 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__188166 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__188166__188167.call(this,this$,k);
case  3 :
return G__188166__188168.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188166;
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
var G__188170 = null;
var G__188170__188171 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__188170__188172 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__188170 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__188170__188171.call(this,_,k);
case  3 :
return G__188170__188172.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188170;
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
var attr__delegate = function ($elem,a,p__188174){
var vec__188175__188176 = p__188174;
var v__188177 = cljs.core.nth.call(null,vec__188175__188176,0,null);

var a__188178 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__188177)))
{return $elem.attr(a__188178);
} else
{return $elem.attr(a__188178,v__188177);
}
};
var attr = function ($elem,a,var_args){
var p__188174 = null;
if (goog.isDef(var_args)) {
  p__188174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__188174);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__188179){
var $elem = cljs.core.first(arglist__188179);
var a = cljs.core.first(cljs.core.next(arglist__188179));
var p__188174 = cljs.core.rest(cljs.core.next(arglist__188179));
return attr__delegate.call(this, $elem, a, p__188174);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__188180){
var vec__188181__188182 = p__188180;
var v__188183 = cljs.core.nth.call(null,vec__188181__188182,0,null);

var k__188184 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__188183)))
{return $elem.data(k__188184);
} else
{return $elem.data(k__188184,v__188183);
}
};
var data = function ($elem,k,var_args){
var p__188180 = null;
if (goog.isDef(var_args)) {
  p__188180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__188180);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__188185){
var $elem = cljs.core.first(arglist__188185);
var k = cljs.core.first(cljs.core.next(arglist__188185));
var p__188180 = cljs.core.rest(cljs.core.next(arglist__188185));
return data__delegate.call(this, $elem, k, p__188180);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__188186 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__188186);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__188187 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__188187);
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
var hide__delegate = function ($elem,p__188188){
var vec__188189__188190 = p__188188;
var speed__188191 = cljs.core.nth.call(null,vec__188189__188190,0,null);
var on_finish__188192 = cljs.core.nth.call(null,vec__188189__188190,1,null);

return $elem.hide(speed__188191,on_finish__188192);
};
var hide = function ($elem,var_args){
var p__188188 = null;
if (goog.isDef(var_args)) {
  p__188188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__188188);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__188193){
var $elem = cljs.core.first(arglist__188193);
var p__188188 = cljs.core.rest(arglist__188193);
return hide__delegate.call(this, $elem, p__188188);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__188194){
var vec__188195__188196 = p__188194;
var speed__188197 = cljs.core.nth.call(null,vec__188195__188196,0,null);
var on_finish__188198 = cljs.core.nth.call(null,vec__188195__188196,1,null);

return $elem.show(speed__188197,on_finish__188198);
};
var show = function ($elem,var_args){
var p__188194 = null;
if (goog.isDef(var_args)) {
  p__188194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__188194);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__188199){
var $elem = cljs.core.first(arglist__188199);
var p__188194 = cljs.core.rest(arglist__188199);
return show__delegate.call(this, $elem, p__188194);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__188200){
var vec__188201__188202 = p__188200;
var speed__188203 = cljs.core.nth.call(null,vec__188201__188202,0,null);
var on_finish__188204 = cljs.core.nth.call(null,vec__188201__188202,1,null);

return $elem.toggle(speed__188203,on_finish__188204);
};
var toggle = function ($elem,var_args){
var p__188200 = null;
if (goog.isDef(var_args)) {
  p__188200 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__188200);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__188205){
var $elem = cljs.core.first(arglist__188205);
var p__188200 = cljs.core.rest(arglist__188205);
return toggle__delegate.call(this, $elem, p__188200);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__188206){
var vec__188207__188208 = p__188206;
var speed__188209 = cljs.core.nth.call(null,vec__188207__188208,0,null);
var on_finish__188210 = cljs.core.nth.call(null,vec__188207__188208,1,null);

return $elem.fadeOut(speed__188209,on_finish__188210);
};
var fade_out = function ($elem,var_args){
var p__188206 = null;
if (goog.isDef(var_args)) {
  p__188206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__188206);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__188211){
var $elem = cljs.core.first(arglist__188211);
var p__188206 = cljs.core.rest(arglist__188211);
return fade_out__delegate.call(this, $elem, p__188206);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__188212){
var vec__188213__188214 = p__188212;
var speed__188215 = cljs.core.nth.call(null,vec__188213__188214,0,null);
var on_finish__188216 = cljs.core.nth.call(null,vec__188213__188214,1,null);

return $elem.fadeIn(speed__188215,on_finish__188216);
};
var fade_in = function ($elem,var_args){
var p__188212 = null;
if (goog.isDef(var_args)) {
  p__188212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__188212);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__188217){
var $elem = cljs.core.first(arglist__188217);
var p__188212 = cljs.core.rest(arglist__188217);
return fade_in__delegate.call(this, $elem, p__188212);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__188218){
var vec__188219__188220 = p__188218;
var speed__188221 = cljs.core.nth.call(null,vec__188219__188220,0,null);
var on_finish__188222 = cljs.core.nth.call(null,vec__188219__188220,1,null);

return $elem.slideUp(speed__188221,on_finish__188222);
};
var slide_up = function ($elem,var_args){
var p__188218 = null;
if (goog.isDef(var_args)) {
  p__188218 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__188218);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__188223){
var $elem = cljs.core.first(arglist__188223);
var p__188218 = cljs.core.rest(arglist__188223);
return slide_up__delegate.call(this, $elem, p__188218);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__188224){
var vec__188225__188226 = p__188224;
var speed__188227 = cljs.core.nth.call(null,vec__188225__188226,0,null);
var on_finish__188228 = cljs.core.nth.call(null,vec__188225__188226,1,null);

return $elem.slideDown(speed__188227,on_finish__188228);
};
var slide_down = function ($elem,var_args){
var p__188224 = null;
if (goog.isDef(var_args)) {
  p__188224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__188224);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__188229){
var $elem = cljs.core.first(arglist__188229);
var p__188224 = cljs.core.rest(arglist__188229);
return slide_down__delegate.call(this, $elem, p__188224);
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
var val__delegate = function ($elem,p__188230){
var vec__188231__188232 = p__188230;
var v__188233 = cljs.core.nth.call(null,vec__188231__188232,0,null);

if(cljs.core.truth_(v__188233))
{return $elem.val(v__188233);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__188230 = null;
if (goog.isDef(var_args)) {
  p__188230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__188230);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__188234){
var $elem = cljs.core.first(arglist__188234);
var p__188230 = cljs.core.rest(arglist__188234);
return val__delegate.call(this, $elem, p__188230);
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
jayq.core.xhr = (function xhr(p__188235,content,callback){
var vec__188236__188237 = p__188235;
var method__188238 = cljs.core.nth.call(null,vec__188236__188237,0,null);
var uri__188239 = cljs.core.nth.call(null,vec__188236__188237,1,null);

var params__188240 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__188238)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__188239,params__188240);
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
var on__delegate = function ($elem,events,p__188241){
var vec__188242__188243 = p__188241;
var sel__188244 = cljs.core.nth.call(null,vec__188242__188243,0,null);
var data__188245 = cljs.core.nth.call(null,vec__188242__188243,1,null);
var handler__188246 = cljs.core.nth.call(null,vec__188242__188243,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__188244),data__188245,handler__188246);
};
var on = function ($elem,events,var_args){
var p__188241 = null;
if (goog.isDef(var_args)) {
  p__188241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__188241);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__188247){
var $elem = cljs.core.first(arglist__188247);
var events = cljs.core.first(cljs.core.next(arglist__188247));
var p__188241 = cljs.core.rest(cljs.core.next(arglist__188247));
return on__delegate.call(this, $elem, events, p__188241);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__188248){
var vec__188249__188250 = p__188248;
var sel__188251 = cljs.core.nth.call(null,vec__188249__188250,0,null);
var data__188252 = cljs.core.nth.call(null,vec__188249__188250,1,null);
var handler__188253 = cljs.core.nth.call(null,vec__188249__188250,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__188251),data__188252,handler__188253);
};
var one = function ($elem,events,var_args){
var p__188248 = null;
if (goog.isDef(var_args)) {
  p__188248 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__188248);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__188254){
var $elem = cljs.core.first(arglist__188254);
var events = cljs.core.first(cljs.core.next(arglist__188254));
var p__188248 = cljs.core.rest(cljs.core.next(arglist__188254));
return one__delegate.call(this, $elem, events, p__188248);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__188255){
var vec__188256__188257 = p__188255;
var sel__188258 = cljs.core.nth.call(null,vec__188256__188257,0,null);
var handler__188259 = cljs.core.nth.call(null,vec__188256__188257,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__188258),handler__188259);
};
var off = function ($elem,events,var_args){
var p__188255 = null;
if (goog.isDef(var_args)) {
  p__188255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__188255);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__188260){
var $elem = cljs.core.first(arglist__188260);
var events = cljs.core.first(cljs.core.next(arglist__188260));
var p__188255 = cljs.core.rest(cljs.core.next(arglist__188260));
return off__delegate.call(this, $elem, events, p__188255);
});
return off;
})()
;
