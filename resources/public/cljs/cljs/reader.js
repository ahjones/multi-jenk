goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____299971 = reader;

if(cljs.core.truth_(and__3546__auto____299971))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____299971;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____299972 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____299972))
{return or__3548__auto____299972;
} else
{var or__3548__auto____299973 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____299973))
{return or__3548__auto____299973;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____299974 = reader;

if(cljs.core.truth_(and__3546__auto____299974))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____299974;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____299975 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____299975))
{return or__3548__auto____299975;
} else
{var or__3548__auto____299976 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____299976))
{return or__3548__auto____299976;
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
var this__299977 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__299977.buffer_atom))))
{var idx__299978 = cljs.core.deref.call(null,this__299977.index_atom);

cljs.core.swap_BANG_.call(null,this__299977.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__299977.s,idx__299978);
} else
{var buf__299979 = cljs.core.deref.call(null,this__299977.buffer_atom);

cljs.core.swap_BANG_.call(null,this__299977.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__299979);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__299980 = this;
return cljs.core.swap_BANG_.call(null,this__299980.buffer_atom,(function (p1__299970_SHARP_){
return cljs.core.cons.call(null,ch,p1__299970_SHARP_);
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
var or__3548__auto____299981 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____299981))
{return or__3548__auto____299981;
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
var or__3548__auto____299982 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____299982))
{return or__3548__auto____299982;
} else
{var and__3546__auto____299984 = (function (){var or__3548__auto____299983 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____299983))
{return or__3548__auto____299983;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____299984))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__299985 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__299985);
return next_ch__299985;
})());
} else
{return and__3546__auto____299984;
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
reader_error.cljs$lang$applyTo = (function (arglist__299986){
var rdr = cljs.core.first(arglist__299986);
var msg = cljs.core.rest(arglist__299986);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____299987 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____299987))
{var and__3546__auto____299988 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____299988))
{var and__3546__auto____299989 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____299989))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____299989;
}
} else
{return and__3546__auto____299988;
}
} else
{return and__3546__auto____299987;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__299990 = (new goog.string.StringBuffer(initch));
var ch__299991 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____299992 = (ch__299991 === null);

if(cljs.core.truth_(or__3548__auto____299992))
{return or__3548__auto____299992;
} else
{var or__3548__auto____299993 = cljs.reader.whitespace_QMARK_.call(null,ch__299991);

if(cljs.core.truth_(or__3548__auto____299993))
{return or__3548__auto____299993;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__299991);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__299991);
return sb__299990.toString();
} else
{{
var G__299994 = (function (){sb__299990.append(ch__299991);
return sb__299990;
})();
var G__299995 = cljs.reader.read_char.call(null,rdr);
sb__299990 = G__299994;
ch__299991 = G__299995;
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
var ch__299996 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____299997 = cljs.core._EQ_.call(null,ch__299996,"n");

if(cljs.core.truth_(or__3548__auto____299997))
{return or__3548__auto____299997;
} else
{var or__3548__auto____299998 = cljs.core._EQ_.call(null,ch__299996,"r");

if(cljs.core.truth_(or__3548__auto____299998))
{return or__3548__auto____299998;
} else
{return (ch__299996 === null);
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
var groups__299999 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__300000 = cljs.core.nth.call(null,groups__299999,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____300001 = (void 0 === group3__300000);

if(cljs.core.truth_(or__3548__auto____300001))
{return or__3548__auto____300001;
} else
{return (group3__300000.length < 1);
}
})())))
{return 0;
} else
{var negate__300003 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__299999,1)))?-1:1);
var vec__300002__300004 = (cljs.core.truth_(cljs.core.nth.call(null,groups__299999,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__299999,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__299999,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__299999,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__299999,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__299999,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__299999,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__299999,7),parseInt.call(null,cljs.core.nth.call(null,groups__299999,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__300005 = cljs.core.nth.call(null,vec__300002__300004,0,null);
var radix__300006 = cljs.core.nth.call(null,vec__300002__300004,1,null);

if(cljs.core.truth_((n__300005 === null)))
{return null;
} else
{return (negate__300003 * parseInt.call(null,n__300005,radix__300006));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__300007 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__300008 = cljs.core.nth.call(null,groups__300007,1);
var denominator__300009 = cljs.core.nth.call(null,groups__300007,2);

return (parseInt.call(null,numinator__300008) / parseInt.call(null,denominator__300009));
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
var ch__300010 = cljs.reader.read_char.call(null,reader);
var mapresult__300011 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__300010);

if(cljs.core.truth_(mapresult__300011))
{return mapresult__300011;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____300012 = cljs.core._EQ_.call(null,"u",ch__300010);

if(cljs.core.truth_(or__3548__auto____300012))
{return or__3548__auto____300012;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__300010);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__300010);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__300010);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__300013 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__300013)))
{{
var G__300014 = cljs.reader.read_char.call(null,rdr);
ch__300013 = G__300014;
continue;
}
} else
{return ch__300013;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__300015 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__300016 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__300016))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__300016)))
{return a__300015;
} else
{var temp__3695__auto____300017 = cljs.core.get.call(null,cljs.reader.macros,ch__300016);

if(cljs.core.truth_(temp__3695__auto____300017))
{var macrofn__300018 = temp__3695__auto____300017;

var mret__300019 = macrofn__300018.call(null,rdr,ch__300016);

{
var G__300021 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__300019,rdr))?a__300015:cljs.core.conj.call(null,a__300015,mret__300019));
a__300015 = G__300021;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__300016);
var o__300020 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__300022 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__300020,rdr))?a__300015:cljs.core.conj.call(null,a__300015,o__300020));
a__300015 = G__300022;
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
var ch__300023 = cljs.reader.read_char.call(null,rdr);
var dm__300024 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__300023);

if(cljs.core.truth_(dm__300024))
{return dm__300024.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__300023);
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
var l__300025 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__300025))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__300025);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__300026 = (new goog.string.StringBuffer(initch));
var ch__300027 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____300028 = (ch__300027 === null);

if(cljs.core.truth_(or__3548__auto____300028))
{return or__3548__auto____300028;
} else
{var or__3548__auto____300029 = cljs.reader.whitespace_QMARK_.call(null,ch__300027);

if(cljs.core.truth_(or__3548__auto____300029))
{return or__3548__auto____300029;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__300027);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__300027);
var s__300030 = buffer__300026.toString();

var or__3548__auto____300031 = cljs.reader.match_number.call(null,s__300030);

if(cljs.core.truth_(or__3548__auto____300031))
{return or__3548__auto____300031;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__300030,"]");
}
} else
{{
var G__300032 = (function (){buffer__300026.append(ch__300027);
return buffer__300026;
})();
var G__300033 = cljs.reader.read_char.call(null,reader);
buffer__300026 = G__300032;
ch__300027 = G__300033;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__300034 = (new goog.string.StringBuffer());
var ch__300035 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__300035 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__300035)))
{{
var G__300036 = (function (){buffer__300034.append(cljs.reader.escape_char.call(null,buffer__300034,reader));
return buffer__300034;
})();
var G__300037 = cljs.reader.read_char.call(null,reader);
buffer__300034 = G__300036;
ch__300035 = G__300037;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__300035)))
{return buffer__300034.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__300038 = (function (){buffer__300034.append(ch__300035);
return buffer__300034;
})();
var G__300039 = cljs.reader.read_char.call(null,reader);
buffer__300034 = G__300038;
ch__300035 = G__300039;
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
var token__300040 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__300040,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__300040,0,token__300040.indexOf("/")),cljs.core.subs.call(null,token__300040,(token__300040.indexOf("/") + 1),token__300040.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__300040,cljs.core.symbol.call(null,token__300040));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__300042 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__300041__300043 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__300042);
var token__300044 = cljs.core.nth.call(null,vec__300041__300043,0,null);
var ns__300045 = cljs.core.nth.call(null,vec__300041__300043,1,null);
var name__300046 = cljs.core.nth.call(null,vec__300041__300043,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____300048 = (function (){var and__3546__auto____300047 = cljs.core.not.call(null,(void 0 === ns__300045));

if(cljs.core.truth_(and__3546__auto____300047))
{return (ns__300045.substring((ns__300045.length - 2),ns__300045.length) === ":/");
} else
{return and__3546__auto____300047;
}
})();

if(cljs.core.truth_(or__3548__auto____300048))
{return or__3548__auto____300048;
} else
{var or__3548__auto____300049 = ((name__300046[(name__300046.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____300049))
{return or__3548__auto____300049;
} else
{return cljs.core.not.call(null,(token__300044.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__300044);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__300045.substring(0,ns__300045.indexOf("/")),name__300046);
} else
{return cljs.core.keyword.call(null,token__300044);
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
var m__300050 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__300050)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__300051 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____300052 = o__300051;

if(cljs.core.truth_((function (){var and__3546__auto____300053 = x__451__auto____300052;

if(cljs.core.truth_(and__3546__auto____300053))
{var and__3546__auto____300054 = x__451__auto____300052.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____300054))
{return cljs.core.not.call(null,x__451__auto____300052.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____300054;
}
} else
{return and__3546__auto____300053;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____300052);
}
})()))
{return cljs.core.with_meta.call(null,o__300051,cljs.core.merge.call(null,cljs.core.meta.call(null,o__300051),m__300050));
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
var ch__300055 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__300055 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__300055)))
{{
var G__300057 = reader;
var G__300058 = eof_is_error;
var G__300059 = sentinel;
var G__300060 = is_recursive;
reader = G__300057;
eof_is_error = G__300058;
sentinel = G__300059;
is_recursive = G__300060;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__300055)))
{{
var G__300061 = cljs.reader.read_comment.call(null,reader,ch__300055);
var G__300062 = eof_is_error;
var G__300063 = sentinel;
var G__300064 = is_recursive;
reader = G__300061;
eof_is_error = G__300062;
sentinel = G__300063;
is_recursive = G__300064;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__300056 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__300055))?cljs.reader.macros.call(null,ch__300055).call(null,reader,ch__300055):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__300055))?cljs.reader.read_number.call(null,reader,ch__300055):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__300055):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__300056,reader)))
{{
var G__300065 = reader;
var G__300066 = eof_is_error;
var G__300067 = sentinel;
var G__300068 = is_recursive;
reader = G__300065;
eof_is_error = G__300066;
sentinel = G__300067;
is_recursive = G__300068;
continue;
}
} else
{return res__300056;
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
var r__300069 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__300069,true,null,false);
});
