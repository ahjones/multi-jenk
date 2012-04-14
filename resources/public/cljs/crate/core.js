goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__166701 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__166682__166683 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__166682__166683))
{var G__166685__166687 = cljs.core.first.call(null,G__166682__166683);
var vec__166686__166688 = G__166685__166687;
var k__166689 = cljs.core.nth.call(null,vec__166686__166688,0,null);
var v__166690 = cljs.core.nth.call(null,vec__166686__166688,1,null);
var G__166682__166691 = G__166682__166683;

var G__166685__166692 = G__166685__166687;
var G__166682__166693 = G__166682__166691;

while(true){
var vec__166694__166695 = G__166685__166692;
var k__166696 = cljs.core.nth.call(null,vec__166694__166695,0,null);
var v__166697 = cljs.core.nth.call(null,vec__166694__166695,1,null);
var G__166682__166698 = G__166682__166693;

dom_attr.call(null,elem,k__166696,v__166697);
var temp__3698__auto____166699 = cljs.core.next.call(null,G__166682__166698);

if(cljs.core.truth_(temp__3698__auto____166699))
{var G__166682__166700 = temp__3698__auto____166699;

{
var G__166704 = cljs.core.first.call(null,G__166682__166700);
var G__166705 = G__166682__166700;
G__166685__166692 = G__166704;
G__166682__166693 = G__166705;
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
var dom_attr__166702 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__166701.call(this,elem,k);
case  3 :
return dom_attr__166702.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__166706__166707 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__166706__166707))
{var c__166708 = cljs.core.first.call(null,G__166706__166707);
var G__166706__166709 = G__166706__166707;

while(true){
var child__166710 = (cljs.core.truth_((c__166708 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__166708))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__166708))?goog.dom.createTextNode.call(null,c__166708):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__166708))?crate.core.elem_factory.call(null,c__166708):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__166708))?as_content.call(null,parent,c__166708):(cljs.core.truth_(c__166708.nodeName)?c__166708:null))))));

if(cljs.core.truth_(child__166710))
{goog.dom.appendChild.call(null,parent,child__166710);
} else
{}
var temp__3698__auto____166711 = cljs.core.next.call(null,G__166706__166709);

if(cljs.core.truth_(temp__3698__auto____166711))
{var G__166706__166712 = temp__3698__auto____166711;

{
var G__166713 = cljs.core.first.call(null,G__166706__166712);
var G__166714 = G__166706__166712;
c__166708 = G__166713;
G__166706__166709 = G__166714;
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
crate.core.normalize_element = (function normalize_element(p__166716){
var vec__166717__166718 = p__166716;
var tag__166719 = cljs.core.nth.call(null,vec__166717__166718,0,null);
var content__166720 = cljs.core.nthnext.call(null,vec__166717__166718,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____166721 = cljs.core.keyword_QMARK_.call(null,tag__166719);

if(cljs.core.truth_(or__3548__auto____166721))
{return or__3548__auto____166721;
} else
{var or__3548__auto____166722 = cljs.core.symbol_QMARK_.call(null,tag__166719);

if(cljs.core.truth_(or__3548__auto____166722))
{return or__3548__auto____166722;
} else
{return cljs.core.string_QMARK_.call(null,tag__166719);
}
}
})())))
{throw cljs.core.str.call(null,tag__166719," is not a valid tag name.");
} else
{}
var vec__166723__166725 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__166719));
var ___166726 = cljs.core.nth.call(null,vec__166723__166725,0,null);
var tag__166727 = cljs.core.nth.call(null,vec__166723__166725,1,null);
var id__166728 = cljs.core.nth.call(null,vec__166723__166725,2,null);
var class$__166729 = cljs.core.nth.call(null,vec__166723__166725,3,null);
var vec__166724__166736 = (function (){var vec__166730__166731 = clojure.string.split.call(null,tag__166727,/:/);
var nsp__166732 = cljs.core.nth.call(null,vec__166730__166731,0,null);
var t__166733 = cljs.core.nth.call(null,vec__166730__166731,1,null);
var ns_xmlns__166734 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__166732));

if(cljs.core.truth_(t__166733))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____166735 = ns_xmlns__166734;

if(cljs.core.truth_(or__3548__auto____166735))
{return or__3548__auto____166735;
} else
{return nsp__166732;
}
})(),t__166733]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__166732]);
}
})();
var nsp__166737 = cljs.core.nth.call(null,vec__166724__166736,0,null);
var tag__166738 = cljs.core.nth.call(null,vec__166724__166736,1,null);
var tag_attrs__166740 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__166715_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__166715_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____166739 = id__166728;

if(cljs.core.truth_(or__3548__auto____166739))
{return or__3548__auto____166739;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__166729)?clojure.string.replace.call(null,class$__166729,/\./," "):null)})));
var map_attrs__166741 = cljs.core.first.call(null,content__166720);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__166741)))
{return cljs.core.PersistentVector.fromArray([nsp__166737,tag__166738,cljs.core.merge.call(null,tag_attrs__166740,map_attrs__166741),cljs.core.next.call(null,content__166720)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__166737,tag__166738,tag_attrs__166740,content__166720]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__166742 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__166742)))
{crate.core.dom_attr.call(null,elem,attrs__166742);
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
var vec__166743__166744 = crate.core.normalize_element.call(null,tag_def);
var nsp__166745 = cljs.core.nth.call(null,vec__166743__166744,0,null);
var tag__166746 = cljs.core.nth.call(null,vec__166743__166744,1,null);
var attrs__166747 = cljs.core.nth.call(null,vec__166743__166744,2,null);
var content__166748 = cljs.core.nth.call(null,vec__166743__166744,3,null);
var elem__166749 = crate.core.create_elem.call(null,nsp__166745,tag__166746);

crate.core.dom_attr.call(null,elem__166749,attrs__166747);
crate.core.as_content.call(null,elem__166749,content__166748);
return elem__166749;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__166750 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__166750)))
{return res__166750;
} else
{return cljs.core.first.call(null,res__166750);
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
html.cljs$lang$applyTo = (function (arglist__166751){
var tags = cljs.core.seq( arglist__166751 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
