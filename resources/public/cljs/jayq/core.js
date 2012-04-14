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
{var temp__3695__auto____106851 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____106851))
{var cm__106852 = temp__3695__auto____106851;

return cljs.core.str.call(null,"[crateGroup=",cm__106852,"]");
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
var $__delegate = function (sel,p__106853){
var vec__106854__106855 = p__106853;
var context__106856 = cljs.core.nth.call(null,vec__106854__106855,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__106856)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__106856);
}
};
var $ = function (sel,var_args){
var p__106853 = null;
if (goog.isDef(var_args)) {
  p__106853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__106853);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__106857){
var sel = cljs.core.first(arglist__106857);
var p__106853 = cljs.core.rest(arglist__106857);
return $__delegate.call(this, sel, p__106853);
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
var G__106859 = null;
var G__106859__106860 = (function (this$,k){
var or__3548__auto____106858 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____106858))
{return or__3548__auto____106858;
} else
{return null;
}
});
var G__106859__106861 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__106859 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__106859__106860.call(this,this$,k);
case  3 :
return G__106859__106861.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106859;
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
var G__106863 = null;
var G__106863__106864 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__106863__106865 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__106863 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__106863__106864.call(this,_,k);
case  3 :
return G__106863__106865.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106863;
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
var attr__delegate = function ($elem,a,p__106867){
var vec__106868__106869 = p__106867;
var v__106870 = cljs.core.nth.call(null,vec__106868__106869,0,null);

var a__106871 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__106870)))
{return $elem.attr(a__106871);
} else
{return $elem.attr(a__106871,v__106870);
}
};
var attr = function ($elem,a,var_args){
var p__106867 = null;
if (goog.isDef(var_args)) {
  p__106867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__106867);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__106872){
var $elem = cljs.core.first(arglist__106872);
var a = cljs.core.first(cljs.core.next(arglist__106872));
var p__106867 = cljs.core.rest(cljs.core.next(arglist__106872));
return attr__delegate.call(this, $elem, a, p__106867);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__106873){
var vec__106874__106875 = p__106873;
var v__106876 = cljs.core.nth.call(null,vec__106874__106875,0,null);

var k__106877 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__106876)))
{return $elem.data(k__106877);
} else
{return $elem.data(k__106877,v__106876);
}
};
var data = function ($elem,k,var_args){
var p__106873 = null;
if (goog.isDef(var_args)) {
  p__106873 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__106873);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__106878){
var $elem = cljs.core.first(arglist__106878);
var k = cljs.core.first(cljs.core.next(arglist__106878));
var p__106873 = cljs.core.rest(cljs.core.next(arglist__106878));
return data__delegate.call(this, $elem, k, p__106873);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__106879 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__106879);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__106880 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__106880);
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
var hide__delegate = function ($elem,p__106881){
var vec__106882__106883 = p__106881;
var speed__106884 = cljs.core.nth.call(null,vec__106882__106883,0,null);
var on_finish__106885 = cljs.core.nth.call(null,vec__106882__106883,1,null);

return $elem.hide(speed__106884,on_finish__106885);
};
var hide = function ($elem,var_args){
var p__106881 = null;
if (goog.isDef(var_args)) {
  p__106881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__106881);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__106886){
var $elem = cljs.core.first(arglist__106886);
var p__106881 = cljs.core.rest(arglist__106886);
return hide__delegate.call(this, $elem, p__106881);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__106887){
var vec__106888__106889 = p__106887;
var speed__106890 = cljs.core.nth.call(null,vec__106888__106889,0,null);
var on_finish__106891 = cljs.core.nth.call(null,vec__106888__106889,1,null);

return $elem.show(speed__106890,on_finish__106891);
};
var show = function ($elem,var_args){
var p__106887 = null;
if (goog.isDef(var_args)) {
  p__106887 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__106887);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__106892){
var $elem = cljs.core.first(arglist__106892);
var p__106887 = cljs.core.rest(arglist__106892);
return show__delegate.call(this, $elem, p__106887);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__106893){
var vec__106894__106895 = p__106893;
var speed__106896 = cljs.core.nth.call(null,vec__106894__106895,0,null);
var on_finish__106897 = cljs.core.nth.call(null,vec__106894__106895,1,null);

return $elem.toggle(speed__106896,on_finish__106897);
};
var toggle = function ($elem,var_args){
var p__106893 = null;
if (goog.isDef(var_args)) {
  p__106893 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__106893);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__106898){
var $elem = cljs.core.first(arglist__106898);
var p__106893 = cljs.core.rest(arglist__106898);
return toggle__delegate.call(this, $elem, p__106893);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__106899){
var vec__106900__106901 = p__106899;
var speed__106902 = cljs.core.nth.call(null,vec__106900__106901,0,null);
var on_finish__106903 = cljs.core.nth.call(null,vec__106900__106901,1,null);

return $elem.fadeOut(speed__106902,on_finish__106903);
};
var fade_out = function ($elem,var_args){
var p__106899 = null;
if (goog.isDef(var_args)) {
  p__106899 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__106899);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__106904){
var $elem = cljs.core.first(arglist__106904);
var p__106899 = cljs.core.rest(arglist__106904);
return fade_out__delegate.call(this, $elem, p__106899);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__106905){
var vec__106906__106907 = p__106905;
var speed__106908 = cljs.core.nth.call(null,vec__106906__106907,0,null);
var on_finish__106909 = cljs.core.nth.call(null,vec__106906__106907,1,null);

return $elem.fadeIn(speed__106908,on_finish__106909);
};
var fade_in = function ($elem,var_args){
var p__106905 = null;
if (goog.isDef(var_args)) {
  p__106905 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__106905);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__106910){
var $elem = cljs.core.first(arglist__106910);
var p__106905 = cljs.core.rest(arglist__106910);
return fade_in__delegate.call(this, $elem, p__106905);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__106911){
var vec__106912__106913 = p__106911;
var speed__106914 = cljs.core.nth.call(null,vec__106912__106913,0,null);
var on_finish__106915 = cljs.core.nth.call(null,vec__106912__106913,1,null);

return $elem.slideUp(speed__106914,on_finish__106915);
};
var slide_up = function ($elem,var_args){
var p__106911 = null;
if (goog.isDef(var_args)) {
  p__106911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__106911);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__106916){
var $elem = cljs.core.first(arglist__106916);
var p__106911 = cljs.core.rest(arglist__106916);
return slide_up__delegate.call(this, $elem, p__106911);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__106917){
var vec__106918__106919 = p__106917;
var speed__106920 = cljs.core.nth.call(null,vec__106918__106919,0,null);
var on_finish__106921 = cljs.core.nth.call(null,vec__106918__106919,1,null);

return $elem.slideDown(speed__106920,on_finish__106921);
};
var slide_down = function ($elem,var_args){
var p__106917 = null;
if (goog.isDef(var_args)) {
  p__106917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__106917);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__106922){
var $elem = cljs.core.first(arglist__106922);
var p__106917 = cljs.core.rest(arglist__106922);
return slide_down__delegate.call(this, $elem, p__106917);
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
var val__delegate = function ($elem,p__106923){
var vec__106924__106925 = p__106923;
var v__106926 = cljs.core.nth.call(null,vec__106924__106925,0,null);

if(cljs.core.truth_(v__106926))
{return $elem.val(v__106926);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__106923 = null;
if (goog.isDef(var_args)) {
  p__106923 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__106923);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__106927){
var $elem = cljs.core.first(arglist__106927);
var p__106923 = cljs.core.rest(arglist__106927);
return val__delegate.call(this, $elem, p__106923);
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
jayq.core.xhr = (function xhr(p__106928,content,callback){
var vec__106929__106930 = p__106928;
var method__106931 = cljs.core.nth.call(null,vec__106929__106930,0,null);
var uri__106932 = cljs.core.nth.call(null,vec__106929__106930,1,null);

var params__106933 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__106931)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__106932,params__106933);
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
var on__delegate = function ($elem,events,p__106934){
var vec__106935__106936 = p__106934;
var sel__106937 = cljs.core.nth.call(null,vec__106935__106936,0,null);
var data__106938 = cljs.core.nth.call(null,vec__106935__106936,1,null);
var handler__106939 = cljs.core.nth.call(null,vec__106935__106936,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__106937),data__106938,handler__106939);
};
var on = function ($elem,events,var_args){
var p__106934 = null;
if (goog.isDef(var_args)) {
  p__106934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__106934);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__106940){
var $elem = cljs.core.first(arglist__106940);
var events = cljs.core.first(cljs.core.next(arglist__106940));
var p__106934 = cljs.core.rest(cljs.core.next(arglist__106940));
return on__delegate.call(this, $elem, events, p__106934);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__106941){
var vec__106942__106943 = p__106941;
var sel__106944 = cljs.core.nth.call(null,vec__106942__106943,0,null);
var data__106945 = cljs.core.nth.call(null,vec__106942__106943,1,null);
var handler__106946 = cljs.core.nth.call(null,vec__106942__106943,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__106944),data__106945,handler__106946);
};
var one = function ($elem,events,var_args){
var p__106941 = null;
if (goog.isDef(var_args)) {
  p__106941 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__106941);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__106947){
var $elem = cljs.core.first(arglist__106947);
var events = cljs.core.first(cljs.core.next(arglist__106947));
var p__106941 = cljs.core.rest(cljs.core.next(arglist__106947));
return one__delegate.call(this, $elem, events, p__106941);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__106948){
var vec__106949__106950 = p__106948;
var sel__106951 = cljs.core.nth.call(null,vec__106949__106950,0,null);
var handler__106952 = cljs.core.nth.call(null,vec__106949__106950,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__106951),handler__106952);
};
var off = function ($elem,events,var_args){
var p__106948 = null;
if (goog.isDef(var_args)) {
  p__106948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__106948);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__106953){
var $elem = cljs.core.first(arglist__106953);
var events = cljs.core.first(cljs.core.next(arglist__106953));
var p__106948 = cljs.core.rest(cljs.core.next(arglist__106953));
return off__delegate.call(this, $elem, events, p__106948);
});
return off;
})()
;
