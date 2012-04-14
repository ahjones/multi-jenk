goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__321658 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__321639__321640 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__321639__321640))
{var G__321642__321644 = cljs.core.first.call(null,G__321639__321640);
var vec__321643__321645 = G__321642__321644;
var k__321646 = cljs.core.nth.call(null,vec__321643__321645,0,null);
var v__321647 = cljs.core.nth.call(null,vec__321643__321645,1,null);
var G__321639__321648 = G__321639__321640;

var G__321642__321649 = G__321642__321644;
var G__321639__321650 = G__321639__321648;

while(true){
var vec__321651__321652 = G__321642__321649;
var k__321653 = cljs.core.nth.call(null,vec__321651__321652,0,null);
var v__321654 = cljs.core.nth.call(null,vec__321651__321652,1,null);
var G__321639__321655 = G__321639__321650;

dom_attr.call(null,elem,k__321653,v__321654);
var temp__3698__auto____321656 = cljs.core.next.call(null,G__321639__321655);

if(cljs.core.truth_(temp__3698__auto____321656))
{var G__321639__321657 = temp__3698__auto____321656;

{
var G__321661 = cljs.core.first.call(null,G__321639__321657);
var G__321662 = G__321639__321657;
G__321642__321649 = G__321661;
G__321639__321650 = G__321662;
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
var dom_attr__321659 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__321658.call(this,elem,k);
case  3 :
return dom_attr__321659.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__321663__321664 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__321663__321664))
{var c__321665 = cljs.core.first.call(null,G__321663__321664);
var G__321663__321666 = G__321663__321664;

while(true){
var child__321667 = (cljs.core.truth_((c__321665 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__321665))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__321665))?goog.dom.createTextNode.call(null,c__321665):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__321665))?crate.core.elem_factory.call(null,c__321665):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__321665))?as_content.call(null,parent,c__321665):(cljs.core.truth_(c__321665.nodeName)?c__321665:null))))));

if(cljs.core.truth_(child__321667))
{goog.dom.appendChild.call(null,parent,child__321667);
} else
{}
var temp__3698__auto____321668 = cljs.core.next.call(null,G__321663__321666);

if(cljs.core.truth_(temp__3698__auto____321668))
{var G__321663__321669 = temp__3698__auto____321668;

{
var G__321670 = cljs.core.first.call(null,G__321663__321669);
var G__321671 = G__321663__321669;
c__321665 = G__321670;
G__321663__321666 = G__321671;
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
crate.core.normalize_element = (function normalize_element(p__321673){
var vec__321674__321675 = p__321673;
var tag__321676 = cljs.core.nth.call(null,vec__321674__321675,0,null);
var content__321677 = cljs.core.nthnext.call(null,vec__321674__321675,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____321678 = cljs.core.keyword_QMARK_.call(null,tag__321676);

if(cljs.core.truth_(or__3548__auto____321678))
{return or__3548__auto____321678;
} else
{var or__3548__auto____321679 = cljs.core.symbol_QMARK_.call(null,tag__321676);

if(cljs.core.truth_(or__3548__auto____321679))
{return or__3548__auto____321679;
} else
{return cljs.core.string_QMARK_.call(null,tag__321676);
}
}
})())))
{throw cljs.core.str.call(null,tag__321676," is not a valid tag name.");
} else
{}
var vec__321680__321682 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__321676));
var ___321683 = cljs.core.nth.call(null,vec__321680__321682,0,null);
var tag__321684 = cljs.core.nth.call(null,vec__321680__321682,1,null);
var id__321685 = cljs.core.nth.call(null,vec__321680__321682,2,null);
var class$__321686 = cljs.core.nth.call(null,vec__321680__321682,3,null);
var vec__321681__321693 = (function (){var vec__321687__321688 = clojure.string.split.call(null,tag__321684,/:/);
var nsp__321689 = cljs.core.nth.call(null,vec__321687__321688,0,null);
var t__321690 = cljs.core.nth.call(null,vec__321687__321688,1,null);
var ns_xmlns__321691 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__321689));

if(cljs.core.truth_(t__321690))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____321692 = ns_xmlns__321691;

if(cljs.core.truth_(or__3548__auto____321692))
{return or__3548__auto____321692;
} else
{return nsp__321689;
}
})(),t__321690]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__321689]);
}
})();
var nsp__321694 = cljs.core.nth.call(null,vec__321681__321693,0,null);
var tag__321695 = cljs.core.nth.call(null,vec__321681__321693,1,null);
var tag_attrs__321697 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__321672_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__321672_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____321696 = id__321685;

if(cljs.core.truth_(or__3548__auto____321696))
{return or__3548__auto____321696;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__321686)?clojure.string.replace.call(null,class$__321686,/\./," "):null)})));
var map_attrs__321698 = cljs.core.first.call(null,content__321677);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__321698)))
{return cljs.core.PersistentVector.fromArray([nsp__321694,tag__321695,cljs.core.merge.call(null,tag_attrs__321697,map_attrs__321698),cljs.core.next.call(null,content__321677)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__321694,tag__321695,tag_attrs__321697,content__321677]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__321699 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__321699)))
{crate.core.dom_attr.call(null,elem,attrs__321699);
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
var vec__321700__321701 = crate.core.normalize_element.call(null,tag_def);
var nsp__321702 = cljs.core.nth.call(null,vec__321700__321701,0,null);
var tag__321703 = cljs.core.nth.call(null,vec__321700__321701,1,null);
var attrs__321704 = cljs.core.nth.call(null,vec__321700__321701,2,null);
var content__321705 = cljs.core.nth.call(null,vec__321700__321701,3,null);
var elem__321706 = crate.core.create_elem.call(null,nsp__321702,tag__321703);

crate.core.dom_attr.call(null,elem__321706,attrs__321704);
crate.core.as_content.call(null,elem__321706,content__321705);
return elem__321706;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__321707 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__321707)))
{return res__321707;
} else
{return cljs.core.first.call(null,res__321707);
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
html.cljs$lang$applyTo = (function (arglist__321708){
var tags = cljs.core.seq( arglist__321708 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
