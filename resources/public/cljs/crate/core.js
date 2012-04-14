goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__246065 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__246046__246047 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__246046__246047))
{var G__246049__246051 = cljs.core.first.call(null,G__246046__246047);
var vec__246050__246052 = G__246049__246051;
var k__246053 = cljs.core.nth.call(null,vec__246050__246052,0,null);
var v__246054 = cljs.core.nth.call(null,vec__246050__246052,1,null);
var G__246046__246055 = G__246046__246047;

var G__246049__246056 = G__246049__246051;
var G__246046__246057 = G__246046__246055;

while(true){
var vec__246058__246059 = G__246049__246056;
var k__246060 = cljs.core.nth.call(null,vec__246058__246059,0,null);
var v__246061 = cljs.core.nth.call(null,vec__246058__246059,1,null);
var G__246046__246062 = G__246046__246057;

dom_attr.call(null,elem,k__246060,v__246061);
var temp__3698__auto____246063 = cljs.core.next.call(null,G__246046__246062);

if(cljs.core.truth_(temp__3698__auto____246063))
{var G__246046__246064 = temp__3698__auto____246063;

{
var G__246068 = cljs.core.first.call(null,G__246046__246064);
var G__246069 = G__246046__246064;
G__246049__246056 = G__246068;
G__246046__246057 = G__246069;
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
var dom_attr__246066 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__246065.call(this,elem,k);
case  3 :
return dom_attr__246066.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__246070__246071 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__246070__246071))
{var c__246072 = cljs.core.first.call(null,G__246070__246071);
var G__246070__246073 = G__246070__246071;

while(true){
var child__246074 = (cljs.core.truth_((c__246072 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__246072))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__246072))?goog.dom.createTextNode.call(null,c__246072):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__246072))?crate.core.elem_factory.call(null,c__246072):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__246072))?as_content.call(null,parent,c__246072):(cljs.core.truth_(c__246072.nodeName)?c__246072:null))))));

if(cljs.core.truth_(child__246074))
{goog.dom.appendChild.call(null,parent,child__246074);
} else
{}
var temp__3698__auto____246075 = cljs.core.next.call(null,G__246070__246073);

if(cljs.core.truth_(temp__3698__auto____246075))
{var G__246070__246076 = temp__3698__auto____246075;

{
var G__246077 = cljs.core.first.call(null,G__246070__246076);
var G__246078 = G__246070__246076;
c__246072 = G__246077;
G__246070__246073 = G__246078;
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
crate.core.normalize_element = (function normalize_element(p__246080){
var vec__246081__246082 = p__246080;
var tag__246083 = cljs.core.nth.call(null,vec__246081__246082,0,null);
var content__246084 = cljs.core.nthnext.call(null,vec__246081__246082,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____246085 = cljs.core.keyword_QMARK_.call(null,tag__246083);

if(cljs.core.truth_(or__3548__auto____246085))
{return or__3548__auto____246085;
} else
{var or__3548__auto____246086 = cljs.core.symbol_QMARK_.call(null,tag__246083);

if(cljs.core.truth_(or__3548__auto____246086))
{return or__3548__auto____246086;
} else
{return cljs.core.string_QMARK_.call(null,tag__246083);
}
}
})())))
{throw cljs.core.str.call(null,tag__246083," is not a valid tag name.");
} else
{}
var vec__246087__246089 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__246083));
var ___246090 = cljs.core.nth.call(null,vec__246087__246089,0,null);
var tag__246091 = cljs.core.nth.call(null,vec__246087__246089,1,null);
var id__246092 = cljs.core.nth.call(null,vec__246087__246089,2,null);
var class$__246093 = cljs.core.nth.call(null,vec__246087__246089,3,null);
var vec__246088__246100 = (function (){var vec__246094__246095 = clojure.string.split.call(null,tag__246091,/:/);
var nsp__246096 = cljs.core.nth.call(null,vec__246094__246095,0,null);
var t__246097 = cljs.core.nth.call(null,vec__246094__246095,1,null);
var ns_xmlns__246098 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__246096));

if(cljs.core.truth_(t__246097))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____246099 = ns_xmlns__246098;

if(cljs.core.truth_(or__3548__auto____246099))
{return or__3548__auto____246099;
} else
{return nsp__246096;
}
})(),t__246097]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__246096]);
}
})();
var nsp__246101 = cljs.core.nth.call(null,vec__246088__246100,0,null);
var tag__246102 = cljs.core.nth.call(null,vec__246088__246100,1,null);
var tag_attrs__246104 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__246079_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__246079_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____246103 = id__246092;

if(cljs.core.truth_(or__3548__auto____246103))
{return or__3548__auto____246103;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__246093)?clojure.string.replace.call(null,class$__246093,/\./," "):null)})));
var map_attrs__246105 = cljs.core.first.call(null,content__246084);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__246105)))
{return cljs.core.PersistentVector.fromArray([nsp__246101,tag__246102,cljs.core.merge.call(null,tag_attrs__246104,map_attrs__246105),cljs.core.next.call(null,content__246084)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__246101,tag__246102,tag_attrs__246104,content__246084]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__246106 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__246106)))
{crate.core.dom_attr.call(null,elem,attrs__246106);
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
var vec__246107__246108 = crate.core.normalize_element.call(null,tag_def);
var nsp__246109 = cljs.core.nth.call(null,vec__246107__246108,0,null);
var tag__246110 = cljs.core.nth.call(null,vec__246107__246108,1,null);
var attrs__246111 = cljs.core.nth.call(null,vec__246107__246108,2,null);
var content__246112 = cljs.core.nth.call(null,vec__246107__246108,3,null);
var elem__246113 = crate.core.create_elem.call(null,nsp__246109,tag__246110);

crate.core.dom_attr.call(null,elem__246113,attrs__246111);
crate.core.as_content.call(null,elem__246113,content__246112);
return elem__246113;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__246114 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__246114)))
{return res__246114;
} else
{return cljs.core.first.call(null,res__246114);
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
html.cljs$lang$applyTo = (function (arglist__246115){
var tags = cljs.core.seq( arglist__246115 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
