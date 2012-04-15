goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__9470 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__9451__9452 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__9451__9452))
{var G__9454__9456 = cljs.core.first.call(null,G__9451__9452);
var vec__9455__9457 = G__9454__9456;
var k__9458 = cljs.core.nth.call(null,vec__9455__9457,0,null);
var v__9459 = cljs.core.nth.call(null,vec__9455__9457,1,null);
var G__9451__9460 = G__9451__9452;

var G__9454__9461 = G__9454__9456;
var G__9451__9462 = G__9451__9460;

while(true){
var vec__9463__9464 = G__9454__9461;
var k__9465 = cljs.core.nth.call(null,vec__9463__9464,0,null);
var v__9466 = cljs.core.nth.call(null,vec__9463__9464,1,null);
var G__9451__9467 = G__9451__9462;

dom_attr.call(null,elem,k__9465,v__9466);
var temp__3698__auto____9468 = cljs.core.next.call(null,G__9451__9467);

if(cljs.core.truth_(temp__3698__auto____9468))
{var G__9451__9469 = temp__3698__auto____9468;

{
var G__9473 = cljs.core.first.call(null,G__9451__9469);
var G__9474 = G__9451__9469;
G__9454__9461 = G__9473;
G__9451__9462 = G__9474;
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
var dom_attr__9471 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__9470.call(this,elem,k);
case  3 :
return dom_attr__9471.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__9475__9476 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__9475__9476))
{var c__9477 = cljs.core.first.call(null,G__9475__9476);
var G__9475__9478 = G__9475__9476;

while(true){
var child__9479 = (cljs.core.truth_((c__9477 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__9477))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__9477))?goog.dom.createTextNode.call(null,c__9477):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__9477))?crate.core.elem_factory.call(null,c__9477):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__9477))?as_content.call(null,parent,c__9477):(cljs.core.truth_(c__9477.nodeName)?c__9477:null))))));

if(cljs.core.truth_(child__9479))
{goog.dom.appendChild.call(null,parent,child__9479);
} else
{}
var temp__3698__auto____9480 = cljs.core.next.call(null,G__9475__9478);

if(cljs.core.truth_(temp__3698__auto____9480))
{var G__9475__9481 = temp__3698__auto____9480;

{
var G__9482 = cljs.core.first.call(null,G__9475__9481);
var G__9483 = G__9475__9481;
c__9477 = G__9482;
G__9475__9478 = G__9483;
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
crate.core.normalize_element = (function normalize_element(p__9485){
var vec__9486__9487 = p__9485;
var tag__9488 = cljs.core.nth.call(null,vec__9486__9487,0,null);
var content__9489 = cljs.core.nthnext.call(null,vec__9486__9487,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9490 = cljs.core.keyword_QMARK_.call(null,tag__9488);

if(cljs.core.truth_(or__3548__auto____9490))
{return or__3548__auto____9490;
} else
{var or__3548__auto____9491 = cljs.core.symbol_QMARK_.call(null,tag__9488);

if(cljs.core.truth_(or__3548__auto____9491))
{return or__3548__auto____9491;
} else
{return cljs.core.string_QMARK_.call(null,tag__9488);
}
}
})())))
{throw cljs.core.str.call(null,tag__9488," is not a valid tag name.");
} else
{}
var vec__9492__9494 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__9488));
var ___9495 = cljs.core.nth.call(null,vec__9492__9494,0,null);
var tag__9496 = cljs.core.nth.call(null,vec__9492__9494,1,null);
var id__9497 = cljs.core.nth.call(null,vec__9492__9494,2,null);
var class$__9498 = cljs.core.nth.call(null,vec__9492__9494,3,null);
var vec__9493__9505 = (function (){var vec__9499__9500 = clojure.string.split.call(null,tag__9496,/:/);
var nsp__9501 = cljs.core.nth.call(null,vec__9499__9500,0,null);
var t__9502 = cljs.core.nth.call(null,vec__9499__9500,1,null);
var ns_xmlns__9503 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__9501));

if(cljs.core.truth_(t__9502))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____9504 = ns_xmlns__9503;

if(cljs.core.truth_(or__3548__auto____9504))
{return or__3548__auto____9504;
} else
{return nsp__9501;
}
})(),t__9502]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__9501]);
}
})();
var nsp__9506 = cljs.core.nth.call(null,vec__9493__9505,0,null);
var tag__9507 = cljs.core.nth.call(null,vec__9493__9505,1,null);
var tag_attrs__9509 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__9484_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__9484_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____9508 = id__9497;

if(cljs.core.truth_(or__3548__auto____9508))
{return or__3548__auto____9508;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__9498)?clojure.string.replace.call(null,class$__9498,/\./," "):null)})));
var map_attrs__9510 = cljs.core.first.call(null,content__9489);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__9510)))
{return cljs.core.PersistentVector.fromArray([nsp__9506,tag__9507,cljs.core.merge.call(null,tag_attrs__9509,map_attrs__9510),cljs.core.next.call(null,content__9489)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__9506,tag__9507,tag_attrs__9509,content__9489]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__9511 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9511)))
{crate.core.dom_attr.call(null,elem,attrs__9511);
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
var vec__9512__9513 = crate.core.normalize_element.call(null,tag_def);
var nsp__9514 = cljs.core.nth.call(null,vec__9512__9513,0,null);
var tag__9515 = cljs.core.nth.call(null,vec__9512__9513,1,null);
var attrs__9516 = cljs.core.nth.call(null,vec__9512__9513,2,null);
var content__9517 = cljs.core.nth.call(null,vec__9512__9513,3,null);
var elem__9518 = crate.core.create_elem.call(null,nsp__9514,tag__9515);

crate.core.dom_attr.call(null,elem__9518,attrs__9516);
crate.core.as_content.call(null,elem__9518,content__9517);
return elem__9518;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__9519 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__9519)))
{return res__9519;
} else
{return cljs.core.first.call(null,res__9519);
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
html.cljs$lang$applyTo = (function (arglist__9520){
var tags = cljs.core.seq( arglist__9520 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
