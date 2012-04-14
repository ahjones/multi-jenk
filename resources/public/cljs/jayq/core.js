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
{var temp__3695__auto____164648 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____164648))
{var cm__164649 = temp__3695__auto____164648;

return cljs.core.str.call(null,"[crateGroup=",cm__164649,"]");
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
var $__delegate = function (sel,p__164650){
var vec__164651__164652 = p__164650;
var context__164653 = cljs.core.nth.call(null,vec__164651__164652,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__164653)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__164653);
}
};
var $ = function (sel,var_args){
var p__164650 = null;
if (goog.isDef(var_args)) {
  p__164650 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__164650);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__164654){
var sel = cljs.core.first(arglist__164654);
var p__164650 = cljs.core.rest(arglist__164654);
return $__delegate.call(this, sel, p__164650);
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
var G__164656 = null;
var G__164656__164657 = (function (this$,k){
var or__3548__auto____164655 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____164655))
{return or__3548__auto____164655;
} else
{return null;
}
});
var G__164656__164658 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__164656 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__164656__164657.call(this,this$,k);
case  3 :
return G__164656__164658.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164656;
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
var G__164660 = null;
var G__164660__164661 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__164660__164662 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__164660 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__164660__164661.call(this,_,k);
case  3 :
return G__164660__164662.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164660;
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
var attr__delegate = function ($elem,a,p__164664){
var vec__164665__164666 = p__164664;
var v__164667 = cljs.core.nth.call(null,vec__164665__164666,0,null);

var a__164668 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__164667)))
{return $elem.attr(a__164668);
} else
{return $elem.attr(a__164668,v__164667);
}
};
var attr = function ($elem,a,var_args){
var p__164664 = null;
if (goog.isDef(var_args)) {
  p__164664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__164664);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__164669){
var $elem = cljs.core.first(arglist__164669);
var a = cljs.core.first(cljs.core.next(arglist__164669));
var p__164664 = cljs.core.rest(cljs.core.next(arglist__164669));
return attr__delegate.call(this, $elem, a, p__164664);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__164670){
var vec__164671__164672 = p__164670;
var v__164673 = cljs.core.nth.call(null,vec__164671__164672,0,null);

var k__164674 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__164673)))
{return $elem.data(k__164674);
} else
{return $elem.data(k__164674,v__164673);
}
};
var data = function ($elem,k,var_args){
var p__164670 = null;
if (goog.isDef(var_args)) {
  p__164670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__164670);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__164675){
var $elem = cljs.core.first(arglist__164675);
var k = cljs.core.first(cljs.core.next(arglist__164675));
var p__164670 = cljs.core.rest(cljs.core.next(arglist__164675));
return data__delegate.call(this, $elem, k, p__164670);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__164676 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__164676);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__164677 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__164677);
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
var hide__delegate = function ($elem,p__164678){
var vec__164679__164680 = p__164678;
var speed__164681 = cljs.core.nth.call(null,vec__164679__164680,0,null);
var on_finish__164682 = cljs.core.nth.call(null,vec__164679__164680,1,null);

return $elem.hide(speed__164681,on_finish__164682);
};
var hide = function ($elem,var_args){
var p__164678 = null;
if (goog.isDef(var_args)) {
  p__164678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__164678);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__164683){
var $elem = cljs.core.first(arglist__164683);
var p__164678 = cljs.core.rest(arglist__164683);
return hide__delegate.call(this, $elem, p__164678);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__164684){
var vec__164685__164686 = p__164684;
var speed__164687 = cljs.core.nth.call(null,vec__164685__164686,0,null);
var on_finish__164688 = cljs.core.nth.call(null,vec__164685__164686,1,null);

return $elem.show(speed__164687,on_finish__164688);
};
var show = function ($elem,var_args){
var p__164684 = null;
if (goog.isDef(var_args)) {
  p__164684 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__164684);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__164689){
var $elem = cljs.core.first(arglist__164689);
var p__164684 = cljs.core.rest(arglist__164689);
return show__delegate.call(this, $elem, p__164684);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__164690){
var vec__164691__164692 = p__164690;
var speed__164693 = cljs.core.nth.call(null,vec__164691__164692,0,null);
var on_finish__164694 = cljs.core.nth.call(null,vec__164691__164692,1,null);

return $elem.toggle(speed__164693,on_finish__164694);
};
var toggle = function ($elem,var_args){
var p__164690 = null;
if (goog.isDef(var_args)) {
  p__164690 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__164690);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__164695){
var $elem = cljs.core.first(arglist__164695);
var p__164690 = cljs.core.rest(arglist__164695);
return toggle__delegate.call(this, $elem, p__164690);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__164696){
var vec__164697__164698 = p__164696;
var speed__164699 = cljs.core.nth.call(null,vec__164697__164698,0,null);
var on_finish__164700 = cljs.core.nth.call(null,vec__164697__164698,1,null);

return $elem.fadeOut(speed__164699,on_finish__164700);
};
var fade_out = function ($elem,var_args){
var p__164696 = null;
if (goog.isDef(var_args)) {
  p__164696 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__164696);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__164701){
var $elem = cljs.core.first(arglist__164701);
var p__164696 = cljs.core.rest(arglist__164701);
return fade_out__delegate.call(this, $elem, p__164696);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__164702){
var vec__164703__164704 = p__164702;
var speed__164705 = cljs.core.nth.call(null,vec__164703__164704,0,null);
var on_finish__164706 = cljs.core.nth.call(null,vec__164703__164704,1,null);

return $elem.fadeIn(speed__164705,on_finish__164706);
};
var fade_in = function ($elem,var_args){
var p__164702 = null;
if (goog.isDef(var_args)) {
  p__164702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__164702);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__164707){
var $elem = cljs.core.first(arglist__164707);
var p__164702 = cljs.core.rest(arglist__164707);
return fade_in__delegate.call(this, $elem, p__164702);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__164708){
var vec__164709__164710 = p__164708;
var speed__164711 = cljs.core.nth.call(null,vec__164709__164710,0,null);
var on_finish__164712 = cljs.core.nth.call(null,vec__164709__164710,1,null);

return $elem.slideUp(speed__164711,on_finish__164712);
};
var slide_up = function ($elem,var_args){
var p__164708 = null;
if (goog.isDef(var_args)) {
  p__164708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__164708);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__164713){
var $elem = cljs.core.first(arglist__164713);
var p__164708 = cljs.core.rest(arglist__164713);
return slide_up__delegate.call(this, $elem, p__164708);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__164714){
var vec__164715__164716 = p__164714;
var speed__164717 = cljs.core.nth.call(null,vec__164715__164716,0,null);
var on_finish__164718 = cljs.core.nth.call(null,vec__164715__164716,1,null);

return $elem.slideDown(speed__164717,on_finish__164718);
};
var slide_down = function ($elem,var_args){
var p__164714 = null;
if (goog.isDef(var_args)) {
  p__164714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__164714);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__164719){
var $elem = cljs.core.first(arglist__164719);
var p__164714 = cljs.core.rest(arglist__164719);
return slide_down__delegate.call(this, $elem, p__164714);
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
var val__delegate = function ($elem,p__164720){
var vec__164721__164722 = p__164720;
var v__164723 = cljs.core.nth.call(null,vec__164721__164722,0,null);

if(cljs.core.truth_(v__164723))
{return $elem.val(v__164723);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__164720 = null;
if (goog.isDef(var_args)) {
  p__164720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__164720);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__164724){
var $elem = cljs.core.first(arglist__164724);
var p__164720 = cljs.core.rest(arglist__164724);
return val__delegate.call(this, $elem, p__164720);
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
jayq.core.xhr = (function xhr(p__164725,content,callback){
var vec__164726__164727 = p__164725;
var method__164728 = cljs.core.nth.call(null,vec__164726__164727,0,null);
var uri__164729 = cljs.core.nth.call(null,vec__164726__164727,1,null);

var params__164730 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__164728)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__164729,params__164730);
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
var on__delegate = function ($elem,events,p__164731){
var vec__164732__164733 = p__164731;
var sel__164734 = cljs.core.nth.call(null,vec__164732__164733,0,null);
var data__164735 = cljs.core.nth.call(null,vec__164732__164733,1,null);
var handler__164736 = cljs.core.nth.call(null,vec__164732__164733,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__164734),data__164735,handler__164736);
};
var on = function ($elem,events,var_args){
var p__164731 = null;
if (goog.isDef(var_args)) {
  p__164731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__164731);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__164737){
var $elem = cljs.core.first(arglist__164737);
var events = cljs.core.first(cljs.core.next(arglist__164737));
var p__164731 = cljs.core.rest(cljs.core.next(arglist__164737));
return on__delegate.call(this, $elem, events, p__164731);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__164738){
var vec__164739__164740 = p__164738;
var sel__164741 = cljs.core.nth.call(null,vec__164739__164740,0,null);
var data__164742 = cljs.core.nth.call(null,vec__164739__164740,1,null);
var handler__164743 = cljs.core.nth.call(null,vec__164739__164740,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__164741),data__164742,handler__164743);
};
var one = function ($elem,events,var_args){
var p__164738 = null;
if (goog.isDef(var_args)) {
  p__164738 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__164738);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__164744){
var $elem = cljs.core.first(arglist__164744);
var events = cljs.core.first(cljs.core.next(arglist__164744));
var p__164738 = cljs.core.rest(cljs.core.next(arglist__164744));
return one__delegate.call(this, $elem, events, p__164738);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__164745){
var vec__164746__164747 = p__164745;
var sel__164748 = cljs.core.nth.call(null,vec__164746__164747,0,null);
var handler__164749 = cljs.core.nth.call(null,vec__164746__164747,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__164748),handler__164749);
};
var off = function ($elem,events,var_args){
var p__164745 = null;
if (goog.isDef(var_args)) {
  p__164745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__164745);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__164750){
var $elem = cljs.core.first(arglist__164750);
var events = cljs.core.first(cljs.core.next(arglist__164750));
var p__164745 = cljs.core.rest(cljs.core.next(arglist__164750));
return off__delegate.call(this, $elem, events, p__164745);
});
return off;
})()
;
