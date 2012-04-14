goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__106771 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__106752__106753 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__106752__106753))
{var G__106755__106757 = cljs.core.first.call(null,G__106752__106753);
var vec__106756__106758 = G__106755__106757;
var k__106759 = cljs.core.nth.call(null,vec__106756__106758,0,null);
var v__106760 = cljs.core.nth.call(null,vec__106756__106758,1,null);
var G__106752__106761 = G__106752__106753;

var G__106755__106762 = G__106755__106757;
var G__106752__106763 = G__106752__106761;

while(true){
var vec__106764__106765 = G__106755__106762;
var k__106766 = cljs.core.nth.call(null,vec__106764__106765,0,null);
var v__106767 = cljs.core.nth.call(null,vec__106764__106765,1,null);
var G__106752__106768 = G__106752__106763;

dom_attr.call(null,elem,k__106766,v__106767);
var temp__3698__auto____106769 = cljs.core.next.call(null,G__106752__106768);

if(cljs.core.truth_(temp__3698__auto____106769))
{var G__106752__106770 = temp__3698__auto____106769;

{
var G__106774 = cljs.core.first.call(null,G__106752__106770);
var G__106775 = G__106752__106770;
G__106755__106762 = G__106774;
G__106752__106763 = G__106775;
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
var dom_attr__106772 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__106771.call(this,elem,k);
case  3 :
return dom_attr__106772.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__106776__106777 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__106776__106777))
{var c__106778 = cljs.core.first.call(null,G__106776__106777);
var G__106776__106779 = G__106776__106777;

while(true){
var child__106780 = (cljs.core.truth_((c__106778 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__106778))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__106778))?goog.dom.createTextNode.call(null,c__106778):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__106778))?crate.core.elem_factory.call(null,c__106778):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__106778))?as_content.call(null,parent,c__106778):(cljs.core.truth_(c__106778.nodeName)?c__106778:null))))));

if(cljs.core.truth_(child__106780))
{goog.dom.appendChild.call(null,parent,child__106780);
} else
{}
var temp__3698__auto____106781 = cljs.core.next.call(null,G__106776__106779);

if(cljs.core.truth_(temp__3698__auto____106781))
{var G__106776__106782 = temp__3698__auto____106781;

{
var G__106783 = cljs.core.first.call(null,G__106776__106782);
var G__106784 = G__106776__106782;
c__106778 = G__106783;
G__106776__106779 = G__106784;
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
crate.core.normalize_element = (function normalize_element(p__106786){
var vec__106787__106788 = p__106786;
var tag__106789 = cljs.core.nth.call(null,vec__106787__106788,0,null);
var content__106790 = cljs.core.nthnext.call(null,vec__106787__106788,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____106791 = cljs.core.keyword_QMARK_.call(null,tag__106789);

if(cljs.core.truth_(or__3548__auto____106791))
{return or__3548__auto____106791;
} else
{var or__3548__auto____106792 = cljs.core.symbol_QMARK_.call(null,tag__106789);

if(cljs.core.truth_(or__3548__auto____106792))
{return or__3548__auto____106792;
} else
{return cljs.core.string_QMARK_.call(null,tag__106789);
}
}
})())))
{throw cljs.core.str.call(null,tag__106789," is not a valid tag name.");
} else
{}
var vec__106793__106795 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__106789));
var ___106796 = cljs.core.nth.call(null,vec__106793__106795,0,null);
var tag__106797 = cljs.core.nth.call(null,vec__106793__106795,1,null);
var id__106798 = cljs.core.nth.call(null,vec__106793__106795,2,null);
var class$__106799 = cljs.core.nth.call(null,vec__106793__106795,3,null);
var vec__106794__106806 = (function (){var vec__106800__106801 = clojure.string.split.call(null,tag__106797,/:/);
var nsp__106802 = cljs.core.nth.call(null,vec__106800__106801,0,null);
var t__106803 = cljs.core.nth.call(null,vec__106800__106801,1,null);
var ns_xmlns__106804 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__106802));

if(cljs.core.truth_(t__106803))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____106805 = ns_xmlns__106804;

if(cljs.core.truth_(or__3548__auto____106805))
{return or__3548__auto____106805;
} else
{return nsp__106802;
}
})(),t__106803]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__106802]);
}
})();
var nsp__106807 = cljs.core.nth.call(null,vec__106794__106806,0,null);
var tag__106808 = cljs.core.nth.call(null,vec__106794__106806,1,null);
var tag_attrs__106810 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__106785_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__106785_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____106809 = id__106798;

if(cljs.core.truth_(or__3548__auto____106809))
{return or__3548__auto____106809;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__106799)?clojure.string.replace.call(null,class$__106799,/\./," "):null)})));
var map_attrs__106811 = cljs.core.first.call(null,content__106790);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__106811)))
{return cljs.core.PersistentVector.fromArray([nsp__106807,tag__106808,cljs.core.merge.call(null,tag_attrs__106810,map_attrs__106811),cljs.core.next.call(null,content__106790)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__106807,tag__106808,tag_attrs__106810,content__106790]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__106812 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__106812)))
{crate.core.dom_attr.call(null,elem,attrs__106812);
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
var vec__106813__106814 = crate.core.normalize_element.call(null,tag_def);
var nsp__106815 = cljs.core.nth.call(null,vec__106813__106814,0,null);
var tag__106816 = cljs.core.nth.call(null,vec__106813__106814,1,null);
var attrs__106817 = cljs.core.nth.call(null,vec__106813__106814,2,null);
var content__106818 = cljs.core.nth.call(null,vec__106813__106814,3,null);
var elem__106819 = crate.core.create_elem.call(null,nsp__106815,tag__106816);

crate.core.dom_attr.call(null,elem__106819,attrs__106817);
crate.core.as_content.call(null,elem__106819,content__106818);
return elem__106819;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__106820 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__106820)))
{return res__106820;
} else
{return cljs.core.first.call(null,res__106820);
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
html.cljs$lang$applyTo = (function (arglist__106821){
var tags = cljs.core.seq( arglist__106821 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
