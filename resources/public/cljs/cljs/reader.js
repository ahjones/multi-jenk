goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____245947 = reader;

if(cljs.core.truth_(and__3546__auto____245947))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____245947;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____245948 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____245948))
{return or__3548__auto____245948;
} else
{var or__3548__auto____245949 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____245949))
{return or__3548__auto____245949;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____245950 = reader;

if(cljs.core.truth_(and__3546__auto____245950))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____245950;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____245951 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____245951))
{return or__3548__auto____245951;
} else
{var or__3548__auto____245952 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____245952))
{return or__3548__auto____245952;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__245953 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__245953.buffer_atom))))
{var idx__245954 = cljs.core.deref.call(null,this__245953.index_atom);

cljs.core.swap_BANG_.call(null,this__245953.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__245953.s,idx__245954);
} else
{var buf__245955 = cljs.core.deref.call(null,this__245953.buffer_atom);

cljs.core.swap_BANG_.call(null,this__245953.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__245955);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__245956 = this;
return cljs.core.swap_BANG_.call(null,this__245956.buffer_atom,(function (p1__245946_SHARP_){
return cljs.core.cons.call(null,ch,p1__245946_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____245957 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____245957))
{return or__3548__auto____245957;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____245958 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____245958))
{return or__3548__auto____245958;
} else
{var and__3546__auto____245960 = (function (){var or__3548__auto____245959 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____245959))
{return or__3548__auto____245959;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____245960))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__245961 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__245961);
return next_ch__245961;
})());
} else
{return and__3546__auto____245960;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__245962){
var rdr = cljs.core.first(arglist__245962);
var msg = cljs.core.rest(arglist__245962);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____245963 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____245963))
{var and__3546__auto____245964 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____245964))
{var and__3546__auto____245965 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____245965))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____245965;
}
} else
{return and__3546__auto____245964;
}
} else
{return and__3546__auto____245963;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__245966 = (new goog.string.StringBuffer(initch));
var ch__245967 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____245968 = (ch__245967 === null);

if(cljs.core.truth_(or__3548__auto____245968))
{return or__3548__auto____245968;
} else
{var or__3548__auto____245969 = cljs.reader.whitespace_QMARK_.call(null,ch__245967);

if(cljs.core.truth_(or__3548__auto____245969))
{return or__3548__auto____245969;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__245967);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__245967);
return sb__245966.toString();
} else
{{
var G__245970 = (function (){sb__245966.append(ch__245967);
return sb__245966;
})();
var G__245971 = cljs.reader.read_char.call(null,rdr);
sb__245966 = G__245970;
ch__245967 = G__245971;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__245972 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____245973 = cljs.core._EQ_.call(null,ch__245972,"n");

if(cljs.core.truth_(or__3548__auto____245973))
{return or__3548__auto____245973;
} else
{var or__3548__auto____245974 = cljs.core._EQ_.call(null,ch__245972,"r");

if(cljs.core.truth_(or__3548__auto____245974))
{return or__3548__auto____245974;
} else
{return (ch__245972 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__245975 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__245976 = cljs.core.nth.call(null,groups__245975,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____245977 = (void 0 === group3__245976);

if(cljs.core.truth_(or__3548__auto____245977))
{return or__3548__auto____245977;
} else
{return (group3__245976.length < 1);
}
})())))
{return 0;
} else
{var negate__245979 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__245975,1)))?-1:1);
var vec__245978__245980 = (cljs.core.truth_(cljs.core.nth.call(null,groups__245975,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__245975,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__245975,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__245975,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__245975,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__245975,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__245975,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__245975,7),parseInt.call(null,cljs.core.nth.call(null,groups__245975,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__245981 = cljs.core.nth.call(null,vec__245978__245980,0,null);
var radix__245982 = cljs.core.nth.call(null,vec__245978__245980,1,null);

if(cljs.core.truth_((n__245981 === null)))
{return null;
} else
{return (negate__245979 * parseInt.call(null,n__245981,radix__245982));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__245983 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__245984 = cljs.core.nth.call(null,groups__245983,1);
var denominator__245985 = cljs.core.nth.call(null,groups__245983,2);

return (parseInt.call(null,numinator__245984) / parseInt.call(null,denominator__245985));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__245986 = cljs.reader.read_char.call(null,reader);
var mapresult__245987 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__245986);

if(cljs.core.truth_(mapresult__245987))
{return mapresult__245987;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____245988 = cljs.core._EQ_.call(null,"u",ch__245986);

if(cljs.core.truth_(or__3548__auto____245988))
{return or__3548__auto____245988;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__245986);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__245986);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__245986);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__245989 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__245989)))
{{
var G__245990 = cljs.reader.read_char.call(null,rdr);
ch__245989 = G__245990;
continue;
}
} else
{return ch__245989;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__245991 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__245992 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__245992))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__245992)))
{return a__245991;
} else
{var temp__3695__auto____245993 = cljs.core.get.call(null,cljs.reader.macros,ch__245992);

if(cljs.core.truth_(temp__3695__auto____245993))
{var macrofn__245994 = temp__3695__auto____245993;

var mret__245995 = macrofn__245994.call(null,rdr,ch__245992);

{
var G__245997 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__245995,rdr))?a__245991:cljs.core.conj.call(null,a__245991,mret__245995));
a__245991 = G__245997;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__245992);
var o__245996 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__245998 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__245996,rdr))?a__245991:cljs.core.conj.call(null,a__245991,o__245996));
a__245991 = G__245998;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__245999 = cljs.reader.read_char.call(null,rdr);
var dm__246000 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__245999);

if(cljs.core.truth_(dm__246000))
{return dm__246000.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__245999);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__246001 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__246001))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__246001);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__246002 = (new goog.string.StringBuffer(initch));
var ch__246003 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____246004 = (ch__246003 === null);

if(cljs.core.truth_(or__3548__auto____246004))
{return or__3548__auto____246004;
} else
{var or__3548__auto____246005 = cljs.reader.whitespace_QMARK_.call(null,ch__246003);

if(cljs.core.truth_(or__3548__auto____246005))
{return or__3548__auto____246005;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__246003);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__246003);
var s__246006 = buffer__246002.toString();

var or__3548__auto____246007 = cljs.reader.match_number.call(null,s__246006);

if(cljs.core.truth_(or__3548__auto____246007))
{return or__3548__auto____246007;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__246006,"]");
}
} else
{{
var G__246008 = (function (){buffer__246002.append(ch__246003);
return buffer__246002;
})();
var G__246009 = cljs.reader.read_char.call(null,reader);
buffer__246002 = G__246008;
ch__246003 = G__246009;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__246010 = (new goog.string.StringBuffer());
var ch__246011 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__246011 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__246011)))
{{
var G__246012 = (function (){buffer__246010.append(cljs.reader.escape_char.call(null,buffer__246010,reader));
return buffer__246010;
})();
var G__246013 = cljs.reader.read_char.call(null,reader);
buffer__246010 = G__246012;
ch__246011 = G__246013;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__246011)))
{return buffer__246010.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__246014 = (function (){buffer__246010.append(ch__246011);
return buffer__246010;
})();
var G__246015 = cljs.reader.read_char.call(null,reader);
buffer__246010 = G__246014;
ch__246011 = G__246015;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__246016 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__246016,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__246016,0,token__246016.indexOf("/")),cljs.core.subs.call(null,token__246016,(token__246016.indexOf("/") + 1),token__246016.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__246016,cljs.core.symbol.call(null,token__246016));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__246018 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__246017__246019 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__246018);
var token__246020 = cljs.core.nth.call(null,vec__246017__246019,0,null);
var ns__246021 = cljs.core.nth.call(null,vec__246017__246019,1,null);
var name__246022 = cljs.core.nth.call(null,vec__246017__246019,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____246024 = (function (){var and__3546__auto____246023 = cljs.core.not.call(null,(void 0 === ns__246021));

if(cljs.core.truth_(and__3546__auto____246023))
{return (ns__246021.substring((ns__246021.length - 2),ns__246021.length) === ":/");
} else
{return and__3546__auto____246023;
}
})();

if(cljs.core.truth_(or__3548__auto____246024))
{return or__3548__auto____246024;
} else
{var or__3548__auto____246025 = ((name__246022[(name__246022.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____246025))
{return or__3548__auto____246025;
} else
{return cljs.core.not.call(null,(token__246020.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__246020);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__246021.substring(0,ns__246021.indexOf("/")),name__246022);
} else
{return cljs.core.keyword.call(null,token__246020);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__246026 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__246026)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__246027 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____246028 = o__246027;

if(cljs.core.truth_((function (){var and__3546__auto____246029 = x__451__auto____246028;

if(cljs.core.truth_(and__3546__auto____246029))
{var and__3546__auto____246030 = x__451__auto____246028.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____246030))
{return cljs.core.not.call(null,x__451__auto____246028.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____246030;
}
} else
{return and__3546__auto____246029;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____246028);
}
})()))
{return cljs.core.with_meta.call(null,o__246027,cljs.core.merge.call(null,cljs.core.meta.call(null,o__246027),m__246026));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__246031 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__246031 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__246031)))
{{
var G__246033 = reader;
var G__246034 = eof_is_error;
var G__246035 = sentinel;
var G__246036 = is_recursive;
reader = G__246033;
eof_is_error = G__246034;
sentinel = G__246035;
is_recursive = G__246036;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__246031)))
{{
var G__246037 = cljs.reader.read_comment.call(null,reader,ch__246031);
var G__246038 = eof_is_error;
var G__246039 = sentinel;
var G__246040 = is_recursive;
reader = G__246037;
eof_is_error = G__246038;
sentinel = G__246039;
is_recursive = G__246040;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__246032 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__246031))?cljs.reader.macros.call(null,ch__246031).call(null,reader,ch__246031):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__246031))?cljs.reader.read_number.call(null,reader,ch__246031):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__246031):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__246032,reader)))
{{
var G__246041 = reader;
var G__246042 = eof_is_error;
var G__246043 = sentinel;
var G__246044 = is_recursive;
reader = G__246041;
eof_is_error = G__246042;
sentinel = G__246043;
is_recursive = G__246044;
continue;
}
} else
{return res__246032;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__246045 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__246045,true,null,false);
});
