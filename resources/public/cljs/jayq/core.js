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
{var temp__3695__auto____27204 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____27204))
{var cm__27205 = temp__3695__auto____27204;

return cljs.core.str.call(null,"[crateGroup=",cm__27205,"]");
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
var $__delegate = function (sel,p__27206){
var vec__27207__27208 = p__27206;
var context__27209 = cljs.core.nth.call(null,vec__27207__27208,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__27209)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__27209);
}
};
var $ = function (sel,var_args){
var p__27206 = null;
if (goog.isDef(var_args)) {
  p__27206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__27206);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__27210){
var sel = cljs.core.first(arglist__27210);
var p__27206 = cljs.core.rest(arglist__27210);
return $__delegate.call(this, sel, p__27206);
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
var G__27212 = null;
var G__27212__27213 = (function (this$,k){
var or__3548__auto____27211 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____27211))
{return or__3548__auto____27211;
} else
{return null;
}
});
var G__27212__27214 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__27212 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__27212__27213.call(this,this$,k);
case  3 :
return G__27212__27214.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27212;
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
var G__27216 = null;
var G__27216__27217 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__27216__27218 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__27216 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__27216__27217.call(this,_,k);
case  3 :
return G__27216__27218.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27216;
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
var attr__delegate = function ($elem,a,p__27220){
var vec__27221__27222 = p__27220;
var v__27223 = cljs.core.nth.call(null,vec__27221__27222,0,null);

var a__27224 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__27223)))
{return $elem.attr(a__27224);
} else
{return $elem.attr(a__27224,v__27223);
}
};
var attr = function ($elem,a,var_args){
var p__27220 = null;
if (goog.isDef(var_args)) {
  p__27220 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__27220);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__27225){
var $elem = cljs.core.first(arglist__27225);
var a = cljs.core.first(cljs.core.next(arglist__27225));
var p__27220 = cljs.core.rest(cljs.core.next(arglist__27225));
return attr__delegate.call(this, $elem, a, p__27220);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__27226){
var vec__27227__27228 = p__27226;
var v__27229 = cljs.core.nth.call(null,vec__27227__27228,0,null);

var k__27230 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__27229)))
{return $elem.data(k__27230);
} else
{return $elem.data(k__27230,v__27229);
}
};
var data = function ($elem,k,var_args){
var p__27226 = null;
if (goog.isDef(var_args)) {
  p__27226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__27226);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__27231){
var $elem = cljs.core.first(arglist__27231);
var k = cljs.core.first(cljs.core.next(arglist__27231));
var p__27226 = cljs.core.rest(cljs.core.next(arglist__27231));
return data__delegate.call(this, $elem, k, p__27226);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__27232 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__27232);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__27233 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__27233);
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
var hide__delegate = function ($elem,p__27234){
var vec__27235__27236 = p__27234;
var speed__27237 = cljs.core.nth.call(null,vec__27235__27236,0,null);
var on_finish__27238 = cljs.core.nth.call(null,vec__27235__27236,1,null);

return $elem.hide(speed__27237,on_finish__27238);
};
var hide = function ($elem,var_args){
var p__27234 = null;
if (goog.isDef(var_args)) {
  p__27234 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__27234);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__27239){
var $elem = cljs.core.first(arglist__27239);
var p__27234 = cljs.core.rest(arglist__27239);
return hide__delegate.call(this, $elem, p__27234);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__27240){
var vec__27241__27242 = p__27240;
var speed__27243 = cljs.core.nth.call(null,vec__27241__27242,0,null);
var on_finish__27244 = cljs.core.nth.call(null,vec__27241__27242,1,null);

return $elem.show(speed__27243,on_finish__27244);
};
var show = function ($elem,var_args){
var p__27240 = null;
if (goog.isDef(var_args)) {
  p__27240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__27240);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__27245){
var $elem = cljs.core.first(arglist__27245);
var p__27240 = cljs.core.rest(arglist__27245);
return show__delegate.call(this, $elem, p__27240);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__27246){
var vec__27247__27248 = p__27246;
var speed__27249 = cljs.core.nth.call(null,vec__27247__27248,0,null);
var on_finish__27250 = cljs.core.nth.call(null,vec__27247__27248,1,null);

return $elem.toggle(speed__27249,on_finish__27250);
};
var toggle = function ($elem,var_args){
var p__27246 = null;
if (goog.isDef(var_args)) {
  p__27246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__27246);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__27251){
var $elem = cljs.core.first(arglist__27251);
var p__27246 = cljs.core.rest(arglist__27251);
return toggle__delegate.call(this, $elem, p__27246);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__27252){
var vec__27253__27254 = p__27252;
var speed__27255 = cljs.core.nth.call(null,vec__27253__27254,0,null);
var on_finish__27256 = cljs.core.nth.call(null,vec__27253__27254,1,null);

return $elem.fadeOut(speed__27255,on_finish__27256);
};
var fade_out = function ($elem,var_args){
var p__27252 = null;
if (goog.isDef(var_args)) {
  p__27252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__27252);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__27257){
var $elem = cljs.core.first(arglist__27257);
var p__27252 = cljs.core.rest(arglist__27257);
return fade_out__delegate.call(this, $elem, p__27252);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__27258){
var vec__27259__27260 = p__27258;
var speed__27261 = cljs.core.nth.call(null,vec__27259__27260,0,null);
var on_finish__27262 = cljs.core.nth.call(null,vec__27259__27260,1,null);

return $elem.fadeIn(speed__27261,on_finish__27262);
};
var fade_in = function ($elem,var_args){
var p__27258 = null;
if (goog.isDef(var_args)) {
  p__27258 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__27258);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__27263){
var $elem = cljs.core.first(arglist__27263);
var p__27258 = cljs.core.rest(arglist__27263);
return fade_in__delegate.call(this, $elem, p__27258);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__27264){
var vec__27265__27266 = p__27264;
var speed__27267 = cljs.core.nth.call(null,vec__27265__27266,0,null);
var on_finish__27268 = cljs.core.nth.call(null,vec__27265__27266,1,null);

return $elem.slideUp(speed__27267,on_finish__27268);
};
var slide_up = function ($elem,var_args){
var p__27264 = null;
if (goog.isDef(var_args)) {
  p__27264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__27264);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__27269){
var $elem = cljs.core.first(arglist__27269);
var p__27264 = cljs.core.rest(arglist__27269);
return slide_up__delegate.call(this, $elem, p__27264);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__27270){
var vec__27271__27272 = p__27270;
var speed__27273 = cljs.core.nth.call(null,vec__27271__27272,0,null);
var on_finish__27274 = cljs.core.nth.call(null,vec__27271__27272,1,null);

return $elem.slideDown(speed__27273,on_finish__27274);
};
var slide_down = function ($elem,var_args){
var p__27270 = null;
if (goog.isDef(var_args)) {
  p__27270 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__27270);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__27275){
var $elem = cljs.core.first(arglist__27275);
var p__27270 = cljs.core.rest(arglist__27275);
return slide_down__delegate.call(this, $elem, p__27270);
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
var val__delegate = function ($elem,p__27276){
var vec__27277__27278 = p__27276;
var v__27279 = cljs.core.nth.call(null,vec__27277__27278,0,null);

if(cljs.core.truth_(v__27279))
{return $elem.val(v__27279);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__27276 = null;
if (goog.isDef(var_args)) {
  p__27276 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__27276);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__27280){
var $elem = cljs.core.first(arglist__27280);
var p__27276 = cljs.core.rest(arglist__27280);
return val__delegate.call(this, $elem, p__27276);
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
jayq.core.xhr = (function xhr(p__27281,content,callback){
var vec__27282__27283 = p__27281;
var method__27284 = cljs.core.nth.call(null,vec__27282__27283,0,null);
var uri__27285 = cljs.core.nth.call(null,vec__27282__27283,1,null);

var params__27286 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__27284)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__27285,params__27286);
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
var on__delegate = function ($elem,events,p__27287){
var vec__27288__27289 = p__27287;
var sel__27290 = cljs.core.nth.call(null,vec__27288__27289,0,null);
var data__27291 = cljs.core.nth.call(null,vec__27288__27289,1,null);
var handler__27292 = cljs.core.nth.call(null,vec__27288__27289,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__27290),data__27291,handler__27292);
};
var on = function ($elem,events,var_args){
var p__27287 = null;
if (goog.isDef(var_args)) {
  p__27287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__27287);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__27293){
var $elem = cljs.core.first(arglist__27293);
var events = cljs.core.first(cljs.core.next(arglist__27293));
var p__27287 = cljs.core.rest(cljs.core.next(arglist__27293));
return on__delegate.call(this, $elem, events, p__27287);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__27294){
var vec__27295__27296 = p__27294;
var sel__27297 = cljs.core.nth.call(null,vec__27295__27296,0,null);
var data__27298 = cljs.core.nth.call(null,vec__27295__27296,1,null);
var handler__27299 = cljs.core.nth.call(null,vec__27295__27296,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__27297),data__27298,handler__27299);
};
var one = function ($elem,events,var_args){
var p__27294 = null;
if (goog.isDef(var_args)) {
  p__27294 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__27294);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__27300){
var $elem = cljs.core.first(arglist__27300);
var events = cljs.core.first(cljs.core.next(arglist__27300));
var p__27294 = cljs.core.rest(cljs.core.next(arglist__27300));
return one__delegate.call(this, $elem, events, p__27294);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__27301){
var vec__27302__27303 = p__27301;
var sel__27304 = cljs.core.nth.call(null,vec__27302__27303,0,null);
var handler__27305 = cljs.core.nth.call(null,vec__27302__27303,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__27304),handler__27305);
};
var off = function ($elem,events,var_args){
var p__27301 = null;
if (goog.isDef(var_args)) {
  p__27301 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__27301);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__27306){
var $elem = cljs.core.first(arglist__27306);
var events = cljs.core.first(cljs.core.next(arglist__27306));
var p__27301 = cljs.core.rest(cljs.core.next(arglist__27306));
return off__delegate.call(this, $elem, events, p__27301);
});
return off;
})()
;
