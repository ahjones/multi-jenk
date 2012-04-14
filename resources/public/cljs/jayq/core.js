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
{var temp__3695__auto____328209 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____328209))
{var cm__328210 = temp__3695__auto____328209;

return cljs.core.str.call(null,"[crateGroup=",cm__328210,"]");
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
var $__delegate = function (sel,p__328211){
var vec__328212__328213 = p__328211;
var context__328214 = cljs.core.nth.call(null,vec__328212__328213,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__328214)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__328214);
}
};
var $ = function (sel,var_args){
var p__328211 = null;
if (goog.isDef(var_args)) {
  p__328211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__328211);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__328215){
var sel = cljs.core.first(arglist__328215);
var p__328211 = cljs.core.rest(arglist__328215);
return $__delegate.call(this, sel, p__328211);
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
var G__328217 = null;
var G__328217__328218 = (function (this$,k){
var or__3548__auto____328216 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____328216))
{return or__3548__auto____328216;
} else
{return null;
}
});
var G__328217__328219 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__328217 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__328217__328218.call(this,this$,k);
case  3 :
return G__328217__328219.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328217;
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
var G__328221 = null;
var G__328221__328222 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__328221__328223 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__328221 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__328221__328222.call(this,_,k);
case  3 :
return G__328221__328223.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328221;
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
var attr__delegate = function ($elem,a,p__328225){
var vec__328226__328227 = p__328225;
var v__328228 = cljs.core.nth.call(null,vec__328226__328227,0,null);

var a__328229 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__328228)))
{return $elem.attr(a__328229);
} else
{return $elem.attr(a__328229,v__328228);
}
};
var attr = function ($elem,a,var_args){
var p__328225 = null;
if (goog.isDef(var_args)) {
  p__328225 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__328225);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__328230){
var $elem = cljs.core.first(arglist__328230);
var a = cljs.core.first(cljs.core.next(arglist__328230));
var p__328225 = cljs.core.rest(cljs.core.next(arglist__328230));
return attr__delegate.call(this, $elem, a, p__328225);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__328231){
var vec__328232__328233 = p__328231;
var v__328234 = cljs.core.nth.call(null,vec__328232__328233,0,null);

var k__328235 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__328234)))
{return $elem.data(k__328235);
} else
{return $elem.data(k__328235,v__328234);
}
};
var data = function ($elem,k,var_args){
var p__328231 = null;
if (goog.isDef(var_args)) {
  p__328231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__328231);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__328236){
var $elem = cljs.core.first(arglist__328236);
var k = cljs.core.first(cljs.core.next(arglist__328236));
var p__328231 = cljs.core.rest(cljs.core.next(arglist__328236));
return data__delegate.call(this, $elem, k, p__328231);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__328237 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__328237);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__328238 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__328238);
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
var hide__delegate = function ($elem,p__328239){
var vec__328240__328241 = p__328239;
var speed__328242 = cljs.core.nth.call(null,vec__328240__328241,0,null);
var on_finish__328243 = cljs.core.nth.call(null,vec__328240__328241,1,null);

return $elem.hide(speed__328242,on_finish__328243);
};
var hide = function ($elem,var_args){
var p__328239 = null;
if (goog.isDef(var_args)) {
  p__328239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__328239);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__328244){
var $elem = cljs.core.first(arglist__328244);
var p__328239 = cljs.core.rest(arglist__328244);
return hide__delegate.call(this, $elem, p__328239);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__328245){
var vec__328246__328247 = p__328245;
var speed__328248 = cljs.core.nth.call(null,vec__328246__328247,0,null);
var on_finish__328249 = cljs.core.nth.call(null,vec__328246__328247,1,null);

return $elem.show(speed__328248,on_finish__328249);
};
var show = function ($elem,var_args){
var p__328245 = null;
if (goog.isDef(var_args)) {
  p__328245 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__328245);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__328250){
var $elem = cljs.core.first(arglist__328250);
var p__328245 = cljs.core.rest(arglist__328250);
return show__delegate.call(this, $elem, p__328245);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__328251){
var vec__328252__328253 = p__328251;
var speed__328254 = cljs.core.nth.call(null,vec__328252__328253,0,null);
var on_finish__328255 = cljs.core.nth.call(null,vec__328252__328253,1,null);

return $elem.toggle(speed__328254,on_finish__328255);
};
var toggle = function ($elem,var_args){
var p__328251 = null;
if (goog.isDef(var_args)) {
  p__328251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__328251);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__328256){
var $elem = cljs.core.first(arglist__328256);
var p__328251 = cljs.core.rest(arglist__328256);
return toggle__delegate.call(this, $elem, p__328251);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__328257){
var vec__328258__328259 = p__328257;
var speed__328260 = cljs.core.nth.call(null,vec__328258__328259,0,null);
var on_finish__328261 = cljs.core.nth.call(null,vec__328258__328259,1,null);

return $elem.fadeOut(speed__328260,on_finish__328261);
};
var fade_out = function ($elem,var_args){
var p__328257 = null;
if (goog.isDef(var_args)) {
  p__328257 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__328257);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__328262){
var $elem = cljs.core.first(arglist__328262);
var p__328257 = cljs.core.rest(arglist__328262);
return fade_out__delegate.call(this, $elem, p__328257);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__328263){
var vec__328264__328265 = p__328263;
var speed__328266 = cljs.core.nth.call(null,vec__328264__328265,0,null);
var on_finish__328267 = cljs.core.nth.call(null,vec__328264__328265,1,null);

return $elem.fadeIn(speed__328266,on_finish__328267);
};
var fade_in = function ($elem,var_args){
var p__328263 = null;
if (goog.isDef(var_args)) {
  p__328263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__328263);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__328268){
var $elem = cljs.core.first(arglist__328268);
var p__328263 = cljs.core.rest(arglist__328268);
return fade_in__delegate.call(this, $elem, p__328263);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__328269){
var vec__328270__328271 = p__328269;
var speed__328272 = cljs.core.nth.call(null,vec__328270__328271,0,null);
var on_finish__328273 = cljs.core.nth.call(null,vec__328270__328271,1,null);

return $elem.slideUp(speed__328272,on_finish__328273);
};
var slide_up = function ($elem,var_args){
var p__328269 = null;
if (goog.isDef(var_args)) {
  p__328269 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__328269);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__328274){
var $elem = cljs.core.first(arglist__328274);
var p__328269 = cljs.core.rest(arglist__328274);
return slide_up__delegate.call(this, $elem, p__328269);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__328275){
var vec__328276__328277 = p__328275;
var speed__328278 = cljs.core.nth.call(null,vec__328276__328277,0,null);
var on_finish__328279 = cljs.core.nth.call(null,vec__328276__328277,1,null);

return $elem.slideDown(speed__328278,on_finish__328279);
};
var slide_down = function ($elem,var_args){
var p__328275 = null;
if (goog.isDef(var_args)) {
  p__328275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__328275);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__328280){
var $elem = cljs.core.first(arglist__328280);
var p__328275 = cljs.core.rest(arglist__328280);
return slide_down__delegate.call(this, $elem, p__328275);
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
var val__delegate = function ($elem,p__328281){
var vec__328282__328283 = p__328281;
var v__328284 = cljs.core.nth.call(null,vec__328282__328283,0,null);

if(cljs.core.truth_(v__328284))
{return $elem.val(v__328284);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__328281 = null;
if (goog.isDef(var_args)) {
  p__328281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__328281);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__328285){
var $elem = cljs.core.first(arglist__328285);
var p__328281 = cljs.core.rest(arglist__328285);
return val__delegate.call(this, $elem, p__328281);
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
jayq.core.xhr = (function xhr(p__328286,content,callback){
var vec__328287__328288 = p__328286;
var method__328289 = cljs.core.nth.call(null,vec__328287__328288,0,null);
var uri__328290 = cljs.core.nth.call(null,vec__328287__328288,1,null);

var params__328291 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__328289)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__328290,params__328291);
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
var on__delegate = function ($elem,events,p__328292){
var vec__328293__328294 = p__328292;
var sel__328295 = cljs.core.nth.call(null,vec__328293__328294,0,null);
var data__328296 = cljs.core.nth.call(null,vec__328293__328294,1,null);
var handler__328297 = cljs.core.nth.call(null,vec__328293__328294,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__328295),data__328296,handler__328297);
};
var on = function ($elem,events,var_args){
var p__328292 = null;
if (goog.isDef(var_args)) {
  p__328292 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__328292);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__328298){
var $elem = cljs.core.first(arglist__328298);
var events = cljs.core.first(cljs.core.next(arglist__328298));
var p__328292 = cljs.core.rest(cljs.core.next(arglist__328298));
return on__delegate.call(this, $elem, events, p__328292);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__328299){
var vec__328300__328301 = p__328299;
var sel__328302 = cljs.core.nth.call(null,vec__328300__328301,0,null);
var data__328303 = cljs.core.nth.call(null,vec__328300__328301,1,null);
var handler__328304 = cljs.core.nth.call(null,vec__328300__328301,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__328302),data__328303,handler__328304);
};
var one = function ($elem,events,var_args){
var p__328299 = null;
if (goog.isDef(var_args)) {
  p__328299 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__328299);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__328305){
var $elem = cljs.core.first(arglist__328305);
var events = cljs.core.first(cljs.core.next(arglist__328305));
var p__328299 = cljs.core.rest(cljs.core.next(arglist__328305));
return one__delegate.call(this, $elem, events, p__328299);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__328306){
var vec__328307__328308 = p__328306;
var sel__328309 = cljs.core.nth.call(null,vec__328307__328308,0,null);
var handler__328310 = cljs.core.nth.call(null,vec__328307__328308,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__328309),handler__328310);
};
var off = function ($elem,events,var_args){
var p__328306 = null;
if (goog.isDef(var_args)) {
  p__328306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__328306);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__328311){
var $elem = cljs.core.first(arglist__328311);
var events = cljs.core.first(cljs.core.next(arglist__328311));
var p__328306 = cljs.core.rest(cljs.core.next(arglist__328311));
return off__delegate.call(this, $elem, events, p__328306);
});
return off;
})()
;
