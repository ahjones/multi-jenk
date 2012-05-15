goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__27124 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__27105__27106 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__27105__27106))
{var G__27108__27110 = cljs.core.first.call(null,G__27105__27106);
var vec__27109__27111 = G__27108__27110;
var k__27112 = cljs.core.nth.call(null,vec__27109__27111,0,null);
var v__27113 = cljs.core.nth.call(null,vec__27109__27111,1,null);
var G__27105__27114 = G__27105__27106;

var G__27108__27115 = G__27108__27110;
var G__27105__27116 = G__27105__27114;

while(true){
var vec__27117__27118 = G__27108__27115;
var k__27119 = cljs.core.nth.call(null,vec__27117__27118,0,null);
var v__27120 = cljs.core.nth.call(null,vec__27117__27118,1,null);
var G__27105__27121 = G__27105__27116;

dom_attr.call(null,elem,k__27119,v__27120);
var temp__3698__auto____27122 = cljs.core.next.call(null,G__27105__27121);

if(cljs.core.truth_(temp__3698__auto____27122))
{var G__27105__27123 = temp__3698__auto____27122;

{
var G__27127 = cljs.core.first.call(null,G__27105__27123);
var G__27128 = G__27105__27123;
G__27108__27115 = G__27127;
G__27105__27116 = G__27128;
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
var dom_attr__27125 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__27124.call(this,elem,k);
case  3 :
return dom_attr__27125.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__27129__27130 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__27129__27130))
{var c__27131 = cljs.core.first.call(null,G__27129__27130);
var G__27129__27132 = G__27129__27130;

while(true){
var child__27133 = (cljs.core.truth_((c__27131 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__27131))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__27131))?goog.dom.createTextNode.call(null,c__27131):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__27131))?crate.core.elem_factory.call(null,c__27131):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__27131))?as_content.call(null,parent,c__27131):(cljs.core.truth_(c__27131.nodeName)?c__27131:null))))));

if(cljs.core.truth_(child__27133))
{goog.dom.appendChild.call(null,parent,child__27133);
} else
{}
var temp__3698__auto____27134 = cljs.core.next.call(null,G__27129__27132);

if(cljs.core.truth_(temp__3698__auto____27134))
{var G__27129__27135 = temp__3698__auto____27134;

{
var G__27136 = cljs.core.first.call(null,G__27129__27135);
var G__27137 = G__27129__27135;
c__27131 = G__27136;
G__27129__27132 = G__27137;
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
crate.core.normalize_element = (function normalize_element(p__27139){
var vec__27140__27141 = p__27139;
var tag__27142 = cljs.core.nth.call(null,vec__27140__27141,0,null);
var content__27143 = cljs.core.nthnext.call(null,vec__27140__27141,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____27144 = cljs.core.keyword_QMARK_.call(null,tag__27142);

if(cljs.core.truth_(or__3548__auto____27144))
{return or__3548__auto____27144;
} else
{var or__3548__auto____27145 = cljs.core.symbol_QMARK_.call(null,tag__27142);

if(cljs.core.truth_(or__3548__auto____27145))
{return or__3548__auto____27145;
} else
{return cljs.core.string_QMARK_.call(null,tag__27142);
}
}
})())))
{throw cljs.core.str.call(null,tag__27142," is not a valid tag name.");
} else
{}
var vec__27146__27148 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__27142));
var ___27149 = cljs.core.nth.call(null,vec__27146__27148,0,null);
var tag__27150 = cljs.core.nth.call(null,vec__27146__27148,1,null);
var id__27151 = cljs.core.nth.call(null,vec__27146__27148,2,null);
var class$__27152 = cljs.core.nth.call(null,vec__27146__27148,3,null);
var vec__27147__27159 = (function (){var vec__27153__27154 = clojure.string.split.call(null,tag__27150,/:/);
var nsp__27155 = cljs.core.nth.call(null,vec__27153__27154,0,null);
var t__27156 = cljs.core.nth.call(null,vec__27153__27154,1,null);
var ns_xmlns__27157 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__27155));

if(cljs.core.truth_(t__27156))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____27158 = ns_xmlns__27157;

if(cljs.core.truth_(or__3548__auto____27158))
{return or__3548__auto____27158;
} else
{return nsp__27155;
}
})(),t__27156]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__27155]);
}
})();
var nsp__27160 = cljs.core.nth.call(null,vec__27147__27159,0,null);
var tag__27161 = cljs.core.nth.call(null,vec__27147__27159,1,null);
var tag_attrs__27163 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__27138_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__27138_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____27162 = id__27151;

if(cljs.core.truth_(or__3548__auto____27162))
{return or__3548__auto____27162;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__27152)?clojure.string.replace.call(null,class$__27152,/\./," "):null)})));
var map_attrs__27164 = cljs.core.first.call(null,content__27143);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__27164)))
{return cljs.core.PersistentVector.fromArray([nsp__27160,tag__27161,cljs.core.merge.call(null,tag_attrs__27163,map_attrs__27164),cljs.core.next.call(null,content__27143)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__27160,tag__27161,tag_attrs__27163,content__27143]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__27165 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__27165)))
{crate.core.dom_attr.call(null,elem,attrs__27165);
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
var vec__27166__27167 = crate.core.normalize_element.call(null,tag_def);
var nsp__27168 = cljs.core.nth.call(null,vec__27166__27167,0,null);
var tag__27169 = cljs.core.nth.call(null,vec__27166__27167,1,null);
var attrs__27170 = cljs.core.nth.call(null,vec__27166__27167,2,null);
var content__27171 = cljs.core.nth.call(null,vec__27166__27167,3,null);
var elem__27172 = crate.core.create_elem.call(null,nsp__27168,tag__27169);

crate.core.dom_attr.call(null,elem__27172,attrs__27170);
crate.core.as_content.call(null,elem__27172,content__27171);
return elem__27172;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__27173 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__27173)))
{return res__27173;
} else
{return cljs.core.first.call(null,res__27173);
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
html.cljs$lang$applyTo = (function (arglist__27174){
var tags = cljs.core.seq( arglist__27174 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
