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
var join__246116 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__246117 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__246116.call(this,separator);
case  2 :
return join__246117.call(this,separator,coll);
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
var split__246125 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__246126 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__246119 = s;
var limit__246120 = limit;
var parts__246121 = cljs.core.PersistentVector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__246120,1)))
{return cljs.core.conj.call(null,parts__246121,s__246119);
} else
{var temp__3695__auto____246122 = cljs.core.re_find.call(null,re,s__246119);

if(cljs.core.truth_(temp__3695__auto____246122))
{var m__246123 = temp__3695__auto____246122;

var index__246124 = s__246119.indexOf(m__246123);

{
var G__246128 = s__246119.substring((index__246124 + cljs.core.count.call(null,m__246123)));
var G__246129 = (limit__246120 - 1);
var G__246130 = cljs.core.conj.call(null,parts__246121,s__246119.substring(0,index__246124));
s__246119 = G__246128;
limit__246120 = G__246129;
parts__246121 = G__246130;
continue;
}
} else
{return cljs.core.conj.call(null,parts__246121,s__246119);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__246125.call(this,s,re);
case  3 :
return split__246126.call(this,s,re,limit);
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
var index__246131 = s.length;

while(true){
if(cljs.core.truth_((index__246131 === 0)))
{return "";
} else
{var ch__246132 = cljs.core.get.call(null,s,(index__246131 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____246133 = cljs.core._EQ_.call(null,ch__246132,"\n");

if(cljs.core.truth_(or__3548__auto____246133))
{return or__3548__auto____246133;
} else
{return cljs.core._EQ_.call(null,ch__246132,"\r");
}
})()))
{{
var G__246134 = (index__246131 - 1);
index__246131 = G__246134;
continue;
}
} else
{return s.substring(0,index__246131);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__246135 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____246136 = cljs.core.not.call(null,s__246135);

if(cljs.core.truth_(or__3548__auto____246136))
{return or__3548__auto____246136;
} else
{var or__3548__auto____246137 = cljs.core._EQ_.call(null,"",s__246135);

if(cljs.core.truth_(or__3548__auto____246137))
{return or__3548__auto____246137;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__246135);
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
var buffer__246138 = (new goog.string.StringBuffer());
var length__246139 = s.length;

var index__246140 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__246139,index__246140)))
{return buffer__246138.toString();
} else
{var ch__246141 = s.charAt(index__246140);

var temp__3695__auto____246142 = cljs.core.get.call(null,cmap,ch__246141);

if(cljs.core.truth_(temp__3695__auto____246142))
{var replacement__246143 = temp__3695__auto____246142;

buffer__246138.append(cljs.core.str.call(null,replacement__246143));
} else
{buffer__246138.append(ch__246141);
}
{
var G__246144 = (index__246140 + 1);
index__246140 = G__246144;
continue;
}
}
break;
}
});
