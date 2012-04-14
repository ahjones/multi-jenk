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
var join__166752 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__166753 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__166752.call(this,separator);
case  2 :
return join__166753.call(this,separator,coll);
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
var split__166761 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__166762 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__166755 = s;
var limit__166756 = limit;
var parts__166757 = cljs.core.PersistentVector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__166756,1)))
{return cljs.core.conj.call(null,parts__166757,s__166755);
} else
{var temp__3695__auto____166758 = cljs.core.re_find.call(null,re,s__166755);

if(cljs.core.truth_(temp__3695__auto____166758))
{var m__166759 = temp__3695__auto____166758;

var index__166760 = s__166755.indexOf(m__166759);

{
var G__166764 = s__166755.substring((index__166760 + cljs.core.count.call(null,m__166759)));
var G__166765 = (limit__166756 - 1);
var G__166766 = cljs.core.conj.call(null,parts__166757,s__166755.substring(0,index__166760));
s__166755 = G__166764;
limit__166756 = G__166765;
parts__166757 = G__166766;
continue;
}
} else
{return cljs.core.conj.call(null,parts__166757,s__166755);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__166761.call(this,s,re);
case  3 :
return split__166762.call(this,s,re,limit);
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
var index__166767 = s.length;

while(true){
if(cljs.core.truth_((index__166767 === 0)))
{return "";
} else
{var ch__166768 = cljs.core.get.call(null,s,(index__166767 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____166769 = cljs.core._EQ_.call(null,ch__166768,"\n");

if(cljs.core.truth_(or__3548__auto____166769))
{return or__3548__auto____166769;
} else
{return cljs.core._EQ_.call(null,ch__166768,"\r");
}
})()))
{{
var G__166770 = (index__166767 - 1);
index__166767 = G__166770;
continue;
}
} else
{return s.substring(0,index__166767);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__166771 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____166772 = cljs.core.not.call(null,s__166771);

if(cljs.core.truth_(or__3548__auto____166772))
{return or__3548__auto____166772;
} else
{var or__3548__auto____166773 = cljs.core._EQ_.call(null,"",s__166771);

if(cljs.core.truth_(or__3548__auto____166773))
{return or__3548__auto____166773;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__166771);
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
var buffer__166774 = (new goog.string.StringBuffer());
var length__166775 = s.length;

var index__166776 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__166775,index__166776)))
{return buffer__166774.toString();
} else
{var ch__166777 = s.charAt(index__166776);

var temp__3695__auto____166778 = cljs.core.get.call(null,cmap,ch__166777);

if(cljs.core.truth_(temp__3695__auto____166778))
{var replacement__166779 = temp__3695__auto____166778;

buffer__166774.append(cljs.core.str.call(null,replacement__166779));
} else
{buffer__166774.append(ch__166777);
}
{
var G__166780 = (index__166776 + 1);
index__166776 = G__166780;
continue;
}
}
break;
}
});
