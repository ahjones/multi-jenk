goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__188078 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__188059__188060 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__188059__188060))
{var G__188062__188064 = cljs.core.first.call(null,G__188059__188060);
var vec__188063__188065 = G__188062__188064;
var k__188066 = cljs.core.nth.call(null,vec__188063__188065,0,null);
var v__188067 = cljs.core.nth.call(null,vec__188063__188065,1,null);
var G__188059__188068 = G__188059__188060;

var G__188062__188069 = G__188062__188064;
var G__188059__188070 = G__188059__188068;

while(true){
var vec__188071__188072 = G__188062__188069;
var k__188073 = cljs.core.nth.call(null,vec__188071__188072,0,null);
var v__188074 = cljs.core.nth.call(null,vec__188071__188072,1,null);
var G__188059__188075 = G__188059__188070;

dom_attr.call(null,elem,k__188073,v__188074);
var temp__3698__auto____188076 = cljs.core.next.call(null,G__188059__188075);

if(cljs.core.truth_(temp__3698__auto____188076))
{var G__188059__188077 = temp__3698__auto____188076;

{
var G__188081 = cljs.core.first.call(null,G__188059__188077);
var G__188082 = G__188059__188077;
G__188062__188069 = G__188081;
G__188059__188070 = G__188082;
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
var dom_attr__188079 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__188078.call(this,elem,k);
case  3 :
return dom_attr__188079.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__188083__188084 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__188083__188084))
{var c__188085 = cljs.core.first.call(null,G__188083__188084);
var G__188083__188086 = G__188083__188084;

while(true){
var child__188087 = (cljs.core.truth_((c__188085 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__188085))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__188085))?goog.dom.createTextNode.call(null,c__188085):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__188085))?crate.core.elem_factory.call(null,c__188085):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__188085))?as_content.call(null,parent,c__188085):(cljs.core.truth_(c__188085.nodeName)?c__188085:null))))));

if(cljs.core.truth_(child__188087))
{goog.dom.appendChild.call(null,parent,child__188087);
} else
{}
var temp__3698__auto____188088 = cljs.core.next.call(null,G__188083__188086);

if(cljs.core.truth_(temp__3698__auto____188088))
{var G__188083__188089 = temp__3698__auto____188088;

{
var G__188090 = cljs.core.first.call(null,G__188083__188089);
var G__188091 = G__188083__188089;
c__188085 = G__188090;
G__188083__188086 = G__188091;
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
crate.core.normalize_element = (function normalize_element(p__188093){
var vec__188094__188095 = p__188093;
var tag__188096 = cljs.core.nth.call(null,vec__188094__188095,0,null);
var content__188097 = cljs.core.nthnext.call(null,vec__188094__188095,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____188098 = cljs.core.keyword_QMARK_.call(null,tag__188096);

if(cljs.core.truth_(or__3548__auto____188098))
{return or__3548__auto____188098;
} else
{var or__3548__auto____188099 = cljs.core.symbol_QMARK_.call(null,tag__188096);

if(cljs.core.truth_(or__3548__auto____188099))
{return or__3548__auto____188099;
} else
{return cljs.core.string_QMARK_.call(null,tag__188096);
}
}
})())))
{throw cljs.core.str.call(null,tag__188096," is not a valid tag name.");
} else
{}
var vec__188100__188102 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__188096));
var ___188103 = cljs.core.nth.call(null,vec__188100__188102,0,null);
var tag__188104 = cljs.core.nth.call(null,vec__188100__188102,1,null);
var id__188105 = cljs.core.nth.call(null,vec__188100__188102,2,null);
var class$__188106 = cljs.core.nth.call(null,vec__188100__188102,3,null);
var vec__188101__188113 = (function (){var vec__188107__188108 = clojure.string.split.call(null,tag__188104,/:/);
var nsp__188109 = cljs.core.nth.call(null,vec__188107__188108,0,null);
var t__188110 = cljs.core.nth.call(null,vec__188107__188108,1,null);
var ns_xmlns__188111 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__188109));

if(cljs.core.truth_(t__188110))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____188112 = ns_xmlns__188111;

if(cljs.core.truth_(or__3548__auto____188112))
{return or__3548__auto____188112;
} else
{return nsp__188109;
}
})(),t__188110]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__188109]);
}
})();
var nsp__188114 = cljs.core.nth.call(null,vec__188101__188113,0,null);
var tag__188115 = cljs.core.nth.call(null,vec__188101__188113,1,null);
var tag_attrs__188117 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__188092_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__188092_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____188116 = id__188105;

if(cljs.core.truth_(or__3548__auto____188116))
{return or__3548__auto____188116;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__188106)?clojure.string.replace.call(null,class$__188106,/\./," "):null)})));
var map_attrs__188118 = cljs.core.first.call(null,content__188097);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__188118)))
{return cljs.core.PersistentVector.fromArray([nsp__188114,tag__188115,cljs.core.merge.call(null,tag_attrs__188117,map_attrs__188118),cljs.core.next.call(null,content__188097)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__188114,tag__188115,tag_attrs__188117,content__188097]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__188119 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__188119)))
{crate.core.dom_attr.call(null,elem,attrs__188119);
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
var vec__188120__188121 = crate.core.normalize_element.call(null,tag_def);
var nsp__188122 = cljs.core.nth.call(null,vec__188120__188121,0,null);
var tag__188123 = cljs.core.nth.call(null,vec__188120__188121,1,null);
var attrs__188124 = cljs.core.nth.call(null,vec__188120__188121,2,null);
var content__188125 = cljs.core.nth.call(null,vec__188120__188121,3,null);
var elem__188126 = crate.core.create_elem.call(null,nsp__188122,tag__188123);

crate.core.dom_attr.call(null,elem__188126,attrs__188124);
crate.core.as_content.call(null,elem__188126,content__188125);
return elem__188126;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__188127 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__188127)))
{return res__188127;
} else
{return cljs.core.first.call(null,res__188127);
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
html.cljs$lang$applyTo = (function (arglist__188128){
var tags = cljs.core.seq( arglist__188128 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
