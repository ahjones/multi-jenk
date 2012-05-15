goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__81355 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__81336__81337 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__81336__81337))
{var G__81339__81341 = cljs.core.first.call(null,G__81336__81337);
var vec__81340__81342 = G__81339__81341;
var k__81343 = cljs.core.nth.call(null,vec__81340__81342,0,null);
var v__81344 = cljs.core.nth.call(null,vec__81340__81342,1,null);
var G__81336__81345 = G__81336__81337;

var G__81339__81346 = G__81339__81341;
var G__81336__81347 = G__81336__81345;

while(true){
var vec__81348__81349 = G__81339__81346;
var k__81350 = cljs.core.nth.call(null,vec__81348__81349,0,null);
var v__81351 = cljs.core.nth.call(null,vec__81348__81349,1,null);
var G__81336__81352 = G__81336__81347;

dom_attr.call(null,elem,k__81350,v__81351);
var temp__3698__auto____81353 = cljs.core.next.call(null,G__81336__81352);

if(cljs.core.truth_(temp__3698__auto____81353))
{var G__81336__81354 = temp__3698__auto____81353;

{
var G__81358 = cljs.core.first.call(null,G__81336__81354);
var G__81359 = G__81336__81354;
G__81339__81346 = G__81358;
G__81336__81347 = G__81359;
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
var dom_attr__81356 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__81355.call(this,elem,k);
case  3 :
return dom_attr__81356.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__81360__81361 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__81360__81361))
{var c__81362 = cljs.core.first.call(null,G__81360__81361);
var G__81360__81363 = G__81360__81361;

while(true){
var child__81364 = (cljs.core.truth_((c__81362 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__81362))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__81362))?goog.dom.createTextNode.call(null,c__81362):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__81362))?crate.core.elem_factory.call(null,c__81362):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__81362))?as_content.call(null,parent,c__81362):(cljs.core.truth_(c__81362.nodeName)?c__81362:null))))));

if(cljs.core.truth_(child__81364))
{goog.dom.appendChild.call(null,parent,child__81364);
} else
{}
var temp__3698__auto____81365 = cljs.core.next.call(null,G__81360__81363);

if(cljs.core.truth_(temp__3698__auto____81365))
{var G__81360__81366 = temp__3698__auto____81365;

{
var G__81367 = cljs.core.first.call(null,G__81360__81366);
var G__81368 = G__81360__81366;
c__81362 = G__81367;
G__81360__81363 = G__81368;
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
crate.core.normalize_element = (function normalize_element(p__81370){
var vec__81371__81372 = p__81370;
var tag__81373 = cljs.core.nth.call(null,vec__81371__81372,0,null);
var content__81374 = cljs.core.nthnext.call(null,vec__81371__81372,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____81375 = cljs.core.keyword_QMARK_.call(null,tag__81373);

if(cljs.core.truth_(or__3548__auto____81375))
{return or__3548__auto____81375;
} else
{var or__3548__auto____81376 = cljs.core.symbol_QMARK_.call(null,tag__81373);

if(cljs.core.truth_(or__3548__auto____81376))
{return or__3548__auto____81376;
} else
{return cljs.core.string_QMARK_.call(null,tag__81373);
}
}
})())))
{throw cljs.core.str.call(null,tag__81373," is not a valid tag name.");
} else
{}
var vec__81377__81379 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__81373));
var ___81380 = cljs.core.nth.call(null,vec__81377__81379,0,null);
var tag__81381 = cljs.core.nth.call(null,vec__81377__81379,1,null);
var id__81382 = cljs.core.nth.call(null,vec__81377__81379,2,null);
var class$__81383 = cljs.core.nth.call(null,vec__81377__81379,3,null);
var vec__81378__81390 = (function (){var vec__81384__81385 = clojure.string.split.call(null,tag__81381,/:/);
var nsp__81386 = cljs.core.nth.call(null,vec__81384__81385,0,null);
var t__81387 = cljs.core.nth.call(null,vec__81384__81385,1,null);
var ns_xmlns__81388 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__81386));

if(cljs.core.truth_(t__81387))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____81389 = ns_xmlns__81388;

if(cljs.core.truth_(or__3548__auto____81389))
{return or__3548__auto____81389;
} else
{return nsp__81386;
}
})(),t__81387]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__81386]);
}
})();
var nsp__81391 = cljs.core.nth.call(null,vec__81378__81390,0,null);
var tag__81392 = cljs.core.nth.call(null,vec__81378__81390,1,null);
var tag_attrs__81394 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__81369_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__81369_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____81393 = id__81382;

if(cljs.core.truth_(or__3548__auto____81393))
{return or__3548__auto____81393;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__81383)?clojure.string.replace.call(null,class$__81383,/\./," "):null)})));
var map_attrs__81395 = cljs.core.first.call(null,content__81374);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__81395)))
{return cljs.core.PersistentVector.fromArray([nsp__81391,tag__81392,cljs.core.merge.call(null,tag_attrs__81394,map_attrs__81395),cljs.core.next.call(null,content__81374)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__81391,tag__81392,tag_attrs__81394,content__81374]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__81396 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__81396)))
{crate.core.dom_attr.call(null,elem,attrs__81396);
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
var vec__81397__81398 = crate.core.normalize_element.call(null,tag_def);
var nsp__81399 = cljs.core.nth.call(null,vec__81397__81398,0,null);
var tag__81400 = cljs.core.nth.call(null,vec__81397__81398,1,null);
var attrs__81401 = cljs.core.nth.call(null,vec__81397__81398,2,null);
var content__81402 = cljs.core.nth.call(null,vec__81397__81398,3,null);
var elem__81403 = crate.core.create_elem.call(null,nsp__81399,tag__81400);

crate.core.dom_attr.call(null,elem__81403,attrs__81401);
crate.core.as_content.call(null,elem__81403,content__81402);
return elem__81403;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__81404 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__81404)))
{return res__81404;
} else
{return cljs.core.first.call(null,res__81404);
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
html.cljs$lang$applyTo = (function (arglist__81405){
var tags = cljs.core.seq( arglist__81405 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
