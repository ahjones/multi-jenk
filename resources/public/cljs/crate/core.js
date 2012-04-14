goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__185932 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__185913__185914 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__185913__185914))
{var G__185916__185918 = cljs.core.first.call(null,G__185913__185914);
var vec__185917__185919 = G__185916__185918;
var k__185920 = cljs.core.nth.call(null,vec__185917__185919,0,null);
var v__185921 = cljs.core.nth.call(null,vec__185917__185919,1,null);
var G__185913__185922 = G__185913__185914;

var G__185916__185923 = G__185916__185918;
var G__185913__185924 = G__185913__185922;

while(true){
var vec__185925__185926 = G__185916__185923;
var k__185927 = cljs.core.nth.call(null,vec__185925__185926,0,null);
var v__185928 = cljs.core.nth.call(null,vec__185925__185926,1,null);
var G__185913__185929 = G__185913__185924;

dom_attr.call(null,elem,k__185927,v__185928);
var temp__3698__auto____185930 = cljs.core.next.call(null,G__185913__185929);

if(cljs.core.truth_(temp__3698__auto____185930))
{var G__185913__185931 = temp__3698__auto____185930;

{
var G__185935 = cljs.core.first.call(null,G__185913__185931);
var G__185936 = G__185913__185931;
G__185916__185923 = G__185935;
G__185913__185924 = G__185936;
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
var dom_attr__185933 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__185932.call(this,elem,k);
case  3 :
return dom_attr__185933.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__185937__185938 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__185937__185938))
{var c__185939 = cljs.core.first.call(null,G__185937__185938);
var G__185937__185940 = G__185937__185938;

while(true){
var child__185941 = (cljs.core.truth_((c__185939 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__185939))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__185939))?goog.dom.createTextNode.call(null,c__185939):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__185939))?crate.core.elem_factory.call(null,c__185939):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__185939))?as_content.call(null,parent,c__185939):(cljs.core.truth_(c__185939.nodeName)?c__185939:null))))));

if(cljs.core.truth_(child__185941))
{goog.dom.appendChild.call(null,parent,child__185941);
} else
{}
var temp__3698__auto____185942 = cljs.core.next.call(null,G__185937__185940);

if(cljs.core.truth_(temp__3698__auto____185942))
{var G__185937__185943 = temp__3698__auto____185942;

{
var G__185944 = cljs.core.first.call(null,G__185937__185943);
var G__185945 = G__185937__185943;
c__185939 = G__185944;
G__185937__185940 = G__185945;
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
crate.core.normalize_element = (function normalize_element(p__185947){
var vec__185948__185949 = p__185947;
var tag__185950 = cljs.core.nth.call(null,vec__185948__185949,0,null);
var content__185951 = cljs.core.nthnext.call(null,vec__185948__185949,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____185952 = cljs.core.keyword_QMARK_.call(null,tag__185950);

if(cljs.core.truth_(or__3548__auto____185952))
{return or__3548__auto____185952;
} else
{var or__3548__auto____185953 = cljs.core.symbol_QMARK_.call(null,tag__185950);

if(cljs.core.truth_(or__3548__auto____185953))
{return or__3548__auto____185953;
} else
{return cljs.core.string_QMARK_.call(null,tag__185950);
}
}
})())))
{throw cljs.core.str.call(null,tag__185950," is not a valid tag name.");
} else
{}
var vec__185954__185956 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__185950));
var ___185957 = cljs.core.nth.call(null,vec__185954__185956,0,null);
var tag__185958 = cljs.core.nth.call(null,vec__185954__185956,1,null);
var id__185959 = cljs.core.nth.call(null,vec__185954__185956,2,null);
var class$__185960 = cljs.core.nth.call(null,vec__185954__185956,3,null);
var vec__185955__185967 = (function (){var vec__185961__185962 = clojure.string.split.call(null,tag__185958,/:/);
var nsp__185963 = cljs.core.nth.call(null,vec__185961__185962,0,null);
var t__185964 = cljs.core.nth.call(null,vec__185961__185962,1,null);
var ns_xmlns__185965 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__185963));

if(cljs.core.truth_(t__185964))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____185966 = ns_xmlns__185965;

if(cljs.core.truth_(or__3548__auto____185966))
{return or__3548__auto____185966;
} else
{return nsp__185963;
}
})(),t__185964]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__185963]);
}
})();
var nsp__185968 = cljs.core.nth.call(null,vec__185955__185967,0,null);
var tag__185969 = cljs.core.nth.call(null,vec__185955__185967,1,null);
var tag_attrs__185971 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__185946_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__185946_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____185970 = id__185959;

if(cljs.core.truth_(or__3548__auto____185970))
{return or__3548__auto____185970;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__185960)?clojure.string.replace.call(null,class$__185960,/\./," "):null)})));
var map_attrs__185972 = cljs.core.first.call(null,content__185951);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__185972)))
{return cljs.core.PersistentVector.fromArray([nsp__185968,tag__185969,cljs.core.merge.call(null,tag_attrs__185971,map_attrs__185972),cljs.core.next.call(null,content__185951)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__185968,tag__185969,tag_attrs__185971,content__185951]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__185973 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__185973)))
{crate.core.dom_attr.call(null,elem,attrs__185973);
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
var vec__185974__185975 = crate.core.normalize_element.call(null,tag_def);
var nsp__185976 = cljs.core.nth.call(null,vec__185974__185975,0,null);
var tag__185977 = cljs.core.nth.call(null,vec__185974__185975,1,null);
var attrs__185978 = cljs.core.nth.call(null,vec__185974__185975,2,null);
var content__185979 = cljs.core.nth.call(null,vec__185974__185975,3,null);
var elem__185980 = crate.core.create_elem.call(null,nsp__185976,tag__185977);

crate.core.dom_attr.call(null,elem__185980,attrs__185978);
crate.core.as_content.call(null,elem__185980,content__185979);
return elem__185980;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__185981 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__185981)))
{return res__185981;
} else
{return cljs.core.first.call(null,res__185981);
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
html.cljs$lang$applyTo = (function (arglist__185982){
var tags = cljs.core.seq( arglist__185982 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
