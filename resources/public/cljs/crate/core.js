goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__328129 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__328110__328111 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__328110__328111))
{var G__328113__328115 = cljs.core.first.call(null,G__328110__328111);
var vec__328114__328116 = G__328113__328115;
var k__328117 = cljs.core.nth.call(null,vec__328114__328116,0,null);
var v__328118 = cljs.core.nth.call(null,vec__328114__328116,1,null);
var G__328110__328119 = G__328110__328111;

var G__328113__328120 = G__328113__328115;
var G__328110__328121 = G__328110__328119;

while(true){
var vec__328122__328123 = G__328113__328120;
var k__328124 = cljs.core.nth.call(null,vec__328122__328123,0,null);
var v__328125 = cljs.core.nth.call(null,vec__328122__328123,1,null);
var G__328110__328126 = G__328110__328121;

dom_attr.call(null,elem,k__328124,v__328125);
var temp__3698__auto____328127 = cljs.core.next.call(null,G__328110__328126);

if(cljs.core.truth_(temp__3698__auto____328127))
{var G__328110__328128 = temp__3698__auto____328127;

{
var G__328132 = cljs.core.first.call(null,G__328110__328128);
var G__328133 = G__328110__328128;
G__328113__328120 = G__328132;
G__328110__328121 = G__328133;
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
var dom_attr__328130 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__328129.call(this,elem,k);
case  3 :
return dom_attr__328130.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__328134__328135 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__328134__328135))
{var c__328136 = cljs.core.first.call(null,G__328134__328135);
var G__328134__328137 = G__328134__328135;

while(true){
var child__328138 = (cljs.core.truth_((c__328136 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__328136))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__328136))?goog.dom.createTextNode.call(null,c__328136):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__328136))?crate.core.elem_factory.call(null,c__328136):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__328136))?as_content.call(null,parent,c__328136):(cljs.core.truth_(c__328136.nodeName)?c__328136:null))))));

if(cljs.core.truth_(child__328138))
{goog.dom.appendChild.call(null,parent,child__328138);
} else
{}
var temp__3698__auto____328139 = cljs.core.next.call(null,G__328134__328137);

if(cljs.core.truth_(temp__3698__auto____328139))
{var G__328134__328140 = temp__3698__auto____328139;

{
var G__328141 = cljs.core.first.call(null,G__328134__328140);
var G__328142 = G__328134__328140;
c__328136 = G__328141;
G__328134__328137 = G__328142;
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
crate.core.normalize_element = (function normalize_element(p__328144){
var vec__328145__328146 = p__328144;
var tag__328147 = cljs.core.nth.call(null,vec__328145__328146,0,null);
var content__328148 = cljs.core.nthnext.call(null,vec__328145__328146,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____328149 = cljs.core.keyword_QMARK_.call(null,tag__328147);

if(cljs.core.truth_(or__3548__auto____328149))
{return or__3548__auto____328149;
} else
{var or__3548__auto____328150 = cljs.core.symbol_QMARK_.call(null,tag__328147);

if(cljs.core.truth_(or__3548__auto____328150))
{return or__3548__auto____328150;
} else
{return cljs.core.string_QMARK_.call(null,tag__328147);
}
}
})())))
{throw cljs.core.str.call(null,tag__328147," is not a valid tag name.");
} else
{}
var vec__328151__328153 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__328147));
var ___328154 = cljs.core.nth.call(null,vec__328151__328153,0,null);
var tag__328155 = cljs.core.nth.call(null,vec__328151__328153,1,null);
var id__328156 = cljs.core.nth.call(null,vec__328151__328153,2,null);
var class$__328157 = cljs.core.nth.call(null,vec__328151__328153,3,null);
var vec__328152__328164 = (function (){var vec__328158__328159 = clojure.string.split.call(null,tag__328155,/:/);
var nsp__328160 = cljs.core.nth.call(null,vec__328158__328159,0,null);
var t__328161 = cljs.core.nth.call(null,vec__328158__328159,1,null);
var ns_xmlns__328162 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__328160));

if(cljs.core.truth_(t__328161))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____328163 = ns_xmlns__328162;

if(cljs.core.truth_(or__3548__auto____328163))
{return or__3548__auto____328163;
} else
{return nsp__328160;
}
})(),t__328161]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__328160]);
}
})();
var nsp__328165 = cljs.core.nth.call(null,vec__328152__328164,0,null);
var tag__328166 = cljs.core.nth.call(null,vec__328152__328164,1,null);
var tag_attrs__328168 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__328143_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__328143_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____328167 = id__328156;

if(cljs.core.truth_(or__3548__auto____328167))
{return or__3548__auto____328167;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__328157)?clojure.string.replace.call(null,class$__328157,/\./," "):null)})));
var map_attrs__328169 = cljs.core.first.call(null,content__328148);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__328169)))
{return cljs.core.PersistentVector.fromArray([nsp__328165,tag__328166,cljs.core.merge.call(null,tag_attrs__328168,map_attrs__328169),cljs.core.next.call(null,content__328148)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__328165,tag__328166,tag_attrs__328168,content__328148]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__328170 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__328170)))
{crate.core.dom_attr.call(null,elem,attrs__328170);
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
var vec__328171__328172 = crate.core.normalize_element.call(null,tag_def);
var nsp__328173 = cljs.core.nth.call(null,vec__328171__328172,0,null);
var tag__328174 = cljs.core.nth.call(null,vec__328171__328172,1,null);
var attrs__328175 = cljs.core.nth.call(null,vec__328171__328172,2,null);
var content__328176 = cljs.core.nth.call(null,vec__328171__328172,3,null);
var elem__328177 = crate.core.create_elem.call(null,nsp__328173,tag__328174);

crate.core.dom_attr.call(null,elem__328177,attrs__328175);
crate.core.as_content.call(null,elem__328177,content__328176);
return elem__328177;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__328178 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__328178)))
{return res__328178;
} else
{return cljs.core.first.call(null,res__328178);
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
html.cljs$lang$applyTo = (function (arglist__328179){
var tags = cljs.core.seq( arglist__328179 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
