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
{var temp__3695__auto____300169 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____300169))
{var cm__300170 = temp__3695__auto____300169;

return cljs.core.str.call(null,"[crateGroup=",cm__300170,"]");
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
var $__delegate = function (sel,p__300171){
var vec__300172__300173 = p__300171;
var context__300174 = cljs.core.nth.call(null,vec__300172__300173,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__300174)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__300174);
}
};
var $ = function (sel,var_args){
var p__300171 = null;
if (goog.isDef(var_args)) {
  p__300171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__300171);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__300175){
var sel = cljs.core.first(arglist__300175);
var p__300171 = cljs.core.rest(arglist__300175);
return $__delegate.call(this, sel, p__300171);
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
var G__300177 = null;
var G__300177__300178 = (function (this$,k){
var or__3548__auto____300176 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____300176))
{return or__3548__auto____300176;
} else
{return null;
}
});
var G__300177__300179 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__300177 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__300177__300178.call(this,this$,k);
case  3 :
return G__300177__300179.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__300177;
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
var G__300181 = null;
var G__300181__300182 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__300181__300183 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__300181 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__300181__300182.call(this,_,k);
case  3 :
return G__300181__300183.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__300181;
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
var attr__delegate = function ($elem,a,p__300185){
var vec__300186__300187 = p__300185;
var v__300188 = cljs.core.nth.call(null,vec__300186__300187,0,null);

var a__300189 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__300188)))
{return $elem.attr(a__300189);
} else
{return $elem.attr(a__300189,v__300188);
}
};
var attr = function ($elem,a,var_args){
var p__300185 = null;
if (goog.isDef(var_args)) {
  p__300185 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__300185);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__300190){
var $elem = cljs.core.first(arglist__300190);
var a = cljs.core.first(cljs.core.next(arglist__300190));
var p__300185 = cljs.core.rest(cljs.core.next(arglist__300190));
return attr__delegate.call(this, $elem, a, p__300185);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__300191){
var vec__300192__300193 = p__300191;
var v__300194 = cljs.core.nth.call(null,vec__300192__300193,0,null);

var k__300195 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__300194)))
{return $elem.data(k__300195);
} else
{return $elem.data(k__300195,v__300194);
}
};
var data = function ($elem,k,var_args){
var p__300191 = null;
if (goog.isDef(var_args)) {
  p__300191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__300191);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__300196){
var $elem = cljs.core.first(arglist__300196);
var k = cljs.core.first(cljs.core.next(arglist__300196));
var p__300191 = cljs.core.rest(cljs.core.next(arglist__300196));
return data__delegate.call(this, $elem, k, p__300191);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__300197 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__300197);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__300198 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__300198);
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
var hide__delegate = function ($elem,p__300199){
var vec__300200__300201 = p__300199;
var speed__300202 = cljs.core.nth.call(null,vec__300200__300201,0,null);
var on_finish__300203 = cljs.core.nth.call(null,vec__300200__300201,1,null);

return $elem.hide(speed__300202,on_finish__300203);
};
var hide = function ($elem,var_args){
var p__300199 = null;
if (goog.isDef(var_args)) {
  p__300199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__300199);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__300204){
var $elem = cljs.core.first(arglist__300204);
var p__300199 = cljs.core.rest(arglist__300204);
return hide__delegate.call(this, $elem, p__300199);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__300205){
var vec__300206__300207 = p__300205;
var speed__300208 = cljs.core.nth.call(null,vec__300206__300207,0,null);
var on_finish__300209 = cljs.core.nth.call(null,vec__300206__300207,1,null);

return $elem.show(speed__300208,on_finish__300209);
};
var show = function ($elem,var_args){
var p__300205 = null;
if (goog.isDef(var_args)) {
  p__300205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__300205);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__300210){
var $elem = cljs.core.first(arglist__300210);
var p__300205 = cljs.core.rest(arglist__300210);
return show__delegate.call(this, $elem, p__300205);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__300211){
var vec__300212__300213 = p__300211;
var speed__300214 = cljs.core.nth.call(null,vec__300212__300213,0,null);
var on_finish__300215 = cljs.core.nth.call(null,vec__300212__300213,1,null);

return $elem.toggle(speed__300214,on_finish__300215);
};
var toggle = function ($elem,var_args){
var p__300211 = null;
if (goog.isDef(var_args)) {
  p__300211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__300211);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__300216){
var $elem = cljs.core.first(arglist__300216);
var p__300211 = cljs.core.rest(arglist__300216);
return toggle__delegate.call(this, $elem, p__300211);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__300217){
var vec__300218__300219 = p__300217;
var speed__300220 = cljs.core.nth.call(null,vec__300218__300219,0,null);
var on_finish__300221 = cljs.core.nth.call(null,vec__300218__300219,1,null);

return $elem.fadeOut(speed__300220,on_finish__300221);
};
var fade_out = function ($elem,var_args){
var p__300217 = null;
if (goog.isDef(var_args)) {
  p__300217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__300217);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__300222){
var $elem = cljs.core.first(arglist__300222);
var p__300217 = cljs.core.rest(arglist__300222);
return fade_out__delegate.call(this, $elem, p__300217);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__300223){
var vec__300224__300225 = p__300223;
var speed__300226 = cljs.core.nth.call(null,vec__300224__300225,0,null);
var on_finish__300227 = cljs.core.nth.call(null,vec__300224__300225,1,null);

return $elem.fadeIn(speed__300226,on_finish__300227);
};
var fade_in = function ($elem,var_args){
var p__300223 = null;
if (goog.isDef(var_args)) {
  p__300223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__300223);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__300228){
var $elem = cljs.core.first(arglist__300228);
var p__300223 = cljs.core.rest(arglist__300228);
return fade_in__delegate.call(this, $elem, p__300223);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__300229){
var vec__300230__300231 = p__300229;
var speed__300232 = cljs.core.nth.call(null,vec__300230__300231,0,null);
var on_finish__300233 = cljs.core.nth.call(null,vec__300230__300231,1,null);

return $elem.slideUp(speed__300232,on_finish__300233);
};
var slide_up = function ($elem,var_args){
var p__300229 = null;
if (goog.isDef(var_args)) {
  p__300229 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__300229);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__300234){
var $elem = cljs.core.first(arglist__300234);
var p__300229 = cljs.core.rest(arglist__300234);
return slide_up__delegate.call(this, $elem, p__300229);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__300235){
var vec__300236__300237 = p__300235;
var speed__300238 = cljs.core.nth.call(null,vec__300236__300237,0,null);
var on_finish__300239 = cljs.core.nth.call(null,vec__300236__300237,1,null);

return $elem.slideDown(speed__300238,on_finish__300239);
};
var slide_down = function ($elem,var_args){
var p__300235 = null;
if (goog.isDef(var_args)) {
  p__300235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__300235);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__300240){
var $elem = cljs.core.first(arglist__300240);
var p__300235 = cljs.core.rest(arglist__300240);
return slide_down__delegate.call(this, $elem, p__300235);
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
var val__delegate = function ($elem,p__300241){
var vec__300242__300243 = p__300241;
var v__300244 = cljs.core.nth.call(null,vec__300242__300243,0,null);

if(cljs.core.truth_(v__300244))
{return $elem.val(v__300244);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__300241 = null;
if (goog.isDef(var_args)) {
  p__300241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__300241);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__300245){
var $elem = cljs.core.first(arglist__300245);
var p__300241 = cljs.core.rest(arglist__300245);
return val__delegate.call(this, $elem, p__300241);
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
jayq.core.xhr = (function xhr(p__300246,content,callback){
var vec__300247__300248 = p__300246;
var method__300249 = cljs.core.nth.call(null,vec__300247__300248,0,null);
var uri__300250 = cljs.core.nth.call(null,vec__300247__300248,1,null);

var params__300251 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__300249)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__300250,params__300251);
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
var on__delegate = function ($elem,events,p__300252){
var vec__300253__300254 = p__300252;
var sel__300255 = cljs.core.nth.call(null,vec__300253__300254,0,null);
var data__300256 = cljs.core.nth.call(null,vec__300253__300254,1,null);
var handler__300257 = cljs.core.nth.call(null,vec__300253__300254,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__300255),data__300256,handler__300257);
};
var on = function ($elem,events,var_args){
var p__300252 = null;
if (goog.isDef(var_args)) {
  p__300252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__300252);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__300258){
var $elem = cljs.core.first(arglist__300258);
var events = cljs.core.first(cljs.core.next(arglist__300258));
var p__300252 = cljs.core.rest(cljs.core.next(arglist__300258));
return on__delegate.call(this, $elem, events, p__300252);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__300259){
var vec__300260__300261 = p__300259;
var sel__300262 = cljs.core.nth.call(null,vec__300260__300261,0,null);
var data__300263 = cljs.core.nth.call(null,vec__300260__300261,1,null);
var handler__300264 = cljs.core.nth.call(null,vec__300260__300261,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__300262),data__300263,handler__300264);
};
var one = function ($elem,events,var_args){
var p__300259 = null;
if (goog.isDef(var_args)) {
  p__300259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__300259);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__300265){
var $elem = cljs.core.first(arglist__300265);
var events = cljs.core.first(cljs.core.next(arglist__300265));
var p__300259 = cljs.core.rest(cljs.core.next(arglist__300265));
return one__delegate.call(this, $elem, events, p__300259);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__300266){
var vec__300267__300268 = p__300266;
var sel__300269 = cljs.core.nth.call(null,vec__300267__300268,0,null);
var handler__300270 = cljs.core.nth.call(null,vec__300267__300268,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__300269),handler__300270);
};
var off = function ($elem,events,var_args){
var p__300266 = null;
if (goog.isDef(var_args)) {
  p__300266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__300266);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__300271){
var $elem = cljs.core.first(arglist__300271);
var events = cljs.core.first(cljs.core.next(arglist__300271));
var p__300266 = cljs.core.rest(cljs.core.next(arglist__300271));
return off__delegate.call(this, $elem, events, p__300266);
});
return off;
})()
;
