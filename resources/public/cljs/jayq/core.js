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
{var temp__3695__auto____246145 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____246145))
{var cm__246146 = temp__3695__auto____246145;

return cljs.core.str.call(null,"[crateGroup=",cm__246146,"]");
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
var $__delegate = function (sel,p__246147){
var vec__246148__246149 = p__246147;
var context__246150 = cljs.core.nth.call(null,vec__246148__246149,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__246150)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__246150);
}
};
var $ = function (sel,var_args){
var p__246147 = null;
if (goog.isDef(var_args)) {
  p__246147 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__246147);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__246151){
var sel = cljs.core.first(arglist__246151);
var p__246147 = cljs.core.rest(arglist__246151);
return $__delegate.call(this, sel, p__246147);
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
var G__246153 = null;
var G__246153__246154 = (function (this$,k){
var or__3548__auto____246152 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____246152))
{return or__3548__auto____246152;
} else
{return null;
}
});
var G__246153__246155 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__246153 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__246153__246154.call(this,this$,k);
case  3 :
return G__246153__246155.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__246153;
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
var G__246157 = null;
var G__246157__246158 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__246157__246159 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__246157 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__246157__246158.call(this,_,k);
case  3 :
return G__246157__246159.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__246157;
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
var attr__delegate = function ($elem,a,p__246161){
var vec__246162__246163 = p__246161;
var v__246164 = cljs.core.nth.call(null,vec__246162__246163,0,null);

var a__246165 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__246164)))
{return $elem.attr(a__246165);
} else
{return $elem.attr(a__246165,v__246164);
}
};
var attr = function ($elem,a,var_args){
var p__246161 = null;
if (goog.isDef(var_args)) {
  p__246161 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__246161);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__246166){
var $elem = cljs.core.first(arglist__246166);
var a = cljs.core.first(cljs.core.next(arglist__246166));
var p__246161 = cljs.core.rest(cljs.core.next(arglist__246166));
return attr__delegate.call(this, $elem, a, p__246161);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__246167){
var vec__246168__246169 = p__246167;
var v__246170 = cljs.core.nth.call(null,vec__246168__246169,0,null);

var k__246171 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__246170)))
{return $elem.data(k__246171);
} else
{return $elem.data(k__246171,v__246170);
}
};
var data = function ($elem,k,var_args){
var p__246167 = null;
if (goog.isDef(var_args)) {
  p__246167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__246167);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__246172){
var $elem = cljs.core.first(arglist__246172);
var k = cljs.core.first(cljs.core.next(arglist__246172));
var p__246167 = cljs.core.rest(cljs.core.next(arglist__246172));
return data__delegate.call(this, $elem, k, p__246167);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__246173 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__246173);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__246174 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__246174);
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
var hide__delegate = function ($elem,p__246175){
var vec__246176__246177 = p__246175;
var speed__246178 = cljs.core.nth.call(null,vec__246176__246177,0,null);
var on_finish__246179 = cljs.core.nth.call(null,vec__246176__246177,1,null);

return $elem.hide(speed__246178,on_finish__246179);
};
var hide = function ($elem,var_args){
var p__246175 = null;
if (goog.isDef(var_args)) {
  p__246175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__246175);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__246180){
var $elem = cljs.core.first(arglist__246180);
var p__246175 = cljs.core.rest(arglist__246180);
return hide__delegate.call(this, $elem, p__246175);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__246181){
var vec__246182__246183 = p__246181;
var speed__246184 = cljs.core.nth.call(null,vec__246182__246183,0,null);
var on_finish__246185 = cljs.core.nth.call(null,vec__246182__246183,1,null);

return $elem.show(speed__246184,on_finish__246185);
};
var show = function ($elem,var_args){
var p__246181 = null;
if (goog.isDef(var_args)) {
  p__246181 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__246181);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__246186){
var $elem = cljs.core.first(arglist__246186);
var p__246181 = cljs.core.rest(arglist__246186);
return show__delegate.call(this, $elem, p__246181);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__246187){
var vec__246188__246189 = p__246187;
var speed__246190 = cljs.core.nth.call(null,vec__246188__246189,0,null);
var on_finish__246191 = cljs.core.nth.call(null,vec__246188__246189,1,null);

return $elem.toggle(speed__246190,on_finish__246191);
};
var toggle = function ($elem,var_args){
var p__246187 = null;
if (goog.isDef(var_args)) {
  p__246187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__246187);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__246192){
var $elem = cljs.core.first(arglist__246192);
var p__246187 = cljs.core.rest(arglist__246192);
return toggle__delegate.call(this, $elem, p__246187);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__246193){
var vec__246194__246195 = p__246193;
var speed__246196 = cljs.core.nth.call(null,vec__246194__246195,0,null);
var on_finish__246197 = cljs.core.nth.call(null,vec__246194__246195,1,null);

return $elem.fadeOut(speed__246196,on_finish__246197);
};
var fade_out = function ($elem,var_args){
var p__246193 = null;
if (goog.isDef(var_args)) {
  p__246193 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__246193);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__246198){
var $elem = cljs.core.first(arglist__246198);
var p__246193 = cljs.core.rest(arglist__246198);
return fade_out__delegate.call(this, $elem, p__246193);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__246199){
var vec__246200__246201 = p__246199;
var speed__246202 = cljs.core.nth.call(null,vec__246200__246201,0,null);
var on_finish__246203 = cljs.core.nth.call(null,vec__246200__246201,1,null);

return $elem.fadeIn(speed__246202,on_finish__246203);
};
var fade_in = function ($elem,var_args){
var p__246199 = null;
if (goog.isDef(var_args)) {
  p__246199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__246199);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__246204){
var $elem = cljs.core.first(arglist__246204);
var p__246199 = cljs.core.rest(arglist__246204);
return fade_in__delegate.call(this, $elem, p__246199);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__246205){
var vec__246206__246207 = p__246205;
var speed__246208 = cljs.core.nth.call(null,vec__246206__246207,0,null);
var on_finish__246209 = cljs.core.nth.call(null,vec__246206__246207,1,null);

return $elem.slideUp(speed__246208,on_finish__246209);
};
var slide_up = function ($elem,var_args){
var p__246205 = null;
if (goog.isDef(var_args)) {
  p__246205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__246205);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__246210){
var $elem = cljs.core.first(arglist__246210);
var p__246205 = cljs.core.rest(arglist__246210);
return slide_up__delegate.call(this, $elem, p__246205);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__246211){
var vec__246212__246213 = p__246211;
var speed__246214 = cljs.core.nth.call(null,vec__246212__246213,0,null);
var on_finish__246215 = cljs.core.nth.call(null,vec__246212__246213,1,null);

return $elem.slideDown(speed__246214,on_finish__246215);
};
var slide_down = function ($elem,var_args){
var p__246211 = null;
if (goog.isDef(var_args)) {
  p__246211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__246211);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__246216){
var $elem = cljs.core.first(arglist__246216);
var p__246211 = cljs.core.rest(arglist__246216);
return slide_down__delegate.call(this, $elem, p__246211);
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
var val__delegate = function ($elem,p__246217){
var vec__246218__246219 = p__246217;
var v__246220 = cljs.core.nth.call(null,vec__246218__246219,0,null);

if(cljs.core.truth_(v__246220))
{return $elem.val(v__246220);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__246217 = null;
if (goog.isDef(var_args)) {
  p__246217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__246217);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__246221){
var $elem = cljs.core.first(arglist__246221);
var p__246217 = cljs.core.rest(arglist__246221);
return val__delegate.call(this, $elem, p__246217);
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
jayq.core.xhr = (function xhr(p__246222,content,callback){
var vec__246223__246224 = p__246222;
var method__246225 = cljs.core.nth.call(null,vec__246223__246224,0,null);
var uri__246226 = cljs.core.nth.call(null,vec__246223__246224,1,null);

var params__246227 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__246225)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__246226,params__246227);
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
var on__delegate = function ($elem,events,p__246228){
var vec__246229__246230 = p__246228;
var sel__246231 = cljs.core.nth.call(null,vec__246229__246230,0,null);
var data__246232 = cljs.core.nth.call(null,vec__246229__246230,1,null);
var handler__246233 = cljs.core.nth.call(null,vec__246229__246230,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__246231),data__246232,handler__246233);
};
var on = function ($elem,events,var_args){
var p__246228 = null;
if (goog.isDef(var_args)) {
  p__246228 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__246228);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__246234){
var $elem = cljs.core.first(arglist__246234);
var events = cljs.core.first(cljs.core.next(arglist__246234));
var p__246228 = cljs.core.rest(cljs.core.next(arglist__246234));
return on__delegate.call(this, $elem, events, p__246228);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__246235){
var vec__246236__246237 = p__246235;
var sel__246238 = cljs.core.nth.call(null,vec__246236__246237,0,null);
var data__246239 = cljs.core.nth.call(null,vec__246236__246237,1,null);
var handler__246240 = cljs.core.nth.call(null,vec__246236__246237,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__246238),data__246239,handler__246240);
};
var one = function ($elem,events,var_args){
var p__246235 = null;
if (goog.isDef(var_args)) {
  p__246235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__246235);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__246241){
var $elem = cljs.core.first(arglist__246241);
var events = cljs.core.first(cljs.core.next(arglist__246241));
var p__246235 = cljs.core.rest(cljs.core.next(arglist__246241));
return one__delegate.call(this, $elem, events, p__246235);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__246242){
var vec__246243__246244 = p__246242;
var sel__246245 = cljs.core.nth.call(null,vec__246243__246244,0,null);
var handler__246246 = cljs.core.nth.call(null,vec__246243__246244,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__246245),handler__246246);
};
var off = function ($elem,events,var_args){
var p__246242 = null;
if (goog.isDef(var_args)) {
  p__246242 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__246242);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__246247){
var $elem = cljs.core.first(arglist__246247);
var events = cljs.core.first(cljs.core.next(arglist__246247));
var p__246242 = cljs.core.rest(cljs.core.next(arglist__246247));
return off__delegate.call(this, $elem, events, p__246242);
});
return off;
})()
;
