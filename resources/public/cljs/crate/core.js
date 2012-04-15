goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__15941 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__15922__15923 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15922__15923))
{var G__15925__15927 = cljs.core.first.call(null,G__15922__15923);
var vec__15926__15928 = G__15925__15927;
var k__15929 = cljs.core.nth.call(null,vec__15926__15928,0,null);
var v__15930 = cljs.core.nth.call(null,vec__15926__15928,1,null);
var G__15922__15931 = G__15922__15923;

var G__15925__15932 = G__15925__15927;
var G__15922__15933 = G__15922__15931;

while(true){
var vec__15934__15935 = G__15925__15932;
var k__15936 = cljs.core.nth.call(null,vec__15934__15935,0,null);
var v__15937 = cljs.core.nth.call(null,vec__15934__15935,1,null);
var G__15922__15938 = G__15922__15933;

dom_attr.call(null,elem,k__15936,v__15937);
var temp__3698__auto____15939 = cljs.core.next.call(null,G__15922__15938);

if(cljs.core.truth_(temp__3698__auto____15939))
{var G__15922__15940 = temp__3698__auto____15939;

{
var G__15944 = cljs.core.first.call(null,G__15922__15940);
var G__15945 = G__15922__15940;
G__15925__15932 = G__15944;
G__15922__15933 = G__15945;
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
var dom_attr__15942 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__15941.call(this,elem,k);
case  3 :
return dom_attr__15942.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__15946__15947 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__15946__15947))
{var c__15948 = cljs.core.first.call(null,G__15946__15947);
var G__15946__15949 = G__15946__15947;

while(true){
var child__15950 = (cljs.core.truth_((c__15948 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__15948))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__15948))?goog.dom.createTextNode.call(null,c__15948):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__15948))?crate.core.elem_factory.call(null,c__15948):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__15948))?as_content.call(null,parent,c__15948):(cljs.core.truth_(c__15948.nodeName)?c__15948:null))))));

if(cljs.core.truth_(child__15950))
{goog.dom.appendChild.call(null,parent,child__15950);
} else
{}
var temp__3698__auto____15951 = cljs.core.next.call(null,G__15946__15949);

if(cljs.core.truth_(temp__3698__auto____15951))
{var G__15946__15952 = temp__3698__auto____15951;

{
var G__15953 = cljs.core.first.call(null,G__15946__15952);
var G__15954 = G__15946__15952;
c__15948 = G__15953;
G__15946__15949 = G__15954;
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
crate.core.normalize_element = (function normalize_element(p__15956){
var vec__15957__15958 = p__15956;
var tag__15959 = cljs.core.nth.call(null,vec__15957__15958,0,null);
var content__15960 = cljs.core.nthnext.call(null,vec__15957__15958,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____15961 = cljs.core.keyword_QMARK_.call(null,tag__15959);

if(cljs.core.truth_(or__3548__auto____15961))
{return or__3548__auto____15961;
} else
{var or__3548__auto____15962 = cljs.core.symbol_QMARK_.call(null,tag__15959);

if(cljs.core.truth_(or__3548__auto____15962))
{return or__3548__auto____15962;
} else
{return cljs.core.string_QMARK_.call(null,tag__15959);
}
}
})())))
{throw cljs.core.str.call(null,tag__15959," is not a valid tag name.");
} else
{}
var vec__15963__15965 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__15959));
var ___15966 = cljs.core.nth.call(null,vec__15963__15965,0,null);
var tag__15967 = cljs.core.nth.call(null,vec__15963__15965,1,null);
var id__15968 = cljs.core.nth.call(null,vec__15963__15965,2,null);
var class$__15969 = cljs.core.nth.call(null,vec__15963__15965,3,null);
var vec__15964__15976 = (function (){var vec__15970__15971 = clojure.string.split.call(null,tag__15967,/:/);
var nsp__15972 = cljs.core.nth.call(null,vec__15970__15971,0,null);
var t__15973 = cljs.core.nth.call(null,vec__15970__15971,1,null);
var ns_xmlns__15974 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__15972));

if(cljs.core.truth_(t__15973))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____15975 = ns_xmlns__15974;

if(cljs.core.truth_(or__3548__auto____15975))
{return or__3548__auto____15975;
} else
{return nsp__15972;
}
})(),t__15973]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__15972]);
}
})();
var nsp__15977 = cljs.core.nth.call(null,vec__15964__15976,0,null);
var tag__15978 = cljs.core.nth.call(null,vec__15964__15976,1,null);
var tag_attrs__15980 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__15955_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__15955_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____15979 = id__15968;

if(cljs.core.truth_(or__3548__auto____15979))
{return or__3548__auto____15979;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__15969)?clojure.string.replace.call(null,class$__15969,/\./," "):null)})));
var map_attrs__15981 = cljs.core.first.call(null,content__15960);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__15981)))
{return cljs.core.PersistentVector.fromArray([nsp__15977,tag__15978,cljs.core.merge.call(null,tag_attrs__15980,map_attrs__15981),cljs.core.next.call(null,content__15960)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__15977,tag__15978,tag_attrs__15980,content__15960]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__15982 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__15982)))
{crate.core.dom_attr.call(null,elem,attrs__15982);
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
var vec__15983__15984 = crate.core.normalize_element.call(null,tag_def);
var nsp__15985 = cljs.core.nth.call(null,vec__15983__15984,0,null);
var tag__15986 = cljs.core.nth.call(null,vec__15983__15984,1,null);
var attrs__15987 = cljs.core.nth.call(null,vec__15983__15984,2,null);
var content__15988 = cljs.core.nth.call(null,vec__15983__15984,3,null);
var elem__15989 = crate.core.create_elem.call(null,nsp__15985,tag__15986);

crate.core.dom_attr.call(null,elem__15989,attrs__15987);
crate.core.as_content.call(null,elem__15989,content__15988);
return elem__15989;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__15990 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__15990)))
{return res__15990;
} else
{return cljs.core.first.call(null,res__15990);
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
html.cljs$lang$applyTo = (function (arglist__15991){
var tags = cljs.core.seq( arglist__15991 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
