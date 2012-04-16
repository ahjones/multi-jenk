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
{var temp__3695__auto____5236 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____5236))
{var cm__5237 = temp__3695__auto____5236;

return cljs.core.str.call(null,"[crateGroup=",cm__5237,"]");
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
var $__delegate = function (sel,p__5238){
var vec__5239__5240 = p__5238;
var context__5241 = cljs.core.nth.call(null,vec__5239__5240,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__5241)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__5241);
}
};
var $ = function (sel,var_args){
var p__5238 = null;
if (goog.isDef(var_args)) {
  p__5238 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__5238);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__5242){
var sel = cljs.core.first(arglist__5242);
var p__5238 = cljs.core.rest(arglist__5242);
return $__delegate.call(this, sel, p__5238);
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
var G__5244 = null;
var G__5244__5245 = (function (this$,k){
var or__3548__auto____5243 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____5243))
{return or__3548__auto____5243;
} else
{return null;
}
});
var G__5244__5246 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__5244 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__5244__5245.call(this,this$,k);
case  3 :
return G__5244__5246.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5244;
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
var G__5248 = null;
var G__5248__5249 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__5248__5250 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__5248 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__5248__5249.call(this,_,k);
case  3 :
return G__5248__5250.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5248;
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
var attr__delegate = function ($elem,a,p__5252){
var vec__5253__5254 = p__5252;
var v__5255 = cljs.core.nth.call(null,vec__5253__5254,0,null);

var a__5256 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__5255)))
{return $elem.attr(a__5256);
} else
{return $elem.attr(a__5256,v__5255);
}
};
var attr = function ($elem,a,var_args){
var p__5252 = null;
if (goog.isDef(var_args)) {
  p__5252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__5252);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__5257){
var $elem = cljs.core.first(arglist__5257);
var a = cljs.core.first(cljs.core.next(arglist__5257));
var p__5252 = cljs.core.rest(cljs.core.next(arglist__5257));
return attr__delegate.call(this, $elem, a, p__5252);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__5258){
var vec__5259__5260 = p__5258;
var v__5261 = cljs.core.nth.call(null,vec__5259__5260,0,null);

var k__5262 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__5261)))
{return $elem.data(k__5262);
} else
{return $elem.data(k__5262,v__5261);
}
};
var data = function ($elem,k,var_args){
var p__5258 = null;
if (goog.isDef(var_args)) {
  p__5258 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__5258);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__5263){
var $elem = cljs.core.first(arglist__5263);
var k = cljs.core.first(cljs.core.next(arglist__5263));
var p__5258 = cljs.core.rest(cljs.core.next(arglist__5263));
return data__delegate.call(this, $elem, k, p__5258);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__5264 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__5264);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__5265 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__5265);
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
var hide__delegate = function ($elem,p__5266){
var vec__5267__5268 = p__5266;
var speed__5269 = cljs.core.nth.call(null,vec__5267__5268,0,null);
var on_finish__5270 = cljs.core.nth.call(null,vec__5267__5268,1,null);

return $elem.hide(speed__5269,on_finish__5270);
};
var hide = function ($elem,var_args){
var p__5266 = null;
if (goog.isDef(var_args)) {
  p__5266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__5266);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__5271){
var $elem = cljs.core.first(arglist__5271);
var p__5266 = cljs.core.rest(arglist__5271);
return hide__delegate.call(this, $elem, p__5266);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__5272){
var vec__5273__5274 = p__5272;
var speed__5275 = cljs.core.nth.call(null,vec__5273__5274,0,null);
var on_finish__5276 = cljs.core.nth.call(null,vec__5273__5274,1,null);

return $elem.show(speed__5275,on_finish__5276);
};
var show = function ($elem,var_args){
var p__5272 = null;
if (goog.isDef(var_args)) {
  p__5272 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__5272);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__5277){
var $elem = cljs.core.first(arglist__5277);
var p__5272 = cljs.core.rest(arglist__5277);
return show__delegate.call(this, $elem, p__5272);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__5278){
var vec__5279__5280 = p__5278;
var speed__5281 = cljs.core.nth.call(null,vec__5279__5280,0,null);
var on_finish__5282 = cljs.core.nth.call(null,vec__5279__5280,1,null);

return $elem.toggle(speed__5281,on_finish__5282);
};
var toggle = function ($elem,var_args){
var p__5278 = null;
if (goog.isDef(var_args)) {
  p__5278 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__5278);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__5283){
var $elem = cljs.core.first(arglist__5283);
var p__5278 = cljs.core.rest(arglist__5283);
return toggle__delegate.call(this, $elem, p__5278);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__5284){
var vec__5285__5286 = p__5284;
var speed__5287 = cljs.core.nth.call(null,vec__5285__5286,0,null);
var on_finish__5288 = cljs.core.nth.call(null,vec__5285__5286,1,null);

return $elem.fadeOut(speed__5287,on_finish__5288);
};
var fade_out = function ($elem,var_args){
var p__5284 = null;
if (goog.isDef(var_args)) {
  p__5284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__5284);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__5289){
var $elem = cljs.core.first(arglist__5289);
var p__5284 = cljs.core.rest(arglist__5289);
return fade_out__delegate.call(this, $elem, p__5284);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__5290){
var vec__5291__5292 = p__5290;
var speed__5293 = cljs.core.nth.call(null,vec__5291__5292,0,null);
var on_finish__5294 = cljs.core.nth.call(null,vec__5291__5292,1,null);

return $elem.fadeIn(speed__5293,on_finish__5294);
};
var fade_in = function ($elem,var_args){
var p__5290 = null;
if (goog.isDef(var_args)) {
  p__5290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__5290);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__5295){
var $elem = cljs.core.first(arglist__5295);
var p__5290 = cljs.core.rest(arglist__5295);
return fade_in__delegate.call(this, $elem, p__5290);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__5296){
var vec__5297__5298 = p__5296;
var speed__5299 = cljs.core.nth.call(null,vec__5297__5298,0,null);
var on_finish__5300 = cljs.core.nth.call(null,vec__5297__5298,1,null);

return $elem.slideUp(speed__5299,on_finish__5300);
};
var slide_up = function ($elem,var_args){
var p__5296 = null;
if (goog.isDef(var_args)) {
  p__5296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__5296);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__5301){
var $elem = cljs.core.first(arglist__5301);
var p__5296 = cljs.core.rest(arglist__5301);
return slide_up__delegate.call(this, $elem, p__5296);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__5302){
var vec__5303__5304 = p__5302;
var speed__5305 = cljs.core.nth.call(null,vec__5303__5304,0,null);
var on_finish__5306 = cljs.core.nth.call(null,vec__5303__5304,1,null);

return $elem.slideDown(speed__5305,on_finish__5306);
};
var slide_down = function ($elem,var_args){
var p__5302 = null;
if (goog.isDef(var_args)) {
  p__5302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__5302);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__5307){
var $elem = cljs.core.first(arglist__5307);
var p__5302 = cljs.core.rest(arglist__5307);
return slide_down__delegate.call(this, $elem, p__5302);
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
var val__delegate = function ($elem,p__5308){
var vec__5309__5310 = p__5308;
var v__5311 = cljs.core.nth.call(null,vec__5309__5310,0,null);

if(cljs.core.truth_(v__5311))
{return $elem.val(v__5311);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__5308 = null;
if (goog.isDef(var_args)) {
  p__5308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__5308);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__5312){
var $elem = cljs.core.first(arglist__5312);
var p__5308 = cljs.core.rest(arglist__5312);
return val__delegate.call(this, $elem, p__5308);
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
jayq.core.xhr = (function xhr(p__5313,content,callback){
var vec__5314__5315 = p__5313;
var method__5316 = cljs.core.nth.call(null,vec__5314__5315,0,null);
var uri__5317 = cljs.core.nth.call(null,vec__5314__5315,1,null);

var params__5318 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__5316)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__5317,params__5318);
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
var on__delegate = function ($elem,events,p__5319){
var vec__5320__5321 = p__5319;
var sel__5322 = cljs.core.nth.call(null,vec__5320__5321,0,null);
var data__5323 = cljs.core.nth.call(null,vec__5320__5321,1,null);
var handler__5324 = cljs.core.nth.call(null,vec__5320__5321,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__5322),data__5323,handler__5324);
};
var on = function ($elem,events,var_args){
var p__5319 = null;
if (goog.isDef(var_args)) {
  p__5319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__5319);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__5325){
var $elem = cljs.core.first(arglist__5325);
var events = cljs.core.first(cljs.core.next(arglist__5325));
var p__5319 = cljs.core.rest(cljs.core.next(arglist__5325));
return on__delegate.call(this, $elem, events, p__5319);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__5326){
var vec__5327__5328 = p__5326;
var sel__5329 = cljs.core.nth.call(null,vec__5327__5328,0,null);
var data__5330 = cljs.core.nth.call(null,vec__5327__5328,1,null);
var handler__5331 = cljs.core.nth.call(null,vec__5327__5328,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__5329),data__5330,handler__5331);
};
var one = function ($elem,events,var_args){
var p__5326 = null;
if (goog.isDef(var_args)) {
  p__5326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__5326);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__5332){
var $elem = cljs.core.first(arglist__5332);
var events = cljs.core.first(cljs.core.next(arglist__5332));
var p__5326 = cljs.core.rest(cljs.core.next(arglist__5332));
return one__delegate.call(this, $elem, events, p__5326);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__5333){
var vec__5334__5335 = p__5333;
var sel__5336 = cljs.core.nth.call(null,vec__5334__5335,0,null);
var handler__5337 = cljs.core.nth.call(null,vec__5334__5335,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__5336),handler__5337);
};
var off = function ($elem,events,var_args){
var p__5333 = null;
if (goog.isDef(var_args)) {
  p__5333 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__5333);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__5338){
var $elem = cljs.core.first(arglist__5338);
var events = cljs.core.first(cljs.core.next(arglist__5338));
var p__5333 = cljs.core.rest(cljs.core.next(arglist__5338));
return off__delegate.call(this, $elem, events, p__5333);
});
return off;
})()
;
