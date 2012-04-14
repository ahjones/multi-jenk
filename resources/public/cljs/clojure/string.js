goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__175284 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__175285 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__175284.call(this,separator);
case  2 :
return join__175285.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__175293 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__175294 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__175287 = s;
var limit__175288 = limit;
var parts__175289 = cljs.core.PersistentVector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__175288,1)))
{return cljs.core.conj.call(null,parts__175289,s__175287);
} else
{var temp__3695__auto____175290 = cljs.core.re_find.call(null,re,s__175287);

if(cljs.core.truth_(temp__3695__auto____175290))
{var m__175291 = temp__3695__auto____175290;

var index__175292 = s__175287.indexOf(m__175291);

{
var G__175296 = s__175287.substring((index__175292 + cljs.core.count.call(null,m__175291)));
var G__175297 = (limit__175288 - 1);
var G__175298 = cljs.core.conj.call(null,parts__175289,s__175287.substring(0,index__175292));
s__175287 = G__175296;
limit__175288 = G__175297;
parts__175289 = G__175298;
continue;
}
} else
{return cljs.core.conj.call(null,parts__175289,s__175287);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__175293.call(this,s,re);
case  3 :
return split__175294.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__175299 = s.length;

while(true){
if(cljs.core.truth_((index__175299 === 0)))
{return "";
} else
{var ch__175300 = cljs.core.get.call(null,s,(index__175299 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____175301 = cljs.core._EQ_.call(null,ch__175300,"\n");

if(cljs.core.truth_(or__3548__auto____175301))
{return or__3548__auto____175301;
} else
{return cljs.core._EQ_.call(null,ch__175300,"\r");
}
})()))
{{
var G__175302 = (index__175299 - 1);
index__175299 = G__175302;
continue;
}
} else
{return s.substring(0,index__175299);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__175303 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____175304 = cljs.core.not.call(null,s__175303);

if(cljs.core.truth_(or__3548__auto____175304))
{return or__3548__auto____175304;
} else
{var or__3548__auto____175305 = cljs.core._EQ_.call(null,"",s__175303);

if(cljs.core.truth_(or__3548__auto____175305))
{return or__3548__auto____175305;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__175303);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__175306 = (new goog.string.StringBuffer());
var length__175307 = s.length;

var index__175308 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__175307,index__175308)))
{return buffer__175306.toString();
} else
{var ch__175309 = s.charAt(index__175308);

var temp__3695__auto____175310 = cljs.core.get.call(null,cmap,ch__175309);

if(cljs.core.truth_(temp__3695__auto____175310))
{var replacement__175311 = temp__3695__auto____175310;

buffer__175306.append(cljs.core.str.call(null,replacement__175311));
} else
{buffer__175306.append(ch__175309);
}
{
var G__175312 = (index__175308 + 1);
index__175308 = G__175312;
continue;
}
}
break;
}
});
