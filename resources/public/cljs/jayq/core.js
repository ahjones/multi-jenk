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
{var temp__3695__auto____183866 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____183866))
{var cm__183867 = temp__3695__auto____183866;

return cljs.core.str.call(null,"[crateGroup=",cm__183867,"]");
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
var $__delegate = function (sel,p__183868){
var vec__183869__183870 = p__183868;
var context__183871 = cljs.core.nth.call(null,vec__183869__183870,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__183871)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__183871);
}
};
var $ = function (sel,var_args){
var p__183868 = null;
if (goog.isDef(var_args)) {
  p__183868 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__183868);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__183872){
var sel = cljs.core.first(arglist__183872);
var p__183868 = cljs.core.rest(arglist__183872);
return $__delegate.call(this, sel, p__183868);
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
var G__183874 = null;
var G__183874__183875 = (function (this$,k){
var or__3548__auto____183873 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____183873))
{return or__3548__auto____183873;
} else
{return null;
}
});
var G__183874__183876 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__183874 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__183874__183875.call(this,this$,k);
case  3 :
return G__183874__183876.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183874;
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
var G__183878 = null;
var G__183878__183879 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__183878__183880 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__183878 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__183878__183879.call(this,_,k);
case  3 :
return G__183878__183880.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183878;
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
var attr__delegate = function ($elem,a,p__183882){
var vec__183883__183884 = p__183882;
var v__183885 = cljs.core.nth.call(null,vec__183883__183884,0,null);

var a__183886 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__183885)))
{return $elem.attr(a__183886);
} else
{return $elem.attr(a__183886,v__183885);
}
};
var attr = function ($elem,a,var_args){
var p__183882 = null;
if (goog.isDef(var_args)) {
  p__183882 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__183882);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__183887){
var $elem = cljs.core.first(arglist__183887);
var a = cljs.core.first(cljs.core.next(arglist__183887));
var p__183882 = cljs.core.rest(cljs.core.next(arglist__183887));
return attr__delegate.call(this, $elem, a, p__183882);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__183888){
var vec__183889__183890 = p__183888;
var v__183891 = cljs.core.nth.call(null,vec__183889__183890,0,null);

var k__183892 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__183891)))
{return $elem.data(k__183892);
} else
{return $elem.data(k__183892,v__183891);
}
};
var data = function ($elem,k,var_args){
var p__183888 = null;
if (goog.isDef(var_args)) {
  p__183888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__183888);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__183893){
var $elem = cljs.core.first(arglist__183893);
var k = cljs.core.first(cljs.core.next(arglist__183893));
var p__183888 = cljs.core.rest(cljs.core.next(arglist__183893));
return data__delegate.call(this, $elem, k, p__183888);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__183894 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__183894);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__183895 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__183895);
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
var hide__delegate = function ($elem,p__183896){
var vec__183897__183898 = p__183896;
var speed__183899 = cljs.core.nth.call(null,vec__183897__183898,0,null);
var on_finish__183900 = cljs.core.nth.call(null,vec__183897__183898,1,null);

return $elem.hide(speed__183899,on_finish__183900);
};
var hide = function ($elem,var_args){
var p__183896 = null;
if (goog.isDef(var_args)) {
  p__183896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__183896);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__183901){
var $elem = cljs.core.first(arglist__183901);
var p__183896 = cljs.core.rest(arglist__183901);
return hide__delegate.call(this, $elem, p__183896);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__183902){
var vec__183903__183904 = p__183902;
var speed__183905 = cljs.core.nth.call(null,vec__183903__183904,0,null);
var on_finish__183906 = cljs.core.nth.call(null,vec__183903__183904,1,null);

return $elem.show(speed__183905,on_finish__183906);
};
var show = function ($elem,var_args){
var p__183902 = null;
if (goog.isDef(var_args)) {
  p__183902 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__183902);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__183907){
var $elem = cljs.core.first(arglist__183907);
var p__183902 = cljs.core.rest(arglist__183907);
return show__delegate.call(this, $elem, p__183902);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__183908){
var vec__183909__183910 = p__183908;
var speed__183911 = cljs.core.nth.call(null,vec__183909__183910,0,null);
var on_finish__183912 = cljs.core.nth.call(null,vec__183909__183910,1,null);

return $elem.toggle(speed__183911,on_finish__183912);
};
var toggle = function ($elem,var_args){
var p__183908 = null;
if (goog.isDef(var_args)) {
  p__183908 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__183908);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__183913){
var $elem = cljs.core.first(arglist__183913);
var p__183908 = cljs.core.rest(arglist__183913);
return toggle__delegate.call(this, $elem, p__183908);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__183914){
var vec__183915__183916 = p__183914;
var speed__183917 = cljs.core.nth.call(null,vec__183915__183916,0,null);
var on_finish__183918 = cljs.core.nth.call(null,vec__183915__183916,1,null);

return $elem.fadeOut(speed__183917,on_finish__183918);
};
var fade_out = function ($elem,var_args){
var p__183914 = null;
if (goog.isDef(var_args)) {
  p__183914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__183914);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__183919){
var $elem = cljs.core.first(arglist__183919);
var p__183914 = cljs.core.rest(arglist__183919);
return fade_out__delegate.call(this, $elem, p__183914);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__183920){
var vec__183921__183922 = p__183920;
var speed__183923 = cljs.core.nth.call(null,vec__183921__183922,0,null);
var on_finish__183924 = cljs.core.nth.call(null,vec__183921__183922,1,null);

return $elem.fadeIn(speed__183923,on_finish__183924);
};
var fade_in = function ($elem,var_args){
var p__183920 = null;
if (goog.isDef(var_args)) {
  p__183920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__183920);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__183925){
var $elem = cljs.core.first(arglist__183925);
var p__183920 = cljs.core.rest(arglist__183925);
return fade_in__delegate.call(this, $elem, p__183920);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__183926){
var vec__183927__183928 = p__183926;
var speed__183929 = cljs.core.nth.call(null,vec__183927__183928,0,null);
var on_finish__183930 = cljs.core.nth.call(null,vec__183927__183928,1,null);

return $elem.slideUp(speed__183929,on_finish__183930);
};
var slide_up = function ($elem,var_args){
var p__183926 = null;
if (goog.isDef(var_args)) {
  p__183926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__183926);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__183931){
var $elem = cljs.core.first(arglist__183931);
var p__183926 = cljs.core.rest(arglist__183931);
return slide_up__delegate.call(this, $elem, p__183926);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__183932){
var vec__183933__183934 = p__183932;
var speed__183935 = cljs.core.nth.call(null,vec__183933__183934,0,null);
var on_finish__183936 = cljs.core.nth.call(null,vec__183933__183934,1,null);

return $elem.slideDown(speed__183935,on_finish__183936);
};
var slide_down = function ($elem,var_args){
var p__183932 = null;
if (goog.isDef(var_args)) {
  p__183932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__183932);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__183937){
var $elem = cljs.core.first(arglist__183937);
var p__183932 = cljs.core.rest(arglist__183937);
return slide_down__delegate.call(this, $elem, p__183932);
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
var val__delegate = function ($elem,p__183938){
var vec__183939__183940 = p__183938;
var v__183941 = cljs.core.nth.call(null,vec__183939__183940,0,null);

if(cljs.core.truth_(v__183941))
{return $elem.val(v__183941);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__183938 = null;
if (goog.isDef(var_args)) {
  p__183938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__183938);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__183942){
var $elem = cljs.core.first(arglist__183942);
var p__183938 = cljs.core.rest(arglist__183942);
return val__delegate.call(this, $elem, p__183938);
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
jayq.core.xhr = (function xhr(p__183943,content,callback){
var vec__183944__183945 = p__183943;
var method__183946 = cljs.core.nth.call(null,vec__183944__183945,0,null);
var uri__183947 = cljs.core.nth.call(null,vec__183944__183945,1,null);

var params__183948 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__183946)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__183947,params__183948);
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
var on__delegate = function ($elem,events,p__183949){
var vec__183950__183951 = p__183949;
var sel__183952 = cljs.core.nth.call(null,vec__183950__183951,0,null);
var data__183953 = cljs.core.nth.call(null,vec__183950__183951,1,null);
var handler__183954 = cljs.core.nth.call(null,vec__183950__183951,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__183952),data__183953,handler__183954);
};
var on = function ($elem,events,var_args){
var p__183949 = null;
if (goog.isDef(var_args)) {
  p__183949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__183949);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__183955){
var $elem = cljs.core.first(arglist__183955);
var events = cljs.core.first(cljs.core.next(arglist__183955));
var p__183949 = cljs.core.rest(cljs.core.next(arglist__183955));
return on__delegate.call(this, $elem, events, p__183949);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__183956){
var vec__183957__183958 = p__183956;
var sel__183959 = cljs.core.nth.call(null,vec__183957__183958,0,null);
var data__183960 = cljs.core.nth.call(null,vec__183957__183958,1,null);
var handler__183961 = cljs.core.nth.call(null,vec__183957__183958,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__183959),data__183960,handler__183961);
};
var one = function ($elem,events,var_args){
var p__183956 = null;
if (goog.isDef(var_args)) {
  p__183956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__183956);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__183962){
var $elem = cljs.core.first(arglist__183962);
var events = cljs.core.first(cljs.core.next(arglist__183962));
var p__183956 = cljs.core.rest(cljs.core.next(arglist__183962));
return one__delegate.call(this, $elem, events, p__183956);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__183963){
var vec__183964__183965 = p__183963;
var sel__183966 = cljs.core.nth.call(null,vec__183964__183965,0,null);
var handler__183967 = cljs.core.nth.call(null,vec__183964__183965,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__183966),handler__183967);
};
var off = function ($elem,events,var_args){
var p__183963 = null;
if (goog.isDef(var_args)) {
  p__183963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__183963);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__183968){
var $elem = cljs.core.first(arglist__183968);
var events = cljs.core.first(cljs.core.next(arglist__183968));
var p__183963 = cljs.core.rest(cljs.core.next(arglist__183968));
return off__delegate.call(this, $elem, events, p__183963);
});
return off;
})()
;
