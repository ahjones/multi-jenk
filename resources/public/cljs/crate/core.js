goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__164568 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__164549__164550 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__164549__164550))
{var G__164552__164554 = cljs.core.first.call(null,G__164549__164550);
var vec__164553__164555 = G__164552__164554;
var k__164556 = cljs.core.nth.call(null,vec__164553__164555,0,null);
var v__164557 = cljs.core.nth.call(null,vec__164553__164555,1,null);
var G__164549__164558 = G__164549__164550;

var G__164552__164559 = G__164552__164554;
var G__164549__164560 = G__164549__164558;

while(true){
var vec__164561__164562 = G__164552__164559;
var k__164563 = cljs.core.nth.call(null,vec__164561__164562,0,null);
var v__164564 = cljs.core.nth.call(null,vec__164561__164562,1,null);
var G__164549__164565 = G__164549__164560;

dom_attr.call(null,elem,k__164563,v__164564);
var temp__3698__auto____164566 = cljs.core.next.call(null,G__164549__164565);

if(cljs.core.truth_(temp__3698__auto____164566))
{var G__164549__164567 = temp__3698__auto____164566;

{
var G__164571 = cljs.core.first.call(null,G__164549__164567);
var G__164572 = G__164549__164567;
G__164552__164559 = G__164571;
G__164549__164560 = G__164572;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__164569 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__164568.call(this,elem,k);
case  3 :
return dom_attr__164569.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__164573__164574 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__164573__164574))
{var c__164575 = cljs.core.first.call(null,G__164573__164574);
var G__164573__164576 = G__164573__164574;

while(true){
var child__164577 = (cljs.core.truth_((c__164575 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__164575))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__164575))?goog.dom.createTextNode.call(null,c__164575):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__164575))?crate.core.elem_factory.call(null,c__164575):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__164575))?as_content.call(null,parent,c__164575):(cljs.core.truth_(c__164575.nodeName)?c__164575:null))))));

if(cljs.core.truth_(child__164577))
{goog.dom.appendChild.call(null,parent,child__164577);
} else
{}
var temp__3698__auto____164578 = cljs.core.next.call(null,G__164573__164576);

if(cljs.core.truth_(temp__3698__auto____164578))
{var G__164573__164579 = temp__3698__auto____164578;

{
var G__164580 = cljs.core.first.call(null,G__164573__164579);
var G__164581 = G__164573__164579;
c__164575 = G__164580;
G__164573__164576 = G__164581;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__164583){
var vec__164584__164585 = p__164583;
var tag__164586 = cljs.core.nth.call(null,vec__164584__164585,0,null);
var content__164587 = cljs.core.nthnext.call(null,vec__164584__164585,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____164588 = cljs.core.keyword_QMARK_.call(null,tag__164586);

if(cljs.core.truth_(or__3548__auto____164588))
{return or__3548__auto____164588;
} else
{var or__3548__auto____164589 = cljs.core.symbol_QMARK_.call(null,tag__164586);

if(cljs.core.truth_(or__3548__auto____164589))
{return or__3548__auto____164589;
} else
{return cljs.core.string_QMARK_.call(null,tag__164586);
}
}
})())))
{throw cljs.core.str.call(null,tag__164586," is not a valid tag name.");
} else
{}
var vec__164590__164592 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__164586));
var ___164593 = cljs.core.nth.call(null,vec__164590__164592,0,null);
var tag__164594 = cljs.core.nth.call(null,vec__164590__164592,1,null);
var id__164595 = cljs.core.nth.call(null,vec__164590__164592,2,null);
var class$__164596 = cljs.core.nth.call(null,vec__164590__164592,3,null);
var vec__164591__164603 = (function (){var vec__164597__164598 = clojure.string.split.call(null,tag__164594,/:/);
var nsp__164599 = cljs.core.nth.call(null,vec__164597__164598,0,null);
var t__164600 = cljs.core.nth.call(null,vec__164597__164598,1,null);
var ns_xmlns__164601 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__164599));

if(cljs.core.truth_(t__164600))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____164602 = ns_xmlns__164601;

if(cljs.core.truth_(or__3548__auto____164602))
{return or__3548__auto____164602;
} else
{return nsp__164599;
}
})(),t__164600]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__164599]);
}
})();
var nsp__164604 = cljs.core.nth.call(null,vec__164591__164603,0,null);
var tag__164605 = cljs.core.nth.call(null,vec__164591__164603,1,null);
var tag_attrs__164607 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__164582_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__164582_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____164606 = id__164595;

if(cljs.core.truth_(or__3548__auto____164606))
{return or__3548__auto____164606;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__164596)?clojure.string.replace.call(null,class$__164596,/\./," "):null)})));
var map_attrs__164608 = cljs.core.first.call(null,content__164587);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__164608)))
{return cljs.core.PersistentVector.fromArray([nsp__164604,tag__164605,cljs.core.merge.call(null,tag_attrs__164607,map_attrs__164608),cljs.core.next.call(null,content__164587)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__164604,tag__164605,tag_attrs__164607,content__164587]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__164609 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__164609)))
{crate.core.dom_attr.call(null,elem,attrs__164609);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__164610__164611 = crate.core.normalize_element.call(null,tag_def);
var nsp__164612 = cljs.core.nth.call(null,vec__164610__164611,0,null);
var tag__164613 = cljs.core.nth.call(null,vec__164610__164611,1,null);
var attrs__164614 = cljs.core.nth.call(null,vec__164610__164611,2,null);
var content__164615 = cljs.core.nth.call(null,vec__164610__164611,3,null);
var elem__164616 = crate.core.create_elem.call(null,nsp__164612,tag__164613);

crate.core.dom_attr.call(null,elem__164616,attrs__164614);
crate.core.as_content.call(null,elem__164616,content__164615);
return elem__164616;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__164617 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__164617)))
{return res__164617;
} else
{return cljs.core.first.call(null,res__164617);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__164618){
var tags = cljs.core.seq( arglist__164618 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
