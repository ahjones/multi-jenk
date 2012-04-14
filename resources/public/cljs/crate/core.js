goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__183786 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__183767__183768 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__183767__183768))
{var G__183770__183772 = cljs.core.first.call(null,G__183767__183768);
var vec__183771__183773 = G__183770__183772;
var k__183774 = cljs.core.nth.call(null,vec__183771__183773,0,null);
var v__183775 = cljs.core.nth.call(null,vec__183771__183773,1,null);
var G__183767__183776 = G__183767__183768;

var G__183770__183777 = G__183770__183772;
var G__183767__183778 = G__183767__183776;

while(true){
var vec__183779__183780 = G__183770__183777;
var k__183781 = cljs.core.nth.call(null,vec__183779__183780,0,null);
var v__183782 = cljs.core.nth.call(null,vec__183779__183780,1,null);
var G__183767__183783 = G__183767__183778;

dom_attr.call(null,elem,k__183781,v__183782);
var temp__3698__auto____183784 = cljs.core.next.call(null,G__183767__183783);

if(cljs.core.truth_(temp__3698__auto____183784))
{var G__183767__183785 = temp__3698__auto____183784;

{
var G__183789 = cljs.core.first.call(null,G__183767__183785);
var G__183790 = G__183767__183785;
G__183770__183777 = G__183789;
G__183767__183778 = G__183790;
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
var dom_attr__183787 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__183786.call(this,elem,k);
case  3 :
return dom_attr__183787.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__183791__183792 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__183791__183792))
{var c__183793 = cljs.core.first.call(null,G__183791__183792);
var G__183791__183794 = G__183791__183792;

while(true){
var child__183795 = (cljs.core.truth_((c__183793 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__183793))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__183793))?goog.dom.createTextNode.call(null,c__183793):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__183793))?crate.core.elem_factory.call(null,c__183793):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__183793))?as_content.call(null,parent,c__183793):(cljs.core.truth_(c__183793.nodeName)?c__183793:null))))));

if(cljs.core.truth_(child__183795))
{goog.dom.appendChild.call(null,parent,child__183795);
} else
{}
var temp__3698__auto____183796 = cljs.core.next.call(null,G__183791__183794);

if(cljs.core.truth_(temp__3698__auto____183796))
{var G__183791__183797 = temp__3698__auto____183796;

{
var G__183798 = cljs.core.first.call(null,G__183791__183797);
var G__183799 = G__183791__183797;
c__183793 = G__183798;
G__183791__183794 = G__183799;
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
crate.core.normalize_element = (function normalize_element(p__183801){
var vec__183802__183803 = p__183801;
var tag__183804 = cljs.core.nth.call(null,vec__183802__183803,0,null);
var content__183805 = cljs.core.nthnext.call(null,vec__183802__183803,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____183806 = cljs.core.keyword_QMARK_.call(null,tag__183804);

if(cljs.core.truth_(or__3548__auto____183806))
{return or__3548__auto____183806;
} else
{var or__3548__auto____183807 = cljs.core.symbol_QMARK_.call(null,tag__183804);

if(cljs.core.truth_(or__3548__auto____183807))
{return or__3548__auto____183807;
} else
{return cljs.core.string_QMARK_.call(null,tag__183804);
}
}
})())))
{throw cljs.core.str.call(null,tag__183804," is not a valid tag name.");
} else
{}
var vec__183808__183810 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__183804));
var ___183811 = cljs.core.nth.call(null,vec__183808__183810,0,null);
var tag__183812 = cljs.core.nth.call(null,vec__183808__183810,1,null);
var id__183813 = cljs.core.nth.call(null,vec__183808__183810,2,null);
var class$__183814 = cljs.core.nth.call(null,vec__183808__183810,3,null);
var vec__183809__183821 = (function (){var vec__183815__183816 = clojure.string.split.call(null,tag__183812,/:/);
var nsp__183817 = cljs.core.nth.call(null,vec__183815__183816,0,null);
var t__183818 = cljs.core.nth.call(null,vec__183815__183816,1,null);
var ns_xmlns__183819 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__183817));

if(cljs.core.truth_(t__183818))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____183820 = ns_xmlns__183819;

if(cljs.core.truth_(or__3548__auto____183820))
{return or__3548__auto____183820;
} else
{return nsp__183817;
}
})(),t__183818]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__183817]);
}
})();
var nsp__183822 = cljs.core.nth.call(null,vec__183809__183821,0,null);
var tag__183823 = cljs.core.nth.call(null,vec__183809__183821,1,null);
var tag_attrs__183825 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__183800_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__183800_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____183824 = id__183813;

if(cljs.core.truth_(or__3548__auto____183824))
{return or__3548__auto____183824;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__183814)?clojure.string.replace.call(null,class$__183814,/\./," "):null)})));
var map_attrs__183826 = cljs.core.first.call(null,content__183805);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__183826)))
{return cljs.core.PersistentVector.fromArray([nsp__183822,tag__183823,cljs.core.merge.call(null,tag_attrs__183825,map_attrs__183826),cljs.core.next.call(null,content__183805)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__183822,tag__183823,tag_attrs__183825,content__183805]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__183827 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__183827)))
{crate.core.dom_attr.call(null,elem,attrs__183827);
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
var vec__183828__183829 = crate.core.normalize_element.call(null,tag_def);
var nsp__183830 = cljs.core.nth.call(null,vec__183828__183829,0,null);
var tag__183831 = cljs.core.nth.call(null,vec__183828__183829,1,null);
var attrs__183832 = cljs.core.nth.call(null,vec__183828__183829,2,null);
var content__183833 = cljs.core.nth.call(null,vec__183828__183829,3,null);
var elem__183834 = crate.core.create_elem.call(null,nsp__183830,tag__183831);

crate.core.dom_attr.call(null,elem__183834,attrs__183832);
crate.core.as_content.call(null,elem__183834,content__183833);
return elem__183834;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__183835 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__183835)))
{return res__183835;
} else
{return cljs.core.first.call(null,res__183835);
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
html.cljs$lang$applyTo = (function (arglist__183836){
var tags = cljs.core.seq( arglist__183836 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
