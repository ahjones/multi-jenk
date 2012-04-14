goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__175233 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__175214__175215 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__175214__175215))
{var G__175217__175219 = cljs.core.first.call(null,G__175214__175215);
var vec__175218__175220 = G__175217__175219;
var k__175221 = cljs.core.nth.call(null,vec__175218__175220,0,null);
var v__175222 = cljs.core.nth.call(null,vec__175218__175220,1,null);
var G__175214__175223 = G__175214__175215;

var G__175217__175224 = G__175217__175219;
var G__175214__175225 = G__175214__175223;

while(true){
var vec__175226__175227 = G__175217__175224;
var k__175228 = cljs.core.nth.call(null,vec__175226__175227,0,null);
var v__175229 = cljs.core.nth.call(null,vec__175226__175227,1,null);
var G__175214__175230 = G__175214__175225;

dom_attr.call(null,elem,k__175228,v__175229);
var temp__3698__auto____175231 = cljs.core.next.call(null,G__175214__175230);

if(cljs.core.truth_(temp__3698__auto____175231))
{var G__175214__175232 = temp__3698__auto____175231;

{
var G__175236 = cljs.core.first.call(null,G__175214__175232);
var G__175237 = G__175214__175232;
G__175217__175224 = G__175236;
G__175214__175225 = G__175237;
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
var dom_attr__175234 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__175233.call(this,elem,k);
case  3 :
return dom_attr__175234.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__175238__175239 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__175238__175239))
{var c__175240 = cljs.core.first.call(null,G__175238__175239);
var G__175238__175241 = G__175238__175239;

while(true){
var child__175242 = (cljs.core.truth_((c__175240 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__175240))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__175240))?goog.dom.createTextNode.call(null,c__175240):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__175240))?crate.core.elem_factory.call(null,c__175240):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__175240))?as_content.call(null,parent,c__175240):(cljs.core.truth_(c__175240.nodeName)?c__175240:null))))));

if(cljs.core.truth_(child__175242))
{goog.dom.appendChild.call(null,parent,child__175242);
} else
{}
var temp__3698__auto____175243 = cljs.core.next.call(null,G__175238__175241);

if(cljs.core.truth_(temp__3698__auto____175243))
{var G__175238__175244 = temp__3698__auto____175243;

{
var G__175245 = cljs.core.first.call(null,G__175238__175244);
var G__175246 = G__175238__175244;
c__175240 = G__175245;
G__175238__175241 = G__175246;
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
crate.core.normalize_element = (function normalize_element(p__175248){
var vec__175249__175250 = p__175248;
var tag__175251 = cljs.core.nth.call(null,vec__175249__175250,0,null);
var content__175252 = cljs.core.nthnext.call(null,vec__175249__175250,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____175253 = cljs.core.keyword_QMARK_.call(null,tag__175251);

if(cljs.core.truth_(or__3548__auto____175253))
{return or__3548__auto____175253;
} else
{var or__3548__auto____175254 = cljs.core.symbol_QMARK_.call(null,tag__175251);

if(cljs.core.truth_(or__3548__auto____175254))
{return or__3548__auto____175254;
} else
{return cljs.core.string_QMARK_.call(null,tag__175251);
}
}
})())))
{throw cljs.core.str.call(null,tag__175251," is not a valid tag name.");
} else
{}
var vec__175255__175257 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__175251));
var ___175258 = cljs.core.nth.call(null,vec__175255__175257,0,null);
var tag__175259 = cljs.core.nth.call(null,vec__175255__175257,1,null);
var id__175260 = cljs.core.nth.call(null,vec__175255__175257,2,null);
var class$__175261 = cljs.core.nth.call(null,vec__175255__175257,3,null);
var vec__175256__175268 = (function (){var vec__175262__175263 = clojure.string.split.call(null,tag__175259,/:/);
var nsp__175264 = cljs.core.nth.call(null,vec__175262__175263,0,null);
var t__175265 = cljs.core.nth.call(null,vec__175262__175263,1,null);
var ns_xmlns__175266 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__175264));

if(cljs.core.truth_(t__175265))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____175267 = ns_xmlns__175266;

if(cljs.core.truth_(or__3548__auto____175267))
{return or__3548__auto____175267;
} else
{return nsp__175264;
}
})(),t__175265]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__175264]);
}
})();
var nsp__175269 = cljs.core.nth.call(null,vec__175256__175268,0,null);
var tag__175270 = cljs.core.nth.call(null,vec__175256__175268,1,null);
var tag_attrs__175272 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__175247_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__175247_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____175271 = id__175260;

if(cljs.core.truth_(or__3548__auto____175271))
{return or__3548__auto____175271;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__175261)?clojure.string.replace.call(null,class$__175261,/\./," "):null)})));
var map_attrs__175273 = cljs.core.first.call(null,content__175252);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__175273)))
{return cljs.core.PersistentVector.fromArray([nsp__175269,tag__175270,cljs.core.merge.call(null,tag_attrs__175272,map_attrs__175273),cljs.core.next.call(null,content__175252)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__175269,tag__175270,tag_attrs__175272,content__175252]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__175274 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__175274)))
{crate.core.dom_attr.call(null,elem,attrs__175274);
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
var vec__175275__175276 = crate.core.normalize_element.call(null,tag_def);
var nsp__175277 = cljs.core.nth.call(null,vec__175275__175276,0,null);
var tag__175278 = cljs.core.nth.call(null,vec__175275__175276,1,null);
var attrs__175279 = cljs.core.nth.call(null,vec__175275__175276,2,null);
var content__175280 = cljs.core.nth.call(null,vec__175275__175276,3,null);
var elem__175281 = crate.core.create_elem.call(null,nsp__175277,tag__175278);

crate.core.dom_attr.call(null,elem__175281,attrs__175279);
crate.core.as_content.call(null,elem__175281,content__175280);
return elem__175281;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__175282 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__175282)))
{return res__175282;
} else
{return cljs.core.first.call(null,res__175282);
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
html.cljs$lang$applyTo = (function (arglist__175283){
var tags = cljs.core.seq( arglist__175283 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
