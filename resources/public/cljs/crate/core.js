goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__300089 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__300070__300071 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__300070__300071))
{var G__300073__300075 = cljs.core.first.call(null,G__300070__300071);
var vec__300074__300076 = G__300073__300075;
var k__300077 = cljs.core.nth.call(null,vec__300074__300076,0,null);
var v__300078 = cljs.core.nth.call(null,vec__300074__300076,1,null);
var G__300070__300079 = G__300070__300071;

var G__300073__300080 = G__300073__300075;
var G__300070__300081 = G__300070__300079;

while(true){
var vec__300082__300083 = G__300073__300080;
var k__300084 = cljs.core.nth.call(null,vec__300082__300083,0,null);
var v__300085 = cljs.core.nth.call(null,vec__300082__300083,1,null);
var G__300070__300086 = G__300070__300081;

dom_attr.call(null,elem,k__300084,v__300085);
var temp__3698__auto____300087 = cljs.core.next.call(null,G__300070__300086);

if(cljs.core.truth_(temp__3698__auto____300087))
{var G__300070__300088 = temp__3698__auto____300087;

{
var G__300092 = cljs.core.first.call(null,G__300070__300088);
var G__300093 = G__300070__300088;
G__300073__300080 = G__300092;
G__300070__300081 = G__300093;
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
var dom_attr__300090 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__300089.call(this,elem,k);
case  3 :
return dom_attr__300090.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__300094__300095 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__300094__300095))
{var c__300096 = cljs.core.first.call(null,G__300094__300095);
var G__300094__300097 = G__300094__300095;

while(true){
var child__300098 = (cljs.core.truth_((c__300096 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__300096))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__300096))?goog.dom.createTextNode.call(null,c__300096):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__300096))?crate.core.elem_factory.call(null,c__300096):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__300096))?as_content.call(null,parent,c__300096):(cljs.core.truth_(c__300096.nodeName)?c__300096:null))))));

if(cljs.core.truth_(child__300098))
{goog.dom.appendChild.call(null,parent,child__300098);
} else
{}
var temp__3698__auto____300099 = cljs.core.next.call(null,G__300094__300097);

if(cljs.core.truth_(temp__3698__auto____300099))
{var G__300094__300100 = temp__3698__auto____300099;

{
var G__300101 = cljs.core.first.call(null,G__300094__300100);
var G__300102 = G__300094__300100;
c__300096 = G__300101;
G__300094__300097 = G__300102;
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
crate.core.normalize_element = (function normalize_element(p__300104){
var vec__300105__300106 = p__300104;
var tag__300107 = cljs.core.nth.call(null,vec__300105__300106,0,null);
var content__300108 = cljs.core.nthnext.call(null,vec__300105__300106,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____300109 = cljs.core.keyword_QMARK_.call(null,tag__300107);

if(cljs.core.truth_(or__3548__auto____300109))
{return or__3548__auto____300109;
} else
{var or__3548__auto____300110 = cljs.core.symbol_QMARK_.call(null,tag__300107);

if(cljs.core.truth_(or__3548__auto____300110))
{return or__3548__auto____300110;
} else
{return cljs.core.string_QMARK_.call(null,tag__300107);
}
}
})())))
{throw cljs.core.str.call(null,tag__300107," is not a valid tag name.");
} else
{}
var vec__300111__300113 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__300107));
var ___300114 = cljs.core.nth.call(null,vec__300111__300113,0,null);
var tag__300115 = cljs.core.nth.call(null,vec__300111__300113,1,null);
var id__300116 = cljs.core.nth.call(null,vec__300111__300113,2,null);
var class$__300117 = cljs.core.nth.call(null,vec__300111__300113,3,null);
var vec__300112__300124 = (function (){var vec__300118__300119 = clojure.string.split.call(null,tag__300115,/:/);
var nsp__300120 = cljs.core.nth.call(null,vec__300118__300119,0,null);
var t__300121 = cljs.core.nth.call(null,vec__300118__300119,1,null);
var ns_xmlns__300122 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__300120));

if(cljs.core.truth_(t__300121))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____300123 = ns_xmlns__300122;

if(cljs.core.truth_(or__3548__auto____300123))
{return or__3548__auto____300123;
} else
{return nsp__300120;
}
})(),t__300121]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__300120]);
}
})();
var nsp__300125 = cljs.core.nth.call(null,vec__300112__300124,0,null);
var tag__300126 = cljs.core.nth.call(null,vec__300112__300124,1,null);
var tag_attrs__300128 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__300103_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__300103_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____300127 = id__300116;

if(cljs.core.truth_(or__3548__auto____300127))
{return or__3548__auto____300127;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__300117)?clojure.string.replace.call(null,class$__300117,/\./," "):null)})));
var map_attrs__300129 = cljs.core.first.call(null,content__300108);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__300129)))
{return cljs.core.PersistentVector.fromArray([nsp__300125,tag__300126,cljs.core.merge.call(null,tag_attrs__300128,map_attrs__300129),cljs.core.next.call(null,content__300108)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__300125,tag__300126,tag_attrs__300128,content__300108]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__300130 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__300130)))
{crate.core.dom_attr.call(null,elem,attrs__300130);
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
var vec__300131__300132 = crate.core.normalize_element.call(null,tag_def);
var nsp__300133 = cljs.core.nth.call(null,vec__300131__300132,0,null);
var tag__300134 = cljs.core.nth.call(null,vec__300131__300132,1,null);
var attrs__300135 = cljs.core.nth.call(null,vec__300131__300132,2,null);
var content__300136 = cljs.core.nth.call(null,vec__300131__300132,3,null);
var elem__300137 = crate.core.create_elem.call(null,nsp__300133,tag__300134);

crate.core.dom_attr.call(null,elem__300137,attrs__300135);
crate.core.as_content.call(null,elem__300137,content__300136);
return elem__300137;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__300138 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__300138)))
{return res__300138;
} else
{return cljs.core.first.call(null,res__300138);
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
html.cljs$lang$applyTo = (function (arglist__300139){
var tags = cljs.core.seq( arglist__300139 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
