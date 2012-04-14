goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__117443 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__117424__117425 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__117424__117425))
{var G__117427__117429 = cljs.core.first.call(null,G__117424__117425);
var vec__117428__117430 = G__117427__117429;
var k__117431 = cljs.core.nth.call(null,vec__117428__117430,0,null);
var v__117432 = cljs.core.nth.call(null,vec__117428__117430,1,null);
var G__117424__117433 = G__117424__117425;

var G__117427__117434 = G__117427__117429;
var G__117424__117435 = G__117424__117433;

while(true){
var vec__117436__117437 = G__117427__117434;
var k__117438 = cljs.core.nth.call(null,vec__117436__117437,0,null);
var v__117439 = cljs.core.nth.call(null,vec__117436__117437,1,null);
var G__117424__117440 = G__117424__117435;

dom_attr.call(null,elem,k__117438,v__117439);
var temp__3698__auto____117441 = cljs.core.next.call(null,G__117424__117440);

if(cljs.core.truth_(temp__3698__auto____117441))
{var G__117424__117442 = temp__3698__auto____117441;

{
var G__117446 = cljs.core.first.call(null,G__117424__117442);
var G__117447 = G__117424__117442;
G__117427__117434 = G__117446;
G__117424__117435 = G__117447;
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
var dom_attr__117444 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__117443.call(this,elem,k);
case  3 :
return dom_attr__117444.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__117448__117449 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__117448__117449))
{var c__117450 = cljs.core.first.call(null,G__117448__117449);
var G__117448__117451 = G__117448__117449;

while(true){
var child__117452 = (cljs.core.truth_((c__117450 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__117450))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__117450))?goog.dom.createTextNode.call(null,c__117450):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__117450))?crate.core.elem_factory.call(null,c__117450):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__117450))?as_content.call(null,parent,c__117450):(cljs.core.truth_(c__117450.nodeName)?c__117450:null))))));

if(cljs.core.truth_(child__117452))
{goog.dom.appendChild.call(null,parent,child__117452);
} else
{}
var temp__3698__auto____117453 = cljs.core.next.call(null,G__117448__117451);

if(cljs.core.truth_(temp__3698__auto____117453))
{var G__117448__117454 = temp__3698__auto____117453;

{
var G__117455 = cljs.core.first.call(null,G__117448__117454);
var G__117456 = G__117448__117454;
c__117450 = G__117455;
G__117448__117451 = G__117456;
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
crate.core.normalize_element = (function normalize_element(p__117458){
var vec__117459__117460 = p__117458;
var tag__117461 = cljs.core.nth.call(null,vec__117459__117460,0,null);
var content__117462 = cljs.core.nthnext.call(null,vec__117459__117460,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____117463 = cljs.core.keyword_QMARK_.call(null,tag__117461);

if(cljs.core.truth_(or__3548__auto____117463))
{return or__3548__auto____117463;
} else
{var or__3548__auto____117464 = cljs.core.symbol_QMARK_.call(null,tag__117461);

if(cljs.core.truth_(or__3548__auto____117464))
{return or__3548__auto____117464;
} else
{return cljs.core.string_QMARK_.call(null,tag__117461);
}
}
})())))
{throw cljs.core.str.call(null,tag__117461," is not a valid tag name.");
} else
{}
var vec__117465__117467 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__117461));
var ___117468 = cljs.core.nth.call(null,vec__117465__117467,0,null);
var tag__117469 = cljs.core.nth.call(null,vec__117465__117467,1,null);
var id__117470 = cljs.core.nth.call(null,vec__117465__117467,2,null);
var class$__117471 = cljs.core.nth.call(null,vec__117465__117467,3,null);
var vec__117466__117478 = (function (){var vec__117472__117473 = clojure.string.split.call(null,tag__117469,/:/);
var nsp__117474 = cljs.core.nth.call(null,vec__117472__117473,0,null);
var t__117475 = cljs.core.nth.call(null,vec__117472__117473,1,null);
var ns_xmlns__117476 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__117474));

if(cljs.core.truth_(t__117475))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____117477 = ns_xmlns__117476;

if(cljs.core.truth_(or__3548__auto____117477))
{return or__3548__auto____117477;
} else
{return nsp__117474;
}
})(),t__117475]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__117474]);
}
})();
var nsp__117479 = cljs.core.nth.call(null,vec__117466__117478,0,null);
var tag__117480 = cljs.core.nth.call(null,vec__117466__117478,1,null);
var tag_attrs__117482 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__117457_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__117457_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____117481 = id__117470;

if(cljs.core.truth_(or__3548__auto____117481))
{return or__3548__auto____117481;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__117471)?clojure.string.replace.call(null,class$__117471,/\./," "):null)})));
var map_attrs__117483 = cljs.core.first.call(null,content__117462);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__117483)))
{return cljs.core.PersistentVector.fromArray([nsp__117479,tag__117480,cljs.core.merge.call(null,tag_attrs__117482,map_attrs__117483),cljs.core.next.call(null,content__117462)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__117479,tag__117480,tag_attrs__117482,content__117462]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__117484 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__117484)))
{crate.core.dom_attr.call(null,elem,attrs__117484);
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
var vec__117485__117486 = crate.core.normalize_element.call(null,tag_def);
var nsp__117487 = cljs.core.nth.call(null,vec__117485__117486,0,null);
var tag__117488 = cljs.core.nth.call(null,vec__117485__117486,1,null);
var attrs__117489 = cljs.core.nth.call(null,vec__117485__117486,2,null);
var content__117490 = cljs.core.nth.call(null,vec__117485__117486,3,null);
var elem__117491 = crate.core.create_elem.call(null,nsp__117487,tag__117488);

crate.core.dom_attr.call(null,elem__117491,attrs__117489);
crate.core.as_content.call(null,elem__117491,content__117490);
return elem__117491;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__117492 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__117492)))
{return res__117492;
} else
{return cljs.core.first.call(null,res__117492);
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
html.cljs$lang$applyTo = (function (arglist__117493){
var tags = cljs.core.seq( arglist__117493 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
