goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__5156 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__5137__5138 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__5137__5138))
{var G__5140__5142 = cljs.core.first.call(null,G__5137__5138);
var vec__5141__5143 = G__5140__5142;
var k__5144 = cljs.core.nth.call(null,vec__5141__5143,0,null);
var v__5145 = cljs.core.nth.call(null,vec__5141__5143,1,null);
var G__5137__5146 = G__5137__5138;

var G__5140__5147 = G__5140__5142;
var G__5137__5148 = G__5137__5146;

while(true){
var vec__5149__5150 = G__5140__5147;
var k__5151 = cljs.core.nth.call(null,vec__5149__5150,0,null);
var v__5152 = cljs.core.nth.call(null,vec__5149__5150,1,null);
var G__5137__5153 = G__5137__5148;

dom_attr.call(null,elem,k__5151,v__5152);
var temp__3698__auto____5154 = cljs.core.next.call(null,G__5137__5153);

if(cljs.core.truth_(temp__3698__auto____5154))
{var G__5137__5155 = temp__3698__auto____5154;

{
var G__5159 = cljs.core.first.call(null,G__5137__5155);
var G__5160 = G__5137__5155;
G__5140__5147 = G__5159;
G__5137__5148 = G__5160;
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
var dom_attr__5157 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__5156.call(this,elem,k);
case  3 :
return dom_attr__5157.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__5161__5162 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__5161__5162))
{var c__5163 = cljs.core.first.call(null,G__5161__5162);
var G__5161__5164 = G__5161__5162;

while(true){
var child__5165 = (cljs.core.truth_((c__5163 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__5163))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__5163))?goog.dom.createTextNode.call(null,c__5163):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__5163))?crate.core.elem_factory.call(null,c__5163):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__5163))?as_content.call(null,parent,c__5163):(cljs.core.truth_(c__5163.nodeName)?c__5163:null))))));

if(cljs.core.truth_(child__5165))
{goog.dom.appendChild.call(null,parent,child__5165);
} else
{}
var temp__3698__auto____5166 = cljs.core.next.call(null,G__5161__5164);

if(cljs.core.truth_(temp__3698__auto____5166))
{var G__5161__5167 = temp__3698__auto____5166;

{
var G__5168 = cljs.core.first.call(null,G__5161__5167);
var G__5169 = G__5161__5167;
c__5163 = G__5168;
G__5161__5164 = G__5169;
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
crate.core.normalize_element = (function normalize_element(p__5171){
var vec__5172__5173 = p__5171;
var tag__5174 = cljs.core.nth.call(null,vec__5172__5173,0,null);
var content__5175 = cljs.core.nthnext.call(null,vec__5172__5173,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____5176 = cljs.core.keyword_QMARK_.call(null,tag__5174);

if(cljs.core.truth_(or__3548__auto____5176))
{return or__3548__auto____5176;
} else
{var or__3548__auto____5177 = cljs.core.symbol_QMARK_.call(null,tag__5174);

if(cljs.core.truth_(or__3548__auto____5177))
{return or__3548__auto____5177;
} else
{return cljs.core.string_QMARK_.call(null,tag__5174);
}
}
})())))
{throw cljs.core.str.call(null,tag__5174," is not a valid tag name.");
} else
{}
var vec__5178__5180 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__5174));
var ___5181 = cljs.core.nth.call(null,vec__5178__5180,0,null);
var tag__5182 = cljs.core.nth.call(null,vec__5178__5180,1,null);
var id__5183 = cljs.core.nth.call(null,vec__5178__5180,2,null);
var class$__5184 = cljs.core.nth.call(null,vec__5178__5180,3,null);
var vec__5179__5191 = (function (){var vec__5185__5186 = clojure.string.split.call(null,tag__5182,/:/);
var nsp__5187 = cljs.core.nth.call(null,vec__5185__5186,0,null);
var t__5188 = cljs.core.nth.call(null,vec__5185__5186,1,null);
var ns_xmlns__5189 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__5187));

if(cljs.core.truth_(t__5188))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____5190 = ns_xmlns__5189;

if(cljs.core.truth_(or__3548__auto____5190))
{return or__3548__auto____5190;
} else
{return nsp__5187;
}
})(),t__5188]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__5187]);
}
})();
var nsp__5192 = cljs.core.nth.call(null,vec__5179__5191,0,null);
var tag__5193 = cljs.core.nth.call(null,vec__5179__5191,1,null);
var tag_attrs__5195 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__5170_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__5170_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____5194 = id__5183;

if(cljs.core.truth_(or__3548__auto____5194))
{return or__3548__auto____5194;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__5184)?clojure.string.replace.call(null,class$__5184,/\./," "):null)})));
var map_attrs__5196 = cljs.core.first.call(null,content__5175);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__5196)))
{return cljs.core.PersistentVector.fromArray([nsp__5192,tag__5193,cljs.core.merge.call(null,tag_attrs__5195,map_attrs__5196),cljs.core.next.call(null,content__5175)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__5192,tag__5193,tag_attrs__5195,content__5175]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__5197 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__5197)))
{crate.core.dom_attr.call(null,elem,attrs__5197);
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
var vec__5198__5199 = crate.core.normalize_element.call(null,tag_def);
var nsp__5200 = cljs.core.nth.call(null,vec__5198__5199,0,null);
var tag__5201 = cljs.core.nth.call(null,vec__5198__5199,1,null);
var attrs__5202 = cljs.core.nth.call(null,vec__5198__5199,2,null);
var content__5203 = cljs.core.nth.call(null,vec__5198__5199,3,null);
var elem__5204 = crate.core.create_elem.call(null,nsp__5200,tag__5201);

crate.core.dom_attr.call(null,elem__5204,attrs__5202);
crate.core.as_content.call(null,elem__5204,content__5203);
return elem__5204;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__5205 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__5205)))
{return res__5205;
} else
{return cljs.core.first.call(null,res__5205);
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
html.cljs$lang$applyTo = (function (arglist__5206){
var tags = cljs.core.seq( arglist__5206 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
