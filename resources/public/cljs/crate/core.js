goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__7026 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__7007__7008 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__7007__7008))
{var G__7010__7012 = cljs.core.first.call(null,G__7007__7008);
var vec__7011__7013 = G__7010__7012;
var k__7014 = cljs.core.nth.call(null,vec__7011__7013,0,null);
var v__7015 = cljs.core.nth.call(null,vec__7011__7013,1,null);
var G__7007__7016 = G__7007__7008;

var G__7010__7017 = G__7010__7012;
var G__7007__7018 = G__7007__7016;

while(true){
var vec__7019__7020 = G__7010__7017;
var k__7021 = cljs.core.nth.call(null,vec__7019__7020,0,null);
var v__7022 = cljs.core.nth.call(null,vec__7019__7020,1,null);
var G__7007__7023 = G__7007__7018;

dom_attr.call(null,elem,k__7021,v__7022);
var temp__3698__auto____7024 = cljs.core.next.call(null,G__7007__7023);

if(cljs.core.truth_(temp__3698__auto____7024))
{var G__7007__7025 = temp__3698__auto____7024;

{
var G__7029 = cljs.core.first.call(null,G__7007__7025);
var G__7030 = G__7007__7025;
G__7010__7017 = G__7029;
G__7007__7018 = G__7030;
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
var dom_attr__7027 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__7026.call(this,elem,k);
case  3 :
return dom_attr__7027.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__7031__7032 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__7031__7032))
{var c__7033 = cljs.core.first.call(null,G__7031__7032);
var G__7031__7034 = G__7031__7032;

while(true){
var child__7035 = (cljs.core.truth_((c__7033 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__7033))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__7033))?goog.dom.createTextNode.call(null,c__7033):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__7033))?crate.core.elem_factory.call(null,c__7033):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__7033))?as_content.call(null,parent,c__7033):(cljs.core.truth_(c__7033.nodeName)?c__7033:null))))));

if(cljs.core.truth_(child__7035))
{goog.dom.appendChild.call(null,parent,child__7035);
} else
{}
var temp__3698__auto____7036 = cljs.core.next.call(null,G__7031__7034);

if(cljs.core.truth_(temp__3698__auto____7036))
{var G__7031__7037 = temp__3698__auto____7036;

{
var G__7038 = cljs.core.first.call(null,G__7031__7037);
var G__7039 = G__7031__7037;
c__7033 = G__7038;
G__7031__7034 = G__7039;
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
crate.core.normalize_element = (function normalize_element(p__7041){
var vec__7042__7043 = p__7041;
var tag__7044 = cljs.core.nth.call(null,vec__7042__7043,0,null);
var content__7045 = cljs.core.nthnext.call(null,vec__7042__7043,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____7046 = cljs.core.keyword_QMARK_.call(null,tag__7044);

if(cljs.core.truth_(or__3548__auto____7046))
{return or__3548__auto____7046;
} else
{var or__3548__auto____7047 = cljs.core.symbol_QMARK_.call(null,tag__7044);

if(cljs.core.truth_(or__3548__auto____7047))
{return or__3548__auto____7047;
} else
{return cljs.core.string_QMARK_.call(null,tag__7044);
}
}
})())))
{throw cljs.core.str.call(null,tag__7044," is not a valid tag name.");
} else
{}
var vec__7048__7050 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__7044));
var ___7051 = cljs.core.nth.call(null,vec__7048__7050,0,null);
var tag__7052 = cljs.core.nth.call(null,vec__7048__7050,1,null);
var id__7053 = cljs.core.nth.call(null,vec__7048__7050,2,null);
var class$__7054 = cljs.core.nth.call(null,vec__7048__7050,3,null);
var vec__7049__7061 = (function (){var vec__7055__7056 = clojure.string.split.call(null,tag__7052,/:/);
var nsp__7057 = cljs.core.nth.call(null,vec__7055__7056,0,null);
var t__7058 = cljs.core.nth.call(null,vec__7055__7056,1,null);
var ns_xmlns__7059 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__7057));

if(cljs.core.truth_(t__7058))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____7060 = ns_xmlns__7059;

if(cljs.core.truth_(or__3548__auto____7060))
{return or__3548__auto____7060;
} else
{return nsp__7057;
}
})(),t__7058]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__7057]);
}
})();
var nsp__7062 = cljs.core.nth.call(null,vec__7049__7061,0,null);
var tag__7063 = cljs.core.nth.call(null,vec__7049__7061,1,null);
var tag_attrs__7065 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__7040_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__7040_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____7064 = id__7053;

if(cljs.core.truth_(or__3548__auto____7064))
{return or__3548__auto____7064;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__7054)?clojure.string.replace.call(null,class$__7054,/\./," "):null)})));
var map_attrs__7066 = cljs.core.first.call(null,content__7045);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__7066)))
{return cljs.core.PersistentVector.fromArray([nsp__7062,tag__7063,cljs.core.merge.call(null,tag_attrs__7065,map_attrs__7066),cljs.core.next.call(null,content__7045)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__7062,tag__7063,tag_attrs__7065,content__7045]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__7067 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__7067)))
{crate.core.dom_attr.call(null,elem,attrs__7067);
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
var vec__7068__7069 = crate.core.normalize_element.call(null,tag_def);
var nsp__7070 = cljs.core.nth.call(null,vec__7068__7069,0,null);
var tag__7071 = cljs.core.nth.call(null,vec__7068__7069,1,null);
var attrs__7072 = cljs.core.nth.call(null,vec__7068__7069,2,null);
var content__7073 = cljs.core.nth.call(null,vec__7068__7069,3,null);
var elem__7074 = crate.core.create_elem.call(null,nsp__7070,tag__7071);

crate.core.dom_attr.call(null,elem__7074,attrs__7072);
crate.core.as_content.call(null,elem__7074,content__7073);
return elem__7074;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__7075 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__7075)))
{return res__7075;
} else
{return cljs.core.first.call(null,res__7075);
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
html.cljs$lang$applyTo = (function (arglist__7076){
var tags = cljs.core.seq( arglist__7076 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
