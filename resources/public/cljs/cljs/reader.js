goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____27006 = reader;

if(cljs.core.truth_(and__3546__auto____27006))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____27006;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____27007 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____27007))
{return or__3548__auto____27007;
} else
{var or__3548__auto____27008 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____27008))
{return or__3548__auto____27008;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____27009 = reader;

if(cljs.core.truth_(and__3546__auto____27009))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____27009;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____27010 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____27010))
{return or__3548__auto____27010;
} else
{var or__3548__auto____27011 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____27011))
{return or__3548__auto____27011;
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
var this__27012 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__27012.buffer_atom))))
{var idx__27013 = cljs.core.deref.call(null,this__27012.index_atom);

cljs.core.swap_BANG_.call(null,this__27012.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__27012.s,idx__27013);
} else
{var buf__27014 = cljs.core.deref.call(null,this__27012.buffer_atom);

cljs.core.swap_BANG_.call(null,this__27012.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__27014);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__27015 = this;
return cljs.core.swap_BANG_.call(null,this__27015.buffer_atom,(function (p1__27005_SHARP_){
return cljs.core.cons.call(null,ch,p1__27005_SHARP_);
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
var or__3548__auto____27016 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____27016))
{return or__3548__auto____27016;
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
var or__3548__auto____27017 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____27017))
{return or__3548__auto____27017;
} else
{var and__3546__auto____27019 = (function (){var or__3548__auto____27018 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____27018))
{return or__3548__auto____27018;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____27019))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__27020 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__27020);
return next_ch__27020;
})());
} else
{return and__3546__auto____27019;
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
reader_error.cljs$lang$applyTo = (function (arglist__27021){
var rdr = cljs.core.first(arglist__27021);
var msg = cljs.core.rest(arglist__27021);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____27022 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____27022))
{var and__3546__auto____27023 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____27023))
{var and__3546__auto____27024 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____27024))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____27024;
}
} else
{return and__3546__auto____27023;
}
} else
{return and__3546__auto____27022;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__27025 = (new goog.string.StringBuffer(initch));
var ch__27026 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____27027 = (ch__27026 === null);

if(cljs.core.truth_(or__3548__auto____27027))
{return or__3548__auto____27027;
} else
{var or__3548__auto____27028 = cljs.reader.whitespace_QMARK_.call(null,ch__27026);

if(cljs.core.truth_(or__3548__auto____27028))
{return or__3548__auto____27028;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__27026);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__27026);
return sb__27025.toString();
} else
{{
var G__27029 = (function (){sb__27025.append(ch__27026);
return sb__27025;
})();
var G__27030 = cljs.reader.read_char.call(null,rdr);
sb__27025 = G__27029;
ch__27026 = G__27030;
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
var ch__27031 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____27032 = cljs.core._EQ_.call(null,ch__27031,"n");

if(cljs.core.truth_(or__3548__auto____27032))
{return or__3548__auto____27032;
} else
{var or__3548__auto____27033 = cljs.core._EQ_.call(null,ch__27031,"r");

if(cljs.core.truth_(or__3548__auto____27033))
{return or__3548__auto____27033;
} else
{return (ch__27031 === null);
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
var groups__27034 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__27035 = cljs.core.nth.call(null,groups__27034,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____27036 = (void 0 === group3__27035);

if(cljs.core.truth_(or__3548__auto____27036))
{return or__3548__auto____27036;
} else
{return (group3__27035.length < 1);
}
})())))
{return 0;
} else
{var negate__27038 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__27034,1)))?-1:1);
var vec__27037__27039 = (cljs.core.truth_(cljs.core.nth.call(null,groups__27034,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__27034,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__27034,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__27034,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__27034,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__27034,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__27034,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__27034,7),parseInt.call(null,cljs.core.nth.call(null,groups__27034,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__27040 = cljs.core.nth.call(null,vec__27037__27039,0,null);
var radix__27041 = cljs.core.nth.call(null,vec__27037__27039,1,null);

if(cljs.core.truth_((n__27040 === null)))
{return null;
} else
{return (negate__27038 * parseInt.call(null,n__27040,radix__27041));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__27042 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__27043 = cljs.core.nth.call(null,groups__27042,1);
var denominator__27044 = cljs.core.nth.call(null,groups__27042,2);

return (parseInt.call(null,numinator__27043) / parseInt.call(null,denominator__27044));
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
var ch__27045 = cljs.reader.read_char.call(null,reader);
var mapresult__27046 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__27045);

if(cljs.core.truth_(mapresult__27046))
{return mapresult__27046;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____27047 = cljs.core._EQ_.call(null,"u",ch__27045);

if(cljs.core.truth_(or__3548__auto____27047))
{return or__3548__auto____27047;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__27045);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__27045);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__27045);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__27048 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__27048)))
{{
var G__27049 = cljs.reader.read_char.call(null,rdr);
ch__27048 = G__27049;
continue;
}
} else
{return ch__27048;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__27050 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__27051 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__27051))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__27051)))
{return a__27050;
} else
{var temp__3695__auto____27052 = cljs.core.get.call(null,cljs.reader.macros,ch__27051);

if(cljs.core.truth_(temp__3695__auto____27052))
{var macrofn__27053 = temp__3695__auto____27052;

var mret__27054 = macrofn__27053.call(null,rdr,ch__27051);

{
var G__27056 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__27054,rdr))?a__27050:cljs.core.conj.call(null,a__27050,mret__27054));
a__27050 = G__27056;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__27051);
var o__27055 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__27057 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__27055,rdr))?a__27050:cljs.core.conj.call(null,a__27050,o__27055));
a__27050 = G__27057;
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
var ch__27058 = cljs.reader.read_char.call(null,rdr);
var dm__27059 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__27058);

if(cljs.core.truth_(dm__27059))
{return dm__27059.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__27058);
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
var l__27060 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__27060))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__27060);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__27061 = (new goog.string.StringBuffer(initch));
var ch__27062 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____27063 = (ch__27062 === null);

if(cljs.core.truth_(or__3548__auto____27063))
{return or__3548__auto____27063;
} else
{var or__3548__auto____27064 = cljs.reader.whitespace_QMARK_.call(null,ch__27062);

if(cljs.core.truth_(or__3548__auto____27064))
{return or__3548__auto____27064;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__27062);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__27062);
var s__27065 = buffer__27061.toString();

var or__3548__auto____27066 = cljs.reader.match_number.call(null,s__27065);

if(cljs.core.truth_(or__3548__auto____27066))
{return or__3548__auto____27066;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__27065,"]");
}
} else
{{
var G__27067 = (function (){buffer__27061.append(ch__27062);
return buffer__27061;
})();
var G__27068 = cljs.reader.read_char.call(null,reader);
buffer__27061 = G__27067;
ch__27062 = G__27068;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__27069 = (new goog.string.StringBuffer());
var ch__27070 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__27070 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__27070)))
{{
var G__27071 = (function (){buffer__27069.append(cljs.reader.escape_char.call(null,buffer__27069,reader));
return buffer__27069;
})();
var G__27072 = cljs.reader.read_char.call(null,reader);
buffer__27069 = G__27071;
ch__27070 = G__27072;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__27070)))
{return buffer__27069.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__27073 = (function (){buffer__27069.append(ch__27070);
return buffer__27069;
})();
var G__27074 = cljs.reader.read_char.call(null,reader);
buffer__27069 = G__27073;
ch__27070 = G__27074;
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
var token__27075 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__27075,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__27075,0,token__27075.indexOf("/")),cljs.core.subs.call(null,token__27075,(token__27075.indexOf("/") + 1),token__27075.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__27075,cljs.core.symbol.call(null,token__27075));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__27077 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__27076__27078 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__27077);
var token__27079 = cljs.core.nth.call(null,vec__27076__27078,0,null);
var ns__27080 = cljs.core.nth.call(null,vec__27076__27078,1,null);
var name__27081 = cljs.core.nth.call(null,vec__27076__27078,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____27083 = (function (){var and__3546__auto____27082 = cljs.core.not.call(null,(void 0 === ns__27080));

if(cljs.core.truth_(and__3546__auto____27082))
{return (ns__27080.substring((ns__27080.length - 2),ns__27080.length) === ":/");
} else
{return and__3546__auto____27082;
}
})();

if(cljs.core.truth_(or__3548__auto____27083))
{return or__3548__auto____27083;
} else
{var or__3548__auto____27084 = ((name__27081[(name__27081.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____27084))
{return or__3548__auto____27084;
} else
{return cljs.core.not.call(null,(token__27079.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__27079);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__27080.substring(0,ns__27080.indexOf("/")),name__27081);
} else
{return cljs.core.keyword.call(null,token__27079);
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
var m__27085 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__27085)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__27086 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____27087 = o__27086;

if(cljs.core.truth_((function (){var and__3546__auto____27088 = x__451__auto____27087;

if(cljs.core.truth_(and__3546__auto____27088))
{var and__3546__auto____27089 = x__451__auto____27087.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____27089))
{return cljs.core.not.call(null,x__451__auto____27087.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____27089;
}
} else
{return and__3546__auto____27088;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____27087);
}
})()))
{return cljs.core.with_meta.call(null,o__27086,cljs.core.merge.call(null,cljs.core.meta.call(null,o__27086),m__27085));
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
var ch__27090 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__27090 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__27090)))
{{
var G__27092 = reader;
var G__27093 = eof_is_error;
var G__27094 = sentinel;
var G__27095 = is_recursive;
reader = G__27092;
eof_is_error = G__27093;
sentinel = G__27094;
is_recursive = G__27095;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__27090)))
{{
var G__27096 = cljs.reader.read_comment.call(null,reader,ch__27090);
var G__27097 = eof_is_error;
var G__27098 = sentinel;
var G__27099 = is_recursive;
reader = G__27096;
eof_is_error = G__27097;
sentinel = G__27098;
is_recursive = G__27099;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__27091 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__27090))?cljs.reader.macros.call(null,ch__27090).call(null,reader,ch__27090):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__27090))?cljs.reader.read_number.call(null,reader,ch__27090):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__27090):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__27091,reader)))
{{
var G__27100 = reader;
var G__27101 = eof_is_error;
var G__27102 = sentinel;
var G__27103 = is_recursive;
reader = G__27100;
eof_is_error = G__27101;
sentinel = G__27102;
is_recursive = G__27103;
continue;
}
} else
{return res__27091;
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
var r__27104 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__27104,true,null,false);
});
