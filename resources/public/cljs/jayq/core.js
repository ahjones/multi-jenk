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
{var temp__3695__auto____16021 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____16021))
{var cm__16022 = temp__3695__auto____16021;

return cljs.core.str.call(null,"[crateGroup=",cm__16022,"]");
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
var $__delegate = function (sel,p__16023){
var vec__16024__16025 = p__16023;
var context__16026 = cljs.core.nth.call(null,vec__16024__16025,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__16026)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__16026);
}
};
var $ = function (sel,var_args){
var p__16023 = null;
if (goog.isDef(var_args)) {
  p__16023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__16023);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__16027){
var sel = cljs.core.first(arglist__16027);
var p__16023 = cljs.core.rest(arglist__16027);
return $__delegate.call(this, sel, p__16023);
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
var G__16029 = null;
var G__16029__16030 = (function (this$,k){
var or__3548__auto____16028 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____16028))
{return or__3548__auto____16028;
} else
{return null;
}
});
var G__16029__16031 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__16029 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__16029__16030.call(this,this$,k);
case  3 :
return G__16029__16031.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16029;
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
var G__16033 = null;
var G__16033__16034 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__16033__16035 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__16033 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__16033__16034.call(this,_,k);
case  3 :
return G__16033__16035.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16033;
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
var attr__delegate = function ($elem,a,p__16037){
var vec__16038__16039 = p__16037;
var v__16040 = cljs.core.nth.call(null,vec__16038__16039,0,null);

var a__16041 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__16040)))
{return $elem.attr(a__16041);
} else
{return $elem.attr(a__16041,v__16040);
}
};
var attr = function ($elem,a,var_args){
var p__16037 = null;
if (goog.isDef(var_args)) {
  p__16037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__16037);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__16042){
var $elem = cljs.core.first(arglist__16042);
var a = cljs.core.first(cljs.core.next(arglist__16042));
var p__16037 = cljs.core.rest(cljs.core.next(arglist__16042));
return attr__delegate.call(this, $elem, a, p__16037);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__16043){
var vec__16044__16045 = p__16043;
var v__16046 = cljs.core.nth.call(null,vec__16044__16045,0,null);

var k__16047 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__16046)))
{return $elem.data(k__16047);
} else
{return $elem.data(k__16047,v__16046);
}
};
var data = function ($elem,k,var_args){
var p__16043 = null;
if (goog.isDef(var_args)) {
  p__16043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__16043);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__16048){
var $elem = cljs.core.first(arglist__16048);
var k = cljs.core.first(cljs.core.next(arglist__16048));
var p__16043 = cljs.core.rest(cljs.core.next(arglist__16048));
return data__delegate.call(this, $elem, k, p__16043);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__16049 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__16049);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__16050 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__16050);
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
var hide__delegate = function ($elem,p__16051){
var vec__16052__16053 = p__16051;
var speed__16054 = cljs.core.nth.call(null,vec__16052__16053,0,null);
var on_finish__16055 = cljs.core.nth.call(null,vec__16052__16053,1,null);

return $elem.hide(speed__16054,on_finish__16055);
};
var hide = function ($elem,var_args){
var p__16051 = null;
if (goog.isDef(var_args)) {
  p__16051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__16051);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__16056){
var $elem = cljs.core.first(arglist__16056);
var p__16051 = cljs.core.rest(arglist__16056);
return hide__delegate.call(this, $elem, p__16051);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__16057){
var vec__16058__16059 = p__16057;
var speed__16060 = cljs.core.nth.call(null,vec__16058__16059,0,null);
var on_finish__16061 = cljs.core.nth.call(null,vec__16058__16059,1,null);

return $elem.show(speed__16060,on_finish__16061);
};
var show = function ($elem,var_args){
var p__16057 = null;
if (goog.isDef(var_args)) {
  p__16057 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__16057);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__16062){
var $elem = cljs.core.first(arglist__16062);
var p__16057 = cljs.core.rest(arglist__16062);
return show__delegate.call(this, $elem, p__16057);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__16063){
var vec__16064__16065 = p__16063;
var speed__16066 = cljs.core.nth.call(null,vec__16064__16065,0,null);
var on_finish__16067 = cljs.core.nth.call(null,vec__16064__16065,1,null);

return $elem.toggle(speed__16066,on_finish__16067);
};
var toggle = function ($elem,var_args){
var p__16063 = null;
if (goog.isDef(var_args)) {
  p__16063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__16063);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__16068){
var $elem = cljs.core.first(arglist__16068);
var p__16063 = cljs.core.rest(arglist__16068);
return toggle__delegate.call(this, $elem, p__16063);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__16069){
var vec__16070__16071 = p__16069;
var speed__16072 = cljs.core.nth.call(null,vec__16070__16071,0,null);
var on_finish__16073 = cljs.core.nth.call(null,vec__16070__16071,1,null);

return $elem.fadeOut(speed__16072,on_finish__16073);
};
var fade_out = function ($elem,var_args){
var p__16069 = null;
if (goog.isDef(var_args)) {
  p__16069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__16069);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__16074){
var $elem = cljs.core.first(arglist__16074);
var p__16069 = cljs.core.rest(arglist__16074);
return fade_out__delegate.call(this, $elem, p__16069);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__16075){
var vec__16076__16077 = p__16075;
var speed__16078 = cljs.core.nth.call(null,vec__16076__16077,0,null);
var on_finish__16079 = cljs.core.nth.call(null,vec__16076__16077,1,null);

return $elem.fadeIn(speed__16078,on_finish__16079);
};
var fade_in = function ($elem,var_args){
var p__16075 = null;
if (goog.isDef(var_args)) {
  p__16075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__16075);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__16080){
var $elem = cljs.core.first(arglist__16080);
var p__16075 = cljs.core.rest(arglist__16080);
return fade_in__delegate.call(this, $elem, p__16075);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__16081){
var vec__16082__16083 = p__16081;
var speed__16084 = cljs.core.nth.call(null,vec__16082__16083,0,null);
var on_finish__16085 = cljs.core.nth.call(null,vec__16082__16083,1,null);

return $elem.slideUp(speed__16084,on_finish__16085);
};
var slide_up = function ($elem,var_args){
var p__16081 = null;
if (goog.isDef(var_args)) {
  p__16081 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__16081);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__16086){
var $elem = cljs.core.first(arglist__16086);
var p__16081 = cljs.core.rest(arglist__16086);
return slide_up__delegate.call(this, $elem, p__16081);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__16087){
var vec__16088__16089 = p__16087;
var speed__16090 = cljs.core.nth.call(null,vec__16088__16089,0,null);
var on_finish__16091 = cljs.core.nth.call(null,vec__16088__16089,1,null);

return $elem.slideDown(speed__16090,on_finish__16091);
};
var slide_down = function ($elem,var_args){
var p__16087 = null;
if (goog.isDef(var_args)) {
  p__16087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__16087);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__16092){
var $elem = cljs.core.first(arglist__16092);
var p__16087 = cljs.core.rest(arglist__16092);
return slide_down__delegate.call(this, $elem, p__16087);
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
var val__delegate = function ($elem,p__16093){
var vec__16094__16095 = p__16093;
var v__16096 = cljs.core.nth.call(null,vec__16094__16095,0,null);

if(cljs.core.truth_(v__16096))
{return $elem.val(v__16096);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__16093 = null;
if (goog.isDef(var_args)) {
  p__16093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__16093);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__16097){
var $elem = cljs.core.first(arglist__16097);
var p__16093 = cljs.core.rest(arglist__16097);
return val__delegate.call(this, $elem, p__16093);
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
jayq.core.xhr = (function xhr(p__16098,content,callback){
var vec__16099__16100 = p__16098;
var method__16101 = cljs.core.nth.call(null,vec__16099__16100,0,null);
var uri__16102 = cljs.core.nth.call(null,vec__16099__16100,1,null);

var params__16103 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__16101)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__16102,params__16103);
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
var on__delegate = function ($elem,events,p__16104){
var vec__16105__16106 = p__16104;
var sel__16107 = cljs.core.nth.call(null,vec__16105__16106,0,null);
var data__16108 = cljs.core.nth.call(null,vec__16105__16106,1,null);
var handler__16109 = cljs.core.nth.call(null,vec__16105__16106,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__16107),data__16108,handler__16109);
};
var on = function ($elem,events,var_args){
var p__16104 = null;
if (goog.isDef(var_args)) {
  p__16104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__16104);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__16110){
var $elem = cljs.core.first(arglist__16110);
var events = cljs.core.first(cljs.core.next(arglist__16110));
var p__16104 = cljs.core.rest(cljs.core.next(arglist__16110));
return on__delegate.call(this, $elem, events, p__16104);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__16111){
var vec__16112__16113 = p__16111;
var sel__16114 = cljs.core.nth.call(null,vec__16112__16113,0,null);
var data__16115 = cljs.core.nth.call(null,vec__16112__16113,1,null);
var handler__16116 = cljs.core.nth.call(null,vec__16112__16113,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__16114),data__16115,handler__16116);
};
var one = function ($elem,events,var_args){
var p__16111 = null;
if (goog.isDef(var_args)) {
  p__16111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__16111);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__16117){
var $elem = cljs.core.first(arglist__16117);
var events = cljs.core.first(cljs.core.next(arglist__16117));
var p__16111 = cljs.core.rest(cljs.core.next(arglist__16117));
return one__delegate.call(this, $elem, events, p__16111);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__16118){
var vec__16119__16120 = p__16118;
var sel__16121 = cljs.core.nth.call(null,vec__16119__16120,0,null);
var handler__16122 = cljs.core.nth.call(null,vec__16119__16120,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__16121),handler__16122);
};
var off = function ($elem,events,var_args){
var p__16118 = null;
if (goog.isDef(var_args)) {
  p__16118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__16118);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__16123){
var $elem = cljs.core.first(arglist__16123);
var events = cljs.core.first(cljs.core.next(arglist__16123));
var p__16118 = cljs.core.rest(cljs.core.next(arglist__16123));
return off__delegate.call(this, $elem, events, p__16118);
});
return off;
})()
;
