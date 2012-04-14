goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____328011 = reader;

if(cljs.core.truth_(and__3546__auto____328011))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____328011;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____328012 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____328012))
{return or__3548__auto____328012;
} else
{var or__3548__auto____328013 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____328013))
{return or__3548__auto____328013;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____328014 = reader;

if(cljs.core.truth_(and__3546__auto____328014))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____328014;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____328015 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____328015))
{return or__3548__auto____328015;
} else
{var or__3548__auto____328016 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____328016))
{return or__3548__auto____328016;
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
var this__328017 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__328017.buffer_atom))))
{var idx__328018 = cljs.core.deref.call(null,this__328017.index_atom);

cljs.core.swap_BANG_.call(null,this__328017.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__328017.s,idx__328018);
} else
{var buf__328019 = cljs.core.deref.call(null,this__328017.buffer_atom);

cljs.core.swap_BANG_.call(null,this__328017.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__328019);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__328020 = this;
return cljs.core.swap_BANG_.call(null,this__328020.buffer_atom,(function (p1__328010_SHARP_){
return cljs.core.cons.call(null,ch,p1__328010_SHARP_);
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
var or__3548__auto____328021 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____328021))
{return or__3548__auto____328021;
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
var or__3548__auto____328022 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____328022))
{return or__3548__auto____328022;
} else
{var and__3546__auto____328024 = (function (){var or__3548__auto____328023 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____328023))
{return or__3548__auto____328023;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____328024))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__328025 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__328025);
return next_ch__328025;
})());
} else
{return and__3546__auto____328024;
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
reader_error.cljs$lang$applyTo = (function (arglist__328026){
var rdr = cljs.core.first(arglist__328026);
var msg = cljs.core.rest(arglist__328026);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____328027 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____328027))
{var and__3546__auto____328028 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____328028))
{var and__3546__auto____328029 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____328029))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____328029;
}
} else
{return and__3546__auto____328028;
}
} else
{return and__3546__auto____328027;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__328030 = (new goog.string.StringBuffer(initch));
var ch__328031 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____328032 = (ch__328031 === null);

if(cljs.core.truth_(or__3548__auto____328032))
{return or__3548__auto____328032;
} else
{var or__3548__auto____328033 = cljs.reader.whitespace_QMARK_.call(null,ch__328031);

if(cljs.core.truth_(or__3548__auto____328033))
{return or__3548__auto____328033;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__328031);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__328031);
return sb__328030.toString();
} else
{{
var G__328034 = (function (){sb__328030.append(ch__328031);
return sb__328030;
})();
var G__328035 = cljs.reader.read_char.call(null,rdr);
sb__328030 = G__328034;
ch__328031 = G__328035;
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
var ch__328036 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____328037 = cljs.core._EQ_.call(null,ch__328036,"n");

if(cljs.core.truth_(or__3548__auto____328037))
{return or__3548__auto____328037;
} else
{var or__3548__auto____328038 = cljs.core._EQ_.call(null,ch__328036,"r");

if(cljs.core.truth_(or__3548__auto____328038))
{return or__3548__auto____328038;
} else
{return (ch__328036 === null);
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
var groups__328039 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__328040 = cljs.core.nth.call(null,groups__328039,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____328041 = (void 0 === group3__328040);

if(cljs.core.truth_(or__3548__auto____328041))
{return or__3548__auto____328041;
} else
{return (group3__328040.length < 1);
}
})())))
{return 0;
} else
{var negate__328043 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__328039,1)))?-1:1);
var vec__328042__328044 = (cljs.core.truth_(cljs.core.nth.call(null,groups__328039,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__328039,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__328039,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__328039,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__328039,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__328039,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__328039,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__328039,7),parseInt.call(null,cljs.core.nth.call(null,groups__328039,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__328045 = cljs.core.nth.call(null,vec__328042__328044,0,null);
var radix__328046 = cljs.core.nth.call(null,vec__328042__328044,1,null);

if(cljs.core.truth_((n__328045 === null)))
{return null;
} else
{return (negate__328043 * parseInt.call(null,n__328045,radix__328046));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__328047 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__328048 = cljs.core.nth.call(null,groups__328047,1);
var denominator__328049 = cljs.core.nth.call(null,groups__328047,2);

return (parseInt.call(null,numinator__328048) / parseInt.call(null,denominator__328049));
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
var ch__328050 = cljs.reader.read_char.call(null,reader);
var mapresult__328051 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__328050);

if(cljs.core.truth_(mapresult__328051))
{return mapresult__328051;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____328052 = cljs.core._EQ_.call(null,"u",ch__328050);

if(cljs.core.truth_(or__3548__auto____328052))
{return or__3548__auto____328052;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__328050);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__328050);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__328050);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__328053 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__328053)))
{{
var G__328054 = cljs.reader.read_char.call(null,rdr);
ch__328053 = G__328054;
continue;
}
} else
{return ch__328053;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__328055 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__328056 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__328056))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__328056)))
{return a__328055;
} else
{var temp__3695__auto____328057 = cljs.core.get.call(null,cljs.reader.macros,ch__328056);

if(cljs.core.truth_(temp__3695__auto____328057))
{var macrofn__328058 = temp__3695__auto____328057;

var mret__328059 = macrofn__328058.call(null,rdr,ch__328056);

{
var G__328061 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__328059,rdr))?a__328055:cljs.core.conj.call(null,a__328055,mret__328059));
a__328055 = G__328061;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__328056);
var o__328060 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__328062 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__328060,rdr))?a__328055:cljs.core.conj.call(null,a__328055,o__328060));
a__328055 = G__328062;
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
var ch__328063 = cljs.reader.read_char.call(null,rdr);
var dm__328064 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__328063);

if(cljs.core.truth_(dm__328064))
{return dm__328064.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__328063);
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
var l__328065 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__328065))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__328065);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__328066 = (new goog.string.StringBuffer(initch));
var ch__328067 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____328068 = (ch__328067 === null);

if(cljs.core.truth_(or__3548__auto____328068))
{return or__3548__auto____328068;
} else
{var or__3548__auto____328069 = cljs.reader.whitespace_QMARK_.call(null,ch__328067);

if(cljs.core.truth_(or__3548__auto____328069))
{return or__3548__auto____328069;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__328067);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__328067);
var s__328070 = buffer__328066.toString();

var or__3548__auto____328071 = cljs.reader.match_number.call(null,s__328070);

if(cljs.core.truth_(or__3548__auto____328071))
{return or__3548__auto____328071;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__328070,"]");
}
} else
{{
var G__328072 = (function (){buffer__328066.append(ch__328067);
return buffer__328066;
})();
var G__328073 = cljs.reader.read_char.call(null,reader);
buffer__328066 = G__328072;
ch__328067 = G__328073;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__328074 = (new goog.string.StringBuffer());
var ch__328075 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__328075 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__328075)))
{{
var G__328076 = (function (){buffer__328074.append(cljs.reader.escape_char.call(null,buffer__328074,reader));
return buffer__328074;
})();
var G__328077 = cljs.reader.read_char.call(null,reader);
buffer__328074 = G__328076;
ch__328075 = G__328077;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__328075)))
{return buffer__328074.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__328078 = (function (){buffer__328074.append(ch__328075);
return buffer__328074;
})();
var G__328079 = cljs.reader.read_char.call(null,reader);
buffer__328074 = G__328078;
ch__328075 = G__328079;
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
var token__328080 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__328080,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__328080,0,token__328080.indexOf("/")),cljs.core.subs.call(null,token__328080,(token__328080.indexOf("/") + 1),token__328080.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__328080,cljs.core.symbol.call(null,token__328080));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__328082 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__328081__328083 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__328082);
var token__328084 = cljs.core.nth.call(null,vec__328081__328083,0,null);
var ns__328085 = cljs.core.nth.call(null,vec__328081__328083,1,null);
var name__328086 = cljs.core.nth.call(null,vec__328081__328083,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____328088 = (function (){var and__3546__auto____328087 = cljs.core.not.call(null,(void 0 === ns__328085));

if(cljs.core.truth_(and__3546__auto____328087))
{return (ns__328085.substring((ns__328085.length - 2),ns__328085.length) === ":/");
} else
{return and__3546__auto____328087;
}
})();

if(cljs.core.truth_(or__3548__auto____328088))
{return or__3548__auto____328088;
} else
{var or__3548__auto____328089 = ((name__328086[(name__328086.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____328089))
{return or__3548__auto____328089;
} else
{return cljs.core.not.call(null,(token__328084.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__328084);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__328085.substring(0,ns__328085.indexOf("/")),name__328086);
} else
{return cljs.core.keyword.call(null,token__328084);
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
var m__328090 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__328090)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__328091 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____328092 = o__328091;

if(cljs.core.truth_((function (){var and__3546__auto____328093 = x__451__auto____328092;

if(cljs.core.truth_(and__3546__auto____328093))
{var and__3546__auto____328094 = x__451__auto____328092.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____328094))
{return cljs.core.not.call(null,x__451__auto____328092.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____328094;
}
} else
{return and__3546__auto____328093;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____328092);
}
})()))
{return cljs.core.with_meta.call(null,o__328091,cljs.core.merge.call(null,cljs.core.meta.call(null,o__328091),m__328090));
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
var ch__328095 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__328095 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__328095)))
{{
var G__328097 = reader;
var G__328098 = eof_is_error;
var G__328099 = sentinel;
var G__328100 = is_recursive;
reader = G__328097;
eof_is_error = G__328098;
sentinel = G__328099;
is_recursive = G__328100;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__328095)))
{{
var G__328101 = cljs.reader.read_comment.call(null,reader,ch__328095);
var G__328102 = eof_is_error;
var G__328103 = sentinel;
var G__328104 = is_recursive;
reader = G__328101;
eof_is_error = G__328102;
sentinel = G__328103;
is_recursive = G__328104;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__328096 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__328095))?cljs.reader.macros.call(null,ch__328095).call(null,reader,ch__328095):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__328095))?cljs.reader.read_number.call(null,reader,ch__328095):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__328095):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__328096,reader)))
{{
var G__328105 = reader;
var G__328106 = eof_is_error;
var G__328107 = sentinel;
var G__328108 = is_recursive;
reader = G__328105;
eof_is_error = G__328106;
sentinel = G__328107;
is_recursive = G__328108;
continue;
}
} else
{return res__328096;
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
var r__328109 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__328109,true,null,false);
});
