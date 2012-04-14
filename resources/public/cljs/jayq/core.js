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
{var temp__3695__auto____7106 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____7106))
{var cm__7107 = temp__3695__auto____7106;

return cljs.core.str.call(null,"[crateGroup=",cm__7107,"]");
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
var $__delegate = function (sel,p__7108){
var vec__7109__7110 = p__7108;
var context__7111 = cljs.core.nth.call(null,vec__7109__7110,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__7111)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__7111);
}
};
var $ = function (sel,var_args){
var p__7108 = null;
if (goog.isDef(var_args)) {
  p__7108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__7108);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__7112){
var sel = cljs.core.first(arglist__7112);
var p__7108 = cljs.core.rest(arglist__7112);
return $__delegate.call(this, sel, p__7108);
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
var G__7114 = null;
var G__7114__7115 = (function (this$,k){
var or__3548__auto____7113 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____7113))
{return or__3548__auto____7113;
} else
{return null;
}
});
var G__7114__7116 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__7114 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__7114__7115.call(this,this$,k);
case  3 :
return G__7114__7116.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7114;
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
var G__7118 = null;
var G__7118__7119 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__7118__7120 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__7118 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__7118__7119.call(this,_,k);
case  3 :
return G__7118__7120.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7118;
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
var attr__delegate = function ($elem,a,p__7122){
var vec__7123__7124 = p__7122;
var v__7125 = cljs.core.nth.call(null,vec__7123__7124,0,null);

var a__7126 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__7125)))
{return $elem.attr(a__7126);
} else
{return $elem.attr(a__7126,v__7125);
}
};
var attr = function ($elem,a,var_args){
var p__7122 = null;
if (goog.isDef(var_args)) {
  p__7122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__7122);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__7127){
var $elem = cljs.core.first(arglist__7127);
var a = cljs.core.first(cljs.core.next(arglist__7127));
var p__7122 = cljs.core.rest(cljs.core.next(arglist__7127));
return attr__delegate.call(this, $elem, a, p__7122);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__7128){
var vec__7129__7130 = p__7128;
var v__7131 = cljs.core.nth.call(null,vec__7129__7130,0,null);

var k__7132 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__7131)))
{return $elem.data(k__7132);
} else
{return $elem.data(k__7132,v__7131);
}
};
var data = function ($elem,k,var_args){
var p__7128 = null;
if (goog.isDef(var_args)) {
  p__7128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__7128);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__7133){
var $elem = cljs.core.first(arglist__7133);
var k = cljs.core.first(cljs.core.next(arglist__7133));
var p__7128 = cljs.core.rest(cljs.core.next(arglist__7133));
return data__delegate.call(this, $elem, k, p__7128);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__7134 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__7134);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__7135 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__7135);
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
var hide__delegate = function ($elem,p__7136){
var vec__7137__7138 = p__7136;
var speed__7139 = cljs.core.nth.call(null,vec__7137__7138,0,null);
var on_finish__7140 = cljs.core.nth.call(null,vec__7137__7138,1,null);

return $elem.hide(speed__7139,on_finish__7140);
};
var hide = function ($elem,var_args){
var p__7136 = null;
if (goog.isDef(var_args)) {
  p__7136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__7136);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__7141){
var $elem = cljs.core.first(arglist__7141);
var p__7136 = cljs.core.rest(arglist__7141);
return hide__delegate.call(this, $elem, p__7136);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__7142){
var vec__7143__7144 = p__7142;
var speed__7145 = cljs.core.nth.call(null,vec__7143__7144,0,null);
var on_finish__7146 = cljs.core.nth.call(null,vec__7143__7144,1,null);

return $elem.show(speed__7145,on_finish__7146);
};
var show = function ($elem,var_args){
var p__7142 = null;
if (goog.isDef(var_args)) {
  p__7142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__7142);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__7147){
var $elem = cljs.core.first(arglist__7147);
var p__7142 = cljs.core.rest(arglist__7147);
return show__delegate.call(this, $elem, p__7142);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__7148){
var vec__7149__7150 = p__7148;
var speed__7151 = cljs.core.nth.call(null,vec__7149__7150,0,null);
var on_finish__7152 = cljs.core.nth.call(null,vec__7149__7150,1,null);

return $elem.toggle(speed__7151,on_finish__7152);
};
var toggle = function ($elem,var_args){
var p__7148 = null;
if (goog.isDef(var_args)) {
  p__7148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__7148);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__7153){
var $elem = cljs.core.first(arglist__7153);
var p__7148 = cljs.core.rest(arglist__7153);
return toggle__delegate.call(this, $elem, p__7148);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__7154){
var vec__7155__7156 = p__7154;
var speed__7157 = cljs.core.nth.call(null,vec__7155__7156,0,null);
var on_finish__7158 = cljs.core.nth.call(null,vec__7155__7156,1,null);

return $elem.fadeOut(speed__7157,on_finish__7158);
};
var fade_out = function ($elem,var_args){
var p__7154 = null;
if (goog.isDef(var_args)) {
  p__7154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__7154);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__7159){
var $elem = cljs.core.first(arglist__7159);
var p__7154 = cljs.core.rest(arglist__7159);
return fade_out__delegate.call(this, $elem, p__7154);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__7160){
var vec__7161__7162 = p__7160;
var speed__7163 = cljs.core.nth.call(null,vec__7161__7162,0,null);
var on_finish__7164 = cljs.core.nth.call(null,vec__7161__7162,1,null);

return $elem.fadeIn(speed__7163,on_finish__7164);
};
var fade_in = function ($elem,var_args){
var p__7160 = null;
if (goog.isDef(var_args)) {
  p__7160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__7160);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__7165){
var $elem = cljs.core.first(arglist__7165);
var p__7160 = cljs.core.rest(arglist__7165);
return fade_in__delegate.call(this, $elem, p__7160);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__7166){
var vec__7167__7168 = p__7166;
var speed__7169 = cljs.core.nth.call(null,vec__7167__7168,0,null);
var on_finish__7170 = cljs.core.nth.call(null,vec__7167__7168,1,null);

return $elem.slideUp(speed__7169,on_finish__7170);
};
var slide_up = function ($elem,var_args){
var p__7166 = null;
if (goog.isDef(var_args)) {
  p__7166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__7166);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__7171){
var $elem = cljs.core.first(arglist__7171);
var p__7166 = cljs.core.rest(arglist__7171);
return slide_up__delegate.call(this, $elem, p__7166);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__7172){
var vec__7173__7174 = p__7172;
var speed__7175 = cljs.core.nth.call(null,vec__7173__7174,0,null);
var on_finish__7176 = cljs.core.nth.call(null,vec__7173__7174,1,null);

return $elem.slideDown(speed__7175,on_finish__7176);
};
var slide_down = function ($elem,var_args){
var p__7172 = null;
if (goog.isDef(var_args)) {
  p__7172 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__7172);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__7177){
var $elem = cljs.core.first(arglist__7177);
var p__7172 = cljs.core.rest(arglist__7177);
return slide_down__delegate.call(this, $elem, p__7172);
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
var val__delegate = function ($elem,p__7178){
var vec__7179__7180 = p__7178;
var v__7181 = cljs.core.nth.call(null,vec__7179__7180,0,null);

if(cljs.core.truth_(v__7181))
{return $elem.val(v__7181);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__7178 = null;
if (goog.isDef(var_args)) {
  p__7178 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__7178);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__7182){
var $elem = cljs.core.first(arglist__7182);
var p__7178 = cljs.core.rest(arglist__7182);
return val__delegate.call(this, $elem, p__7178);
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
jayq.core.xhr = (function xhr(p__7183,content,callback){
var vec__7184__7185 = p__7183;
var method__7186 = cljs.core.nth.call(null,vec__7184__7185,0,null);
var uri__7187 = cljs.core.nth.call(null,vec__7184__7185,1,null);

var params__7188 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__7186)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__7187,params__7188);
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
var on__delegate = function ($elem,events,p__7189){
var vec__7190__7191 = p__7189;
var sel__7192 = cljs.core.nth.call(null,vec__7190__7191,0,null);
var data__7193 = cljs.core.nth.call(null,vec__7190__7191,1,null);
var handler__7194 = cljs.core.nth.call(null,vec__7190__7191,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__7192),data__7193,handler__7194);
};
var on = function ($elem,events,var_args){
var p__7189 = null;
if (goog.isDef(var_args)) {
  p__7189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__7189);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__7195){
var $elem = cljs.core.first(arglist__7195);
var events = cljs.core.first(cljs.core.next(arglist__7195));
var p__7189 = cljs.core.rest(cljs.core.next(arglist__7195));
return on__delegate.call(this, $elem, events, p__7189);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__7196){
var vec__7197__7198 = p__7196;
var sel__7199 = cljs.core.nth.call(null,vec__7197__7198,0,null);
var data__7200 = cljs.core.nth.call(null,vec__7197__7198,1,null);
var handler__7201 = cljs.core.nth.call(null,vec__7197__7198,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__7199),data__7200,handler__7201);
};
var one = function ($elem,events,var_args){
var p__7196 = null;
if (goog.isDef(var_args)) {
  p__7196 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__7196);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__7202){
var $elem = cljs.core.first(arglist__7202);
var events = cljs.core.first(cljs.core.next(arglist__7202));
var p__7196 = cljs.core.rest(cljs.core.next(arglist__7202));
return one__delegate.call(this, $elem, events, p__7196);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__7203){
var vec__7204__7205 = p__7203;
var sel__7206 = cljs.core.nth.call(null,vec__7204__7205,0,null);
var handler__7207 = cljs.core.nth.call(null,vec__7204__7205,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__7206),handler__7207);
};
var off = function ($elem,events,var_args){
var p__7203 = null;
if (goog.isDef(var_args)) {
  p__7203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__7203);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__7208){
var $elem = cljs.core.first(arglist__7208);
var events = cljs.core.first(cljs.core.next(arglist__7208));
var p__7203 = cljs.core.rest(cljs.core.next(arglist__7208));
return off__delegate.call(this, $elem, events, p__7203);
});
return off;
})()
;
